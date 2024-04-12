import type { GuildMember } from "discord.js";

export const handleBlacklist = (user: GuildMember["id"]): boolean => {
  const blacklistUsers = [""];
  return blacklistUsers.includes(user);
};
