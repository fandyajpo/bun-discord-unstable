import { Client } from "discord.js";
import { readdir } from "fs/promises";
import path from "path";

export async function loadEvents(client: Client) {
  const eventsPath = path.join(__dirname, "../events");
  const eventFiles = await readdir(eventsPath);

  for (const file of eventFiles) {
    if (!file.endsWith(".ts")) continue;
    const filePath = path.join(eventsPath, file);
    const event = await import(filePath);
    console.log(`[EVENTS] ${event.name}`);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    }
  }
}
