import React from "react";
import { Wave } from "@/components/layout/wave";
import { Sparkle } from "@/components/layout/doodles";
import { Reveal } from "@/components/site/reveal";

export function IntroStatement() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-accent py-14 text-center text-white md:py-20">
        <Sparkle className="pointer-events-none absolute top-6 left-[12%] w-9 text-[#f5d98a] md:left-[22%]" />
        <Sparkle className="pointer-events-none absolute bottom-8 right-[12%] w-7 text-[#f5d98a] md:right-[24%]" />

        <Reveal className="px-5">
          <h2 className="text-2xl font-bold tracking-widest md:text-4xl">
            支えるのは、
            <span className="relative inline-block">
              止まらない現場
              <Reveal
                variant="clip-right"
                delay={0.7}
                className="absolute -bottom-2 left-0 h-2 w-full"
              >
                <svg
                  viewBox="0 0 120 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="h-full w-full"
                >
                <path
                  d="M0,6 Q20,0 40,6 T80,6 T120,6"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  />
                </svg>
              </Reveal>
            </span>
            。
          </h2>
          <p className="mt-6 text-base leading-loose md:text-lg">
            使う人の手に馴染む仕組みを、
            <br />
            長く続く体制で。
          </p>
        </Reveal>
      </div>
      <Wave fill="#45a6dc" variant="c" flip />
    </div>
  );
}
