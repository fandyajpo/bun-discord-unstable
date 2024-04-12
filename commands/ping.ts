import type { Message } from "discord.js";
import type { Command } from "@type";

export default {
  name: "ping",
  description: "Ping!",
  cooldown: 5,
  permission: ["Administrator"],
  async execute(message: Message) {
    await message.reply("Pong!");
  },
} satisfies Command;
