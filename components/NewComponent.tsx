import React, { useRef } from "react";

export const NewComponent = () => {
  const fileInput = useRef(null);

  const handleImageUpload = (e) => {
    fileInput.current.click();
  };
  return (
    <form className="bg-white hidden border-2 rounded-md shadow-md fixed w-96 h-96 top-20 z-50">
      <input
        className="w-full h-10 border-b-2"
        type="text"
        placeholder="aaaaaaa"
      ></input>
      <input ref={fileInput} className="hidden bottom-0" type="file"></input>
      <img onClick={handleImageUpload} src="/default.jpg"></img>
    </form>
  );
};
