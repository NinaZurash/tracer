import { cn } from "#/lib/utils";

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  const classes = cn(`mt-16 flex w-full items-center justify-center ${className}`);

  return (
    <div className={classes}>
      <footer className="w-10/12 space-y-3 text-center text-gray-500">
        <strong className="mb-2 block text-xs">
          &copy; 2023 Nuclear Engineering Center. All rights reserved.
        </strong>
        <p className="mt-4 text-xs">
          <strong>Nuclear Engineering Center</strong> collaborates with{" "}
          <span className="font-semibold text-blue-600">CERN</span>, specializing in
          3D modeling and applications. We create immersive 3D models for various
          CERN teams, visualizing complex concepts. From particle detectors to
          accelerator designs, our experts bring ideas to life. Through advanced 3D
          applications, we enhance collaboration and data analysis, supporting
          particle physics research. Join us at the intersection of nuclear
          engineering and particle physics, as we drive innovation alongside CERN.
          Experience the transformative potential of 3D technology in unraveling the
          mysteries of the universe and shaping the future of scientific exploration.
        </p>
      </footer>
    </div>
  );
}
