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
    if (show === 'true') {
      setIsContentVisible(true);
      setShowModal(false);
      router.replace('/');
    }
  }, [searchParams, router, setIsContentVisible, setShowModal]);

  return null; // This component doesn't render anything
}