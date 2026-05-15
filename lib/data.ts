export type Category = "market" | "product" | "param" | "community";

export interface Announcement {
  id: number;
  cat: Category;
  date: string;
  isNew?: boolean;
  title: string;
  summary: string;
  body: string;
  link?: string;
  linkText?: string;
}

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    cat: "param",
    date: "May 11, 2026",
    isNew: true,
    title: "Max leverage tăng trên 6 markets — SOL lên 15x",
    summary:
      "SOL 10x→15x · DOGE 5x→10x · WLFI/TAO/ZRO/XPL 3x→5x. Hiệu lực May 11, 2026 lúc 7:00 PM ET.",
    body: `SOL: 10x → 15x\nDOGE: 5x → 10x\nWLFI: 3x → 5x\nTAO: 3x → 5x\nZRO: 3x → 5x\nXPL: 3x → 5x`,
    link: "https://app.decibel.trade/trade/SOL-USD",
    linkText: "Trade SOL-USD",
  },
  {
    id: 2,
    cat: "product",
    date: "May 7, 2026",
    isNew: true,
    title: "DLP as Collateral — capital efficiency mở khóa",
    summary:
      "DLP shares giờ có thể làm collateral cho perp positions. Cùng balance vừa earn vault yield vừa margin trades.",
    body: `Passive: DLP accrues protocol fees & liquidation income.\nActive: DLP value = margin cho perp positions.\n10% haircut: Chỉ 90% DLP NAV tính làm margin.\nCách enable: Vào tab Collateral trong trade page → toggle Enable as Collateral.`,
    link: "https://app.decibel.trade",
    linkText: "Trade now",
  },
  {
    id: 3,
    cat: "market",
    date: "May 7, 2026",
    isNew: true,
    title: "WTIOIL perps — trade dầu thô WTI 24/7",
    summary:
      "WTI crude oil perpetual market live 24/7, bao gồm cuối tuần & ngày lễ. Long/short với tối đa 10x leverage.",
    body: "Market: WTIOIL-USD · Hours: 24/7 · Max leverage: 10x",
    link: "https://app.decibel.trade/trade/WTIOIL-USD",
    linkText: "Trade WTIOIL-USD",
  },
  {
    id: 4,
    cat: "market",
    date: "Apr 30, 2026",
    title: "MEGA perps ra mắt — 3x leverage",
    summary: "MEGA perpetual market live. Long/short MEGA với tối đa 3x leverage.",
    body: "Market: MEGA-USD · Max leverage: 3x",
    link: "https://app.decibel.trade/trade/MEGA-USD",
    linkText: "Trade MEGA-USD",
  },
  {
    id: 5,
    cat: "market",
    date: "Apr 29, 2026",
    title: "CHIP perps ra mắt — 3x leverage",
    summary: "CHIP perpetual market live. Long/short CHIP với tối đa 3x leverage.",
    body: "Market: CHIP-USD · Max leverage: 3x",
    link: "https://app.decibel.trade/trade/CHIP-USD",
    linkText: "Trade CHIP-USD",
  },
  {
    id: 6,
    cat: "community",
    date: "Apr 22, 2026",
    title: "Decibel Card Vault — trade để earn Pokémon cards graded $30K+",
    summary:
      "8-tuần campaign. 49 graded cards trị giá $30K+. Ticket đầu tiên tại $1K weekly volume. Tối đa 20 tickets/tuần.",
    body: `8-tuần campaign · 1 winner mỗi tuần · 49 graded cards $30K+, powered by Courtyard.\nTicket đầu tiên: $1K weekly volume.\nMỗi $50K thêm 1 ticket (cap 20/tuần).\nTickets reset mỗi thứ Hai 00:00 UTC.\nAMPs vẫn accrues bình thường song song.\nThứ Tư 17:00 UTC — reveal pack. Chủ nhật 17:00 UTC — draw winners.`,
    link: "https://app.decibel.trade/card-vault",
    linkText: "Enroll Card Vault",
  },
  {
    id: 7,
    cat: "market",
    date: "Apr 22, 2026",
    title: "SILVER perps — trade bạc 24/7, 10x leverage",
    summary:
      "Silver perpetual market live 24/7. Long/short SILVER với tối đa 10x leverage.",
    body: "Market: SILVER-USD · Hours: 24/7 · Max leverage: 10x",
    link: "https://app.decibel.trade/trade/SILVER-USD",
    linkText: "Trade SILVER-USD",
  },
  {
    id: 8,
    cat: "market",
    date: "Apr 16, 2026",
    title: "GOLD perps — trade vàng 24/7, 10x leverage",
    summary:
      "Gold perpetual market live 24/7. Long/short GOLD với tối đa 10x leverage.",
    body: "Market: GOLD-USD · Hours: 24/7 · Max leverage: 10x",
    link: "https://app.decibel.trade/trade/GOLD-USD",
    linkText: "Trade GOLD-USD",
  },
  {
    id: 9,
    cat: "product",
    date: "Apr 14, 2026",
    title: "Decibel MCP Server — AI assistants trade trực tiếp (Claude support)",
    summary:
      "Decibel CLI chạy như MCP server. Claude & AI có direct access vào trading account.",
    body: `Place & cancel orders: limit (GTC, post-only, IOC), market, TWAP, reduce-only.\nMonitor: open positions, orders, account value, margin info.\nCheck markets: prices, funding rates, OI, orderbook depth.\nRisk: set leverage cross/isolated, reduce-only orders.`,
    link: "https://docs.decibel.trade/agents/mcp/overview",
    linkText: "Read docs",
  },
  {
    id: 10,
    cat: "product",
    date: "Apr 10, 2026",
    title: "Major Update: Sui, hourly funding, TP/SL chart, 5 layouts, maker rebate 25%",
    summary:
      "Sui cross-chain · hourly funding rates · TP/SL trên chart · 5 layouts · mobile redesign · maker rebate 25%.",
    body: `Cross-Chain: Sui support (ETH, SOL, Base, Arbitrum, Sui). WalletConnect. Solana CCTP auto-claim.\nTrading: Hourly funding (thay vì 8h). TP/SL trên TradingView chart. Instant Close. 5 screen layouts. Mobile redesign.\nVaults: DLP Shares in Balances tab. Vault PnL includes fee income. APR display.\nCampaigns: Maker fee rebate 25%. Liquidation rebate 50% (capped $1K/account).\nBuilders: Gas Station templates. /orderbook /contracts /contract_specs API.`,
    link: "https://app.decibel.trade",
    linkText: "Trade now",
  },
  {
    id: 11,
    cat: "market",
    date: "Apr 2, 2026",
    title: "6 markets mới: AAVE, ADA, LINK, NEAR, TAO, WLFI",
    summary: "AAVE, ADA, LINK, NEAR (5x) · TAO, WLFI (3x → 5x sau May 11).",
    body: `AAVE-USD — 5x\nADA-USD — 5x\nLINK-USD — 5x\nNEAR-USD — 5x\nTAO-USD — 3x (→5x sau May 11)\nWLFI-USD — 3x (→5x sau May 11)`,
  },
  {
    id: 12,
    cat: "market",
    date: "Mar 6, 2026",
    title: "5 markets mới: BNB, ZEC, XRP, DOGE, SUI",
    summary: "BNB 3x · ZEC 5x · XRP 10x · DOGE 5x (→10x sau May 11) · SUI 3x.",
    body: `BNB-USD — 3x\nZEC-USD — 5x\nXRP-USD — 10x\nDOGE-USD — 5x (→10x)\nSUI-USD — 3x`,
  },
  {
    id: 13,
    cat: "community",
    date: "Feb 26, 2026",
    title: "Decibel Guild Wars — 5 guilds, 25,000 AMPs prize pool",
    summary:
      "5 guilds, 5 KOL commanders. Phase 1: Guild Selection (Feb 26–Mar 1). Phase 2: Trading (Mar 1–15). 25K AMPs.",
    body: `Phase 1 (Feb 26 – Mar 1): Chọn guild tại guilds.decibel.trade, deposit $10.\nPhase 2 (Mar 1–15): Trading competition based on realized P&L%.\nPrizes: 1st 15K · 2nd 5K · 3rd 2.5K · 4th 1.5K · 5th 1K AMPs.`,
    link: "https://guilds.decibel.trade",
    linkText: "guilds.decibel.trade",
  },
  {
    id: 14,
    cat: "product",
    date: "Feb 26, 2026",
    title: "🚀 Decibel Mainnet is Live",
    summary:
      "Fully onchain CLOB, DLP, cross-margin accounts, Chainlink oracles, cross-chain onboarding, Points program.",
    body: `Fully onchain perps CLOB.\nDecibel Liquidity Pool (DLP) & user vaults.\nProtocol-native market making + liquidation backstop.\nUnified Cross-margin accounts + Subaccounts.\nProfessional-grade APIs · Bulk + async orders.\nChainlink-powered oracle infrastructure.\nOnchain risk + liquidation logic.\nCross-chain onboarding (ETH, SOL, others).\nPoints + aligned incentive programs.\nIntroduces usDCBL — protocol-native stablecoin (collab with Bridge).`,
    link: "https://app.decibel.trade",
    linkText: "Trade now",
  },
];

