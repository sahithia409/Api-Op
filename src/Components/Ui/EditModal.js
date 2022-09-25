
import { useState } from "react";

const EditModal = ({ closeModal, addNewPost, postDetails, editPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || body.trim() === "") {
      alert("Please fill all fields");
    }
    else if (postDetails) {
      editPost({ id: postDetails.id, title: title, body: body, userId: 1 });
    } else {
      setTitle("");
      setBody("");
      addNewPost({
        title: title,
        body: body,
        id: Math.floor(Math.random() * 100) + 100,
        userId: 1,
      });
    }
  };

  const cancelHandler = () => {
    closeModal(false);
  };

  return (
    <form align="center" onSubmit={submitFormHandler}>
      <label component="h2">Title</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "50%" }}
        fullWidth
        margin="dense"
        variant="outlined"
        placeholder={postDetails.title ? postDetails.title : "Title"}
      />

      <br />

      <label component="h2" style={{ marginTop: "0.6rem" }}>
        Body
      </label>
      <input
        id="body"
        value={!body === "" ? postDetails.body : body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={!postDetails.body ? "Enter post body" : postDetails.body}
        style={{ width: "50%" }}
        margin="dense"
        multiline
        rows="7"
        variant="outlined"
      />
      <br />
      <button type="submit">
        Submit
      </button>

      <button
        
        style={{ marginLeft: "0.5em", margin: "1rem" }}
       
        onClick={cancelHandler}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditModal;