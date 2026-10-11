import { createRootRoute } from "@tanstack/react-router";

import { NotFoundPage, RootApp, RootErrorPage, rootHead, RootShell } from "@/components/root";

export const Route = createRootRoute({
  head: rootHead,
  shellComponent: RootShell,
  component: RootRouteComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: RootErrorPage,
});

function RootRouteComponent() {
  return <RootApp />;
}
