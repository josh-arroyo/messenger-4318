const Sequelize = require("sequelize");
const db = require("../db");

const Participant = db.define("participant", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  conversationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Participant;
