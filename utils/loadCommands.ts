import { Client, Collection } from "discord.js";
import { readdir } from "fs/promises";
import path from "path";

const cooldowns = new Map();

export async function loadCommands(client: Client) {
  const commandsPath = path.join(__dirname, "../commands");
  const commandFiles = await readdir(commandsPath);

  for (const file of commandFiles) {
    if (!file.endsWith(".ts")) continue;
    const filePath = path.join(commandsPath, file);
    const command = await import(filePath);
    const cmd = command.default;
    console.log(`[COMMANDS] ${cmd.name}`);
    client.commands.set(cmd.name, cmd);

    if (cmd.cooldown) {
      cooldowns.set(cmd.name, new Collection());
    }
  }
}
