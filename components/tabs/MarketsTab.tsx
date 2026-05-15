import { MARKETS } from "@/lib/data";

export default function MarketsTab() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7 }}>
          <i className="ti ti-chart-candle" style={{ color: "var(--g)" }} />
          Active Markets ({MARKETS.length})
        </div>
        <a
          href="https://app.decibel.trade/trade"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--g)" }}
        >
          Trade live <i className="ti ti-external-link" style={{ fontSize: 10 }} />
        </a>
      </div>

      <div style={{ background: "var(--card)", border: "1px solid var(--b)", borderRadius: 10, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, fontFamily: "var(--mono)" }}>
          <thead>
            <tr style={{ background: "rgba(0,229,160,0.05)" }}>
              {["Market", "Type", "Max Leverage", "Hours", "Listed Since"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "9px 12px",
                    textAlign: "left",
                    color: "var(--m)",
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: ".5px",
                    borderBottom: "1px solid var(--b)",
                    fontWeight: 500,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MARKETS.map((m) => {
              const lev = parseInt(m.leverage);
              const levColor = lev >= 15 ? "var(--g)" : lev >= 10 ? "var(--bl)" : "var(--am)";
              const levBg = lev >= 15 ? "rgba(0,229,160,0.1)" : lev >= 10 ? "rgba(91,159,255,0.1)" : "rgba(255,181,71,0.1)";
              return (
                <tr key={m.symbol} style={{ borderBottom: "1px solid rgba(0,229,160,0.05)" }}>
                  <td style={{ padding: "9px 12px", color: "var(--t)", fontWeight: 500 }}>
                    <a
                      href={`https://app.decibel.trade/trade/${m.symbol}-USD`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {m.symbol}-USD
                    </a>
                    {m.isNew && (
                      <span style={{ marginLeft: 6, fontSize: 9, padding: "1px 5px", borderRadius: 3, background: "var(--gd)", color: "var(--g)", border: "1px solid var(--gb)" }}>
                        NEW
                      </span>
                    )}
                  </td>
                  <td style={{ padding: "9px 12px" }}>
                    <span
                      style={{
                        fontSize: 10,
                        padding: "2px 6px",
                        borderRadius: 3,
                        background: m.type === "RWA" ? "rgba(0,212,212,0.1)" : "rgba(255,255,255,0.05)",
                        color: m.type === "RWA" ? "var(--tl)" : "var(--m)",
                        border: m.type === "RWA" ? "1px solid rgba(0,212,212,0.2)" : "none",
                      }}
                    >
                      {m.type}
                    </span>
                  </td>
                  <td style={{ padding: "9px 12px" }}>
                    <span style={{ padding: "2px 7px", borderRadius: 4, fontSize: 11, fontWeight: 500, background: levBg, color: levColor }}>
                      {m.leverage}
                    </span>
                    {m.updated && (
                      <span style={{ marginLeft: 5, fontSize: 9, color: "var(--g)" }}>↑</span>
                    )}
                  </td>
                  <td style={{ padding: "9px 12px", color: "var(--g)" }}>{m.hours}</td>
                  <td style={{ padding: "9px 12px", color: "var(--m)" }}>{m.since}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        style={{
          fontSize: 11,
          fontFamily: "var(--mono)",
          color: "var(--m)",
          marginTop: 8,
          padding: "8px 12px",
          background: "var(--card)",
          borderRadius: 7,
          border: "1px solid var(--b)",
        }}
      >
        Collateral: APT · USDC · BTC · ETH · SOL · <span style={{ color: "var(--g)" }}>DLP shares</span> · Margin: Cross hoặc Isolated · Funding: mỗi giờ · Settlements: 100% onchain Aptos
      </div>
    </div>
  );
}
