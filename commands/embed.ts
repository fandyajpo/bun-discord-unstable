import { type Message, EmbedBuilder } from "discord.js";
import type { Command } from "@type";
import { embedBuilder } from "@helper/embedBuilder";
export default {
  name: "embed",
  description: "Ping!",
  cooldown: 5,
  permission: ["Administrator"],
  async execute(message: Message) {
    const exampleEmbed = embedBuilder({ title: "Some title" });

    message.channel.send({ embeds: [exampleEmbed] });
  },
} satisfies Command;
