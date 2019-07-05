import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => (
  <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail
        image={faker.image.avatar()}
        author="Sam"
        timeAgo="Today at 6:00PM"
        comment="Nice blog post!"
      />
    </ApprovalCard>

    <CommentDetail
      author="John"
      timeAgo="Today at 4:45AM"
      image={faker.image.avatar()}
      comment="Awesome blog post!"
    />
    <CommentDetail
      author="Doe"
      timeAgo="Today at 3:10AM"
      image={faker.image.avatar()}
      comment="Я обосрался !"
    />

    <ApprovalCard>
      <div>
        <h4>Warning</h4>
        Are you sure ?
      </div>
    </ApprovalCard>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
