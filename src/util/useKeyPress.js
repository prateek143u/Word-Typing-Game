import { useEffect, useState } from "react";

const useKeyPress = (callbackFn) => {
  const [keyPress, setKeyPress] = useState();

  useEffect(() => {
    const downHandler = ({ key }) => {
      let regex = /^[a-zA-Z]*$/;
      if (keyPress !== key && regex.test(key) && key.length === 1) {
        setKeyPress(key);
        callbackFn && callbackFn(key);
      }
    };

    const upHandler = () => {
      setKeyPress(null);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPress;
};

export default useKeyPress;
