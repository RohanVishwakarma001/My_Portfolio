/** Suspense fallback shown while a lazy route chunk loads. */
export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-3 font-mono text-sm text-text-muted">
        <span className="w-4 h-4 rounded-full border-2 border-neon-cyan/30 border-t-neon-cyan animate-spin" />
        loading...
      </div>
    </div>
  );
}
