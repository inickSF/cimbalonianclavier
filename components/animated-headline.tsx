"use client";

type AnimatedHeadlineProps = {
  text: string;
};

export function AnimatedHeadline({ text }: AnimatedHeadlineProps) {
  const words = text.split(" ");

  return (
    <h1 className="animated-headline" aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="headline-word">
          {Array.from(word).map((letter, letterIndex) => (
            <span
              key={`${letter}-${wordIndex}-${letterIndex}`}
              className="headline-letter"
              style={{ animationDelay: `${wordIndex * 90 + letterIndex * 28}ms` }}
            >
              {letter}
            </span>
          ))}
          {wordIndex < words.length - 1 ? <span className="headline-space"> </span> : null}
        </span>
      ))}
    </h1>
  );
}
