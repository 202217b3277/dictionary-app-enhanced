import AudioPlayer from './AudioPlayer';

export default function WordCard({ data, isFavorite, onFavorite, synonyms }) {
  return (
    <div className="word-card">
      <div className="word-header">
        <h2>{data.word}</h2>
        <button 
          onClick={() => onFavorite(data.word)}
          className={isFavorite ? 'favorite active' : 'favorite'}
        >
          ♥
        </button>
      </div>

      {data.phonetics?.map((ph, i) => (
        <div key={i} className="phonetic">
          <span>{ph.text}</span>
          <AudioPlayer url={ph.audio} />
        </div>
      ))}

      {data.meanings?.map((meaning, i) => (
        <div key={i} className="meaning">
          <h3>{meaning.partOfSpeech}</h3>
          <ul>
            {meaning.definitions.slice(0, 3).map((def, j) => (
              <li key={j}>
                <p>{def.definition}</p>
                {def.example && <em>Example: {def.example}</em>}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {synonyms.length > 0 && (
        <div className="synonyms">
          <strong>Synonyms: </strong>
          {synonyms.join(', ')}
        </div>
      )}
    </div>
  );
}
