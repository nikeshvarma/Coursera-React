import React, { Component } from 'react';
import { Card, CardTitle, CardImgOverlay, CardImg } from 'reactstrap';


class Menu extends Component {

    handelDishSelect = (dish) => {
        this.setState({ selectDish: dish })
    }


    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <>
                    <div className="col-12 col-md-5 m-1">
                        <Card key={dish.id} tag="li" onClick={() => this.props.onClick(dish.id)} >
                            <CardImg object src={dish.image} alt={dish.name} width="100%"></CardImg>
                            <CardImgOverlay body className="ml-5">
                                <CardTitle heading>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </>
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
}

export default Menu