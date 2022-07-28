export default function fluttenRoutes(routes) {
  const flatRoutes = new Map();

  for (const route of routes) {
    flatRoutes.set(route.to, route.text);
    if (!route.subroutes) continue;
    for (const subroute of route.subroutes) {
      flatRoutes.set(subroute.to, subroute.text);
    }
  }

  return flatRoutes;
}
