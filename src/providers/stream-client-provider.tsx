'use client';

import { tokenProvider } from '@/actions/stream';
import Loader from '@/components/application/loader';
import { useUser } from '@clerk/nextjs';
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';

const StreamClientProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoaded } = useUser();
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  useEffect(() => {
    if (!isLoaded || !user) return;

    if (!apiKey) throw new Error('Stream API key missing');

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) {
    return <Loader />;
  }

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamClientProvider;
