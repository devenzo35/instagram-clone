import React from "react";

export const SuggestionHeader = () => {
  return (
    <section className="flex flex-row justify-between items-center w-full px-3">
      <div className="rounded-full w-20 h-20 bg-gray-400"></div>
      <div className="flex flex-col">
        <span>Enzocuellar35</span>

        <span>Enzo Fabricio Cuellar</span>
      </div>
      <a className="text-blue-900">Switch</a>
    </section>
  );
};
