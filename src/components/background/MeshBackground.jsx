import { memo } from 'react'

function MeshBackground() {
  return (
    <div className="mesh-background pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="mesh-background__blob mesh-background__blob--1" />
      <div className="mesh-background__blob mesh-background__blob--2" />
      <div className="mesh-background__blob mesh-background__blob--3" />
    </div>
  )
}

export default memo(MeshBackground)
