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
	sessionName: process.env.SESSION_ID || 'Secktor;;;SEFqVDN1WG4=',
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
