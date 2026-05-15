export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 22,
        paddingBottom: 18,
        borderBottom: "1px solid var(--b)",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "var(--gd)",
            border: "1px solid var(--gb)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--g)",
            fontSize: 18,
          }}
        >
          <i className="ti ti-waveform" />
        </div>
        <div>
          <h1
            style={{
              fontFamily: "var(--sans)",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.4px",
              color: "var(--t)",
            }}
          >
            Decibel
          </h1>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--m)",
            }}
          >
            perp-dex · aptos l1 · onchain
          </p>
        </div>
      </div>

      {/* Badges */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 12px",
            borderRadius: 20,
            background: "var(--gd)",
            border: "1px solid var(--gb)",
            fontSize: 11,
            fontFamily: "var(--mono)",
            color: "var(--g)",
          }}
        >
          <span className="dot-live" />
          MAINNET LIVE
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 12px",
            borderRadius: 20,
            background: "rgba(91,159,255,0.07)",
            border: "1px solid rgba(91,159,255,0.3)",
            fontSize: 11,
            fontFamily: "var(--mono)",
            color: "var(--bl)",
          }}
        >
          <i className="ti ti-brand-github" style={{ fontSize: 12 }} />
          Aptos Block-STM
        </span>
        <a
          href="https://app.decibel.trade"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            padding: "4px 12px",
            borderRadius: 20,
            background: "rgba(0,229,160,0.06)",
            border: "1px solid var(--b)",
            fontSize: 11,
            fontFamily: "var(--mono)",
            color: "var(--g)",
          }}
        >
          app.decibel.trade
          <i className="ti ti-external-link" style={{ fontSize: 10 }} />
        </a>
      </div>
    </header>
  );
}
