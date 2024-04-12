import type { Guild, Message } from "discord.js";
import type { Command } from "@type";

export default {
  name: "serverinfo",
  description: "Menampilkan informasi langka tentang server.",
  cooldown: 60,
  async execute(message: Message) {
    const server: Guild | null = message.guild;
    const rolesCount = server?.roles.cache.size;
    const emojisCount = server?.emojis.cache.size;
    const serverCreateDate = server?.createdAt.toDateString();
    const verificationLevel = server?.verificationLevel;

    let rareInfo = `**Informasi Langka Server ${server?.name}**\n`;
    rareInfo += `📅 Tanggal Dibuat: ${serverCreateDate}\n`;
    rareInfo += `🔒 Tingkat Verifikasi: ${verificationLevel}\n`;
    rareInfo += `🎭 Jumlah Roles: ${rolesCount}\n`;
    rareInfo += `😀 Jumlah Emojis: ${emojisCount}\n`;

    // Menambahkan informasi langka lainnya sesuai kebutuhan
    // Contoh: Jumlah boost, fitur spesifik server, dll.

    await message.reply(rareInfo);
  },
} satisfies Command;
