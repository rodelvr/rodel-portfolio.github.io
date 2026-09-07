import { define } from "../utils.ts";
import Hero from "../components/hero.tsx";
import Strengths from "../components/strengths.tsx";
import Blogs from "../components/blogs.tsx";
import Videos from "../components/videos.tsx";
import Experience from "../components/experience.tsx";
import Technologies from "../components/technologies.tsx";

export default define.page(function Home() {
  return (
    <>
      <Hero />
      <Strengths />
      <Blogs />
      <Videos />
      <Experience />
      <Technologies />
    </>
  );
});
