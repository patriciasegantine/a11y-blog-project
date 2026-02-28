import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function PhilosophySection() {
  return (
    <section className="space-y-3">
      <h3 className="text-base font-semibold flex items-center gap-2 text-zinc-900 dark:text-white">
        <FontAwesomeIcon
          icon={faLightbulb}
          className="text-yellow-600 dark:text-yellow-400 w-5 h-5"
          aria-hidden="true"
        />
        <span>Our Philosophy</span>
      </h3>

      <blockquote className="border-l-4 border-cyan-600 dark:border-zinc-400 pl-4 italic text-zinc-700 dark:text-zinc-300">
        "Accessibility is not an additional feature, it's a fundamental architectural constraint
        that improves the experience for everyone."
      </blockquote>
    </section>
  );
}
