import { Link } from "@tanstack/react-router";
import { Crown } from "lucide-react";

import { site } from "@/content/site";
import { appPaths, homeSectionIds } from "@/lib/routes";

export function SiteBrand() {
  return (
    <Link
      to={appPaths.home}
      hash={homeSectionIds.home}
      className="brand"
      aria-label={`${site.businessName} home`}
    >
      <Crown className="brand-icon" />
      <span>
        <span className="brand-title">{site.brandName}</span>
        <span className="brand-location">{site.location}</span>
      </span>
    </Link>
  );
}
