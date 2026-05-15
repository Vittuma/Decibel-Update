"use client";

import { useState } from "react";
import { ANNOUNCEMENTS, type Category } from "@/lib/data";

const CAT_META: Record<string, { label: string; color: string; bg: string; border: string; dot: string }> = {
  market:    { label: "New Market",      color: "var(--bl)", bg: "rgba(91,159,255,0.1)",   border: "rgba(91,159,255,0.25)",   dot: "var(--bl)" },
  product:   { label: "Product Update",  color: "var(--pu)", bg: "rgba(157,123,255,0.1)",  border: "rgba(157,123,255,0.25)",  dot: "var(--pu)" },
  param:     { label: "Param Update",    color: "var(--tl)", bg: "rgba(0,212,212,0.1)",    border: "rgba(0,212,212,0.25)",    dot: "var(--tl)" },
  community: { label: "Community",       color: "var(--am)", bg: "rgba(255,181,71,0.1)",   border: "rgba(255,181,71,0.25)",   dot: "var(--am)" },
};

const CATS: { id: string; label: string }[] = [
  { id: "all", label: "Tất cả" },
  { id: "market", label: "New Markets" },
  { id: "product", label: "Product" },
  { id: "param", label: "Params" },
  { id: "community", label: "Community" },
];

function AnnouncementCard({ a }: { a: (typeof ANNOUNCEMENTS)[0] }) {
  const [open, setOpen] = useState(false);
  const meta = CAT_META[a.cat];

  return (
    <div
      style={{
        background: "var(--card)",
        border: `1px solid ${a.isNew ? "rgba(0,229,160,0.25)" : "var(--b)"}`,
        borderLeft: `3px solid ${meta.dot}`,
        borderRadius: 10,
        padding: "14px 16px",
        transition: "border-color .2s",
      }}
    >
      {/* Meta row */}
      <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", marginBottom: 8 }}>
        <span
          style={{
            fontSize: 10,
            fontFamily: "var(--mono)",
            padding: "2px 8px",
            borderRadius: 4,
            fontWeight: 500,
            textTransform: "uppercase",
            color: meta.color,
            background: meta.bg,
            border: `1px solid ${meta.border}`,
          }}
        >
          {meta.label}
        </span>
        <span style={{ fontSize: 10, fontFamily: "var(--mono)", color: "var(--m)" }}>{a.date}</span>
        {a.isNew && (
          <span
            style={{
              fontSize: 9,
              fontFamily: "var(--mono)",
              padding: "2px 6px",
              borderRadius: 3,
              background: "var(--gd)",
              color: "var(--g)",
              border: "1px solid var(--gb)",
            }}
          >
            NEW
          </span>
        )}
      </div>

      {/* Title */}
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--t)", lineHeight: 1.4, marginBottom: 6 }}>
        {a.title}
      </div>

      {/* Summary */}
      <div style={{ fontSize: 12, color: "var(--m)", lineHeight: 1.65 }}>{a.summary}</div>

      {/* Expand body */}
      {a.body && (
        <>
          {open && (
            <div
              style={{
                marginTop: 10,
                borderTop: "1px solid var(--b)",
                paddingTop: 10,
                fontSize: 12,
                color: "var(--m)",
                lineHeight: 1.7,
                whiteSpace: "pre-line",
              }}
            >
              {a.body}
              {a.link && (
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    marginTop: 8,
                    fontSize: 11,
                    fontFamily: "var(--mono)",
                    color: "var(--g)",
                    textDecoration: "none",
                  }}
                >
                  {a.linkText} <i className="ti ti-external-link" style={{ fontSize: 10 }} />
                </a>
              )}
            </div>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            style={{
              marginTop: 8,
              background: "none",
              border: "none",
              color: "var(--g)",
              fontFamily: "var(--mono)",
              fontSize: 10,
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <i className={`ti ${open ? "ti-chevron-up" : "ti-chevron-down"}`} />
            {open ? "Thu gọn" : "Chi tiết"}
          </button>
        </>
      )}

      {/* Link only (no body) */}
      {!a.body && a.link && (
        <a
          href={a.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            marginTop: 8,
            fontSize: 11,
            fontFamily: "var(--mono)",
            color: "var(--g)",
          }}
        >
          {a.linkText} <i className="ti ti-external-link" style={{ fontSize: 10 }} />
        </a>
      )}
    </div>
  );
}

