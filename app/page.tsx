import { fetchDecibelStats } from "@/lib/defillama";
import Header from "@/components/Header";
import TabShell from "@/components/TabShell";

export const revalidate = 300; // ISR every 5 min

export default async function Home() {
  const stats = await fetchDecibelStats();

  return (
    <>
      <div className="grid-bg" />
      <div className="page-wrap">
        <Header />
        <TabShell stats={stats} />
      </div>
    </>
  );
}
