interface CloseButtonSectionProps {
  onClose: () => void;
}

export default function CloseButtonSection({onClose}: CloseButtonSectionProps) {
  return (
    <>
      <div className="pt-3 flex justify-end">
        <button
          onClick={onClose}
          className="text-sm text-cyan-500 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 hover:cursor-pointer font-medium focus-ring rounded px-2 py-1 transition-colors"
        >
          Got it, start exploring →
        </button>
      </div>
    </>
  );
}