export default function AnnouncementsTab() {
  const [cat, setCat] = useState<string>("all");
  const [q, setQ] = useState("");

  const counts = {
    market:    ANNOUNCEMENTS.filter((a) => a.cat === "market").length,
    product:   ANNOUNCEMENTS.filter((a) => a.cat === "product").length,
    param:     ANNOUNCEMENTS.filter((a) => a.cat === "param").length,
    community: ANNOUNCEMENTS.filter((a) => a.cat === "community").length,
  };

  const filtered = ANNOUNCEMENTS.filter((a) => {
    const catOk = cat === "all" || a.cat === cat;
    const qOk =
      !q ||
      a.title.toLowerCase().includes(q.toLowerCase()) ||
      a.summary.toLowerCase().includes(q.toLowerCase()) ||
      a.date.toLowerCase().includes(q.toLowerCase());
    return catOk && qOk;
  });

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <i className="ti ti-bell-ringing" style={{ color: "var(--g)", fontSize: 15 }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--t)" }}>
            Announcements Feed
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 11,
              fontFamily: "var(--mono)",
              color: "var(--g)",
              background: "var(--gd)",
              border: "1px solid var(--gb)",
              padding: "2px 8px",
              borderRadius: 20,
            }}
          >
            <span className="dot-live" />
            {ANNOUNCEMENTS.length} updates
          </span>
        </div>
        <a
          href="https://app.decibel.trade/announcements"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--g)" }}
        >
          View source <i className="ti ti-external-link" style={{ fontSize: 10 }} />
        </a>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {[
          { label: "Total", val: ANNOUNCEMENTS.length, color: "var(--g)" },
          { label: "New Markets", val: counts.market, color: "var(--bl)" },
          { label: "Product", val: counts.product, color: "var(--pu)" },
          { label: "Params", val: counts.param, color: "var(--tl)" },
          { label: "Community", val: counts.community, color: "var(--am)" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              flex: 1,
              minWidth: 80,
              background: "var(--card)",
              border: "1px solid var(--b)",
              borderRadius: 8,
              padding: "8px 12px",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700, fontFamily: "var(--mono)", color: s.color }}>
              {s.val}
            </div>
            <div style={{ fontSize: 10, color: "var(--m)", textTransform: "uppercase", letterSpacing: ".5px" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1, minWidth: 180 }}>
          <i
            className="ti ti-search"
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--m)",
              fontSize: 14,
              pointerEvents: "none",
            }}
          />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm kiếm announcements..."
            style={{
              width: "100%",
              background: "var(--sur)",
              border: "1px solid var(--b)",
              borderRadius: 8,
              padding: "8px 12px 8px 32px",
              color: "var(--t)",
              fontFamily: "var(--sans)",
              fontSize: 12,
              outline: "none",
            }}
          />
        </div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {CATS.map((c) => {
            const on = cat === c.id;
            const meta = c.id !== "all" ? CAT_META[c.id] : null;
            return (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                style={{
                  padding: "6px 12px",
                  borderRadius: 20,
                  border: `1px solid ${on && meta ? meta.border : on ? "var(--gb)" : "var(--b)"}`,
                  background: on && meta ? meta.bg : on ? "var(--gd)" : "transparent",
                  color: on && meta ? meta.color : on ? "var(--g)" : "var(--m)",
                  fontFamily: "var(--sans)",
                  fontSize: 11,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Count */}
      <div style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--m)", marginBottom: 12, display: "flex", justifyContent: "space-between" }}>
        <span>
          Hiển thị <span style={{ color: "var(--g)", fontWeight: 500 }}>{filtered.length}</span> / {ANNOUNCEMENTS.length} announcements
        </span>
      </div>

      {/* Timeline feed */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 40, color: "var(--m)", fontFamily: "var(--mono)", fontSize: 12 }}>
            <i className="ti ti-search" style={{ fontSize: 24, display: "block", marginBottom: 8 }} />
            Không tìm thấy announcements phù hợp.
          </div>
        )}
        {filtered.map((a, i) => {
          const isLast = i === filtered.length - 1;
          const meta = CAT_META[a.cat];
          return (
            <div key={a.id} style={{ display: "flex", gap: 0 }}>
              {/* Timeline line */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 28,
                  flexShrink: 0,
                  paddingTop: 18,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: a.isNew ? "var(--g)" : meta.dot,
                    flexShrink: 0,
                    boxShadow: a.isNew ? "0 0 0 3px rgba(0,229,160,.15)" : "none",
                  }}
                />
                {!isLast && (
                  <div style={{ width: 1, flex: 1, background: "var(--b)", margin: "6px 0 0", minHeight: 20 }} />
                )}
              </div>
              {/* Card */}
              <div style={{ flex: 1, paddingLeft: 12, paddingBottom: 16 }}>
                <AnnouncementCard a={a} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
