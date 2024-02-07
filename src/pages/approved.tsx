import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createSessionId } from '@/app/api/fetchRequestToken';
import { useAuth } from '@/contexts/AuthContext';

export default function Approved() {
  const { setIsLoggedIn, setSessionId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const createSession = async () => {
      const requestToken = localStorage.getItem('requestToken');
      if (requestToken) {
        try {
          const sessionId = await createSessionId(requestToken);
          console.log('Session ID:', sessionId);
          localStorage.removeItem('requestToken');
          setIsLoggedIn(true);
          setSessionId(sessionId);
          router.push('/');
        } catch (error) {
          console.error('Failed to create session ID:', error);
        }
      }
    };

    createSession();
  }, []);

  return null;
}