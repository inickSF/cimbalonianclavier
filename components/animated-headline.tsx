"use client";

type AnimatedHeadlineProps = {
  text: string;
};

export function AnimatedHeadline({ text }: AnimatedHeadlineProps) {
  const lines = text.split("\n");

  return (
    <h1 className="animated-headline" aria-label={text}>
      {lines.map((line, lineIndex) => {
        const words = line.split(" ");
        const lineOffset = lineIndex * 420;

        return (
          <span key={`${line}-${lineIndex}`} className="headline-line">
            {words.map((word, wordIndex) => (
              <span key={`${word}-${lineIndex}-${wordIndex}`} className="headline-word">
                {Array.from(word).map((letter, letterIndex) => (
                  <span
                    key={`${letter}-${lineIndex}-${wordIndex}-${letterIndex}`}
                    className="headline-letter"
                    style={{ animationDelay: `${lineOffset + wordIndex * 90 + letterIndex * 28}ms` }}
                  >
                    {letter}
                  </span>
                ))}
                {wordIndex < words.length - 1 ? <span className="headline-space"> </span> : null}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}