export const MARKETS = [
  { symbol: "BTC", leverage: "20x+", type: "Crypto", hours: "24/7", since: "Feb 27" },
  { symbol: "ETH", leverage: "20x+", type: "Crypto", hours: "24/7", since: "Feb 27" },
  { symbol: "SOL", leverage: "15x↑", type: "Crypto", hours: "24/7", since: "Feb 27", updated: true },
  { symbol: "APT", leverage: "10x+", type: "Crypto", hours: "24/7", since: "Feb 27" },
  { symbol: "XRP", leverage: "10x", type: "Crypto", hours: "24/7", since: "Mar 6" },
  { symbol: "DOGE", leverage: "10x↑", type: "Crypto", hours: "24/7", since: "Mar 6", updated: true },
  { symbol: "GOLD", leverage: "10x", type: "RWA", hours: "24/7", since: "Apr 16" },
  { symbol: "SILVER", leverage: "10x", type: "RWA", hours: "24/7", since: "Apr 22" },
  { symbol: "WTIOIL", leverage: "10x", type: "RWA", hours: "24/7", since: "May 7", isNew: true },
  { symbol: "AAVE", leverage: "5x", type: "Crypto", hours: "24/7", since: "Apr 2" },
  { symbol: "ADA", leverage: "5x", type: "Crypto", hours: "24/7", since: "Apr 2" },
  { symbol: "LINK", leverage: "5x", type: "Crypto", hours: "24/7", since: "Apr 2" },
  { symbol: "NEAR", leverage: "5x", type: "Crypto", hours: "24/7", since: "Apr 2" },
  { symbol: "TAO", leverage: "5x↑", type: "Crypto", hours: "24/7", since: "Apr 2", updated: true },
  { symbol: "WLFI", leverage: "5x↑", type: "Crypto", hours: "24/7", since: "Apr 2", updated: true },
  { symbol: "ZRO", leverage: "5x↑", type: "Crypto", hours: "24/7", since: "—", updated: true },
  { symbol: "XPL", leverage: "5x↑", type: "Crypto", hours: "24/7", since: "—", updated: true },
  { symbol: "ZEC", leverage: "5x", type: "Crypto", hours: "24/7", since: "Mar 6" },
  { symbol: "BNB", leverage: "3x", type: "Crypto", hours: "24/7", since: "Mar 6" },
  { symbol: "SUI", leverage: "3x", type: "Crypto", hours: "24/7", since: "Mar 6" },
  { symbol: "MEGA", leverage: "3x", type: "Crypto", hours: "24/7", since: "Apr 30", isNew: true },
  { symbol: "CHIP", leverage: "3x", type: "Crypto", hours: "24/7", since: "Apr 29", isNew: true },
];
