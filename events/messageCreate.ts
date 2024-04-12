import { Client, Message, Events } from "discord.js";
import { handleCooldown } from "@helper/cooldown";
import { handlePermission } from "@helper/permission";
import { handleBlacklist } from "@helper/blacklist";

export const name = Events.MessageCreate;
export const once = false;
export async function execute(message: Message, client: Client) {
  if (handleBlacklist(message.author.id)) return;

  if (!message.content.startsWith("!") || message.author.bot) return;
  const args = message.content.slice(1).trim().split(/ +/);
  const commandName: string = args.shift()?.toLowerCase() ?? "";

  if (!commandName) return;

  if (handlePermission(client, message, commandName)) return;

  if (handleCooldown(client, message, commandName)) return;

  const command = client.commands.get(commandName);

  if (!command) return;

  try {
    command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    await message.reply(
      "Ada kesalahan saat mencoba menjalankan perintah tersebut!"
    );
  }
}
