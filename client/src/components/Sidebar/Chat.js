import React from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, BadgeUnread, ChatContent } from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { setActiveChat } from "../../store/activeConversation";
import { connect } from "react-redux";
import { setReadMessages } from "../../store/utils/thunkCreators";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab",
    },
  },
}));

const Chat = (props) => {
  const classes = useStyles();
  const { conversation } = props;
  const { otherUser, unreadCount, id, user1Id, user2Id } = conversation;

  const handleClick = async (conversation) => {
    await props.setReadMessages(id, otherUser.id, user1Id, user2Id);
    await props.setActiveChat(conversation.otherUser.username);
  };

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} unreadCount={unreadCount} />
      <BadgeUnread sidebar={true} unreadCount={unreadCount} />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveChat: (id) => {
      dispatch(setActiveChat(id));
    },
    setReadMessages: (id, otherUserId, user1Id, user2Id) => {
      dispatch(setReadMessages(id, otherUserId, user1Id, user2Id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Chat);
