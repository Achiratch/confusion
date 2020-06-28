import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import moment from "moment";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  const showComments = comments.map((comment) => {
    return (
      <div key={comment.id}>
        <div>{comment.comment}</div>
        <div>
          {"-- " +
            comment.author +
            ", " +
            moment(comment.date).format("MMM DD, YYYY")}
        </div>
        <br />
      </div>
    );
  });

  return (
    <div>
      <h3>Comments</h3>
      <ul className="list-unstyled">{showComments}</ul>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.dish) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1 col-xs-12 col-sm-12">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1 col-xs-12 col-sm-12">
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    // Empty props
    return <div className="col-12"></div>;
  }
};

export default DishDetail;
