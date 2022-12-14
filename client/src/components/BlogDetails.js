import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BlogDetails = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className=" rounded-md bg-white w-full"
    >
      <p>
        {" "}
        <img
          src={blog.file}
          alt="/"
          className="rounded-t-md hover:scale-105 duration-500"
        />
      </p>
      <div className="px-5 py-8 text-center">
        <h4 className="font-tenor text-2xl">{blog.title}</h4>
        <p className="text-[12px] text-stone-400 tracking-widest my-5">
          {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
        </p>
        <p className="text-stone-500">{blog.content}</p>
      </div>
    </div>
    // <div
    //   data-aos="fade-up"
    //   data-aos-duration="2000"
    //   className=" rounded-md bg-white w-full"
    // >
    //   {blogs.img ? (
    //     <img
    //       src={blogs.img}
    //       alt="/"
    //       className="rounded-t-md hover:scale-105 duration-500"
    //     />
    //   ) : undefined}

    //   {blogs.video ? (
    //     <video src={blogs.video} autoPlay="true" loop controls />
    //   ) : undefined}

    //   {blogs.component ? <SlidePost /> : undefined}

    //   {blogs.components ? <Qoutes /> : undefined}

    //   {blogs.audio ? (
    //     <audio className="mx-auto mt-5" src={blogs.audio} controls />
    //   ) : undefined}

    //   <div className="px-5 py-8 text-center">
    //     <h1 className="font-tenor text-2xl">{blogs.head}</h1>
    //     <p className="text-[12px] text-stone-400 tracking-widest my-5">
    //       Post: {""}
    //       {blogs.date}
    //     </p>
    //     <p className="text-stone-500">{blogs.content}</p>
    //     <button className="bg-[#E2B8AC] hover:bg-[#e0bbb0] text-white  my-5 py-2 px-4 rounded-full hover:drop-shadow-md duration-500 hover:scale-105">
    //       {blogs.button}
    //     </button>
    //   </div>
    // </div>
  );
};

export default BlogDetails;
