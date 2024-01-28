'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { DEFAULT_LANDING_PAGE_URL } from '@/routes';
export interface SocialLinkProps {
  text: string;
  providerIcon: React.ReactNode;
  provider: string;
}

export const SocialLinks = ({
  text,
  providerIcon,
  provider
}: SocialLinkProps) => {
  const onClick = (p: string) => {
    signIn(p, {
      callbackUrl: DEFAULT_LANDING_PAGE_URL.path
    });
  };

  return (
    <>
      <Button
        onClick={() => {
          onClick(provider);
        }}
        className={'bg-gradient-900 space-x-2 mb-2'}
        size={'default'}
      >
        <div>{providerIcon}</div>
        <div>{text}</div>
      </Button>
    </>
  );
};
