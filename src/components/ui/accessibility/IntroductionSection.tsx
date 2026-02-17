export default function IntroductionSection() {
  return (
    <section>
      <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        This blog was developed following{' '}
        <a
          href="https://www.w3.org/WAI/WCAG21/quickref/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-cyan-700 dark:text-cyan-500 underline hover:text-cyan-800 dark:hover:text-cyan-300 focus-ring rounded px-1 py-0.5 transition-colors"
        >
          <strong>WCAG 2.1 Level AA</strong>
        </a>
        {' '}guidelines, prioritising accessibility in every aspect of the user experience.
      </p>
    </section>
  );
}
