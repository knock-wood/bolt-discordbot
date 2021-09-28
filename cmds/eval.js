module.exports.run = (bot,message) => {
  if(message.author.id != "724536621868908635") return;
  let code = message.content.split(" ").slice(1).join(" ");
  try{
  let output = eval(code);
  if(typeof output == "object") {
output = require("util").inspect(output);
message.reply("```\n" + output + "\n```");
  }
  }catch(e) {
   message.reply("```\n" + e.name + ":" + e.message + "\n```");
  }
  
}