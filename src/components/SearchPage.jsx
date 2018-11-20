import React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { currencyFormatter } from '../utils';

function getPokemonCard(pokemon, classes, onAdd){

    const tileClasses = {
      tile: classes.gridListTile,
      imgFullWidth: classes.gridListImageWidth
    }
    const subtitle = `${currencyFormatter.format(pokemon.price)} USD`;

    const onAddWrapper = () => {
        return () => {
            onAdd(pokemon)
        }
    }

    return (
        <GridListTile key={pokemon.name} classes={tileClasses}>
        <img src={pokemon.ThumbnailImage} alt={pokemon.name} />
        <GridListTileBar
            title={pokemon.name}
            subtitle={subtitle}
            actionIcon={
            <Button variant="contained" color="secondary" className={classes.addButton} onClick={onAddWrapper(pokemon)}>Add</Button>
            }
        />
        </GridListTile>
    );

}

const SearchPage = ({ pokemons, classes, onAddToCart}) => {

    return (
        <div className={classes.bodyWrapper}>
        <div className={classes.search}>
        <div className={classes.searchIcon}>
            <SearchIcon />
        </div>
        <Input
            placeholder="Search…"
            disableUnderline
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
        />
        </div>
        <GridList cellHeight={120} classes={{ root: classes.gridList }}>
            {pokemons.map( p => getPokemonCard(p, classes, onAddToCart))}
        </GridList>
    </div>
    );
}

export default SearchPage;