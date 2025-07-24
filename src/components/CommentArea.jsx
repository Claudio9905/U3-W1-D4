import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    arrayCommentsBook: ``,
  };

  componentDidMount() {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/` +
        this.props.idBook,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY3NTc4Y2RkZjAwMTU1ZDY3YTciLCJpYXQiOjE3NTMzNjMzMjIsImV4cCI6MTc1NDU3MjkyMn0.WSMnDyvzkRHVz2Cge5WBKPELT23QjkcZzAY9h2eFlKA",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          response.json();
        } else {
          throw new Error("ERRORE nella response");
        }
      })
      .then((resData) => {
        this.setState({ arrayCommentsBook: resData });
      })
      .catch((err) => {
        console.log("ERRORE: ", err);
      });
  }

  render() {
    return (
      <>
        <CommentList recensioni={this.state.arrayCommentsBook} />
        <AddComment />
      </>
    );
  }
}

export default CommentArea;
