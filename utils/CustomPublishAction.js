export function CustomPublishAction(originalPublishAction) {
  return (props) => {
    const originalResult = originalPublishAction(props)
    return {
      ...originalResult,
      label: 'Save', // Customize the label
    }
  }
}
