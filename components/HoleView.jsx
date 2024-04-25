import Image from 'next/image';
import hole1 from '@/assets/images/holes/hole-1.png';

const HoleView = () => {
  return (
    <section>
      <Image className="w-9/12" src={hole1} alt="hole-1" />
    </section>
  );
};

export default HoleView;
