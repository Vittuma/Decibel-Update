import type { DecibelStats } from "@/lib/defillama";
import { fmt } from "@/lib/defillama";

function StatCard({
  label,
  value,
  sub,
  color = "var(--g)",
}: {
  label: string;
  value: string;
  sub?: string;
  color?: string;
}) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--b)",
        borderRadius: 10,
        padding: "14px 16px",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontFamily: "var(--mono)",
          color: "var(--m)",
          textTransform: "uppercase",
          letterSpacing: ".8px",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 24, fontWeight: 700, color, letterSpacing: "-1px" }}>
        {value}
      </div>
      {sub && (
        <div style={{ fontSize: 11, color: "var(--m)", marginTop: 5, fontFamily: "var(--mono)" }}>
          {sub}
        </div>
      )}
    </div>
  );
}

const HIGHLIGHTS = [
  {
    icon: "ti-stack-2",
    color: "var(--g)",
    title: "Fully Onchain CLOB",
    desc: "Orders, matches & settlements 100% onchain. No off-chain sequencer.",
    border: "var(--g)",
  },
  {
    icon: "ti-coins",
    color: "var(--pu)",
    title: "DLP as Collateral",
    badge: "NEW",
    desc: "DLP shares earn vault yield AND margin your perp positions. 90% NAV haircut.",
    border: "var(--pu)",
  },
  {
    icon: "ti-link",
    color: "var(--bl)",
    title: "5 Cross-Chain",
    desc: "ETH · SOL · Base · Arbitrum · Sui. WalletConnect. CCTP auto-claim.",
    border: "var(--bl)",
  },
  {
    icon: "ti-robot",
    color: "var(--am)",
    title: "MCP Server for AI",
    desc: "Claude & AI assistants có thể trade trực tiếp qua Decibel MCP Server.",
    border: "var(--am)",
  },
  {
    icon: "ti-clock-hour-1",
    color: "var(--g)",
    title: "Hourly Funding",
    desc: "Funding accrues mỗi giờ (thay vì 8h). Tighter perp-spot alignment.",
    border: "var(--b)",
  },
  {
    icon: "ti-cards",
    color: "var(--re)",
    title: "Card Vault Campaign",
    desc: "Trade để earn tickets — 49 Pokémon cards graded trị giá $30K+.",
    border: "var(--re)",
  },
];

export default function OverviewTab({ stats }: { stats: DecibelStats }) {
  return (
    <div>
      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 10,
          marginBottom: 24,
        }}
      >
        <StatCard label="TVL (DefiLlama)" value={fmt(stats.tvl, true)} sub="~$43.11M peak Apr 2026" />
        <StatCard label="Cumulative Perp Vol" value={fmt(stats.perpVolumeCumulative, true)} sub="since Feb 27, 2026" color="var(--t)" />
        <StatCard label="7-Day Volume" value={fmt(stats.perpVolume7d, true)} sub="growing steadily" />
        <StatCard label="Open Interest" value={fmt(stats.openInterest, true)} sub="live positions onchain" color="var(--t)" />
        <StatCard label="Block Time" value="<20ms" sub="Aptos parallel exec" />
        <StatCard label="Mainnet Launch" value="Feb 27" sub="2026 · ~2.5 months" color="var(--t)" />
      </div>

      {/* Highlights */}
      <div style={{ marginBottom: 8, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7 }}>
        <i className="ti ti-star" style={{ color: "var(--g)" }} />
        Protocol Highlights
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 9,
          marginBottom: 24,
        }}
      >
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.title}
            style={{
              background: "var(--card)",
              border: "1px solid var(--b)",
              borderLeft: `3px solid ${h.border}`,
              borderRadius: 9,
              padding: "12px 14px",
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--t)", marginBottom: 5 }}>
              <i className={`ti ${h.icon}`} style={{ color: h.color, marginRight: 6 }} />
              {h.title}
              {h.badge && (
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: "var(--mono)",
                    padding: "2px 5px",
                    borderRadius: 3,
                    background: "var(--gd)",
                    color: "var(--g)",
                    border: "1px solid var(--gb)",
                    marginLeft: 6,
                  }}
                >
                  {h.badge}
                </span>
              )}
            </div>
            <div style={{ fontSize: 12, color: "var(--m)", lineHeight: 1.6 }}>{h.desc}</div>
          </div>
        ))}
      </div>

      {/* Rebate campaigns */}
      <div style={{ marginBottom: 8, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7 }}>
        <i className="ti ti-cash" style={{ color: "var(--g)" }} />
        Active Rebate Campaigns
      </div>
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--b)",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, fontFamily: "var(--mono)" }}>
          <thead>
            <tr style={{ background: "rgba(0,229,160,0.05)" }}>
              {["Campaign", "Rebate", "Cap", "Payout", "Status"].map((h) => (
                <th key={h} style={{ padding: "9px 12px", textAlign: "left", color: "var(--m)", fontSize: 10, textTransform: "uppercase", letterSpacing: ".5px", borderBottom: "1px solid var(--b)" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "9px 12px", color: "var(--t)" }}>Maker Fee Rebate</td>
              <td style={{ padding: "9px 12px", color: "var(--g)" }}>25% of maker fees</td>
              <td style={{ padding: "9px 12px", color: "var(--m)" }}>—</td>
              <td style={{ padding: "9px 12px", color: "var(--m)" }}>USDC onchain</td>
              <td style={{ padding: "9px 12px", color: "var(--g)" }}>● Live</td>
            </tr>
            <tr>
              <td style={{ padding: "9px 12px", color: "var(--t)" }}>Liquidation Rebate</td>
              <td style={{ padding: "9px 12px", color: "var(--g)" }}>50% of losses</td>
              <td style={{ padding: "9px 12px", color: "var(--m)" }}>$1,000/account</td>
              <td style={{ padding: "9px 12px", color: "var(--m)" }}>USDC onchain</td>
              <td style={{ padding: "9px 12px", color: "var(--g)" }}>● Live</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
