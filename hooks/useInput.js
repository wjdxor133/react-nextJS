import { useCallback, useState } from "react";

const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  // useState가 [value, setValue]을 반환하기 때문에 똑같이 return문에 반환을 시켜준다.
  return [value, handler];
};

export default useInput;
