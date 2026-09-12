// 最終CTAメッセージ。写真の代替として5カラムのシアン濃淡パネルコラージュにオーバーレイを重ねる。
import React from "react";
import { Blob, Sparkle } from "@/components/layout/doodles";
import { Reveal } from "@/components/site/reveal";

const PANELS: Array<{ color: string; kind: "blob" | "sparkle"; variant: 0 | 1 | 2 }> = [
  { color: "#45a6dc", kind: "blob", variant: 0 },
  { color: "#1b4a66", kind: "sparkle", variant: 0 },
  { color: "#7cc0e8", kind: "blob", variant: 2 },
  { color: "#2c7fb0", kind: "sparkle", variant: 0 },
  { color: "#b7dcf2", kind: "blob", variant: 1 },
];

export function BottomMessage() {
  return (
    <section
      id="contact"
      className="relative h-[520px] overflow-hidden"
    >
      <div className="absolute inset-0 grid grid-cols-5">
        {PANELS.map((panel, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: panel.color }}
          >
            {panel.kind === "blob" ? (
              <Blob variant={panel.variant} className="w-40 text-white/10" />
            ) : (
              <Sparkle className="w-24 text-white/10" />
            )}
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#2c7fb0]/60"
      />

      <div className="absolute inset-0 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 md:px-8">
        <Reveal className="text-white">
          <p className="text-lg tracking-[0.3em] text-white/80">Next Step</p>
          <h2 className="mt-6 text-2xl font-bold leading-relaxed tracking-widest md:text-4xl">
            「動いて当たり前」を、
            <br />
            支える誇りを。
          </h2>
          <p className="mt-5 text-sm leading-loose">
            私たちは、あなたを単なる「リソース」とは思いません。
            <br />
            現場を知る誇りと、止まらない仕組みという成果。
            <br />
            東海システムで、長く続くキャリアを。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/recruit"
              className="rounded-full bg-white px-7 py-3 font-bold text-accent transition hover:opacity-80"
            >
              採用情報を見る
            </a>
            <a
              href="mailto:contact@tokai-system.net"
              className="rounded-full border border-white px-7 py-3 text-white transition hover:bg-white/10"
            >
              メールで相談する
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
