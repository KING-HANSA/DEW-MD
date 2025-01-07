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
	sessionName: process.env.SESSION_ID || 'Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0VNbVBuOWlIazYvN0d5RCtqYy9VWjgrRGhYc1hWajFESXZySjg0dlpWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG9LU1M2aDFRWCttUlhvbk95VFVUNzFUQjRMR3RobW5lSHlmMkZ0RjJnOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQVVsaGJFeGxBcHBWY0FOQ1hqcytCTVNLTG5XSGIxZ1lCL0pPUmlVVTBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5bk91aXBpYWxKVkFJcWwzRjBqZTRzblJJV3dCMWREWFdzSVB0SHZIWmdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOdTNjQjk1UGNVd0RGbjZJWlFNcDFjMnprYldjRE92Z1BYT2ZBMXZCRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFkZUl6Q0N6S0hVQVdJWTl5QkJnei8xSEdMSkxQWmQ4K1JmU3NweE4xQlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1BUHhkQ1BKL1VCNjVqYVA1RFRuaHg3NDZSeHRnZnNFaTFDWk5RaUxsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0prelRSclk1MkZieDhYSktuUGl4UlhRaDdCcHBwRk1rK2tsOEdMS3BGbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR5c0l0U0hURGhTQ0s4d2l5UmtOK1BBZFU5QWw2OEJXSjMrVERmTXo4dzlMOWZ1cFRyaUQrOUUrVUZMd1RCRmpTTjhoTnUrL1d4TlBrMEw3OThURWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJkUVV1OER6THdqazdsTUhnN3Y1NXh1eTNwRUVuallDbm8vdXhqUk9SVmMwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIzV1pFWUFKUiIsIm1lIjp7ImlkIjoiOTQ3Nzg3MjEyMzk6MTBAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNDgxNjM3OTc1NjU1ODI6MTBAbGlkIiwibmFtZSI6IktJTkcgSEFOU0EifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lhVWo2TUNFTzdjOUxzR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkVmU2xxVDlyTnB6dHlwWGhsdDNWVFJ1OTBySUY4cCs0MDJLVFRVSWJjVFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijc2MkVzNWRXcDYvbEZHOWdMUGRFT0xoZFlVTFpqZkpIelZFRW53a1U5TktnKzRuNTJEZ29FMmdmK09peVFKdWtyM1FIeWY5a09zaEN5UGluUm1aaUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtUGJWMWR6em1BMWdidC9ja0JyK3NVMVAyQU1KNCtmM25Xc2RBV2VhMnlJRHhubllHUDZOZUZsUnhvWG0ySmxJc3FPcGxBNG5xL3lzNjFVcUdFZzRpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc4NzIxMjM5OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJIMHBhay9hemFjN2NxVjRaYmQxVTBidmRLeUJmS2Z1Tk5pazAxQ0czRTEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjI1NzEzNiwibGFzdFByb3BIYXNoIjoiVHJEQzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZDSSJ9',
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
