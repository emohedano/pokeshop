import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchPage from './components/SearchPage';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
      pokemons: [],
      cart: {
        items: [],
        total: 0,
        totalItems: 0
      },
      cartOpen: false
    }
  }

  componentDidMount(){
    
    this.fetchPokemons().then((pokemons) => {
      
      this.setState({
        pokemons: pokemons
      });

    });

  }

  fetchPokemons(){
    return fetch('/pokemon.json').then((response) => {
      return response.json();
    }).then((pokemons) => {

      const nonRepeated = new Map();
      
      pokemons.forEach((p) => {
        if (!nonRepeated.has(p.name)) {
          p.price = p.weight;
          nonRepeated.set(p.name, p);
        }
      });

      return Array.from(nonRepeated.values()).slice(0, 8);
      
    });
  }
  
  onAddToCart = (pokemon) => {

      let state = this.state;
      let items = [...state.cart.items];

      let itemExists = items.find(i => i.pokemon.name === pokemon.name)

      if (itemExists) {
        itemExists.count += 1;
      } else {
        items.push({
          count: 1,
          pokemon: pokemon
        });
      }

      state.cart.totalItems += 1;
      state.cart.items = items;
      state.cart.total += pokemon.price;

      this.setState(state);

      // GTM event
      window.dataLayer.push({
        event: 'ON_ADD_TO_CART',
        item: pokemon
      });

  }

  toggleDrawer = (open) => () => {
    this.setState({
      cartOpen: open,
    });

  }

  onCheckout = () => {

    let state = this.state;

    // GTM event
    window.dataLayer.push({
      event: 'ON_CHECKOUT',
      items: state.cart.items,
      total: state.cart.total
    });

  }

  
  render() {
    const { classes } = this.props;
    const { pokemons, cart, cartOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Pokeshop: Gotta buy 'em all!
            </Typography>
            <div className={classes.grow} />
            <div className={classes.shoppingCart}>
              <IconButton color="inherit" onClick={this.toggleDrawer(true)}>
                <Badge badgeContent={cart.totalItems} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        
        <SearchPage pokemons={pokemons} classes={classes} onAddToCart={this.onAddToCart}/>
        <ShoppingCart cart={cart} classes={classes} open={cartOpen} onClose={this.toggleDrawer(false)} onCheckout={this.onCheckout}/>
      
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
