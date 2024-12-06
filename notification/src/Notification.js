import React from 'react';
import { Snackbar } from '@mui/material';
const Notification=({open,message,onClose})=>{
    return(
        <Snackbar
        open={open}
        message={message}
        onClose={onClose}
        autoHideDuration={3000}
        />
    );
};
export default Notification;