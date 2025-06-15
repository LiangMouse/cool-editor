import React from 'react'
import { useHistoryAction } from './hooks'

interface UndoRedoButtonProps {
    action: 'undo' | 'redo'
}
const UndoRedoButton = ({action}: UndoRedoButtonProps) => {

    
  return (
    <div>UndoRedoButton</div>
  )
}

export default UndoRedoButton