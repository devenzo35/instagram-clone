import React from "react";

export const SuggestionBody = () => {
  return (
    <section className="flex flex-row justify-between items-center p-2">
      <div className="flex flex-row items-center justify-between">
        <div className="rounded-full w-9 h-9 bg-gray-400"></div>
        <div className="flex flex-col items-center justify-center text-sm">
          <span className="font-bold">Alexander Kostyliev</span>
          <span className="text-gray-500">Suggested for you</span>
        </div>
      </div>
      <a className="text-blue-900">Follow</a>
    </section>
  );
};
