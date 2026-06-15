export default function PageTransition({ children, className = "" }) {
  return (
    <div
      className={`animate-page-in ${className}`}
      style={{ animationFillMode: "both" }}
    >
      {children}
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
}) {
  return (
    <div
      className={`animate-fade-in ${className}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
