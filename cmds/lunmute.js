module.exports.run = (bot,message) => {
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("У вас недостаточно прав для этой команды");
  
  
  let args = message.content.split(" ");
  let member = message.guild.members.cache.get(args[1]) || message.guild.members.cache.get(message.mentions.users.first().id);
  if(!member) {
    return message.reply("Участник не найден");
  }
  
  if(member.hasPermission("ADMINISTRATOR")){
    return message.reply("Данная комманда не работает на администраторах");
  }
  
  if(!message.channel.permissionOverwrites.get(member.id)) {
    return message.reply("Участник не замьючен");
  }
  let ok = true;
message.channel.permissionOverwrites.get(member.id).delete();
  
    message.reply("<@" + member + ">" + " был успешно размьючен " + "<@" + message.member + ">" + " в канале " + "<#" + message.channel + ">" + " по причине: " + message.content.split(' ').slice(2).join(' '));

  
  
}