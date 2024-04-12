import { loadFirebase } from "@firebase/server";
import type { Command } from "@type";
import { loadCommands } from "@utils/loadCommands";
import { loadEvents } from "@utils/loadEvents";
import { Client, Collection, GatewayIntentBits } from "discord.js";

export const run = (token: string | undefined) => {
  try {
    const client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });
    client.commands = new Collection<string, Command>();
    client.login(token);
    Promise.all([loadEvents(client), loadCommands(client)]);
    loadFirebase();
  } catch (error) {
    throw error;
  }
};
