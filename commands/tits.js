const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
  if (!message.guild.member(client.user).hasPermission('ATTACH_FILES')) return message.reply('Sorry, i dont have the perms to do this cmd i need ATTACH_FILES. :x:')
  
  const embed2 = new Discord.RichEmbed()
    .setTitle("I Cant Do That")
    .setDescription("This command can only be used in a NSFW friendly channel")
    .setImage("https://imgur.com/EmPu1KL.gif")
 
    if (!message.channel.nsfw) return message.channel.send(embed2);
 
  
  const rp = require('request-promise-native')
    return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
        return rp.get({
            url:'http://media.oboobs.ru/' + res[0].preview,
            encoding: null
        });
      }).then(function(res)   {
        if (message.channel.nsfw) return message.channel.send({ files: [{ attachment: res, name: 'tits.png' }] }).catch(console.error);
    });
 }
   
 