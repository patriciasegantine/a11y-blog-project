'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import IntroductionSection from './accessibility/IntroductionSection';
import AccessibilityFeaturesSection from './accessibility/AccessibilityFeaturesSection';
import KeyboardNavigationSection from './accessibility/KeyboardNavigationSection';
import Divider from './Divider';

interface AccessibilityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AccessibilityModal({open, onOpenChange}: AccessibilityModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"/>
        <Dialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto p-6 z-50 focus:outline-none">
          <div className="flex items-start justify-between mb-6">
            <div>
              <Dialog.Title className="text-2xl font-bold text-zinc-900 dark:text-white">
                Welcome to The No-Manual Life Blog
              </Dialog.Title>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                A blog built with accessibility as an architectural priority
              </p>
            </div>
            <Dialog.Close
              className="p-1 rounded-lg text-zinc-600 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-500 focus-ring hover:cursor-pointer transition-colors shrink-0"
              aria-label="Close accessibility information"
            >
              <FontAwesomeIcon icon={faTimes} className="w-5 h-5"/>
            </Dialog.Close>
          </div>
          
          <div className="space-y-6">
            <IntroductionSection/>
            <AccessibilityFeaturesSection/>
            <Divider/>
            <KeyboardNavigationSection/>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
