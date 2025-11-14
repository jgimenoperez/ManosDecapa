export default function Card({
  children,
  className = '',
  shadow = true,
  hoverEffect = false,
  padding = 'p-6',
  ...props
}) {
  const shadowStyles = shadow ? 'shadow-md' : ''
  const hoverStyles = hoverEffect ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200' : ''

  return (
    <div
      className={`
        bg-white rounded-lg
        ${padding}
        ${shadowStyles}
        ${hoverStyles}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </div>
  )
}
