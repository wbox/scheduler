import { useState } from 'react';

export default function useVisualMode(initial) {
  const [ mode, setMode ] = useState(initial)
  const [ history, setHistory ] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      history.splice(history.length - 1, 1)
      setHistory([...history, mode])
    }
    setHistory([...history, mode])
    return setMode(mode)
  }

  function back() {
    if(history.length <= 1) {
      return setMode(history[0])
    } else {
      history.splice(history.length - 1, 1)
      return setMode(history[history.length - 1])
    }
  }

  return { mode, transition, back };

}

