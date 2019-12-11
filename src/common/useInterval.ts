import { useEffect, useRef } from 'react';

export function useInterval( callback: () => any, delay: number | null ) {
  const savedCallback = useRef( callback );

  useEffect( () => {
    savedCallback.current = callback;
  }, [ callback ] );

  useEffect( () => {
    if( delay != null ) {
      const interval = setInterval( () => savedCallback.current(), delay );
      return () => clearInterval( interval );
    }
  }, [ delay ] );
}
