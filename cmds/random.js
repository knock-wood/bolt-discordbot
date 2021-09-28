module.exports.run = (bot,message) => {
  let num = message.content.split(" ")[1];
  num = Number.parseInt(num);
  if(num == num) {
    message.channel.send(Math.floor(Math.random() * num) + " :duck:")
  }
}