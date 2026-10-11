import { Link, useRouterState } from "@tanstack/react-router";

import type { NavItem } from "@/content/site";
import { appPaths } from "@/lib/routes";

type SiteNavLinkProps = {
  item: NavItem;
  onNavigate?: () => void;
  className?: string;
};

/**
 * Route links (`to`) for separate pages; hash links jump to landing sections on `/`.
 */
export function SiteNavLink({ item, onNavigate, className }: SiteNavLinkProps) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (item.to) {
    const active = pathname === item.to;
    return (
      <Link
        to={item.to}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={active ? "font-semibold" : className}
      >
        {item.label}
      </Link>
    );
  }

  if (!item.hash) return null;

  return (
    <Link to={appPaths.home} hash={item.hash} onClick={onNavigate} className={className}>
      {item.label}
    </Link>
  );
}
