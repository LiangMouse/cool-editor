import React from 'react'
import { StrictMode } from 'react'
// import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'
import Toolbar from '../Toolbar'
import ContentWrapper from '../ContentWrapper'

const LiveEditor = () => {
  return (
  <StrictMode>
   <Toolbar />
    <ContentWrapper /> 
    {/* <SimpleEditor /> */}
  </StrictMode>
  )
}

export default LiveEditor

