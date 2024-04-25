import Image from 'next/image';
import waylandLogo from '@/assets/images/wayland-cc-logo.png';

const YardageView = () => {
  return (
    <section className="bg-gray-100 border-4">
      <Image
        className="w-6/12 m-auto"
        src={waylandLogo}
        alt="Wayland Country Club"
      />
      <div className="bg-red-500 text-white text-3xl text-center">325</div>
      <div className="bg-yellow-500 text-3xl text-center">350</div>
      <div className="bg-white text-3xl text-center">410</div>
      <div className="bg-blue-500 text-white text-3xl text-center">475</div>
    </section>
  );
};

export default YardageView;