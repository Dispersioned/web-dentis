import { ROUTES } from '../config';
import fluttenRoutes from './fluttenRoutes';

export default function createCrumbsLinks(crumbs) {
  const flatRoutes = fluttenRoutes(ROUTES);
  const links = [];
  let path = '';

  for (const crumb of crumbs) {
    path += crumb;
    links.push({
      text: flatRoutes.get(crumb),
      to: path,
    });
    path += '/';
  }

  return links;
}
