'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface AccessibilityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AccessibilityModal({ open, onOpenChange }: AccessibilityModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-xl max-w-md w-full mx-4 p-6 z-50 focus:outline-none">
          <div className="flex items-start justify-between mb-4">
            <Dialog.Title className="text-xl font-bold text-zinc-900 dark:text-white pr-8">
              Welcome to The No-Manual Life Blog
            </Dialog.Title>
            <Dialog.Close 
              className="p-1 rounded-lg text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-ring transition-colors"
              aria-label="Close accessibility information"
            >
              <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
            </Dialog.Close>
          </div>

          <Dialog.Description className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
            This blog is an accessibility-first frontend project.
            It explores how clear structure, predictable behaviour, and inclusive interaction patterns can improve real user experiences.
            You can navigate and interact with this site entirely using the keyboard.
          </Dialog.Description>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Keyboard navigation basics:
            </h3>

            <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
              <li className="flex gap-3">
                <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded text-sm font-mono text-zinc-800 dark:text-zinc-200 shrink-0">
                  Tab
                </kbd>
                <span>move forward through interactive elements</span>
              </li>
              <li className="flex gap-3">
                <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded text-sm font-mono text-zinc-800 dark:text-zinc-200 shrink-0">
                  Shift + Tab
                </kbd>
                <span>move backwards</span>
              </li>
              <li className="flex gap-3">
                <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded text-sm font-mono text-zinc-800 dark:text-zinc-200 shrink-0">
                  Enter
                </kbd>
                <span>activate links and buttons</span>
              </li>
              <li className="flex gap-3">
                <kbd className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded text-sm font-mono text-zinc-800 dark:text-zinc-200 shrink-0">
                  Esc
                </kbd>
                <span>close dialogs and overlays</span>
              </li>
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
