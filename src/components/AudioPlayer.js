export default function AudioPlayer({ url }) {
  const play = () => {
    if (!url) return;
    new Audio(url).play().catch(e => console.error('Audio error:', e));
  };

  return (
    <button 
      onClick={play} 
      disabled={!url}
      className="audio-button"
      aria-label="Play pronunciation"
    >
      {url ? '🔊' : '🔇'}
    </button>
  );
}
