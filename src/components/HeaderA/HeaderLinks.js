/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Button from "components/CustomButtons/Button.js";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.js";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={`${classes.list} head-link-color`}>
      <ListItem className={classes.listItem}>
        <Link to="/" color="transparent" className={classes.navLink}>
          올마이티 닥터
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/callcenter" color="transparent" className={classes.navLink}>
          콜센터
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button id="toLastpage" color="transparent" className={classes.navLink}>
          문의하기
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
