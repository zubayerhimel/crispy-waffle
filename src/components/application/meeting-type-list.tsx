'use client';

import { useUser } from '@clerk/nextjs';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { Call } from '@stream-io/node-sdk';
import { useState } from 'react';

import HomeCard from './home-card';
import MeetingModal from './meeting-modal';
import { useToast } from '../ui/use-toast';

const MeetingTypeList = () => {
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const { toast } = useToast();

  const [meetingState, setMeetingState] = useState<'isScheduledMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: '',
  });
  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create meeting');
      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast({ title: 'Meeting created' });
    } catch (error) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Failed to create meeting',
      });
    }
  };

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
