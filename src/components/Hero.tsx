interface HeroProps {
  title: string;
  subtitle?: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <div className="h-[100svh] w-full flex flex-col justify-center items-center p-4 md:p-8">
      <h1 className="text-brand text-jumbo font-bold">{title}</h1>
      {subtitle && <h5>{subtitle}</h5>}
    </div>
  );
}
