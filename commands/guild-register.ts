import { type Message } from "discord.js";
import { type Command } from "@type";
import { getFirestore } from "firebase-admin/firestore";
import { handleError } from "@helper/error";

export default {
  name: "guildregister",
  description: "test!",
  cooldown: 5,
  permission: ["SendMessages"],
  async execute(message: Message) {
    try {
      const db = getFirestore();

      if (!message.guildId) return message.reply("no guild");

      const guildRegister = db.collection("GARBAGE").doc("TEST");

      const getGuild = await guildRegister.get();

      console.log(getGuild.exists);

      // if (getGuild.exists) {
      //   console.log("Guild document data:", getGuild.data());
      // } else {
      //   console.log("No such guild document!");
      // }

      message.reply("Test");
    } catch (error) {
      return handleError(error, message);
    }
  },
} satisfies Command;
