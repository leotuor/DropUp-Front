"use client"

import React from 'react'
import { Avatar, Modal, Box, Button } from '@mui/material';
import { useState } from 'react';

interface UserMenuProps {
  userImage: string,
  logout: () => Promise<void>;
}

function UserMenu({ userImage, logout } : UserMenuProps) {

  const [ modalOpen, setModalOpen ] = useState(false);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Avatar
        src={userImage || ""}
        sx={{ width: 40, height: 40 }}
        className='absolute right-2 mt-2 mr-2'
        onClick={() => setModalOpen(true)}
      />
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '60px', // Position the modal below the avatar
          right: '2rem',
          backgroundColor: 'white',
          padding: 3,
          boxShadow: 6,
          width: 200
        }}>
          <Button>Seus dados</Button>
          <form onSubmit={(e) => { 
            e.preventDefault();
            logout();
          }}>
            <button type='submit'>Logout</button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default UserMenu