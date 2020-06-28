import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment';

// Dishdetail is implemented as a functional (stateless) component
class DishDetail extends Component {

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    )
  }

  renderComments(dish) {

    const comments = dish.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <div>{comment.comment}</div>
          <div>
              {'-- ' + comment.author + ', ' + moment(comment.date).format('MMM DD, YYYY')}
          </div>
          <br/>
        </div>
      );
    })

    return (
        <div>
            <h3>Comments</h3>
            <ul className="list-unstyled">
                {comments}
            </ul>
        </div>
    );
  }

  render() {
    if (this.props.dish) {
      return(
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1 col-xs-12 col-sm-12">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1 col-xs-12 col-sm-12">
                {this.renderComments(this.props.dish)}
            </div>
          </div>
        </div>
      );
    } else { // Empty props
      return(
        <div className="col-12"></div>
      )
    }
  }
}

export default DishDetail;