import { createRouter } from "@tanstack/react-router";
import { shouldRestoreScroll } from "@/lib/routes";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: ({ location }) => shouldRestoreScroll(location.pathname, location.hash),
    defaultPreloadStaleTime: 0,
  });

  return router;
};
