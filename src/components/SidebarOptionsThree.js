import React from 'react'
import './SidebarOptionsThree.css';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';

function SidebarOptionsThree({Icon, text}) {
    return (
        <div className = 'sidebarOptionsThree'>
            <FiberManualRecordSharpIcon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptionsThree