import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { appPaths } from "@/lib/routes";
import { routeTree } from "@/routeTree.gen";

function createTestRouter() {
  return createRouter({ routeTree });
}

describe("App routing", () => {
  it("matches the landing page at /", () => {
    const router = createTestRouter();
    const matches = router.matchRoutes(appPaths.home);
    expect(matches.at(-1)?.routeId).toBe("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches the gallery page at /gallery", () => {
    const router = createTestRouter();
    const matches = router.matchRoutes(appPaths.gallery);
    expect(matches.at(-1)?.routeId).toBe("/gallery");
  });

  it("keeps hash-only targets on the landing route", () => {
    const router = createTestRouter();
    const matches = router.matchRoutes({
      pathname: appPaths.home,
      search: {},
      searchStr: "",
      hash: "services",
      href: `${appPaths.home}#services`,
      state: { __TSR_index: 0 },
      publicHref: `${appPaths.home}#services`,
      external: false,
    });
    expect(matches.at(-1)?.routeId).toBe("/");
  });
});
