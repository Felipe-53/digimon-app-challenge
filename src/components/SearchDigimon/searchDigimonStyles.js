import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  inputs: {
    maxWidth: '15rem',
    // marginTop: '1rem',
    marginBottom: '1.5rem'
  },

  radioGroup: {
    maxWidth: '15rem',
    margin: '2rem',
  }
});

export default useStyles;