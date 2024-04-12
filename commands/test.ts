import type { Message } from "discord.js";
import type { Command } from "@type";
import { getFirestore } from "firebase-admin/firestore";
import { handleError } from "@helper/error";
export default {
  name: "test",
  description: "test!",
  cooldown: 5,
  permission: ["SendMessages"],
  async execute(message: Message) {
    try {
      const db = getFirestore();
      const store = db.collection("GARBAGE").doc("TEST");

      await store.set(
        {
          name: "test",
        },
        { merge: true }
      );

      return message.reply("message are set");
    } catch (error) {
      return handleError(error, message);
    }
  },
} satisfies Command;
