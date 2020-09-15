const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, genSaltSync, hashSync } = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "created_at" } }
);

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
};

UserSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model("user", UserSchema);
