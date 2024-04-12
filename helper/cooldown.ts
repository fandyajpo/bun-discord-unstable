import { Client, Message } from "discord.js";
import type { Command } from "@type";

const cooldowns = new Map();

export function handleCooldown(
  client: Client,
  message: Message,
  commandName: string
) {
  if (!cooldowns.has(commandName)) return false;

  const now = Date.now();
  const timestamps = cooldowns.get(commandName);
  const command: Command | undefined = client?.commands?.get?.(commandName);

  const cooldownAmount = (command?.cooldown ?? 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      message.reply(
        `harap tunggu ${timeLeft.toFixed(
          1
        )} detik lagi sebelum menggunakan \`${commandName}\` lagi.`
      );
      return true;
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  return false;
}
