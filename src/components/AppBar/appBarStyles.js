import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  AppBar: {
    height: '5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },

  Autocomplete: {
    zIndex: 5000,
    marginRight: '3rem',
    height: '80%',
    width: '15rem'
  },

  logo: {
    marginLeft: '0.5rem'
  }
});

export default useStyles;