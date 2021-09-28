const { MessageEmbed } = require("discord.js");
const os = require("os");
module.exports.run = (client,message) => {
const embed = new MessageEmbed()
      .setTitle('Lighting Bolt')
      .setColor("BLUE")
       .setDescription(`Используется:\nNode ${process.version}\ndiscord.js v${require('discord.js').version}\n**ОЗУ:** ${(process.memoryUsage().rss / 1024 ** 2).toFixed(1)}МБ/${formatBytes(os.totalmem(), 1)}\n**ОС:** ${process.platform}, ${os.version()}\n**ЦП:** ${require("os").cpus()[0] ? require("os").cpus()[0].model : "Не определен"}\n**Пинг:** ${client.ws.ping}мс.\n**Аптайм:** ${Math.round(client.uptime / 60000)} минут\n**Разработчик:** ${client.users.cache.get('724536621868908635').tag}`);
     message.channel.send(embed);
    function formatBytes(bytes, decimals) {
     if (bytes === 0) return '0 Bytes'
      let k = 1000,
          dm = decimals + 1 || 3,
          sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          i = Math.floor(Math.log(bytes) / Math.log(k))
     return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}
}