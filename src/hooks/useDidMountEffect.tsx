import React, { useEffect, useRef } from 'react';

export default function useDidMountEffect(
  fn: React.EffectCallback,
  deps: React.DependencyList | undefined
) {
  const first = useRef(true);
  useEffect(() => {
    if (first.current === true) {
      first.current = false;
    } else {
      fn();
    }
  }, deps);
}
