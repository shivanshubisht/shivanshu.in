'use client';
import { useEffect, useRef } from 'react';

interface RubberBandProps {
  text: string;
  type: 'heading' | 'subheading';
}

const RubberBand: React.FC<RubberBandProps> = ({ text, type }) => {
  const textElRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = textElRef.current!.textContent;
    const letters = text!.split('');

    let html = '';

    const makeSpan = (letter: string) =>
      `<span class="letter">${letter}</span>`;

    letters.forEach((letter) => {
      if (letter === ' ') {
        html += ' ';
      } else if (letter !== ' ') {
        html += makeSpan(letter);
      }
    });

    textElRef.current!.innerHTML = html;

    const hoverEl = document.querySelectorAll('.letter');
    hoverEl.forEach((letter: Element) => {
      letter.addEventListener('mouseover', hover);
      // @ts-ignore
      function hover(event: any) {
        const target = event.target;
        if (target) {
          target.classList.add('rubber_band_animation');
          setTimeout(() => {
            target.classList.remove('rubber_band_animation');
          }, 1000);
        }
      }
    });
  }, []);

  if (type === 'heading') {
    return (
      <h1 className='rubber_band' ref={textElRef}>
        {text}
      </h1>
    );
  } else {
    return (
      <h2 className='rubber_band' ref={textElRef}>
        {text}
      </h2>
    );
  }
};

export default RubberBand;
