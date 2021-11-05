import React from "react";
import { Box, Badge } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  badge: {
    height: 20,
    borderRadius: "10px",
    backgroundColor: "#3f92ff",
    color: "white",
  },
  sidebar: {
    marginRight: 50,
  },
}));

const BadgeReadStatus = (props) => {
  const classes = useStyles();
  const { sidebar, notificationCount } = props;

  return (
    <Box className={sidebar ? classes.sidebar : ""}>
      <Badge
        classes={{ badge: classes.badge }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        overlap="circle"
        badgeContent={notificationCount}
      ></Badge>
    </Box>
  );
};

export default BadgeReadStatus;
