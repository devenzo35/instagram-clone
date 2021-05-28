import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { userContext } from "../context/userContext";

const baseUrl = `https://instagram-clone-nodejs-backend.herokuapp.com/api/`;

export const CreatePostForm = () => {
  const fileInput = useRef(null);
  const [file, setFile] = useState({
    msg: null,
    img: null,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [usersaved, setUserSaved] = useContext(userContext);

  const handleStartUpload = (e) => {
    fileInput.current.click();
  };
  const handleFileUpload = async (e) => {
    const formData = new FormData();
    formData.append("postImg", e.target.files[0]);
    const resp = await axios.post(`${baseUrl}upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(resp.data);
    setFile(resp.data);
  };

  const onSubmit = async (data) => {
    const { title } = data;
    console.log(localStorage.getItem("token"));
    try {
      await axios.post(
        `${baseUrl}posts`,
        { title, img: file },
        {
          headers: {
            jtoken: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border-2 rounded-md shadow-md fixed w-96 h-96 m-auto top-0 bottom-0 right-0 left-0 z-50"
    >
      <input
        className="w-full h-10 border-b-2 p-2"
        type="text"
        placeholder="Write a caption..."
        name="title"
        {...register("title", { required: true })}
      ></input>
      <input
        ref={fileInput}
        onChange={handleFileUpload}
        className="hidden bottom-0"
        type="file"
      ></input>
      <div className="h-5/6 flex items-center p-10 py-20">
        {file.img ? (
          <img onClick={handleStartUpload} src={file.img}></img>
        ) : (
          <img onClick={handleStartUpload} src="/default.png"></img>
        )}
      </div>
      <button className="text-blue-400 position absolute right-1 bottom-0">
        Share
      </button>
    </form>
  );
};
