import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import DeleteItem from './DeleteItem'
import UpdateItem from './UpdateItem'
// import styles from './components-styles/Item.css';

const Item = (props) => {
  const classes = useStyles();
return (
  <div className={classes.div} dataset={props.cid}>
      <h2 className={classes.h2}>{props.name}</h2>
      <p>{props.description}</p>
      <h3>${props.price}</h3>
      <h3>{props.location}</h3>
      <h3>{props.category}</h3>
      <DeleteItem cid={props.cid} />
      <UpdateItem cid = {props.cid} data={props} />
  </div>

)
}

const useStyles = makeStyles((theme) => ({
  div: {
    margin: "5% auto",
    background: "rgb(179, 140, 68, .6)",
    width: "55%",
    borderRadius: "5px",
    padding: "5% 0",
  },
  h2: {
    margin: "2%",
    padding: "2%",
    fontSize: "1.5em",
    background: "white",
    borderRadius: "5px",
    width: "50%",
    margin: '0 auto'
  },
  p: {
    margin: "2%",
    padding: "2%",
    fontSize: "1.25em",
    borderRadius: "5px",
    width: "50%",
  },
  h3: {
    margin: "2%",
    padding: "2%",
    fontSize: "1em",
  },
}));


export default Item
