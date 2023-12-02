import AreaChart from '@/app/dashboard/chart/main';
import SalesOverview from './dashboard/chart/salesOverview';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl font-semibold text-center lg:text-start slide">Sales Overview</h1>
      <div className="mt-6 flex justify-center lg:justify-start">
        <SalesOverview />
      </div>
      <AreaChart />
    </main>
  );
}
