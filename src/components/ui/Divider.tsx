interface DividerProps {
  color?: 'default' | 'cyan' | 'subtle';
  className?: string;
}

export default function Divider({
                                  color = 'default',
                                  className = ''
                                }: DividerProps) {
  const colorClasses = {
    default: 'border-zinc-200 dark:border-zinc-600',
    cyan: 'border-cyan-400 dark:border-cyan-600',
    subtle: 'border-zinc-100 dark:border-zinc-800'
  };
  
  return (
    <div
      className={`border-t ${colorClasses[color]} ${className}`}
      aria-hidden="true"
    />
  );
}
