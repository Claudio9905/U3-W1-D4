import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentList extends Component {
  render() {
    return (
      <>
        {this.props.recensioni.map((recens) => {
          <ListGroup key={recens.elementId}>
            <ListGroup.Item>{recens.rate}</ListGroup.Item>
            <ListGroup.Item>{recens.comment}</ListGroup.Item>
          </ListGroup>;
        })}
      </>
    );
  }
}

export default CommentList;
