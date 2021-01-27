const WA = require('whatsapp-web.js');

exports.run = async (client, message, args) => {

  try {
    client.sendMessage(message.from, 'mau kick sp?');
  } catch (error) {
    return message.reply(`Something went wrong: ${error.message}`);
    // Restart the bot as usual. 
  }
}

exports.conf = {
  aliases: [],
  cooldown: 5
}

exports.help = {
  name: 'kick',
  description: 'Menampilkan pengetesan jaringan bot Kato.',
  usage: 'ping',
  example: 'ping'
}