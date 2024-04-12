import type { Client, Message } from "discord.js";
import type { Command } from "@type";
export const handlePermission = (
  client: Client,
  message: Message,
  commandName: string
) => {
  const command: Command | undefined = client.commands.get(commandName);

  if (!command) return false;

  const hasPermission: boolean | undefined = command?.permission
    ? message?.member?.permissions?.has?.(command.permission)
    : false;

  if (command.permission && !hasPermission) {
    message.reply("Anda tidak memiliki izin untuk menggunakan perintah ini.");
    return true;
  }
};
