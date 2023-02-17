import React from 'react'
import "./Sidebar.css"
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import SidebarOption from './SidebarOption'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon  from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon fontSize='large'
         />} className='sidebar_compose'>Compose</Button>

         <SidebarOption Icon={InboxIcon} title="inbox" number={34} selected={true}/>
         <SidebarOption Icon={StarIcon} title="starred" number={34}/>
         <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={34}/>
         <SidebarOption Icon={LabelImportantIcon} title="Important" number={34}/>
         <SidebarOption Icon={NearMeIcon} title="Sent" number={34}/>
         <SidebarOption Icon={NoteIcon} title="Drafts" number={34}/>
         <SidebarOption Icon={ExpandMoreIcon} title="More" number={34}/>

         <div className="sidebar_footer">
            <div className="sidebar_footeroptions">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
         </div>
    </div>
  )
}

export default Sidebar