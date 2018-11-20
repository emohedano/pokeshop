import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    root: {
      width: '100%'
    },
    grow: {
      flexGrow: 1,
    },
    bodyWrapper: {
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column',
      alignItems: 'center'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      margin: '2em',
      width: '25%',
      color: 'white'
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    addButton: {
      margin: '.5em'
    },
    searchResults: {
  
    },
    gridList: {
      width: '50%',
      alignSelf: 'center',
      marginLeft: '25%',
      marginRight: 'auto'
    },
    gridListTile: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'end'
    },
    gridListImageWidth: {
      width: 'auto',
      height: '140px'
    },
    alignRight: {
      textAlign: 'right'
    },
    cartItemsWrapper: {
      display: 'flex',
      flexFlow: 'column'
    },
    cartTotal: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '1em'
    }
  });

  export default styles;