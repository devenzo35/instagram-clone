import React, { FC } from "react";
import { SuggestionHeader } from "./SuggestionHeader";
import { SuggestionBody } from "./SuggestionBody";

export const Suggestions: FC = () => {
  return (
    <div className="w-3/12 h-96 right-20 hidden lg:flex flex-col lg:mt-24 sticky top-24">
      <SuggestionHeader />
      <span>Suggestions for you</span>
      <SuggestionBody />
      <SuggestionBody />
      <SuggestionBody />
      <SuggestionBody />
      <SuggestionBody />
      <p className="text-xs text-gray-400">
        About - Help - Press - API - Jobs - Privacy - Terms - Locations - Top
        Accounts - Hashtags - Language - English
      </p>
    </div>
  );
};
