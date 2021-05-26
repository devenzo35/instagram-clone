import React, { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { Stories } from "../components/Stories";
import { Suggestions } from "../components/Suggestions";
import axios from "axios";
import { NewComponent } from "../components/NewComponent";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://instagram-clone-nodejs-backend.herokuapp.com/api/posts")
      .then((resp) => {
        console.log(resp.data);
        setPosts(resp.data.posts);
      });
  }, []);

  return (
    <div className="bg-gray-100 lg:flex lg:flex-row lg:justify-center">
      <Navbar />
      <NewComponent />
      <div className="lg:w-6/12 lg:mt-14">
        <Stories />
        {posts &&
          posts.map(({ title, img, likes, comments, user }) => {
            return (
              <Cards
                title={title}
                img={img}
                likes={likes}
                comments={comments}
                user={user}
              />
            );
          })}
      </div>
      <Suggestions />
    </div>
  );
}
