const djs = require("discord.js");
const bot = new djs.Client();
const fs = require("fs");
const cmds = fs.readdirSync("./cmds");
bot.on("ready", () => {
  console.log("Ready!");
});

bot.on("message", message => {
  
  let prefix = "!";
  let cmd = message.content.split(" ")[0];
  cmds.forEach(c => {
    if(cmd == prefix + c.split(".")[0]) {
 
      require("./cmds/" + c).run(bot,message);
    }
  })
  
})
bot.login("token");