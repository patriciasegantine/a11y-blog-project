'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import AccessibilityModal from "@/components/ui/AccessibilityModal";
import * as Dialog from '@radix-ui/react-dialog';

export default function AccessibilityButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Accessibility information"
          className="p-2 rounded-lg text-(--muted) hover:bg-stone-200 dark:hover:bg-stone-800 focus-ring transition-colors hover:cursor-pointer"
        >
          <FontAwesomeIcon icon={faInfoCircle} className="w-5 h-5"/>
          <span className="sr-only">Open accessibility information</span>
        </button>
      </Dialog.Trigger>
      <AccessibilityModal/>
    </Dialog.Root>
  );
}
