'use client';

import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';

import MeetingRoom from '@/components/application/meeting-room';
import MeetingSetup from '@/components/application/meeting-setup';
import { useGetCallById } from '@/hooks/use-get-call-by-id';
import Loader from '@/components/application/loader';

const meetings = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();

  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) {
    return <Loader />;
  }

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>{!isSetupComplete ? <MeetingSetup /> : <MeetingRoom />}</StreamTheme>
      </StreamCall>
    </main>
  );
};

export default meetings;
