import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium text-red-500">
        Ranger<span className="text-blue-500">Plus</span>
      </h1>
      <Link href="/holes">Show Holes</Link>
    </div>
  );
};

export default HomePage;
