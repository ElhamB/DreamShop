import React from "react";
import CommentItem from "./CommentItem";
const CommentList = ( {comments} ) => {
  if (!comments || !comments.map){return null}
  if (comments.length === 0) {
    return <p> No Comment Found!</p>;
  }

  return Array.from(comments).map((comment) => (
    <CommentItem key={comment.id} comment={comment} />
  ));
};

export default CommentList;
