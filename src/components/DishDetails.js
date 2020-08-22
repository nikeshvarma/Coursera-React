import React, { Fragment } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


function DisplayDishDetails({ dish }) {

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

function DisplayComments({ dish }) {

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
    )
}


const RenderDish = (props) => {

    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <DisplayDishDetails dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <DisplayComments dish={props.dish} />
                    </div>
                </div>
            </div>
        )
    } else {
        return (<div></div>)
    }
}


export default RenderDish;