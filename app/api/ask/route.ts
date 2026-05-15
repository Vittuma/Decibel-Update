import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

const SYSTEM = `Bạn là chuyên gia DeFi phân tích Decibel Protocol — perp DEX onchain trên Aptos.

DỮ LIỆU THỰC (tháng 5/2026):
- TVL: $42.95M (DefiLlama)
- Cumulative perp volume: $1.27B kể từ mainnet Feb 27, 2026
- 7-day volume: $172.4M
- Open Interest: $2.12M
- Block time: <20ms (Aptos Block-STM)

UPDATES MỚI NHẤT:
- May 11: Max leverage tăng — SOL 15x, DOGE 10x, WLFI/TAO/ZRO/XPL 5x
- May 7: DLP as collateral (90% NAV haircut) + WTIOIL perps 24/7 (10x)
- Apr 22: Card Vault (49 Pokémon cards $30K+) + SILVER perps 10x
- Apr 16: GOLD perps 24/7 10x
- Apr 14: MCP Server — Claude/AI trade trực tiếp
- Apr 10: Sui cross-chain, hourly funding, TP/SL on chart, 5 layouts, maker rebate 25%
- Apr 2: AAVE, ADA, LINK, NEAR, TAO, WLFI — 5x leverage
- Mar 6: BNB, ZEC, XRP, DOGE, SUI ra mắt
- Feb 26: Mainnet launch + Guild Wars campaign

MARKETS: BTC, ETH, SOL(15x), APT + XRP(10x) + GOLD, SILVER, WTIOIL (RWA 24/7) + 15 altcoins
CROSS-CHAIN: ETH, SOL, Base, Arbitrum, Sui
CAMPAIGNS: Amps Season 1, Card Vault, Maker Rebate 25%, Liquidation Rebate 50% (capped $1K)
ARCHITECTURE: Fully Onchain CLOB, DLP backstop, Gauntlet risk params, Chainlink oracles, usDCBL stablecoin

Trả lời ngắn gọn, chính xác, bằng tiếng Việt. Tối đa 200 từ.`;

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();
    if (!question?.trim()) {
      return NextResponse.json({ error: "question required" }, { status: 400 });
    }

    const msg = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 512,
      system: SYSTEM,
      messages: [{ role: "user", content: question }],
    });

    const text =
      msg.content.find((b) => b.type === "text")?.text ?? "Không có phản hồi.";
    return NextResponse.json({ answer: text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "API error" },
      { status: 500 }
    );
  }
}
