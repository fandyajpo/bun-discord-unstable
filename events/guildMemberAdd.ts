import { Client, Events, type TextChannel } from "discord.js";

export const name = Events.GuildMemberAdd;
export const once = false;
export async function execute(client: Client) {
  const channel = client.channels.cache.get(
    "1055060226858029076"
  ) as TextChannel;
  return channel.send({ content: "csacas" });
}
