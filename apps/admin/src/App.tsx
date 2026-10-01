// F0 baseline placeholder. The real shell, tokens and navigation arrive in F1 (design system)
// and F2 (identity + capability-aware routing). This screen holds no government data.
export const EXPERIENCE_NAME = "Administration";

export function App() {
  return (
    <main>
      <h1>HeartStone — {EXPERIENCE_NAME}</h1>
      <p>Development baseline. Not a live government service.</p>
    </main>
  );
}
