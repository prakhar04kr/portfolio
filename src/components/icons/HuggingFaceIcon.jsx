export function HuggingFaceIcon({ size = 24, className, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden
    >
      <path d="M12 2C8.5 2 6 4.2 6 7.1c0 1.4.6 2.6 1.6 3.5-.1.3-.2.7-.2 1 0 1.5 1 2.8 2.4 3.2.4 1.2 1.5 2.1 2.8 2.1h.8c1.3 0 2.4-.9 2.8-2.1 1.4-.4 2.4-1.7 2.4-3.2 0-.3-.1-.7-.2-1 1-.9 1.6-2.1 1.6-3.5C18 4.2 15.5 2 12 2zm-2.8 5.5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9zm5.6 0c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9z" />
    </svg>
  )
}
