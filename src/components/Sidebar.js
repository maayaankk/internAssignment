import React from 'react'
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';
import CheckIcon from '@material-ui/icons/Check';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import SidebarOptionsOne from './SidebarOptionsOne';
import SidebarOptionsTwo from './SidebarOptionsTwo';
import SidebarOptionsThree from './SidebarOptionsThree';
import SidebarOptionsFour from './SidebarOptionsFour';

function Sidebar() {
    return (
        <div className = 'sidebar'>
            
            <SidebarOptions Icon = {CheckIcon} text = 'Why join Us?' />
            <SidebarOptionsOne />
            <SidebarOptionsTwo />
            <SidebarOptionsThree Icon = {FiberManualRecordSharpIcon} text = 'Exams'/>
            <SidebarOptionsThree Icon ={FiberManualRecordSharpIcon} text = 'Colleges'/>
            <SidebarOptionsThree Icon = {FiberManualRecordSharpIcon} text = 'Courses'/>
            <SidebarOptionsFour />
            {/* <SidebarOptions Icon = {CheckIcon} text = 'Never Miss an Update' />
            <SidebarOptions Icon = {CheckIcon} text = 'Get All the Details regarding:' />
            
            <SidebarOptions Icon ={FiberManualRecordSharpIcon} text = 'Colleges'/>
            
            <SidebarOptions Icon = {CheckIcon} text = 'Stay Care Free' /> */}
        </div>
    )
}

export default Sidebar
