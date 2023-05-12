import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const res = await axios.get("http://localhost:5000/get");
    setText(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="lg:h-fit  bg-slate-900 flex flex-wrap justify-evenly py-2">
      {loading ? (
        <div className="flex justify-center items-center">
          <h1 className="text-2xl text-yellow-500 ">Loading...</h1>
        </div>
      ) : (
        text.map((ele) => {
          return (
            <div
              key={ele._id}
              className="w-[400px] bg-white hover:bg-orange-200 p-2 h-fit mx-2 my-2 md:my-10 rounded-md shadow-lg hover:translate-y-1"
            >
              <h2>{ele.message}</h2>
              <hr />
              <h5 className="text-xl">By : {ele.name}</h5>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
