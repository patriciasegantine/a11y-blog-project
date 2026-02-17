import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversalAccess, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function AccessibilityFeaturesSection() {
  const features = [
    {
      title: "Keyboard navigation:",
      description: "All content is accessible using only the keyboard"
    },
    {
      title: "Screen readers:",
      description: "Full support for assistive technologies"
    },
    {
      title: "Optimised contrast:",
      description: "All colours follow WCAG contrast standards"
    },
    {
      title: "Semantic landmarks:",
      description: "Clear and navigable HTML structure"
    }
  ];

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2 text-zinc-900 dark:text-white">
        <FontAwesomeIcon
          icon={faUniversalAccess}
          className="text-cyan-500 w-5 h-5"
          aria-hidden="true"
        />
        <span>Accessibility Features</span>
      </h3>

      <ul className="space-y-3 list-none pl-0">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-zinc-600 dark:text-zinc-400 w-5 h-5 mt-0.5 shrink-0"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold">{feature.title}</strong> {feature.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
