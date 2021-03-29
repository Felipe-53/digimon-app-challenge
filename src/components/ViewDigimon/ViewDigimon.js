import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  img: {
    width: 320,
    height: 320
  }
})

function ViewDigimon({digimons, set_digimons}) {
  const classes = useStyles();

  if (digimons.length !== 1) return null;

  let [digimon] = digimons;
  let {name, level, img} = digimon; 

  const closingLogic = () => set_digimons([]);

  return (
    <Dialog open={digimons.length === 1} onClose={closingLogic}>
      <DialogTitle>
        <div className={classes.titleContainer} >
          <span>{name +  " - " + level}</span>
          <IconButton onClick={closingLogic}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <img src={img} className={classes.img} />
      </DialogContent>
    </Dialog>
  );
}

export default ViewDigimon
