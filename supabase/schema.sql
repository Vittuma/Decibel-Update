-- ─────────────────────────────────────────────────────────────
-- Decibel Dashboard — Supabase Schema
-- Run this in Supabase SQL Editor once to bootstrap the DB
-- ─────────────────────────────────────────────────────────────

-- 1. Protocol Metrics
create table if not exists protocol_metrics (
  id           bigint generated always as identity primary key,
  metric_key   text unique not null,
  value        text not null,
  source       text not null default 'defillama',
  updated_at   timestamptz not null default now()
);

-- Seed known values
insert into protocol_metrics (metric_key, value, source) values
  ('tvl_usd',                '42950000',    'defillama'),
  ('cumulative_perp_volume', '1270000000',  'defillama'),
  ('7d_perp_volume',         '172400000',   'defillama'),
  ('open_interest',          '2120000',     'defillama'),
  ('mainnet_launch',         '2026-02-27',  'official'),
  ('active_markets',         '22',          'app.decibel.trade'),
  ('block_time_ms',          '<20',         'aptos')
on conflict (metric_key) do nothing;

-- 2. Announcements
create table if not exists announcements (
  id          bigint generated always as identity primary key,
  cat         text not null check (cat in ('market','product','param','community')),
  date        text not null,
  is_new      boolean not null default false,
  title       text not null,
  summary     text not null,
  body        text,
  link        text,
  link_text   text,
  created_at  timestamptz not null default now()
);

-- 3. Markets
create table if not exists markets (
  id          bigint generated always as identity primary key,
  symbol      text unique not null,
  leverage    text not null,
  type        text not null default 'Crypto',
  hours       text not null default '24/7',
  since       text,
  is_new      boolean default false,
  is_updated  boolean default false,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- 4. AMPs history (per wallet)
create table if not exists amps_history (
  id          bigint generated always as identity primary key,
  wallet      text not null,
  amps        numeric not null,
  season      int not null default 1,
  snapshot_at timestamptz not null default now()
);

-- Enable Row Level Security (read-only public)
alter table protocol_metrics enable row level security;
alter table announcements     enable row level security;
alter table markets           enable row level security;
alter table amps_history      enable row level security;

create policy "Public read" on protocol_metrics for select using (true);
create policy "Public read" on announcements     for select using (true);
create policy "Public read" on markets           for select using (true);
create policy "Public read" on amps_history      for select using (true);
