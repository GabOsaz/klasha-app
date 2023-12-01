import AreaChart from '@/app/dashboard/chart/main';
import SalesOverview from './dashboard/chart/salesOverview';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl font-semibold">Sales Overview</h1>
      <div className="mt-6">
        <SalesOverview />
      </div>
      <AreaChart />
    </main>
  );
}
