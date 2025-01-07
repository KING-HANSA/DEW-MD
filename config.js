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
	sessionName: process.env.SESSION_ID || 'Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pCUlRiSUQyZUdaeXNVdUxpa1EyOHl5bUhVZU1BMXAyNGQyam8wTXYwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1JaMXMyODVydVM1S2k1ZGdzQ29qN2IxYnJ1Z3dhdXR1MXorais3bzZEMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRzM0aUxDVjViUVE1OTVmMSs4YXhISDhjMEN0RlJKYWNxOUJBS3RmSkh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRS9TQ1lGTHpMWDVlZk80bXdvcGdZODAwek1jNjVaU21MWm5yWXk1Mm5JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldKbk0yam9CMy82MDlENW9PeW96R0VUQmFiZHVGbEZOek1UM2FPOWNQbFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldPcmIrN0t4VkJqU1NmRlgwaFIrQWRvUVhuMHRXTWg0eXBzSjlNUTBkbmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUl5YkhHenIxVzN1L0VEYUhLemh6TGQzT0xRNUZ4UlBmUS9kMkVaS0IzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmZvMUFUbElNOXd2NHNMdFc1N1BNUXd1STIvZURkM3dMWC9CUDM3VHNYOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF3WnUxd0FvN3QwamlhSk1QbFZvdTMwVVJqOTZ1V0ZrWmZiTmpWdHJTd2YvaThib0VVY2dFMW16UlZ6QnczNzNiY0J5UkxjS2oycm5wRFV3QllxampnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6InNNOEQ3K3hGUDhibEZMQ2ZtUjRSTUZXNVdTcmZWQ3hZeHRjQ1ZFbVpUNVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Nzg3MjEyMzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjI4MzNGODY5NUNBODIxNDYwNzM1QzI0MkREQkJFOTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjE4Mzg2NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Nzg3MjEyMzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjVBM0Q2QTU2QUM3NTlDN0E4RjlGRDhDRUQ0Nzk1MEQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNjE4Mzg2Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiTFFWNjlXVE0iLCJtZSI6eyJpZCI6Ijk0Nzc4NzIxMjM5OjhAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNDgxNjM3OTc1NjU1ODI6OEBsaWQiLCJuYW1lIjoiS0lORyBIQU5TQSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWFVajZNQ0VMT2c4THNHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRWZTbHFUOXJOcHp0eXBYaGx0M1ZUUnU5MHJJRjhwKzQwMktUVFVJYmNUVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM0p0NzkzT3lhSWdZdHpBd1YydkdJZWtCaGZpZFMxZUdyZlE3aVRHcVM4QXkzZkJzdnFKeVZSdUN6ZG15Y1dvWkFGVzgrVW5VY0RJZlpTcjlqT2xBQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InFXeXFNRW9ZMnE2MWtLOFVNOElyMGlSU0FFQ2llMHVXNnhJM1E1K3Z6VzIyMzRuTktaWXE1VmgzRDR3T2FYYWZCNnMwYThtR2poOWRnaGJsRXVuaWd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Nzg3MjEyMzk6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSSDBwYWsvYXphYzdjcVY0WmJkMVUwYnZkS3lCZktmdU5OaWswMUNHM0UxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYxODM4NjMsImxhc3RQcm9wSGFzaCI6IlRyREM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGQ0gifQ==',
	author: (process.env.PACK_INFO?.split(';') || [])[0] || 'Hansa Dewmina',
	auto_read_status: process.env.AUTO_READ_STATUS || false,
	packname: (process.env.PACK_INFO?.split(';') || [])[1] || 'Dew-MD',
	autoreaction: process.env.AUTO_REACTION || true,
	antibadword: process.env.ANTI_BAD_WORD || 'nobadwordsuntilyouputabadwordherelol',
	alwaysonline: process.env.ALWAYS_ONLINE || false,
	antifake: process.env.FAKE_COUNTRY_CODE || '1000',
	readmessage: process.env.READ_MESSAGE || false,
	auto_status_saver: process.env.AUTO_STATUS_SAVER || false,
	HANDLERS: process.env.PREFIX || ['.'],
	warncount: process.env.WARN_COUNT || 3,
	disablepm: process.env.DISABLE_PM || false,
	antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
	antilinkaction: process.env.ANTILINK_ACTION || 'remove',
	BRANCH: 'main',
	ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
	autobio: process.env.AUTO_BIO || false,
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
