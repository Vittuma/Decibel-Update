const STEPS = [
  { phase: "Q4 2025",           title: "Public Testnet",                       desc: "130K+ DAU · 1M+ trades/day · Full infra stress test",                                        status: "done"    },
  { phase: "Feb 27, 2026",      title: "Mainnet Launch",                       desc: "BTC, ETH, APT, SOL perps · DLP · Multi-collateral · Chainlink · Cross-chain",              status: "done"    },
  { phase: "Mar 2026",          title: "First market expansion",               desc: "BNB, ZEC, XRP, DOGE, SUI ra mắt · Guild Wars competition 25K AMPs",                        status: "done"    },
  { phase: "Apr 2026",          title: "RWA + Major Product Update",           desc: "GOLD, SILVER 24/7 · Sui cross-chain · Hourly funding · MCP Server · Maker rebate 25%",    status: "done"    },
  { phase: "May 2026 — NOW",    title: "DLP Collateral + WTIOIL + Leverage ↑", desc: "DLP as margin · WTIOIL oil 24/7 · SOL 15x · Card Vault Pokémon campaign",                status: "current" },
  { phase: "Q3 2026",           title: "Spot Markets",                         desc: "Spot tích hợp cùng account và interface với perps. Unified liquidity.",                    status: "soon"    },
  { phase: "Q4 2026",           title: "Token Launch",                         desc: "Governance token · Trading features · Long-term ecosystem growth",                          status: "soon"    },
  { phase: "2027+",             title: "Equity Indices, FX, Full RWA",         desc: "Unified onchain exchange cho mọi asset class. Global settlement layer.",                   status: "future"  },
];

const INFO = [
  { label: "Chain",            val: "Aptos L1 · Move · Block-STM · <20ms · No L2 / bridge" },
  { label: "Architecture",     val: "100% Onchain CLOB · No off-chain matching · Clearinghouse onchain · Continuous funding" },
  { label: "Collateral",       val: "APT · USDC · BTC · ETH · SOL · DLP shares (NEW)" },
  { label: "Cross-chain",      val: "Ethereum · Solana · Base · Arbitrum · Sui" },
  { label: "Backed by",        val: "Aptos Labs (incubator) · Gauntlet (risk params) · Decibel Foundation" },
];

const DOT: Record<string, string> = {
  done: "var(--g)",
  current: "var(--am)",
  soon: "rgba(0,229,160,0.2)",
  future: "rgba(0,229,160,0.12)",
};

export default function RoadmapTab() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      {/* Roadmap */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7, marginBottom: 16 }}>
          <i className="ti ti-map-2" style={{ color: "var(--g)" }} />
          Roadmap
        </div>
        <div>
          {STEPS.map((s, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <div key={s.phase} style={{ display: "flex", gap: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 24, flexShrink: 0, paddingTop: 3 }}>
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: DOT[s.status],
                      flexShrink: 0,
                      border: s.status === "current" ? "2px solid var(--bg)" : "none",
                      boxShadow: s.status === "current" ? "0 0 0 2px var(--am)" : "none",
                    }}
                  />
                  {!isLast && <div style={{ width: 1, flex: 1, background: "var(--b)", margin: "4px 0 0", minHeight: 20 }} />}
                </div>
                <div style={{ flex: 1, paddingLeft: 10, paddingBottom: 20 }}>
                  <div style={{ fontSize: 10, fontFamily: "var(--mono)", color: s.status === "current" ? "var(--am)" : "var(--m)", textTransform: "uppercase", letterSpacing: ".8px", marginBottom: 2 }}>
                    {s.phase}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: s.status === "current" ? "var(--am)" : "var(--t)", marginBottom: 3 }}>
                    {s.title}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--m)", lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Protocol Info */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7, marginBottom: 16 }}>
          <i className="ti ti-info-circle" style={{ color: "var(--g)" }} />
          Protocol Info
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {INFO.map((info) => (
            <div key={info.label} style={{ background: "var(--card)", border: "1px solid var(--b)", borderRadius: 10, padding: "12px 14px" }}>
              <div style={{ fontSize: 10, fontFamily: "var(--mono)", color: "var(--m)", textTransform: "uppercase", letterSpacing: ".8px", marginBottom: 5 }}>
                {info.label}
              </div>
              <div style={{ fontSize: 12, color: "var(--t)", lineHeight: 1.6 }}>{info.val}</div>
            </div>
          ))}

          {/* Links */}
          <div style={{ background: "var(--card)", border: "1px solid var(--b)", borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ fontSize: 10, fontFamily: "var(--mono)", color: "var(--m)", textTransform: "uppercase", letterSpacing: ".8px", marginBottom: 8 }}>
              Links
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { href: "https://app.decibel.trade", label: "App" },
                { href: "https://x.com/DecibelTrade", label: "@DecibelTrade" },
                { href: "https://docs.decibel.trade", label: "Docs" },
                { href: "https://defillama.com/protocol/decibel", label: "DefiLlama" },
                { href: "https://app.decibel.trade/points", label: "Amps" },
                { href: "https://app.decibel.trade/card-vault", label: "Card Vault" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--g)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 3 }}
                >
                  {l.label} <i className="ti ti-external-link" style={{ fontSize: 9 }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
