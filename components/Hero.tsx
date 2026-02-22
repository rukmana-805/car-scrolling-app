"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.from(".letter", {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out"
      });


      gsap.from(".stat", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        delay: 0.6,
        ease: "power3.out"
      });

      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
          pin: true
        }
      });

      tl.to(carRef.current, {
        y: -300,
        scale: 1.2,
        ease: "none"
      });

      tl.to(headingRef.current, {
        scale: 1.1,
        opacity: 0.4,
        ease: "none"
      }, 0);

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const text = "WELCOME ITZFIZZ".split("");

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-linear-to-b from-black via-zinc-900 to-black text-white flex flex-col items-center justify-center"
    >
      
      <h1
        ref={headingRef}
        className="text-4xl md:text-7xl font-bold tracking-[0.5em] text-center"
      >
        {text.map((char, i) => (
          <span key={i} className="letter inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      <div
        ref={statsRef}
        className="flex flex-col md:flex-row gap-10 mt-12 text-center"
      >
        <div className="stat">
          <h2 className="text-3xl font-bold">98%</h2>
          <p className="text-gray-400 mt-2">Customer Satisfaction</p>
        </div>
        <div className="stat">
          <h2 className="text-3xl font-bold">120+</h2>
          <p className="text-gray-400 mt-2">Projects Delivered</p>
        </div>
        <div className="stat">
          <h2 className="text-3xl font-bold">24/7</h2>
          <p className="text-gray-400 mt-2">Support</p>
        </div>
      </div>

      <img
        ref={carRef}
        src="/car.png"
        alt="Car"
        className="absolute bottom-10 w-75 md:w-125"
      />
    </section>
  );
}