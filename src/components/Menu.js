import React from 'react';
import { Card, CardTitle, CardImgOverlay, CardImg } from 'reactstrap';



const RenderMenuItem = ({ dish, onClick }) => {

    return (
        <Card key={dish.id} tag="li" onClick={() => onClick(dish.id)} >
            <CardImg object src={dish.image} alt={dish.name} width="100%"></CardImg>
            <CardImgOverlay body className="ml-5">
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu