import { Message } from "discord.js";
import puppeteer from "puppeteer";
import type { Command } from "@type";
import { handleError } from "@helper/error";

export default {
  name: "screenshot",
  description: "Mengambil screenshot dari halaman web.",
  cooldown: 10,
  async execute(message: Message, args: string[]) {
    if (args.length === 0)
      return message.reply("Mohon masukkan URL yang valid.");

    const url = args[0];

    try {
      const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: true,
      });

      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle2" });
      const screenshotBuffer = await page.screenshot({ fullPage: true });

      await message.reply({
        content: "Berikut screenshot dari halaman yang diminta:",
        files: [screenshotBuffer],
      });

      await browser.close();
    } catch (error) {
      return handleError(error, message);
    }
  },
} satisfies Command;
