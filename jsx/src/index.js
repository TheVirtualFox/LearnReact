// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

// Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warn!</h4>
                    Are you sure want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45 pm"
                    avatar={faker.image.avatar()}
                    comment="comment"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam2"
                    timeAgo="Today at 5:45 pm"
                    avatar={faker.image.avatar()}
                    comment="comment2"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam22"
                    timeAgo="Today at 5:45 pm"
                    avatar={faker.image.avatar()}
                    comment="comment22"
                />
            </ApprovalCard>


        </div>
    );
};

// Take the react component and show it on screen
ReactDOM.render(
  <App />,
  document.querySelector("#root")
);