import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <Loader2 className='animate-spin size-12 text-white' />
    </div>
  );
};

export default Loader;
