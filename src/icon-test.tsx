import React, { Fragment, useEffect, useState } from 'react';
import { render } from 'react-dom';

const addLarge = {
  id: 'add-large',
  symbol: (
    <path
      fillRule="evenodd"
      d="M13 11h5a1 1 0 010 2h-5v5a1 1 0 01-2 0v-5H6a1 1 0 010-2h5V6a1 1 0 012 0v5z"
    />
  ),
};

function SvgSymbol() {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSymbols([addLarge]);
    }, 4000);
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      {symbols.map((s) => (
        <symbol
          key={s.id}
          id={s.id}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {s.symbol}
        </symbol>
      ))}
    </svg>
  );
}

export class DoIt {
  constructor() {
    const div = document.createElement('div');
    if (document.body.childNodes[0]) {
      document.body.insertBefore(div, document.body.childNodes[0]);
    } else {
      document.body.appendChild(div);
    }
    render(<SvgSymbol />, div);
  }
}

export function Icon({ name: string }) {
  return <div>test this thing</div>;
}
