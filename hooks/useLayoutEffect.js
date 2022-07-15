import { useLayoutEffect, useEffect } from "react";

// replace useLayoutEffect with useEffect on the server to fix "Warning: useLayoutEffect does nothing on the server" https://stackoverflow.com/a/58173551

if (typeof window === 'undefined') {
  useLayoutEffect = useEffect;
}

export default useLayoutEffect