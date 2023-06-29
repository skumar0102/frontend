import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ViewDetails() {
    const [openDilog, setOpenDilog] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpenDilog(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpenDilog(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (openDilog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openDilog]);
  return (
    <div>
         <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Dialog
        open={openDilog}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Payment Details</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
           <h2>lorem*50</h2>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='primary' onClick={handleClose}>Cancel</Button>
          <Button variant='contained' color='error' onClick={handleClose}>Reminder</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ViewDetails