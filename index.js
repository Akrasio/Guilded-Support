require('dotenv').config()
const Guilded = require("guilded.js");
const client = new Guilded.Client({ token: process.env.TOKEN });
const { EmbedBuilder } = require("./utils/consts.js")
const { Emoji } = require("./utils/consts.js")
const EmojiGG = new Emoji()
client.on("ready", () =>{
    console.log(`Bot is successfully logged in`)
})
client.on("messageCreated", async(message) => {
    if(!message.content.startsWith(process.env.PREFIX)) return;
    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();
    if (!cmd) return;
    const member = await client.members.fetch(message.serverId, message.createdById);
    if (member.user.type === "bot") return;
    if (cmd === "tag"){
	switch (args[0]?.toLowerCase()){
		case "emoji":
		const embeds1 = new EmbedBuilder().setImage("https://cdn.discordapp.com/attachments/523617954063974420/1046260041306624010/ezgif-3-a1ab75b057.gif");
		message.reply({content:`Q: How to Upload Custom Emojis on guilded?`,embeds: [embeds1]})
		break;
		case "packs":
		const embeds2 = new EmbedBuilder().setImage("https://cdn.discordapp.com/attachments/523617954063974420/1046264626456834158/EmojiPackGuilded.gif");
		message.reply({content:`Q: How to Upload Custom Packs to a guild?`,embeds: [embeds2]})
		break;
		case "limit":
		const embeds3 = new EmbedBuilder().setDescription("As of the moment, there does not seem to be a limit of how many emojis your server could have! However, there is a set limit for emojis uploaded in a pack (50).");
		message.reply({content:`Q: What is the limit to the number of custom emojis on a guild?`,embeds: [embeds3]})
		break;
		case "discord":
		const embeds4 = new EmbedBuilder().setDescription("Here is our discord server invite: [discord.gg/emojis](https://discord.com/invite/emojis)");
		message.reply({content:`Q: How to join the discord server?`,embeds: [embeds4]})
		break;
		case "site":
		const embeds5 = new EmbedBuilder().setDescription("You can always view other available emojis by creators or become an emoji creator by submitting your emojis on [emoji.gg](https://emoji.gg)!\nPlease note that if you log in you will be added to our Discord server as well!");
		message.reply({content:`Q: How to upload emojis to share with others?`,embeds: [embeds5]})
		break;
                default:
                message.reply("List of Available tags: `emoji`, `packs`, `limit`, `discord`, `site`");
		break;
	}
    }
    if (message.content === "e!status") {
	await EmojiGG.stats().then(res =>{
	let embed = new EmbedBuilder()
		.setTitle("EmojiGG Stats")
		.addField("Total Emojis", `${res.emoji}`,true)
		.addField("Total Packs", `${res.packs}`,true)
		.addField("Total Kaomoji", `${res.kaomoji}`,true)
		.addField("Total Users", `${res.users}`,true)
		.addField("Total Downloads", `${res.downloads}`,true)
		.addField("Pending Emojis", `${res.pending_approvals}`,true)
		.addField("Pending Packs", `${res.pending_pack_approvals}`,true)
		.setImage("https://emoji.gg/assets/img/logo.png?v=3")
		.setURL("https://emoji.gg")
		.setColor("YELLOW")
        return message.reply({content: " ", embeds: [embed], isSilent: true});
	    	})
    }
});

client.login();

