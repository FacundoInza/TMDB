import { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  return { value, onChange };
}

export default useInput;
