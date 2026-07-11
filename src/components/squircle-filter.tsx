export function SquircleFilter() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute h-0 w-0 overflow-hidden"
    >
      <defs>
        <filter id="corvus-squircle">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10"
            result="squircle"
          />
          <feBlend in="SourceGraphic" in2="squircle" />
        </filter>
      </defs>
    </svg>
  );
}
