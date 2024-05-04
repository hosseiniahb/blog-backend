import { model, models, Schema } from "mongoose";

interface I_Post extends Document {
  _id: string;
  title: string;
  content: string;
  post_cover: string;
  published: boolean;
  user_id: Schema.Types.ObjectId;
  //   categories: Schema.Types.ObjectId;
  // tags: Array<string>,
  created_at: Date;
  modified_at: Date;
}

const postSchema = new Schema<I_Post>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  post_cover: { type: String, required: true },
  published: { type: Boolean, default: true },
  user_id: { type: Schema.Types.ObjectId, ref: "User" },
  //   categories: { type: Schema.Types.ObjectId, ref : "Category" },
  //   tags: { type: Array<String> },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
});

const Post = models.Post || model("Post", postSchema);

export default Post;
