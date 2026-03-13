export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-14">
      {/* Decorative ornament */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="block w-8 h-px bg-accent-gold/40" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="text-accent-gold/60"
        >
          <path
            d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5Z"
            fill="currentColor"
          />
        </svg>
        <span className="block w-8 h-px bg-accent-gold/40" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
        {title}
      </h2>
      <div className="w-20 h-1 bg-accent-gold mx-auto rounded-full mb-4" />
      {subtitle && (
        <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
