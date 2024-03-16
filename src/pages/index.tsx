import Head from "next/head";

import Footer from "#/components/Footer";
import Projects from "#/components/Projects";
import Title from "#/components/Title";

export default function Home() {
  return (
    <div className="pb-5 pt-20">
      <Head>
        <title>Tracer</title>
      </Head>
      <main className="flex flex-col items-center gap-12 lg:gap-16">
        <Title />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
