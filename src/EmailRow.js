import React from 'react'
import './EmailRow.css'
import { IconButton } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon  from '@material-ui/icons/LabelImportantOutlined'
import { useHistory } from 'react-router-dom'

function EmailRow({id, title, subject, description, time}) {
  const history = useHistory();


    return (
    <div onClick={() => history.push('/mail')} className='emailRow'>
        <div className="email_Row_Options">
            <Checkbox />
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
            

        </div>
        <h3 className="email_Row_Title">{title}</h3>
        <div className="email_Row_Message">
            <h4>{subject}{" "}
            <span className="email_Row_Desc">-
                {description}
            </span>
            </h4>
        </div>
        <p className="email_Row_Time">
            {time}
        </p>

    </div>
  )
}

export default EmailRow