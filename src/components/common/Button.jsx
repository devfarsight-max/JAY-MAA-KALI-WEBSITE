import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "solid",
  className = "",
}) {
  const classes = `group inline-flex items-center gap-3 px-5 py-3 text-sm font-semibold transition-all duration-300 ${variant === "solid" ? "bg-[#86efac] text-white hover:bg-white hover:text-[#06100b]" : "border hairline text-white hover:border-[#86efac] hover:text-[#86efac]"} ${className}`;
  const content = (
    <>
      {children}
      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </>
  );
  if (to)
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    );
  return (
    <a className={classes} href={href || "#"}>
      {content}
    </a>
  );
}
