import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Extra Scroll Section */}
      <section className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-5xl font-bold text-black">
          Scroll Complete 🚀
        </h2>
      </section>
    </div>
  );
}
