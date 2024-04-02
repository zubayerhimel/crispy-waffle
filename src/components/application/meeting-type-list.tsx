'use client';

import { useState } from 'react';
import HomeCard from './home-card';
import { useRouter } from 'next/navigation';
import MeetingModal from './meeting-modal';

const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<'isScheduledMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();

  const createMeeting = () => {};

  return (
    <>
      <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard img='/icons/add-meeting.svg' title='New Meeting' description='Start an instant meeting' className='bg-orange-1' onClick={() => setMeetingState('isInstantMeeting')} />
        <HomeCard img='/icons/join-meeting.svg' title='Join Meeting' description='Via invitation link' className='bg-blue-1' onClick={() => setMeetingState('isJoiningMeeting')} />
        <HomeCard img='/icons/schedule.svg' title='Schedule Meeting' description='Plan your meeting' className='bg-purple-1' onClick={() => setMeetingState('isScheduledMeeting')} />
        <HomeCard img='/icons/recordings.svg' title='View Recordings' description='Check our your recordings' className='bg-yellow-1' onClick={() => router.push('/recordings')} />
      </section>
      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title='Start An Instant Meeting'
        className='text-center'
        buttonText='Start Meeting'
        handleClick={createMeeting}
      />
    </>
  );
};

export default MeetingTypeList;
