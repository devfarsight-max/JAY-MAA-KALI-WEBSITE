export default function Container({ children, className = '' }) {
  return <div className={`content-width ${className}`}>{children}</div>
}