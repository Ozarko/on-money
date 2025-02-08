import "server-only";
import { GridPatternDashed } from "@components/backgrounds/grid-pattern";
import { Spotlight } from "@components/backgrounds/spotlight-new";

const Home = () => {
  return (
    <>
      <GridPatternDashed className="fixed left-0 top-0 h-screen w-screen bg-background" />
      <div
        className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-md bg-background/[0.96] antialiased"
        style={{ backgroundColor: "var(--background-color)" }}
      >
        <Spotlight />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1
            className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
            style={{ color: "var(--text-color)" }}
          >
            ON MONEY
          </h1>
          <p
            className="mx-auto mt-4 max-w-lg text-center text-2xl font-normal"
            style={{ color: "var(--secondary-text-color)" }}
          >
            Найкращий спосіб вести облік ваших фінансів та керувати ними в
            одному місці.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
