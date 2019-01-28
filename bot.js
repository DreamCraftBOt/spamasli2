const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("505601530078953472")
setInterval(function() {
channel.send(`hamodiii ybiiiiiiiiiiiii creeeeeeeeeeeeeeeddddddddddddddddiiiiiiiiiiiiiiiiiiiiiiiiiiittttttttttttttttttttttttttttttttttttttttttttttt  pppppppppppppppppppppppppppppplllllllllllllllllllllllllllzzzzzzzzzzzzzzzzzzzzzzzz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
