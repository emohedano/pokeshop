import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { currencyFormatter } from '../utils';

function getCartListItem(item, classes){

    const leftText = `${item.pokemon.name} x ${item.count}`;
    const rightText = `${currencyFormatter.format(item.pokemon.weight * item.count)} USD`;

    return (
      <ListItem key={item.pokemon.name}>
        <ListItemText primary={leftText}/>
        <ListItemText primary={rightText} className={classes.alignRight}/>
      </ListItem>
    );

}

const ShoppingCart = ({cart, classes, open,  onClose, onCheckout}) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <div
            tabIndex={0}
            role="button"
            onClick={onClose}
            onKeyDown={onClose}
            >
            <div className={classes.cartItemsWrapper}>
                
                <List>
                    {cart.items.map(i => getCartListItem(i, classes))}
                    <Divider />
                </List>
                <div className={classes.cartTotal}>
                    <strong>Total:</strong>
                    <label>{currencyFormatter.format(cart.total)}</label>
                </div>
                <Button variant="contained" color="secondary" className={classes.addButton} onClick={onCheckout}>Purchase</Button>

            </div>
            </div>
        </Drawer>
    );
}

export default ShoppingCart;