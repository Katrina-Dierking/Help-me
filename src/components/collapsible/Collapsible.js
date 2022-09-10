import React from 'react'
import useCollapse from 'react-collapsed'
import './Collapsible.css'

const Collapsible = ({title, content}) => {

    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

  return (
     <div className='collapsible'>
            <div className='header' {...getToggleProps()}>
            
              {isExpanded ? ` - Collapse ${title}` : `+ Expand ${title}`}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">{content}</div>
            </div>
    </div>
  )
}

export default Collapsible
