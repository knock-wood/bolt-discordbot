module.exports.run = (bot,message) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("У вас недостаточно прав для этой команды");
let args = message.content.split(" ");

let member = message.guild.members.cache.get(args[1]) || message.mentions.users.first()
  
  if(!member) {
    return message.reply("Участник не найден");
  }

  
  
  if(!member.bannable) {
    return message.reply("Вы не можете забанить этого участника!");
  }
  message.reply(member.user.tag + " был успешно забанен " + "<@" + message.member + ">" + " по причине: " + message.content.split(' ').slice(2).join(' '));
  
  
  message.guild.members.ban(member, { reason: `${message.author.username}: ${message.content.split(' ').slice(2).join(' ')}` })

  
}