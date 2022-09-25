import { Fragment, useEffect, useState } from "react";

import EditModal from "../Ui/EditModal";


function Posts() {
  const [openForm, setOpenForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editPostDetails, setEditPostDetails] = useState("");

  // useEffect
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setTimeout(setPosts(data), 2000);
    };
    getPosts();
  }, []);

 


 
  // form visibility handler
  const handleOpenForm = () => {
    setOpenForm(!openForm);
  };


  const addNewPostHandler = (post) => {
    setPosts([post, ...posts]);
  };

  const editPost = (post) => {
    const index = posts.findIndex((p) => p.id === editPostDetails.id);
    posts[index] = post;
    setPosts([...posts]);
    setOpenForm(false);
    setEditPostDetails("");
  };

  return (
    <Fragment>
      
      <div
        style={{
        
          margin: "0.3rem",
          position: "sticky",
          top: 0,
          zIndex: 1,
        
        }}
      >
        <div spacing={2} className="d-flex justify-content-center bg-light p-2 text-dark">
          <button onClick={handleOpenForm} className="btn btn-dark ms-1">
            {!openForm ? `Add Post` : `Close`}
          </button>
        </div>
      </div>

    
      {/* post edit form */}
      {openForm && (
        <EditModal
          closeModal={setOpenForm}
          addNewPost={addNewPostHandler}
          postDetails={editPostDetails}
          editPost={editPost}
        />
      )}

      {/* post list */}
      
      {posts.map((post) => (
        <div className="row row-cols-4 row-cols-md-1 g-10 ms-auto shadow p-3 mb-1">
        <div className="col">
        <div className="card h-100">
                <div className="card-body">
        <div  key={post.id}>
          <div>
            <h3 className="card-title">
              {post.id}. {post.title}
            </h3>
            <p className="card-text">
              {post.body}
            
              <br />
            </p>
        
          </div>

          <div className="mt-2">
            <button
            className="btn btn-dark ms-1"
              type="submit"
              onClick={() => {
                setOpenForm(true);
                setEditPostDetails(post);
              }}
            >
              Edit
            </button>
            <button
            className="btn btn-dark ms-2 "
              onClick={() => {
                setPosts(posts.filter((p) => p.id !== post.id));
                alert(`Post  "${post.title}" deleted`);
              }}
            >
              Delete
            </button>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      ))}
    </Fragment>
  );
}

export default Posts;