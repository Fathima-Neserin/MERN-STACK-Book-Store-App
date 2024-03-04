import React from 'react'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';

import Navbar from '../elements/Navbar'

const Common = (props) => {
  return (
    <div>
        <Navbar/>
        {props.child}
    </div>
  )
}

export default Common