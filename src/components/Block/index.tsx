import React from 'react'

interface BlockProps {
  title?: string
  padding?: string
}

const Block: React.FC<BlockProps> = ({ title, children, padding = '20px' }) => {
  return (
    <div style={{ padding }}>
      <div>{title}</div>
      {children}
    </div>
  )
}

export default Block
