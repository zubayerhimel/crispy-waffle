import dayjs from 'dayjs';

import MeetingTypeList from '@/components/application/meeting-type-list';

const Home = () => {
  const dateTime = new Date();

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-xl bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between p-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming meeting at: 12:00 PM</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-bold lg:text-6xl'>{dayjs(dateTime).format('hh:mm A')}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{dayjs(dateTime).format('dddd, MMMM DD, YYYY')}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
