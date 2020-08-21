import React, { Component, Fragment } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


class DishDetails extends Component {

    displayDishDetails = (dish) => {
        if (this.props.selectDish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    displayComments = (dish) => {
        if (this.props.selectDish != null) {
            return (
                <Fragment>
                    <h4>Comments</h4>
                    {
                        dish.comments.map((value, key) => {
                            return (
                                <>
                                    <ol key={key}>{value.comment}</ol>
                                    <ol key={key}>--{value.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(value.date)))}</ol>
                                </>
                            )
                        })
                    }
                </Fragment>
            );
        } else {
            return (
                <div></div>
            );
        }
    }


    render() {

        console.log(this.props.selectDish);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.displayDishDetails(this.props.selectDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.displayComments(this.props.selectDish)}
                    </div>
                </div>
            </div>
        )
    }
}


export default DishDetails