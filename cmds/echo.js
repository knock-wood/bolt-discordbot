const { MessageEmbed } = require("discord.js");
module.exports.run = (bot,message) => {
message.channel.send(message.content.split(" ").slice(1).join(" "));
  message.delete();
}