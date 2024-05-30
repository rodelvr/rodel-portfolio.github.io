import TypingAnimation from "../islands/TypingAnimation.tsx";

export default function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              '"Hi!"',
              "I'm Rodel.",
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          I'm an engineer that specialised in anything related to data.
        </p>
      </div>
    </section>
  );
}
