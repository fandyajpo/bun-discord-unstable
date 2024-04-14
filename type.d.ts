import { Client, Collection, Events, type PermissionsString } from "discord.js";

export interface Command {
  name: string;
  aliases?: string[];
  description: string;
  cooldown?: number;
  execute: (message: Message, args: string[], client: Client) => void;
  permission?: PermissionsString[];
}

export interface EventList {
  once?: boolean;
  name: Events;
  execute: (...args: Message, client: Client) => void;
}

export enum FireCollection {
  GUILD = "GUILD",
}

declare module "discord.js" {
  interface Client {
    commands: Collection<string, Command>;
  }
}
