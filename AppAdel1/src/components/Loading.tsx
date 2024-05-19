import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export default function Loading() {
  return (
    <Box
      className="pageContainer"
      display="flex"
      alignItems='center'
      justifyContent='center'
      flexDirection="column"
    >
      <CircularProgress color="info" size="50px" />
    </Box>
  )
}
