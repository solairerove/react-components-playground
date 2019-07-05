import PropTypes from 'prop-types';
import React from 'react';

const CommentDetail = ({
  image, author, timeAgo, comment,
}) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={image} />
    </a>

    <div className="content">
      <a href="/" className="author">
        {author}
      </a>

      <div className="metadata">
        <span className="date">{timeAgo}</span>
      </div>

      <div className="text">{comment}</div>
    </div>
  </div>
);

CommentDetail.propTypes = {
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default CommentDetail;
