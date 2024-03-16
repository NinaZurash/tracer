import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Project } from "#/types/types";
import { PROJECTS } from "#/constants/projects";
import Footer from "#/components/Footer";
import ProjectDescriptionLayout from "#/components/ProjectDescriptionLayout";
import ProjectInfo from "#/components/ProjectInfo";
import ProjectPreview from "#/components/ProjectPreview";

export default function Applications({ project }: { project: Project }) {
  const {
    title,
    subTitle,
    image,
    createdFor,
    appUrl,
    usedFor,
    sourceUrl,
    videoUrl,
    openSource,
    contributors,
  } = project;

  return (
    <div className="pt-20">
      <Head>
        <title>{title}</title>
      </Head>
      <ProjectDescriptionLayout>
        <ProjectInfo
          title={title}
          subTitle={subTitle}
          groupName={createdFor}
          useCase={usedFor}
          openSource={openSource}
          sourceUrl={sourceUrl}
          contributors={contributors}
        />
        <ProjectPreview
          imgUrl={image || null}
          appUrl={appUrl}
          sourceUrl={sourceUrl}
          videoUrl={videoUrl || null}
        />
      </ProjectDescriptionLayout>
      <Footer className="mt-28" />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PROJECTS.map((project: Project) => ({
    params: { route: project.route },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const route = params?.route;
  const project = PROJECTS.find((p: Project) => p.route === route);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
};
