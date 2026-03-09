import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.model.js";

export const inngest = new Inngest({ id: "HireStack" });

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async (event) => {
    await connectDB();
    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;

    const newUser = {
      clerkID: id,
      email: email_addresses[0]?.email_address,
      userName: `${first_name}_${last_name}`,
      profileIMG: image_url,
    };
    await User.create(newUser);
  },
);

const DeleteUser = inngest.createFunction(
  { id: "DeleteUser" },
  { event: "clerk/user.deleted" },
  async (event) => {
    await connectDB();
    const { id } = event.data;

    await User.deleteOne({ clerkID: id });
  },
);

export const functions = [syncUser, DeleteUser];
