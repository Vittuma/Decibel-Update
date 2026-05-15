# Decibel Dashboard

Real-time analytics dashboard cho **Decibel Protocol** — fully onchain perp DEX trên Aptos.

**Stack:** Next.js 14 · TypeScript · Supabase · Vercel · Anthropic Claude API

---

## Features

| Tab | Nội dung |
|-----|----------|
| **Overview** | TVL, cumulative volume, 7d volume, OI (từ DefiLlama) · rebate campaigns |
| **Announcements** | 14 updates từ app.decibel.trade · search + filter theo category · timeline |
| **Markets** | 22 active markets · leverage · type (RWA/Crypto) · listing date |
| **AI Analysis** | Claude API phân tích Decibel theo câu hỏi tùy chọn |
| **Supabase** | DB schema · live metrics table · env config |
| **Roadmap** | Timeline Feb 2026 → 2027+ · protocol info |

---

## Setup

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/decibel-dashboard
cd decibel-dashboard
npm install
```

### 2. Environment variables

```bash
cp .env.example .env.local
# Điền NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, ANTHROPIC_API_KEY
```

### 3. Supabase

1. Tạo project tại [supabase.com](https://supabase.com)
2. Vào **SQL Editor** → paste nội dung `supabase/schema.sql` → Run
3. Copy **Project URL** và **anon key** vào `.env.local`

### 4. Chạy dev

```bash
npm run dev
# → http://localhost:3000
```

---

## Deploy lên Vercel

```bash
npm i -g vercel
vercel --prod
```

Hoặc import GitHub repo trực tiếp tại [vercel.com/new](https://vercel.com/new) và set env vars:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | https://xxx.supabase.co |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | eyJh... |
| `ANTHROPIC_API_KEY` | sk-ant-api03-... |

---

## Data Sources

- **TVL / Volume / OI** → [DefiLlama API](https://api.llama.fi/protocol/decibel) (ISR 5 phút)
- **Announcements** → [app.decibel.trade/announcements](https://app.decibel.trade/announcements) (hardcoded + Supabase)
- **AI Analysis** → Anthropic Claude claude-sonnet-4 via `/api/ask`

---

## Project Structure

```
decibel-dashboard/
├── app/
│   ├── layout.tsx          # Root layout + fonts
│   ├── page.tsx            # Server component, fetches DefiLlama
│   ├── globals.css         # CSS variables + base styles
│   └── api/ask/route.ts    # Claude API endpoint
├── components/
│   ├── Header.tsx
│   ├── TabShell.tsx        # Tab navigation (client)
│   └── tabs/
│       ├── OverviewTab.tsx
│       ├── AnnouncementsTab.tsx
│       ├── MarketsTab.tsx
│       ├── AITab.tsx
│       ├── SupabaseTab.tsx
│       └── RoadmapTab.tsx
├── lib/
│   ├── data.ts             # Announcements + Markets data
│   ├── defillama.ts        # DefiLlama fetcher + formatters
│   └── supabase.ts         # Supabase client + helpers
├── supabase/
│   └── schema.sql          # DB schema migration
├── .env.example
├── vercel.json
└── next.config.js
```

---

*Trade onchain. Trade loud. 🔊*
