import { model, models, Schema } from "mongoose";

interface I_User extends Document {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  avatar_url: string;
  role: "USER" | "ADMIN";
  bio: string;
  company: string;
  twitter_url: string;
  instagram_url: string;
  stackoverflow_url: string;
  website_url: string;
  created_at: Date;
  modified_at: Date;
}

const userSchema = new Schema<I_User>({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, min: 6 },
  avatar_url: { type: String },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  bio: { type: String },
  company: { type: String },
  twitter_url: { type: String },
  instagram_url: { type: String },
  stackoverflow_url: { type: String },
  website_url: { type: String },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
});

const User = models.User || model("User", userSchema);

export default User;
