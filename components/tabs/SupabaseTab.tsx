import type { DecibelStats } from "@/lib/defillama";
import { fmt } from "@/lib/defillama";

const SCHEMA = [
  { table: "protocol_metrics", cols: 8, rows: 12, updated: "2026-05-14", purpose: "TVL, volume, OI — sync từ DefiLlama API" },
  { table: "announcements",    cols: 7, rows: 14, updated: "2026-05-11", purpose: "Feed từ app.decibel.trade/announcements" },
  { table: "markets",          cols: 10, rows: 22, updated: "2026-05-11", purpose: "Markets, leverage, params, type" },
  { table: "amps_history",     cols: 5,  rows: null, updated: "realtime", purpose: "User AMPs points tracking per wallet" },
];

export default function SupabaseTab({ stats }: { stats: DecibelStats }) {
  const metrics = [
    { key: "tvl_usd",                  val: fmt(stats.tvl),                      src: "defillama" },
    { key: "cumulative_perp_volume",   val: fmt(stats.perpVolumeCumulative),      src: "defillama" },
    { key: "7d_perp_volume",           val: fmt(stats.perpVolume7d),              src: "defillama" },
    { key: "open_interest",            val: fmt(stats.openInterest),              src: "defillama" },
    { key: "mainnet_launch",           val: "2026-02-27",                         src: "official"  },
    { key: "active_markets",           val: "22",                                 src: "app.decibel.trade" },
    { key: "block_time_ms",            val: "<20",                                src: "aptos"     },
    { key: "defillama_fetched_at",     val: stats.fetchedAt.replace("T", " ").slice(0, 19), src: "system" },
  ];

  return (
    <div>
      {/* Connection status */}
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--b)",
          borderRadius: 10,
          padding: "16px 18px",
          marginBottom: 14,
        }}
      >
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          {[
            { label: "Supabase Connected", color: "var(--g)", bg: "rgba(0,229,160,.07)", border: "rgba(0,229,160,.25)", icon: "ti-database" },
            { label: "Vercel Edge",         color: "#fff",    bg: "rgba(255,255,255,.04)", border: "rgba(255,255,255,.12)", icon: "ti-brand-vercel" },
            { label: "Realtime On",         color: "var(--bl)", bg: "rgba(91,159,255,.07)", border: "rgba(91,159,255,.25)", icon: "ti-plug" },
          ].map((b) => (
            <span
              key={b.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: "4px 12px",
                borderRadius: 20,
                background: b.bg,
                border: `1px solid ${b.border}`,
                fontSize: 11,
                fontFamily: "var(--mono)",
                color: b.color,
              }}
            >
              <i className={`ti ${b.icon}`} style={{ fontSize: 12 }} />
              {b.label}
            </span>
          ))}
        </div>

        {/* .env preview */}
        <div
          style={{
            background: "var(--bg)",
            border: "1px solid var(--b)",
            borderRadius: 7,
            padding: "12px 14px",
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--m)",
            lineHeight: 2,
          }}
        >
          <div><span style={{ color: "var(--g)" }}>NEXT_PUBLIC_SUPABASE_URL</span>=https://[ref].supabase.co</div>
          <div><span style={{ color: "var(--g)" }}>NEXT_PUBLIC_SUPABASE_ANON_KEY</span>=eyJh...</div>
          <div><span style={{ color: "var(--g)" }}>ANTHROPIC_API_KEY</span>=sk-ant-api03-...</div>
          <div><span style={{ color: "var(--g)" }}>DEFILLAMA_PROTOCOL</span>=decibel</div>
          <div style={{ marginTop: 6, color: "var(--t)" }}>
            ✓ Framework: Next.js 14 · Runtime: Edge · Region: sin1 (Singapore)
          </div>
        </div>
      </div>

      {/* Schema */}
      <div style={{ fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
        <i className="ti ti-table" style={{ color: "var(--g)" }} />
        Database Schema
      </div>
      <div style={{ background: "var(--card)", border: "1px solid var(--b)", borderRadius: 10, overflow: "hidden", marginBottom: 14 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, fontFamily: "var(--mono)" }}>
          <thead>
            <tr style={{ background: "rgba(0,229,160,0.05)" }}>
              {["Table", "Cols", "Rows", "Last updated", "Purpose"].map((h) => (
                <th key={h} style={{ padding: "8px 12px", textAlign: "left", color: "var(--m)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".5px", borderBottom: "1px solid var(--b)", fontWeight: 500 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SCHEMA.map((r) => (
              <tr key={r.table} style={{ borderBottom: "1px solid rgba(0,229,160,.05)" }}>
                <td style={{ padding: "8px 12px", color: "var(--g)", fontWeight: 500 }}>{r.table}</td>
                <td style={{ padding: "8px 12px", color: "var(--m)" }}>{r.cols}</td>
                <td style={{ padding: "8px 12px", color: "var(--t)" }}>{r.rows ?? <span style={{ color: "var(--g)" }}>live</span>}</td>
                <td style={{ padding: "8px 12px", color: "var(--m)" }}>{r.updated}</td>
                <td style={{ padding: "8px 12px", color: "var(--m)" }}>{r.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Live metrics table */}
      <div style={{ fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
        <i className="ti ti-table" style={{ color: "var(--g)" }} />
        protocol_metrics (live)
      </div>
      <div style={{ background: "var(--card)", border: "1px solid var(--b)", borderRadius: 10, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, fontFamily: "var(--mono)" }}>
          <thead>
            <tr style={{ background: "rgba(0,229,160,0.05)" }}>
              {["metric_key", "value", "source", "updated_at"].map((h) => (
                <th key={h} style={{ padding: "8px 12px", textAlign: "left", color: "var(--m)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".5px", borderBottom: "1px solid var(--b)", fontWeight: 500 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {metrics.map((m) => (
              <tr key={m.key} style={{ borderBottom: "1px solid rgba(0,229,160,.05)" }}>
                <td style={{ padding: "8px 12px", color: "var(--g)" }}>{m.key}</td>
                <td style={{ padding: "8px 12px", color: "var(--t)", fontWeight: 500 }}>{m.val}</td>
                <td style={{ padding: "8px 12px", color: "var(--m)" }}>{m.src}</td>
                <td style={{ padding: "8px 12px", color: "var(--m)" }}>2026-05-14 07:00 UTC</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
