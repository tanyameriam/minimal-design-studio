import type { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import NdaGate from '@/components/NdaGate';
import { usePageMeta } from '@/hooks/use-page-meta';
import { BRYNQ_HASH, BRYNQ_STORAGE_KEY } from '@/lib/brynqAccess';

/** The page chrome around the locked prompt, so the gate reads as a page. */
const LockedShell = ({ children }: { children: ReactNode }) => {
  usePageMeta('BrynQ · Private case study', 'The BrynQ case study is shared privately.');
  return (
    <>
      <Navigation />
      <main id="main" className="shell min-h-screen bg-background pt-masthead">
        {children}
      </main>
    </>
  );
};

/** Locks a whole BrynQ page behind the shared BrynQ password. */
const BrynqGate = ({ children }: { children: ReactNode }) => (
  <NdaGate
    storageKey={BRYNQ_STORAGE_KEY}
    hash={BRYNQ_HASH}
    label="BrynQ · Private case study"
    project="BrynQ case study"
    wrap={(prompt) => <LockedShell>{prompt}</LockedShell>}
  >
    {children}
  </NdaGate>
);

export default BrynqGate;
