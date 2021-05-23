import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


const Grid = (props) =>  {
  return(
      props.emails.map((msg, index)=> ( 
        <ListItem alignItems="flex-start" key={msg.id}>
        <Tooltip title={msg.email} aria-label={msg.email} arrow>
          <>
          <ListItemAvatar>
            <Avatar title={`${msg.firstName} ${msg.lastName}`} alt={`${msg.firstName} ${msg.lastName}`} src={msg.avatar} />
              </ListItemAvatar>
                </>
                </Tooltip>
          <ListItemText
                primary={msg.dtFormat}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                        {msg.firstName} {msg.lastName} - 
                      </Typography>
                    <span> {msg.message} </span>
                    </>
                }
                    />

                        </ListItem> 
                          ))
  )
}

export default React.memo(Grid)
