import { RouteValueType } from "#/types/types";

export const buildRoute = (path: RouteValueType, route: string) =>
  `${path}/${route}`;
