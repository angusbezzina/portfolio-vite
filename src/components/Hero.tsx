interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="h-[100svh] w-full flex flex-col justify-center items-center">
      <h1 className="text-brand text-jumbo">{title}</h1>
      {subtitle && <h5>{subtitle}</h5>}
    </div>
  );
}
