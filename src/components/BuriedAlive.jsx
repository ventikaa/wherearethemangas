import { useEffect, useRef, useState, useCallback } from 'react'

const TOTAL_DEPTH = 800
const EGGS = [
  { worldY: 160, img: '/pics/game/mango.png', name: 'MANGO', text: 'a familiar fruit.' },
  { worldY: 320, img: '/pics/game/controller.png', name: 'PS5 CONTROLLER', text: 'he plays too much.' },
  { worldY: 480, img: '/pics/game/guitar.png', name: "ADI'S GUITAR", text: 'the weapon of choice.' },
  { worldY: 640, img: '/pics/game/skeleton.png', name: 'SKELETON', text: 'getting warmer...' },
]
const DIRT_LAYERS = [
  { start: 0, color: '#3d2b1f' },
  { start: 200, color: '#2e1f14' },
  { start: 400, color: '#1e1208' },
  { start: 600, color: '#100906' },
]

export default function BuriedAlive({ open, onClose }) {
  const canvasRef = useRef(null)
  const gameState = useRef(null)
  const [screen, setScreen] = useState('intro')
  const [eggPopup, setEggPopup] = useState(null)
  const [depth, setDepth] = useState(0)
  const [found, setFound] = useState(0)
  const [endVisible, setEndVisible] = useState(false)

  const initGame = useCallback(() => {
    const CANVAS_W = Math.min(window.innerWidth, 480)
    const CANVAS_H = window.innerHeight
    const rocks = []
    for (let i = 0; i < 20; i++) {
      rocks.push({
        x: Math.random() * (CANVAS_W - 60) + 10,
        worldY: 80 + Math.random() * (TOTAL_DEPTH - 80),
        w: 12 + Math.random() * 20,
        h: 8 + Math.random() * 12,
      })
    }
    const imgs = {}
    ;['idle', 'raise', 'swing', 'hit', 'mango', 'controller', 'guitar', 'skeleton'].forEach((k) => {
      imgs[k] = new Image()
      imgs[k].src = k === 'idle' ? '/pics/game/digger-idle.png'
        : k === 'raise' ? '/pics/game/digger-raise.png'
        : k === 'swing' ? '/pics/game/digger-swing.png'
        : k === 'hit' ? '/pics/game/digger-hit.png'
        : `/pics/game/${k}.png`
    })
    const eggs = EGGS.map((e) => ({ ...e, found: false }))
    gameState.current = {
      CANVAS_W, CANVAS_H, rocks, imgs, eggs,
      scrollY: 0, charWorldY: 60, digging: false,
      digFrame: 0, digTimer: 0, eggsFound: 0,
      paused: false, gameOver: false, animId: null,
      particles: [],
    }
  }, [])

  const getDirtColor = (worldY) => {
    let c = DIRT_LAYERS[0].color
    for (const l of DIRT_LAYERS) { if (worldY >= l.start) c = l.color }
    return c
  }

  const triggerDig = useCallback(() => {
    const gs = gameState.current
    if (!gs || gs.digging || gs.paused || gs.gameOver) return
    gs.digging = true
    gs.digFrame = 0
    gs.digTimer = 0
  }, [])

  const startGame = useCallback(() => {
    initGame()
    setScreen('game')
    setDepth(0)
    setFound(0)
    setEggPopup(null)
    setEndVisible(false)

    const canvas = canvasRef.current
    if (!canvas) return
    const gs = gameState.current
    canvas.width = gs.CANVAS_W
    canvas.height = gs.CANVAS_H
    const ctx = canvas.getContext('2d')

    function update() {
      if (gs.paused || gs.gameOver) return
      if (gs.digging) {
        gs.digTimer++
        if (gs.digTimer > 5) {
          gs.digTimer = 0
          gs.digFrame++
          if (gs.digFrame >= 4) {
            gs.digFrame = 0
            gs.digging = false
            gs.charWorldY += 32
            const charScreenY = gs.charWorldY - gs.scrollY
            if (charScreenY > gs.CANVAS_H * 0.6) gs.scrollY = gs.charWorldY - gs.CANVAS_H * 0.6
            const csx = gs.CANVAS_W / 2 - 32
            const csy = gs.charWorldY - gs.scrollY
            for (let i = 0; i < 6; i++) {
              gs.particles.push({
                x: csx + 30 + (Math.random() - 0.5) * 30, y: csy + 20,
                vx: (Math.random() - 0.5) * 3, vy: -1.5 - Math.random() * 2,
                life: 25 + Math.random() * 15, color: getDirtColor(gs.charWorldY),
              })
            }
            setDepth(Math.floor(gs.charWorldY / 8))
            for (const egg of gs.eggs) {
              if (!egg.found && gs.charWorldY >= egg.worldY) {
                egg.found = true
                gs.eggsFound++
                setFound(gs.eggsFound)
                gs.paused = true
                setEggPopup(egg)
                break
              }
            }
            if (gs.charWorldY >= TOTAL_DEPTH) {
              gs.gameOver = true
              cancelAnimationFrame(gs.animId)
              setEndVisible(true)
              return
            }
          }
        }
      }
      for (let i = gs.particles.length - 1; i >= 0; i--) {
        const p = gs.particles[i]
        p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life--
        if (p.life <= 0) gs.particles.splice(i, 1)
      }
    }

    function draw() {
      ctx.clearRect(0, 0, gs.CANVAS_W, gs.CANVAS_H)
      ctx.fillStyle = '#080604'
      ctx.fillRect(0, 0, gs.CANVAS_W, gs.CANVAS_H)
      for (let i = 0; i < DIRT_LAYERS.length; i++) {
        const l = DIRT_LAYERS[i]
        const next = DIRT_LAYERS[i + 1]
        const top = l.start - gs.scrollY
        const bot = next ? next.start - gs.scrollY : gs.CANVAS_H + 100
        if (bot < 0 || top > gs.CANVAS_H) continue
        ctx.fillStyle = l.color
        ctx.fillRect(0, Math.max(0, top), gs.CANVAS_W, Math.min(gs.CANVAS_H, bot) - Math.max(0, top))
      }
      ctx.globalAlpha = 0.03
      for (let y = 0; y < gs.CANVAS_H; y += 4) {
        for (let x = 0; x < gs.CANVAS_W; x += 4) {
          if (Math.random() > 0.65) { ctx.fillStyle = '#fff'; ctx.fillRect(x, y, 2, 2) }
        }
      }
      ctx.globalAlpha = 1
      const holeLeft = gs.CANVAS_W / 2 - 36
      const holeRight = gs.CANVAS_W / 2 + 36
      for (const rock of gs.rocks) {
        const sy = rock.worldY - gs.scrollY
        if (sy < -20 || sy > gs.CANVAS_H + 20) continue
        if (rock.x > holeLeft - 10 && rock.x < holeRight + 10) continue
        if (rock.worldY > gs.charWorldY) {
          ctx.fillStyle = '#1a1410'
          ctx.beginPath()
          ctx.ellipse(rock.x, sy, rock.w / 2, rock.h / 2, 0.3, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = '#2a2018'
          ctx.beginPath()
          ctx.ellipse(rock.x - 2, sy - 2, rock.w / 4, rock.h / 4, 0.3, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      const grad = ctx.createLinearGradient(holeLeft, 0, holeRight, 0)
      grad.addColorStop(0, 'rgba(4,3,2,.92)')
      grad.addColorStop(0.15, 'rgba(4,3,2,.98)')
      grad.addColorStop(0.85, 'rgba(4,3,2,.98)')
      grad.addColorStop(1, 'rgba(4,3,2,.92)')
      ctx.fillStyle = grad
      const tunEnd = (gs.charWorldY + 60) - gs.scrollY
      ctx.fillRect(holeLeft, 0, holeRight - holeLeft, Math.min(tunEnd, gs.CANVAS_H))
      for (const p of gs.particles) {
        ctx.globalAlpha = p.life / 40
        ctx.fillStyle = p.color
        ctx.fillRect(p.x, p.y, 3, 3)
      }
      ctx.globalAlpha = 1
      const charScreenX = gs.CANVAS_W / 2 - 36
      const charScreenY = gs.charWorldY - gs.scrollY
      const spriteKeys = ['idle', 'raise', 'swing', 'hit']
      const sprite = gs.digging ? (gs.imgs[spriteKeys[gs.digFrame]] || gs.imgs.idle) : gs.imgs.idle
      if (sprite && sprite.complete && sprite.naturalWidth > 0) {
        ctx.drawImage(sprite, charScreenX, charScreenY - 70, 72, 90)
      } else {
        ctx.fillStyle = '#bf1c12'
        ctx.fillRect(charScreenX + 16, charScreenY - 60, 20, 28)
        ctx.fillRect(charScreenX + 20, charScreenY - 32, 10, 22)
      }
      const vig = ctx.createRadialGradient(gs.CANVAS_W / 2, gs.CANVAS_H / 2, gs.CANVAS_H * 0.25, gs.CANVAS_W / 2, gs.CANVAS_H / 2, gs.CANVAS_H * 0.75)
      vig.addColorStop(0, 'transparent')
      vig.addColorStop(1, 'rgba(8,6,4,.65)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, gs.CANVAS_W, gs.CANVAS_H)
    }

    function loop() {
      update()
      draw()
      gs.animId = requestAnimationFrame(loop)
    }
    loop()

    return () => { if (gs.animId) cancelAnimationFrame(gs.animId) }
  }, [initGame, triggerDig])

  useEffect(() => {
    if (!open) return
    setScreen('intro')
    setDepth(0)
    setFound(0)
    setEggPopup(null)
    setEndVisible(false)
  }, [open])

  useEffect(() => {
    if (screen !== 'game') return
    const cleanup = startGame()
    const handleKey = (e) => {
      if (e.code === 'Space') { e.preventDefault(); triggerDig() }
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey)
      if (cleanup) cleanup()
    }
  }, [screen, startGame, triggerDig])

  const handleClose = () => {
    const gs = gameState.current
    if (gs?.animId) cancelAnimationFrame(gs.animId)
    gameState.current = null
    onClose()
  }

  const resumeGame = () => {
    setEggPopup(null)
    if (gameState.current) gameState.current.paused = false
  }

  if (!open) return null

  return (
    <div id="ba-overlay" className="active">
      <button id="ba-close" onClick={handleClose}>✕</button>

      {screen === 'intro' && (
        <div id="ba-intro">
          <h1>SOME<span>THING</span><br />IS BURIED.</h1>
          <p>Dig to find it ▮</p>
          <button id="ba-start-btn" onClick={() => setScreen('game')}>START DIGGING</button>
        </div>
      )}

      {screen === 'game' && (
        <div id="ba-game" className="active">
          <div id="ba-hud">
            <div className="ba-hud-item">DEPTH <span id="ba-depth">{depth}</span>m</div>
            <div className="ba-hud-item">FOUND <span id="ba-found">{found}</span>/4</div>
          </div>
          <canvas id="ba-canvas" ref={canvasRef} onClick={triggerDig}></canvas>
          <div id="ba-instructions">SPACEBAR OR CLICK TO DIG</div>

          {eggPopup && (
            <div id="ba-egg-popup" className="show">
              <div id="ba-egg-img-wrap">
                <img id="ba-egg-img" src={eggPopup.img} alt="" />
              </div>
              <div id="ba-egg-name">{eggPopup.name}</div>
              <div id="ba-egg-text">{eggPopup.text}</div>
              <button id="ba-egg-continue" onClick={resumeGame}>KEEP DIGGING →</button>
            </div>
          )}
        </div>
      )}

      {endVisible && (
        <div id="ba-end" className="active">
          <div id="ba-end-line1" style={{ animation: 'slideUp .6s ease forwards', opacity: 1 }}>you made it.</div>
          <div id="ba-end-line2" style={{ animation: 'slideUp .6s ease .6s forwards' }}>good things come<br />to those who wait.</div>
          <div id="ba-end-line3" style={{ animation: 'slideUp .6s ease 1.2s forwards' }}>BURIED ALIVE &nbsp;·&nbsp; 31.07.25</div>
          <button id="ba-end-close" style={{ animation: 'slideUp .6s ease 1.8s forwards' }} onClick={handleClose}>CLOSE ✕</button>
        </div>
      )}
    </div>
  )
}
