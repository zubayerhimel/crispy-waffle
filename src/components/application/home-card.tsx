import { cn } from '@/lib/utils';
import Image from 'next/image';

type HomeProps = {
  img: string;
  title: string;
  description: string;
  className: string;
  onClick: () => void;
};

const HomeCard = ({ img, title, description, className, onClick }: HomeProps) => {
  return (
    <div className={cn('px-4 py-6 flex flex-col justify-between w-full min-h-[260px] rounded-[14px] cursor-pointer', className)} onClick={onClick}>
      <div className='flex-center glassmorphism size-12 rounded-[10px]'>
        <Image src={img} alt='Meeting' width={27} height={27} />
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-lg font-normal'>{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
