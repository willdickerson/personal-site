export function About() {
  return (
    <div className="flex-1 flex flex-col justify-center items-start gap-8">
      <div className="w-[92px] h-[92px] rounded-full overflow-hidden border border-dark/20">
        <img
          src="/photo-256.webp"
          srcSet="/photo-256.webp 1x, /photo-512.webp 2x"
          alt="Will Dickerson"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-[22px] md:text-[26px] leading-[1.5] tracking-[-0.01em] text-dark max-w-[720px]">
        Engineering manager at{' '}
        <a
          href="https://www.arrivelogistics.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-dark/40 hover:border-dark transition-colors duration-200"
        >
          Arrive Logistics
        </a>
        . I play jazz guitar with{' '}
        <a
          href="https://bluedotswing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-dark/40 hover:border-dark transition-colors duration-200"
        >
          Blue Dot Swing
        </a>
        .
      </p>
    </div>
  );
}
