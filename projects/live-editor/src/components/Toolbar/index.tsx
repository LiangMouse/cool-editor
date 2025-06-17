import React, { useState,useRef } from 'react'


const Toolbar = () => {

  return <div className='flex sticky justify-center items-center top-0 z-10 w-full h-[44px] border-b border-gray-400' role='toolbar'>
      <ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>
    </div>
}

export default Toolbar