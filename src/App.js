import React from 'react'
import PostList from './features/posts/PostList'
import AddPostForm from './features/posts/AddPostForm'

const App = () => {
  return (
    <div className='px-[40px] py-[20px] h-[100%]  bg-zinc-700 '>
      <AddPostForm />
      <PostList />


    </div>
  )
}

export default App
