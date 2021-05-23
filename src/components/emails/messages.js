import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getMemberData } from '../../store/reducers/messages';
import { usersEmailSelector } from '../../store/selectors';
import Grid from '../grid/grid';
import List from '@material-ui/core/List';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
    },
    block: {
      display: 'block',
    },
    inline: {
      display: 'inline',
    },
  }),
);
export const Messages = () => {
  const classes = useStyles();
  const loading = useSelector(state => state.messages.loading)
  const error = useSelector(state => state.messages.error)
  const usersEmails= useSelector(usersEmailSelector());
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMemberData())
  }, [dispatch])
  return loading ? 
    (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <CircularProgress />
        </div>
    ): error ? 
    (
      <h2> Error Loading </h2>
     ):
    (
   <List  className={classes.root} data-test="messageList"> 
     <Grid emails = {usersEmails}/>
   </List>
 )
}
