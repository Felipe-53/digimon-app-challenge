import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  AppBar: {
    height: '4rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },

  logo: {
    marginLeft: '0.5rem',
    '&:hover': {
      cursor: 'pointer'
    }
  },
});

export default useStyles;