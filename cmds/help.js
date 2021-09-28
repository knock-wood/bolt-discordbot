module.exports.run = (bot,message) => {
  const ignore = ["eval","help"];
  const fs = require("fs");
  const cmds = fs.readdirSync("./cmds");
  let output = "Lighting Bot commands:\n";
  cmds.forEach(c => {
    let cmd = c.split(".")[0];
    if(!ignore.includes(cmd)){
      output = output + "`" + cmd + "` ";
    }
  });
  message.reply(output);
}

