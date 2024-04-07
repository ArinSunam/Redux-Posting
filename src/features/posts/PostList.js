import { useSelector } from "react-redux";
import React from 'react'
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostList = () => {

  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <article className="mt-[15px] ml-[10px] py-[30px] px-[20px] w-[500px] border-2 border-white rounded" key={post.id}>
      <h3 className=" text-2xl text-white font-medium">{post.title}</h3>
      <p className="text-lg text-white">{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ))
  return (
    <section className=" mt-[30px]">
      <h2 className="text-4xl text-white font-semibold">Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostList
