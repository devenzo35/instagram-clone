import React from "react";
import { Cards } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { Stories } from "../components/Stories";
import { Suggestions } from "../components/Suggestions";

export default function Home() {
  return (
    <div className="bg-gray-100 lg:flex lg:flex-row lg:justify-center">
      <div className="lg:w-6/12 lg:mt-14">
        <Stories />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Suggestions />
    </div>
  );
}
