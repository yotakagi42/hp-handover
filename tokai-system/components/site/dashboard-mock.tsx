// ヒーローのContainerScrollカード内に表示する監視ダッシュボード風モック。
// 実データではなくブランド表現（"止まらない現場を見守るシステム会社"）のための静的UI。
import React from "react";

const LINES = [
  { name: "第1工場 生産ライン", load: 72 },
  { name: "第2工場 生産ライン", load: 58 },
  { name: "物流センター WMS", load: 81 },
  { name: "受発注 EDI 連携", load: 44 },
];

const CHART_POINTS =
  "0,58 30,52 60,55 90,44 120,48 150,38 180,42 210,30 240,34 270,24 300,28 330,18 360,22";

export function DashboardMock() {
  return (
    <div className="h-full w-full bg-[#0d141b] text-left flex flex-col overflow-hidden rounded-xl select-none">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 shrink-0">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] tracking-wider text-zinc-500">
          TOKAI SYSTEM — OPERATIONS MONITOR
        </span>
        <span className="ml-auto hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ALL SYSTEMS NORMAL
        </span>
      </div>

      <div className="grid grid-cols-3 gap-px bg-white/10 border-b border-white/10 shrink-0">
        {[
          { label: "稼働率（直近30日）", value: "99.98", unit: "%" },
          { label: "監視ノード", value: "128", unit: "台" },
          { label: "未対応アラート", value: "0", unit: "件" },
        ].map((m) => (
          <div key={m.label} className="bg-[#0d141b] px-4 py-3 md:px-5 md:py-4">
            <p className="text-[10px] md:text-[11px] text-zinc-500">{m.label}</p>
            <p className="mt-1 font-mono tabular-nums text-lg md:text-2xl text-white">
              {m.value}
              <span className="ml-1 text-[10px] md:text-xs text-[#45a6dc]">
                {m.unit}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className="flex-1 grid md:grid-cols-5 gap-px bg-white/10 min-h-0">
        <div className="md:col-span-3 bg-[#0d141b] p-4 md:p-5 flex flex-col min-h-0">
          <p className="font-mono text-[11px] tracking-wider text-zinc-500">
            THROUGHPUT / 24H
          </p>
          <div className="mt-3 flex-1 min-h-[80px]">
            <svg
              viewBox="0 0 360 70"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <polyline
                points={`0,70 ${CHART_POINTS} 360,70`}
                fill="rgba(69,166,220,0.12)"
                stroke="none"
              />
              <polyline
                points={CHART_POINTS}
                fill="none"
                stroke="#45a6dc"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="md:col-span-2 bg-[#0d141b] p-4 md:p-5 flex flex-col gap-3 overflow-hidden">
          <p className="font-mono text-[11px] tracking-wider text-zinc-500">
            LINE STATUS
          </p>
          {LINES.map((line) => (
            <div key={line.name}>
              <div className="flex items-center justify-between text-[11px] md:text-xs">
                <span className="text-zinc-300">{line.name}</span>
                <span className="font-mono tabular-nums text-zinc-500">
                  {line.load}%
                </span>
              </div>
              <div className="mt-1.5 h-1 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#45a6dc]"
                  style={{ width: `${line.load}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
