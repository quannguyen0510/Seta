const PostForm = ({ postData, onChange, onSubmit, onDismiss, show }) => {
    return (
      <div className="modal" style={{ display: !show ? 'none' : 'block' }}>
        <div className="modal-content">
          <span className="close" onClick={onDismiss}>&times;</span>
          <form action='/posts' style={{ marginTop: 30, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <label for="userId">User Id</label>
            <input className="text-input" value={postData.userId} type="number" name="userId" placeholder="User Id.." onChange={(e) => onChange({ ...postData, userId: e.target.value })} />
  
            <label for="title">Title</label>
            <input className="text-input" value={postData.title} type="text" name="title" placeholder="Title.." onChange={(e) => onChange({ ...postData, title: e.target.value })} />
  
            <label for="body">Body</label>
            <input className="text-input" value={postData.body} type="text" name="body" placeholder="Body.." onChange={(e) => onChange({ ...postData, body: e.target.value })} />
  
            <button className="submit-input" onClick={onSubmit}>Add new post</button>
          </form>
        </div>
      </div>
    )
  }

  export default PostForm;