'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface SearchParamsHandlerProps {
  setIsContentVisible: (value: boolean) => void;
  setShowModal: (value: boolean) => void;
}


export default function SearchParamsHandler({ setIsContentVisible, setShowModal }: SearchParamsHandlerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const show = searchParams.get('show');
        const contentVisible = searchParams.get('contentVisible');

    if (show === 'true') {
      setIsContentVisible(true);
      setShowModal(false);
      router.replace('/');
    }
    if (contentVisible === 'true') {
      setIsContentVisible(true);
      router.replace('/'); // Clear query parameters after handling
    }
  }, [searchParams, router, setIsContentVisible, setShowModal]);

  return null; // This component doesn't render anything
}