import React from 'react'

function PostsMap({ post }) {

  function countBodyLength() {
    console.log("length of the post body is:", post.body.length)

  }
  return (
    <div className='post'>
      <p><b>User ID:</b> {post.userId} <b>; post ID: </b> {post.id}</p>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={countBodyLength}>press to console.log length of post body</button>
    </div>
  )
}

export default PostsMap