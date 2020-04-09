const Discord = require("discord.js");
const bot = new Discord.Client();
const sql = require("sqlite");
sql.open("../assets/guildsettings.sqlite");

module.exports = (client, message) => {
    if (message.author.bot) return;
   // if (message.channel.type === 'dm') return;
    if (!message.guild.member(client.user).hasPermission('SEND_MESSAGES')) return;
    if (!message.guild.member(client.user).hasPermission('VIEW_CHANNEL')) return;
    if (!message.guild.member(client.user).hasPermission('READ_MESSAGE_HISTORY')) return;

    sql.get(`SELECT * FROM scores WHERE guildId ="${message.guild.id}"`).then(row => {
    if (row.slowmode === "enabled") return;
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
    const description = message.cleanContent
    const descriptionfix = description.substr(0, 600);
    let guild = message.guild;
    let modlog = guild.channels.find(channel => channel.name == row.logschannel);
     if (!modlog) return;
    const embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setThumbnail(message.author.avatarURL)
    .addField("Author ", `${message.author.tag} (ID: ${message.author.id})`, true)
    .addField("Message Content:", `${descriptionfix}`, true)
    .setTimestamp()
    .setFooter("Message delete in " + message.channel.name);
    client.channels.get(modlog.id).send({embed});
  })
}
  

