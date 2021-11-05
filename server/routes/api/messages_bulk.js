const sequelize = require("sequelize");
const router = require("express").Router();
const { Message } = require("../../db/models");

// This end point is used for bulk message related tasks.
// Currently, it is used to set a 'readAt' date but we could add addional bulk related operations if needed in the future
router.post("/", async (req, res, next) => {
  try {
    if (!req.user) {
      return res.sendStatus(401);
    }
    const { messageIds } = req.body;

    const updatedResults = await Message.update(
      {
        readAt: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      { where: { id: messageIds } }
    );
    res.json({ updatedResults });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
