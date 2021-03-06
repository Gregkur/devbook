import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  return (
    <div class="post-form">
      <div class="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
        class="form my-1">
        <textarea
          onChange={(e) => setText(e.target.value)}
          name="text"
          value={text}
          cols="30"
          rows="5"
          placeholder="Create a post"
          required></textarea>
        <input type="submit" class="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
