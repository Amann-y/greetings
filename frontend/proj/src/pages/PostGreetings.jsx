import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostGreetings = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const postData = async () => {
    if (!name || !message) {
      alert("All Fields Are Required!");
    }
    const data = await axios.post("http://localhost:5000/post", {
      name: name,
      message: message,
    });
    alert("Data has been submitted successfully");
    setName("");
    setMessage("");
    navigate("/");
  };

  return (
    <div className="lg:h-[90vh] bg-slate-900 flex justify-center">
      <div className="flex flex-col mt-4 p-4 rounded-md bg-neutral-700 h-fit space-y-2 md:space-y-10 w-[80%] md:w-[50%] shadow-md">
        <div>
          <label className="text-white text-xl">Name</label>
          <input
            className="w-full py-2 px-1"
            type="text"
            placeholder="Enter Your Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label className="text-white text-xl">Message</label>
          <textarea
            rows="10"
            placeholder="Enter The Message"
            className="w-full py-2 px-1"
            type="text"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="mx-auto">
          <button
            className="rounded-sm px-14 text-xl py-2 bg-red-400 cursor-pointer hover:bg-red-800 hover:text-white"
            type="submit"
            onClick={postData}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostGreetings;
