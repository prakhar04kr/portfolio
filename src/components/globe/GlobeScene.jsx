import { memo, useRef, useMemo, useState, useCallback, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import PortfolioCard from '../cards/PortfolioCard'
import { CARDS } from '../../data/cards'
import { computeSpherePositions, lerp, GLOBE_RADIUS } from '../../utils/sphere'
import { useGlobe } from '../../context/GlobeContext'

const CARD_W = 320
const CARD_H = 420
const POP_OUT = 80

function GlobeCard({
  card,
  index,
  position,
  hoverId,
  activeId,
  cardsVisible,
  onHover,
  onLeave,
  onClick,
  setCursor,
  groupRef,
}) {
  const htmlRef = useRef(null)
  const localRef = useRef(null)
  const popRef = useRef(0)
  const opacityRef = useRef(1)
  const tiltRef = useRef({ x: 0, y: 0 })
  const { camera } = useThree()

  const isHovered = hoverId === card.id
  const isDimmed = hoverId && hoverId !== card.id
  const outward = new THREE.Vector3(position.x, position.y, position.z).normalize()

  useFrame(() => {
    if (!localRef.current) return

    const targetPop = isHovered ? POP_OUT : 0
    popRef.current = lerp(popRef.current, targetPop, 0.12)

    localRef.current.position.copy(outward.clone().multiplyScalar(popRef.current))

    const worldPos = new THREE.Vector3()
    localRef.current.getWorldPosition(worldPos)
    const camDir = new THREE.Vector3()
    camera.getWorldDirection(camDir)
    const toCam = worldPos.clone().sub(camera.position).normalize()
    const dot = camDir.dot(toCam)
    const targetOpacity = dot < 0 ? lerp(0.15, 1, 1 + dot) : 1
    opacityRef.current = lerp(opacityRef.current, isDimmed ? 0.6 : targetOpacity, 0.08)

    if (htmlRef.current) {
      htmlRef.current.style.opacity = cardsVisible ? opacityRef.current : 0
    }
  })

  const rotation = useMemo(() => {
    const obj = new THREE.Object3D()
    obj.position.set(position.x, position.y, position.z)
    obj.lookAt(0, 0, 0)
    obj.rotateY(Math.PI)
    return [obj.rotation.x, obj.rotation.y, obj.rotation.z]
  }, [position.x, position.y, position.z])

  return (
    <group position={[position.x, position.y, position.z]} rotation={rotation}>
      <group ref={localRef}>
        <Html
          transform
          occlude={false}
          distanceFactor={8}
          style={{
            width: CARD_W,
            height: CARD_H,
            pointerEvents: activeId ? 'none' : 'auto',
          }}
          zIndexRange={[100, 0]}
        >
          <div
            ref={htmlRef}
            style={{
              width: CARD_W,
              height: CARD_H,
              transform: `rotateX(${tiltRef.current.x}deg) rotateY(${tiltRef.current.y}deg)`,
              transition: 'opacity 0.3s',
            }}
          >
            <PortfolioCard
              card={card}
              index={index}
              isHovered={isHovered}
              isDimmed={isDimmed}
              onHover={onHover}
              onLeave={onLeave}
              onClick={onClick}
              animateIn={cardsVisible}
              layoutMode="globe"
              setCursor={setCursor}
            />
          </div>
        </Html>
      </group>
    </group>
  )
}

function GlobeGroup({
  hoverId,
  activeId,
  cardsVisible,
  onHover,
  onLeave,
  onClick,
  setCursor,
}) {
  const groupRef = useRef()
  const positions = useMemo(() => computeSpherePositions(CARDS.length), [])
  const { stateRef, setCursorTarget } = useGlobe()
  const rotX = useRef(0)
  const rotY = useRef(0)
  const targetRotX = useRef(0)

  useEffect(() => {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      targetRotX.current = -ny * 0.35
      setCursorTarget(nx, ny)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [setCursorTarget])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const state = stateRef.current

    let desiredY = state.scrollRotation + state.cursorTargetX * 0.3
    let desiredX = targetRotX.current + state.cursorTargetY * 0.2

    if (state.rotateToCard !== null && state.rotateToCard !== undefined) {
      const pos = positions[state.rotateToCard]
      if (pos) {
        desiredY = -Math.atan2(pos.x, pos.z)
        desiredX = -Math.asin(pos.y / GLOBE_RADIUS) * 0.5
        if (Math.abs(desiredY - rotY.current) < 0.02) {
          state.rotateToCard = null
        }
      }
    }

    rotX.current = lerp(rotX.current, desiredX, 0.04)
    rotY.current = lerp(rotY.current, desiredY, 0.04)

    if (!state.frozen && state.autoRotate) {
      rotY.current += 0.0008 * (delta * 60)
    }

    groupRef.current.rotation.x = rotX.current
    groupRef.current.rotation.y = rotY.current
  })

  return (
    <group ref={groupRef}>
      {CARDS.map((card, i) => (
        <GlobeCard
          key={card.id}
          card={card}
          index={i}
          position={positions[i]}
          hoverId={hoverId}
          activeId={activeId}
          cardsVisible={cardsVisible}
          onHover={onHover}
          onLeave={onLeave}
          onClick={onClick}
          setCursor={setCursor}
          groupRef={groupRef}
        />
      ))}
    </group>
  )
}

function GlobeScene({
  hoverId,
  activeId,
  cardsVisible,
  onHover,
  onLeave,
  onClick,
  setCursor,
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 1200], fov: 45, near: 1, far: 5000 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} />
      <GlobeGroup
        hoverId={hoverId}
        activeId={activeId}
        cardsVisible={cardsVisible}
        onHover={onHover}
        onLeave={onLeave}
        onClick={onClick}
        setCursor={setCursor}
      />
    </Canvas>
  )
}

export default memo(GlobeScene)
