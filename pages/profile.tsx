import React from "react";

export default function Profile() {
  return (
    <div className="bg-gray-300 w-4/6 m-auto mt-14 h-screen">
      <section className="border-b-2 h-2/6 flex flex-row items-center justify-around">
        <div className="rounded-full w-36 h-36 bg-gray-400"></div>
        <div>
          <span>Enzocuellar35</span>
          <button>Edit profile</button>
          <i className="fas fa-cog"></i>
        </div>
      </section>
    </div>
  );
}
