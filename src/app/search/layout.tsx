import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Search Articles | DevThink.AI Archive',
  description: 'Search through 115+ DevThink.AI newsletter articles covering AI development, tools, and insights for software developers.',
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      {children}
    </Suspense>
  );
}