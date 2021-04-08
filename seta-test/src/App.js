import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded, getPosts } from './features/posts/postSlices';
import PostForm from './components/PostForm';

const initData = {
  userId: '',
  title: '',
  body: ''
}

function App() {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);
  const [show, setShow] = useState(false)
  const [postData, setPostData] = useState(initData)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json();
    if (data) {
      setShow(false)
      dispatch(postAdded(data))
    }
  }

  return (
    <div className="App">
      <button style={{
        padding: '12px 20px',
        backgroundColor: '#2196F3',
        color: '#fff',
        border: 'none',
        marginTop: 20,
        cursor: 'pointer'
      }}
        onClick={() => setShow(true)}
      >Add new post</button>

      <PostForm
        show={show}
        postData={postData}
        onChange={setPostData}
        onSubmit={handleSubmit}
        onDismiss={() => {
          setPostData(initData);
          setShow(false);
        }}
      />

      <table border="1" style={{ width: '60%', margin: 'auto', marginTop: 30 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post) =>
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
