import React from 'react'
import './CommentItem.css'
const CommentItem = ({comment}) => {
  return (
    <div className="comment-container row">
    <div className="col-md-7 col-sm-12">
      <div className="user-comment">
        <div>
          <img src="/images/user.png" alt="" />
          <span className="person-name">{comment.name}</span>
        </div>
        <span className="cm-date">{comment.date}</span>
      </div>
      <div className="comment-content">
        <div className="panel-body">
          <p>{comment.comment}</p>
        </div>
      </div>
    </div>
    <div className="col-md-5 col-sm-12">
      <div className="per-rating">
        <span className="me-2 label-rating">Quality</span>
        <span className="stars">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </span>
      </div>
      <div className="per-rating">
        <span className="me-2 label-rating">Design</span>
        <span className="stars">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
        </span>
      </div>
      <div className="per-rating">
        <span className="me-2 label-rating">
          Satisfaction with price
        </span>
        <span className="stars">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </span>
      </div>
    </div>
    </div>
  )
}

export default CommentItem

