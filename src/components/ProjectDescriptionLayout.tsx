export default function ProjectDescriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col-reverse  items-center justify-normal gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
      {children}
    </div>
  );
}
