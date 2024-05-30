import Hero from "../islands/Hero.tsx";
import Strengths from "../islands/Strengths.tsx";
import Blogs from "../islands/Blogs.tsx";
import Videos from "../islands/Videos.tsx";
import Experience from "../islands/Experience.tsx";
import Technologies from "../islands/Technologies.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Strengths />
      <hr className="horizontal-separator mb-2" />
      <Blogs />
      <hr className="horizontal-separator mb-2" />
      <Videos />
      <hr className="horizontal-separator mb-2" />
      <Experience />
      <hr className="horizontal-separator mb-2" />
      <Technologies />
    </>
  );
}
