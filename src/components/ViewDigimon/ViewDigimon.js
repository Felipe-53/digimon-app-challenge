import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    '> *': {
      magin: '0.5rem'
    }
  }
})

function ViewDigimon({digimons, set_digimons}) {
  const classes = useStyles();

  if (digimons.length !== 1) return null;

  let [digimon] = digimons;
  let {name, level, img} = digimon; 

  return (
    <Dialog open={digimons.length === 1} onClose={() => set_digimons([])}>
      <DialogTitle>
        <div className={classes.titleContainer} >
          <span>{name +  " - " + level}</span>
          <CloseIcon />
        </div>
      </DialogTitle>
      <DialogContent>
        <img src={img} />
      </DialogContent>
    </Dialog>
  );
}

export default ViewDigimon
