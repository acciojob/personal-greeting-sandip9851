import React from 'react'
import { useState } from 'react'

function input() { const [name, setName] = useState("");

  const onChangeEvent = (event) => {
    setName(`Hello ${event.target.value}!`);
  };

  return (
    <div>
      {
        <>
          <input type="{text}" onChange={onChangeEvent} />
          <p className="display">{name}</p>
        </>
      }
    </div>
  );
};

export default input