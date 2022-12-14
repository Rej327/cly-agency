import React from "react";
import { VscAdd } from "react-icons/vsc";
import { useState } from "react";

const AddBlog = () => {
  const [head, setHead] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const blogs = { head, date, content, img };

    fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blogs),
    }).then(() => {
      console.log("New Blog Added");
    });
  };

  return (
    <div className="max-full h-screen bg-[#E2B8AC]/50 flex justify-center">
      <div className="m-auto bg-white text-center w-96 h-auto inline-block rounded-md p-4">
        <h1 className="pb-4 font-tenor tracking-wider text-2xl text-[#E2B8AC]">
          ADD BLOG
        </h1>
        <form className="grid" onSubmit={handleSubmit}>
          <label className="pb-2">TITLE</label>
          <input
            className="inline-block p-2 bg-slate-50 rounded-md outline-[#E2B8AC]"
            type="text"
            placeholder="Enter you title here..."
            value={head}
            onChange={(e) => setHead(e.target.value)}
            required
          />
          <label className="p-4">CONTENT</label>
          <textarea
            className="inline-block h-28 p-2 bg-slate-50 rounded-md outline-[#E2B8AC]"
            type="text"
            placeholder="Enter you blog here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="py-3 cursor-pointer w-52"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-28 cursor-pointer"
          />
        </form>
        <VscAdd
          onClick={handleSubmit}
          className="h-10 p-2 mx-auto cursor-pointer mt-2 w-10 bg-[#E2B8AC] rounded-md hover:text-white hover:scale-105 hover:shadow-md duration-300"
        />
      </div>
    </div>
  );
};

export default AddBlog;