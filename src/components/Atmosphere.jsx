/**
 * Atmosphere — the deep, still ground beneath the whole app.
 * A single faint centre illumination, like a specimen lit from above in a
 * dark room. No stars, no animated nebulae — just calibrated darkness.
 */
export default function Atmosphere() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{ background: 'oklch(0.07 0 0)' }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(68% 52% at 50% 42%, oklch(0.14 0.012 230 / 0.50) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
