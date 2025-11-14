import { useState } from 'react'

export function useGalleryHover() {
  const [hoveredItemId, setHoveredItemId] = useState(null)

  const toggleHover = (itemId) => {
    setHoveredItemId(hoveredItemId === itemId ? null : itemId)
  }

  const isHovered = (itemId) => hoveredItemId === itemId

  return {
    hoveredItemId,
    setHoveredItemId,
    toggleHover,
    isHovered,
    clearHover: () => setHoveredItemId(null)
  }
}
