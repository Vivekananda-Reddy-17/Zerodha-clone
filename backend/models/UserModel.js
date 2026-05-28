const {model} = require("mongoose");

const {UserSchema} = require("../schemas/UserSchema");

const bcrypt = require("bcryptjs");

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = model("user", UserSchema);