import { ROUTES } from "#/utils/routes";
import { Button } from "#/components/ui/button";

export default function Page404() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 text-center text-black">
      <div className="flex items-center justify-center text-5xl">
        <h1 className="inline-block pr-6 align-top text-2xl font-medium">404</h1>
        <div className="inline-block">
          <h2 className="text-sm leading-7">This page could not be found</h2>
        </div>
      </div>
      <Button
        variant="outline"
        className="px-12 py-6"
        onClick={() => (window.location.href = ROUTES.HOME)}
      >
        Back to Home
      </Button>
    </div>
  );
}
