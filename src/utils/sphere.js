export const GLOBE_RADIUS = 600

export function getSpherePosition(index, total, radius = GLOBE_RADIUS) {
  const phi = Math.acos(-1 + (2 * index) / total)
  const theta = Math.sqrt(total * Math.PI) * phi
  const x = radius * Math.sin(phi) * Math.cos(theta)
  const y = radius * Math.cos(phi)
  const z = radius * Math.sin(phi) * Math.sin(theta)
  return { x, y, z, phi, theta }
}

export function computeSpherePositions(total, radius = GLOBE_RADIUS) {
  return Array.from({ length: total }, (_, i) => getSpherePosition(i, total, radius))
}

export function lerp(a, b, t) {
  return a + (b - a) * t
}
