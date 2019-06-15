import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                image={faker.image.avatar()}
                author="Sam"
                timeAgo="Today at 6:00PM"
                comment="Nice blog post!"
            />
            <CommentDetail author="John" timeAgo="Today at 4:45AM" image={faker.image.avatar()} comment="Awesome blog post!" />
            <CommentDetail author="Doe" timeAgo="Today at 3:10AM" image={faker.image.avatar()} comment="Я обосрался !" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
