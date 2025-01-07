const fs = require('fs-extra');
if (fs.existsSync('config.env'))
	require('dotenv').config({ path: __dirname + '/config.env' });

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER?.split(',');
global.mongodb =
	process.env.MONGODB_URI ||
	'mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama';
global.port = process.env.PORT || 5000;
global.email = 'sam@secktor.live';
global.github = 'https://github.com/KING-HANSA/DEW-MD';
global.location = 'Sultanpur IN';
global.gurl = 'https://instagram.com/hansa_dewmina_lk'; // add your username
global.sudo = process.env.SUDO || '94701515609';
global.devs = '94701515609';
global.website = 'https://github.com/KING-HANSA/DEW-MD';
global.THUMB_IMAGE =
	process.env.THUMB_IMAGE ||
	'https://i.imgur.com/JL9z4b0.jpeg';

module.exports = {
	botname: process.env.BOT_NAME || 'DEW Bot',
	ownername: process.env.OWNER_NAME || 'Hansa Dewmina',
	OWNER_NUMBER: process.env.OWNER_NUMBER || '94701515609',
	sessionName: process.env.SESSION_ID || 'Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FaSEUwNW1SN2ZmdUswTWFSTWNnK0pOK0NnazFJaG92TnBMdU9PbGNYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjBRcVd4SDBwNFFvRmlOYjhSZmEwbmtSdkd4K1c0ejhYUFhiU0FDakZobz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRzV6eXhQQm4vVlJrbnVGMjFlWVpMMWlIOW00a0wvM1p0QWllUi9CaVZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCSUxUMFVTb1FsRm9kTUJXU1hCdStwRFhCNXgwV3prWFY3YWN5Wnlma2xVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DR3NXOEQ4bFVsVytTQUNyVThOeWczOEl0cEVrNThqNk1zT1U2YWVpMjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVlTjdtZDhmeWswWjVGZTJEWWRlWlNROWg0UW5NVlJCVitkSUVDb0JGQjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUU1TDlmcTIyUUdYR2Q1ZzdkVXFzMWcyQk9ZMFlTcVk2dmh0VVdmU3NXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGtuWjhERWFQaG9uZHpSNEczMWFnQUJtLzIxTStBcFpIaVBIbjZhelNoRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpBUjVhYW5aMkxIcDg2cmZURmp0cFJ4SjdQVWFnK0tJTk1OU2F0YjNGYzJLbTMzenhhd1J4SmdYZVpRcXpkRmtybTduZDlVNGYyV29nVUNvUU51K0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiI4Y3FkM2c5TmFVeU1jSnFWWVJ6MnZxWENJQ1VoWUNYQWN5bzNyclFGa0NzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc4NzIxMjM5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhCOTRFRTczQTVGRUZDMUMzN0EyQzQxMUUyN0FDOTFCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzYyNTY3NjB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc4NzIxMjM5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBRDA2NDA5OTQyNzJERDU3NjY5RTI1NkVBMzY5QUY1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzYyNTY3NjF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijg0SzRDQzE4IiwibWUiOnsiaWQiOiI5NDc3ODcyMTIzOTo5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjQ4MTYzNzk3NTY1NTgyOjlAbGlkIiwibmFtZSI6IktJTkcgSEFOU0EifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lhVWo2TUNFUEhaOUxzR0dBZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVmU2xxVDlyTnB6dHlwWGhsdDNWVFJ1OTBySUY4cCs0MDJLVFRVSWJjVFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNncHVoQmkxZW9LNFU3YU9NQ014OVFveWk0cGdERmlmYVh4NWhQUmhxcWZIMmREVnJTVUIremtWd2U2ZjVHN2NPdjI0OEwxRTQ2bUoxNWcxdXpkNUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCNUpYS3BkWjBvc0tmdkhaaE5hRXlaNGNUeEk5dVFsd0Uwcys1aUE5RDJyTnJqU0t6ODZoaVpQN1VqSDZTQ0t0QmxqSDhmTE1CSU5UVFJCKzFFbG1Cdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc4NzIxMjM5OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkgwcGFrL2F6YWM3Y3FWNFpiZDFVMGJ2ZEt5QmZLZnVOTmlrMDFDRzNFMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MjU2NzU2LCJsYXN0UHJvcEhhc2giOiJUckRDOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRkNIIn0=',
	author: (process.env.PACK_INFO?.split(';') || [])[0] || 'Hansa Dewmina',
	auto_read_status: process.env.AUTO_READ_STATUS || true,
	packname: (process.env.PACK_INFO?.split(';') || [])[1] || 'Dew-MD',
	autoreaction: process.env.AUTO_REACTION || true,
	antibadword: process.env.ANTI_BAD_WORD || 'nobadwordsuntilyouputabadwordherelol',
	alwaysonline: process.env.ALWAYS_ONLINE || true,
	antifake: process.env.FAKE_COUNTRY_CODE || '1000',
	readmessage: process.env.READ_MESSAGE || false,
	auto_status_saver: process.env.AUTO_STATUS_SAVER || true,
	HANDLERS: process.env.PREFIX || ['.'],
	warncount: process.env.WARN_COUNT || 3,
	disablepm: process.env.DISABLE_PM || false,
	antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
	antilinkaction: process.env.ANTILINK_ACTION || 'remove',
	BRANCH: 'main',
	ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '*HI DEW - MD IN NOW ONLINE*',
	autobio: process.env.AUTO_BIO || true,
	OPENAI_API_KEY: process.env.OPENAI_API_KEY || false,
	heroku: process.env.HEROKU || false,
	HEROKU: {
		HEROKU: process.env.HEROKU || false,
		API_KEY: process.env.HEROKU_API_KEY || '',
		APP_NAME: process.env.HEROKU_APP_NAME || '',
	},
	VERSION: process.env.VERSION || 'v.0.0.8',
	LANG: process.env.THEME || 'DEW',
	WORKTYPE: process.env.WORKTYPE || 'public',
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update '${__filename}'`);
	delete require.cache[file];
	require(file);
});
