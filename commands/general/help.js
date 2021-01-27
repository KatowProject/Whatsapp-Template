const WA = require('whatsapp-web.js');

exports.run = (client, message, args) => {

    try {

        if(!args[0]) {

            let module = Array.from(client.helps);
            let list = module.map(a => {
                return `*${a[1].name}*\n${a[1].cmds.map(x => `${x}`).join(' | ')}`
            });
            client.sendMessage(message.from, `List Perintah:\n${list.join('\n')}`);

        } else {

            let cmd = args[0];
            if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
                let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
                let name = command.help.name;
                let desc = command.help.description;
                let cooldown = command.conf.cooldown;
                let aliases = command.conf.aliases.join(', ') ? command.conf.aliases.join(', ') : 'No aliases provided.';
                let usage = 'k!' + command.help.usage !== undefined ? command.help.usage : "No usage provided.";
                let example = 'k!' + command.help.example !== undefined ? command.help.example : "No example provided."

                return client.sendMessage(message.from, `*Perintah* \`\`\`${name}\`\`\`\n\n*Deskripsi*: ${desc}\n\n*Penggunaan*: ${usage}\n\n*Aliases*: ${aliases}\n\n*Cooldown*: ${cooldown}\n\n*Contoh*: ${example}`);
            }

            if (!client.commands.has(cmd) || !client.commands.get(client.aliases.get(cmd))) {
                message.reply(`Tidak ditemukan perintah ${args[0]}!`);
            }
        }
    } catch (err) {
        message.reply(`Something went wrong:\n${err.message}`);
    }

};

exports.conf = {
    aliases: [],
    cooldown: 5
}

exports.help = {
    name: 'help',
    description: 'list perintah',
    usage: 'help / k!help [nama perintah]',
    example: 'help / k!help help'
}

