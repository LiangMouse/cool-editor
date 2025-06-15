export const useHistoryAction = () => {
    const Icon = historyIcons[action]

    return {
        Icon
    }
}
export const historyIcons = {
    undo: Undo2Icon,
    redo: Redo2Icon,
  }