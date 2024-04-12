import { Client, Message } from "discord.js";
import type { Command } from "@type";
import { handleError } from "@helper/error";

export default {
  name: "emit",
  description: "Mengambil screenshot dari halaman web.",
  cooldown: 10,
  async execute(message: Message, args: string[], client: Client) {
    if (args.length === 0) return message.reply("Provide the events");

    const url = args[0];

    try {
      client.emit(url);
    } catch (error) {
      return handleError(error, message);
    }
  },
} satisfies Command;
