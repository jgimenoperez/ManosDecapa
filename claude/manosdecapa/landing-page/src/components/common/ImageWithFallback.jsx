import { useState } from 'react'

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackText = 'Imagen no disponible'
}) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  if (imageError) {
    return (
      <div
        className={`
          flex items-center justify-center bg-gray-200 rounded-lg
          ${className}
        `}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <p className="text-gray-500 text-center text-sm">{fallbackText}</p>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onError={handleImageError}
        onLoad={handleImageLoad}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        loading="lazy"
      />
    </div>
  )
}
