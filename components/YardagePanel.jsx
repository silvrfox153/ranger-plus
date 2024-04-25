import Image from 'next/image';
import holeData from '@/holeData.json';
import waylandLogo from '@/assets/images/wayland-cc-logo.png';

const YardagePanel = () => {
  return (
    <section className="bg-gray-100 border-4 max-h-80 m-10">
      <Image
        className="w-6/12 m-auto"
        src={waylandLogo}
        alt="Wayland Country Club"
      />
      <div className="bg-red-500 text-white text-3xl text-center">
        {holeData[0].redTee}
      </div>
      <div className="bg-yellow-500 text-3xl text-center">
        {holeData[0].goldTee}
      </div>
      <div className="bg-white text-3xl text-center">
        {holeData[0].whiteTee}
      </div>
      <div className="bg-blue-500 text-white text-3xl text-center">
        {holeData[0].blueTee}
      </div>
    </section>
  );
};

export default YardagePanel;
