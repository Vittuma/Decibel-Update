"use client";

import { useState } from "react";

const QUICK = [
  { icon: "ti-coins", color: "var(--g)", label: "DLP collateral: cơ chế & rủi ro", q: "DLP as collateral hoạt động thế nào? Có rủi ro gì khi dùng DLP margin positions?" },
  { icon: "ti-chart-line", color: "var(--am)", label: "RWA markets: GOLD, SILVER, OIL", q: "Decibel có những RWA markets nào và tại sao GOLD SILVER WTIOIL lại là bước đi quan trọng?" },
  { icon: "ti-robot", color: "var(--bl)", label: "MCP Server cho AI trading", q: "Decibel MCP Server cho AI trading là gì? Cách setup và dùng với Claude?" },
  { icon: "ti-cards", color: "var(--pu)", label: "Tối ưu Amps + Card Vault", q: "Amps points và Card Vault campaign: cách tối ưu để earn nhiều nhất trên Decibel hiện tại" },
  { icon: "ti-scale", color: "var(--tl)", label: "So sánh với Hyperliquid", q: "So sánh Decibel với Hyperliquid về architecture, TVL, volume, và roadmap" },
  { icon: "ti-shield", color: "var(--re)", label: "Risk management trên Decibel", q: "Phân tích rủi ro khi trade trên Decibel và cách risk management hiệu quả" },
];

export default function AITab() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask(q?: string) {
    const text = q ?? question;
    if (!text.trim()) return;
    if (q) setQuestion(q);
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
      });
      const data = await res.json();
      setAnswer(data.answer ?? data.error ?? "Không có phản hồi.");
    } catch {
      setAnswer("⚠ Lỗi kết nối API.");
    }
    setLoading(false);
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 7 }}>
          <i className="ti ti-robot" style={{ color: "var(--g)" }} />
          AI Analysis
        </div>
        <span style={{ fontSize: 10, fontFamily: "var(--mono)", color: "var(--m)" }}>claude-sonnet-4 · /api/ask</span>
      </div>

      {/* Input */}
      <div style={{ background: "var(--card)", border: "1px solid var(--b)", borderRadius: 10, padding: "16px", marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask()}
            placeholder="Hỏi về Decibel... VD: So sánh leverage Decibel vs Hyperliquid"
            style={{
              flex: 1,
              background: "var(--bg)",
              border: "1px solid var(--b)",
              borderRadius: 7,
              padding: "9px 12px",
              color: "var(--t)",
              fontFamily: "var(--sans)",
              fontSize: 12,
              outline: "none",
            }}
          />
          <button
            onClick={() => ask()}
            disabled={loading}
            style={{
              background: "var(--gd)",
              border: "1px solid var(--gb)",
              color: "var(--g)",
              borderRadius: 7,
              padding: "9px 16px",
              fontFamily: "var(--sans)",
              fontSize: 12,
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.5 : 1,
              display: "flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
            }}
          >
            <i className="ti ti-send" />
            Phân tích
          </button>
        </div>

        {/* Answer */}
        <div
          style={{
            background: "var(--bg)",
            border: "1px solid var(--b)",
            borderRadius: 7,
            padding: "12px 14px",
            fontSize: 12,
            color: loading ? "var(--m)" : "var(--t)",
            lineHeight: 1.7,
            minHeight: 56,
            fontFamily: loading ? "var(--mono)" : "var(--sans)",
            whiteSpace: "pre-wrap",
          }}
        >
          {loading
            ? "⟳ Đang phân tích..."
            : answer || (
                <span style={{ color: "var(--m)", fontFamily: "var(--mono)", fontSize: 11 }}>
                  ← Nhập câu hỏi để nhận phân tích từ AI...
                </span>
              )}
        </div>
      </div>

      {/* Quick prompts */}
      <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10, display: "flex", alignItems: "center", gap: 6, color: "var(--t)" }}>
        <i className="ti ti-bulb" style={{ color: "var(--g)" }} />
        Quick prompts
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {QUICK.map((p) => (
          <button
            key={p.label}
            onClick={() => ask(p.q)}
            style={{
              background: "var(--sur)",
              border: "1px solid var(--b)",
              borderRadius: 8,
              padding: "10px 12px",
              color: "var(--m)",
              fontFamily: "var(--sans)",
              fontSize: 11,
              cursor: "pointer",
              textAlign: "left",
              lineHeight: 1.4,
              transition: "all .2s",
            }}
          >
            <i className={`ti ${p.icon}`} style={{ color: p.color, marginRight: 6 }} />
            {p.label} ↗
          </button>
        ))}
      </div>
    </div>
  );
}
