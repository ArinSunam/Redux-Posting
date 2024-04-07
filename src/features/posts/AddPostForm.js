import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postSlice'
import { selectAllUsers } from '../users/userSlice'

const AddPostForm = () => {

  //dispatch
  const dispatch = useDispatch()

  //useState s
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  //useSelect
  const users = useSelector(selectAllUsers)



  //Form handling: onChange
  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)

  //Form handling: onSubmit

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId)
      )

      setTitle('')
      setContent('')
    }
  }
  //can save
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  //user options
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <div>

      {/* Title */}
      <h2 className='text-4xl text-white font-semibold'>Add a New Post</h2>

      {/* Form */}
      <form className='mt-[20px] ml-[15px] flex flex-col gap-y-[18px]' >

        {/* Post Title */}
        <div className='flex flex-col items-start gap-y-[8px]'>
          <label htmlFor="postTitle" className='text-white text-2xl font-medium'>Post Title:</label>
          <input type="text"
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged}
            className='w-[80vw] h-[50px] py-[5px] px-[8px] rounded outline-none ' />
        </div>

        {/* Select User */}
        <div>
          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
          </select>
        </div>


        {/* Post Content */}
        <div className='flex flex-col items-start grid-cols-2
         gap-y-[8px]'>
          <label htmlFor="postContent" className='text-white text-2xl font-medium'>Content:</label>
          <textarea
            name="postContent" id="postContent"
            value={content}
            onChange={onContentChanged}
            className='w-[80vw] h-[120px] py-[5px] px-[8px] outline-none rounded' />
        </div>
        <button
          type='button'
          onClick={onSavePostClicked}
          disabled={!canSave}
          className='py-[10px] px-[30px] w-[80vw] bg-white text-black rounded'>Save Post</button>

      </form>

    </div>
  )
}

export default AddPostForm
