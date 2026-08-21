// src/pages/Overview.jsx
import Welcom from '../components/Welcom';
import Statscard from '../components/Statscard';
import ChartSection from '../components/ChartSection';
import RecentStats from '../components/RecentStats';

const Overview = () => {
  return (
    <>
      <Welcom />
      <Statscard />
      <ChartSection />
      <RecentStats />
    </>
  );
};

export default Overview;