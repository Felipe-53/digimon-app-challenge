import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './searchDigimonStyles';


function SearchDigimon({ openModal, set_openModal }) {
  const classes = useStyles();

  return (
    <Dialog PaperProps={{style: {width: '60%'}}} open={openModal} onClose={() => set_openModal(false)}>
      <DialogTitle>Search Digimon</DialogTitle>
      <DialogContent>
        OLá
      </DialogContent>
    </Dialog>
  )
}

// function oi() {
//   function FormDialog() {
//     const [open, setOpen] = React.useState(false);
  
//     const handleClickOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };
  
//     return (
//       <div>
//         <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//           Open form dialog
//         </Button>
//         <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//           <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               To subscribe to this website, please enter your email address here. We will send updates
//               occasionally.
//             </DialogContentText>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               label="Email Address"
//               type="email"
//               fullWidth
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleClose} color="primary">
//               Subscribe
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }



export default SearchDigimon;


