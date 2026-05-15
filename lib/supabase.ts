import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MetricRow {
  id: number;
  metric_key: string;
  value: number | string;
  source: string;
  updated_at: string;
}

export interface AnnouncementRow {
  id: number;
  cat: string;
  date: string;
  is_new: boolean;
  title: string;
  summary: string;
  body: string;
  link: string | null;
  link_text: string | null;
  created_at: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export async function getMetrics(): Promise<MetricRow[]> {
  const { data, error } = await supabase
    .from("protocol_metrics")
    .select("*")
    .order("metric_key");
  if (error) throw error;
  return data ?? [];
}

export async function upsertMetrics(
  rows: Omit<MetricRow, "id">[]
): Promise<void> {
  const { error } = await supabase
    .from("protocol_metrics")
    .upsert(rows, { onConflict: "metric_key" });
  if (error) throw error;
}

export async function getAnnouncements(): Promise<AnnouncementRow[]> {
  const { data, error } = await supabase
    .from("announcements")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}
