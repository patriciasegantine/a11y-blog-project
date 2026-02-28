import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

export default function KeyboardNavigationSection() {
  const shortcuts = [
    {
      key: "Tab",
      description: "Navigate between interactive elements"
    },
    {
      key: "Shift + Tab",
      description: "Move backwards"
    },
    {
      key: "Enter",
      description: "Activate links and buttons"
    },
    {
      key: "Esc",
      description: "Close dialogs and overlays"
    }
  ];
  
  return (
    <section className="space-y-3">
      <h3 className="text-base font-semibold flex items-center gap-2 text-zinc-900 dark:text-white">
        <FontAwesomeIcon
          icon={faKeyboard}
          className="text-cyan-600 dark:text-cyan-400 w-5 h-5"
          aria-hidden="true"
        />
        <span>Keyboard Navigation</span>
      </h3>
      
      <div
        className="bg-zinc-200 dark:bg-zinc-800 p-4 rounded-lg space-y-2 border border-zinc-400 dark:border-zinc-500">
        <dl className="space-y-2 text-sm">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="flex gap-3">
              <dt
                className="font-mono font-semibold bg-zinc-600 dark:bg-zinc-700 px-2 py-1 rounded min-w-[80px] text-white dark:text-white border border-zinc-500 dark:border-zinc-400">
                {shortcut.key}
              </dt>
              <dd className="text-zinc-900 dark:text-white">
                {shortcut.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
