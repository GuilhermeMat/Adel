import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export default function Loading() {
  return (
    <Box
      display="flex"
      alignItems='center'
      justifyContent='center'
      flexDirection="column"
      sx={{
        height: '80vh'
      }}
    >
      <CircularProgress color="info" size="50px" />
    </Box>
  )
}
