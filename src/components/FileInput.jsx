// ref 특정 컴포넌트를 지정해서 기억.

import { useEffect, useRef } from "react";

export const FileInput = ({ name, value, onChange }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    onChange(name, e.target.files[0]);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onChange(name, null);
  };

  return (
    <div>
      <input
        name={name}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
};
