import "server-only";
import { Spotlight } from "@components/hero/spotlight-new";
import { GridPatternDashed } from "@components/layout/grid-pattern";

const Home = () => {
  return (
    <>
      <GridPatternDashed className="fixed left-0 top-0 h-screen w-screen" />
      <div
        className="relative flex h-screen w-full overflow-hidden rounded-md bg-background/[0.96] antialiased md:items-center md:justify-center"
        style={{ backgroundColor: "var(--background-color)" }}
      >
        <Spotlight />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1
            className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
            style={{ color: "var(--text-color)" }}
          >
            Spotlight <br /> which is not overused.
          </h1>
          <p
            className="mx-auto mt-4 max-w-lg text-center text-base font-normal"
            style={{ color: "var(--secondary-text-color)" }}
          >
            A subtle yet effective spotlight effect, because the previous
            version is used a bit too much these days.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
