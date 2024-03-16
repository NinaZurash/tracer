import Image from "next/image";
import { useRouter } from "next/router";

import { buildRoute } from "#/utils/buildRoute";
import { ROUTES } from "#/utils/routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";

import { Button } from "./ui/button";

type Props = {
  title: string;
  imageUrl: string;
  description: string;
  route: string;
  width?: number;
};

export default function Project({
  title,
  imageUrl,
  description,
  route,
  width = 150,
}: Props) {
  const router = useRouter();

  return (
    <Card className="max-w-md py-6">
      <CardHeader>
        <CardTitle className="uppercase">{title}</CardTitle>
        <CardDescription className="min-h-[60px]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex min-h-[200px] w-full items-center justify-center">
        <Image
          src={imageUrl}
          width={width}
          height={width}
          alt="project"
          className="h-full  object-cover"
        />
      </CardContent>
      <Button
        variant="outline"
        className="w-3/4 bg-foreground text-white"
        onClick={() => router.push(buildRoute(ROUTES.APPLICATIONS, route))}
      >
        Checkout
      </Button>
    </Card>
  );
}
