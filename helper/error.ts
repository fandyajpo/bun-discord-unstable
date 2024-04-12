import { FirebaseError } from "firebase/app";
import { DiscordAPIError, type Message } from "discord.js";

export const handleError = (error: unknown, message: Message) => {
  console.error(error);
  switch (true) {
    case error instanceof Error:
      message.reply(error.message);
      break;
    case error instanceof Error:
      message.reply(error.message);
      break;
    case error instanceof DiscordAPIError:
      message.reply(error.message);
      break;
    case error instanceof ErrorEvent:
      message.reply(error.message);
      break;
    case error instanceof FirebaseError:
      message.reply(error.message);
      break;
    default:
      message.reply("Something went wrong");
  }
};
