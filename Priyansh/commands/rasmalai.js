//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "rasmalai",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("rasmalai") ||
     react.includes("Rashmalai") || react.includes("Rusmalai") || react.includes("RasmALai") ||
react.includes("rashmalai") ||
react.includes("RasMalai")) {
		var msg = {
				body: `★━━━━━━━━━━━━━★   𝐊𝐡𝐚 𝐥𝐨 𝐦𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 🙈★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + `/noprefix/rasmalai.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
