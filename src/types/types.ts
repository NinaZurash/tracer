import { ROUTES } from "#/utils/routes";
import { Contributor } from "#/components/ProjectInfo";

export type RouteValueType = (typeof ROUTES)[keyof typeof ROUTES];
export type Project = {
  title: string;
  description: string;
  imagePreview: string;
  image: string | null;
  route: string;
  subTitle: string;
  createdFor: string;
  usedFor: string;
  appUrl: string | null;
  sourceUrl: string | null;
  videoUrl?: string;
  width?: number;
  openSource: boolean;
  contributors: Contributor[];
};
