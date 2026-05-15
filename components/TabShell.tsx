"use client";

import { useState } from "react";
import type { DecibelStats } from "@/lib/defillama";
import OverviewTab from "./tabs/OverviewTab";
import AnnouncementsTab from "./tabs/AnnouncementsTab";
import MarketsTab from "./tabs/MarketsTab";
import AITab from "./tabs/AITab";
import SupabaseTab from "./tabs/SupabaseTab";
import RoadmapTab from "./tabs/RoadmapTab";

const TABS = [
  { id: "overview", label: "Overview", icon: "ti-layout-dashboard" },
  { id: "announcements", label: "Announcements", icon: "ti-bell" },
  { id: "markets", label: "Markets", icon: "ti-chart-candle" },
  { id: "ai", label: "AI Analysis", icon: "ti-robot" },
  { id: "supabase", label: "Supabase", icon: "ti-database" },
  { id: "roadmap", label: "Roadmap", icon: "ti-map" },
];

export default function TabShell({ stats }: { stats: DecibelStats }) {
  const [active, setActive] = useState("overview");

  return (
    <div>
      {/* Tab bar */}
      <nav
        style={{
          display: "flex",
          gap: 3,
          background: "var(--sur)",
          border: "1px solid var(--b)",
          borderRadius: 12,
          padding: 4,
          marginBottom: 24,
          overflowX: "auto",
        }}
      >
        {TABS.map((t) => {
          const on = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                flex: "1 1 0",
                minWidth: 90,
                padding: "8px 10px",
                borderRadius: 8,
                border: on ? "1px solid var(--gb)" : "none",
                background: on ? "var(--gd)" : "transparent",
                color: on ? "var(--g)" : "var(--m)",
                fontFamily: "var(--sans)",
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all .2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                whiteSpace: "nowrap",
              }}
            >
              <i className={`ti ${t.icon}`} style={{ fontSize: 13 }} />
              {t.label}
            </button>
          );
        })}
      </nav>

      {/* Panels */}
      {active === "overview" && <OverviewTab stats={stats} />}
      {active === "announcements" && <AnnouncementsTab />}
      {active === "markets" && <MarketsTab />}
      {active === "ai" && <AITab />}
      {active === "supabase" && <SupabaseTab stats={stats} />}
      {active === "roadmap" && <RoadmapTab />}
    </div>
  );
}
