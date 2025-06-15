import React, { useState,useRef } from 'react'
import {
  Toolbar as TiptapToolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/components/tiptap-ui-primitive/toolbar"
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button"
import { HeadingDropdownMenu } from "@/components/tiptap-ui/heading-dropdown-menu"
import { ListDropdownMenu } from "@/components/tiptap-ui/list-dropdown-menu"
import { BlockQuoteButton } from "@/components/tiptap-ui/blockquote-button"
import { CodeBlockButton } from "@/components/tiptap-ui/code-block-button"
import { MarkButton } from "@/components/tiptap-ui/mark-button"
import { ColorHighlightPopover } from "@/components/tiptap-ui/color-highlight-popover"

const Toolbar = () => {

  return <div className='flex sticky justify-center items-center top-0 z-10 w-full h-[44px] border-b border-gray-400' role='toolbar'>
  
      <ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4,5,6]} />
        <ListDropdownMenu types={["bulletList", "orderedList", "taskList"]} />
        <BlockQuoteButton />
        <CodeBlockButton />
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        <ColorHighlightPopover />
      </ToolbarGroup>
    </div>
}

export default Toolbar