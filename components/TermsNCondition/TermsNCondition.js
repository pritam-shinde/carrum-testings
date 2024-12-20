import React from 'react'
import Link from 'next/link'
import { Box } from '@mui/material'

const TermsNCondition = () => {
  return (
    <>
      <Box py={2}>
        <strong><a href="/terms-and-conditions/" style={{ color: 'var(--dark-blue)' }}>*Terms and Conditions.</a></strong>
      </Box>
    </>
  )
}

export default TermsNCondition