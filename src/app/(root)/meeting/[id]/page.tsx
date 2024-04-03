'use client';

import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';

import MeetingRoom from '@/components/application/meeting-room';
import MeetingSetup from '@/components/application/meeting-setup';

const meetings = ({ params }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();

  const [isSetupComplete, setIsSetupComplete] = useState(false);

  return (
    <main className='h-screen w-full'>
      <StreamCall>
        <StreamTheme>{!isSetupComplete ? <MeetingSetup /> : <MeetingRoom />}</StreamTheme>
      </StreamCall>
    </main>
  );
};

export default meetings;
