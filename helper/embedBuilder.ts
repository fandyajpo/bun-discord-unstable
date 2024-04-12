import { type APIEmbed, type EmbedData, EmbedBuilder } from "discord.js";

export const embedBuilder = (
  data: APIEmbed | EmbedData | undefined
): EmbedBuilder => new EmbedBuilder(data);
