import { useHomeData } from "../hooks/useHomeData";

export default function Hero() {
  const data = useHomeData();

  if (!data) return null;

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      <video autoPlay loop muted className="absolute w-full h-full object-cover">
        <source src="/videos/ocean.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">

        <h1 className="text-5xl font-bold">
          {data.hero.title}
        </h1>

        <p className="mt-4 text-lg">
          {data.hero.subtitle}
        </p>

        <button className="mt-6 bg-blue-600 px-6 py-3 rounded">
          {data.hero.button}
        </button>

      </div>
    </section>
  );
}