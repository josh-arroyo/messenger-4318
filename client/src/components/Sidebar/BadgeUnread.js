import React from "react";
import { Box, Badge } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  badge: {
    height: 20,
    borderRadius: "10px",
    color: "white",
    marginRight: theme.spacing(4),
  },
}));

const BadgeUnread = (props) => {
  const classes = useStyles();
  const { unreadCount } = props;

  return (
    <Box>
      <Badge
        classes={{ badge: classes.badge }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        overlap="circle"
        badgeContent={unreadCount}
        color="primary"
      ></Badge>
    </Box>
  );
};

export default BadgeUnread;
