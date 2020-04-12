import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';


export default function Blocking() {
  const [isBlocking, setIsBlocking] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.target.reset();
        setIsBlocking(false);
      }}
    >
      <Prompt
        when={isBlocking}
        message={(location) => `Are you sure you want to go to ${location.pathname}`}
      />

      <p>
        Blocking?
        {' '}
        {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
      </p>

      <p>
        <input
          size="50"
          placeholder="type something to block transitions"
          onChange={(event) => {
            setIsBlocking(event.target.value.length > 0);
          }}
        />
      </p>

      <p>
        <button type="button">Submit to stop blocking</button>
      </p>
    </form>
  );
}
