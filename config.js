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
	sessionName: process.env.SESSION_ID || 'Secktor;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUgzOFhiWis1dUNDRnQwbGFoM2RRY2Z4WjBrdVFLTGVXVU03THF1QUtsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFVSd2xOZmYwc3FNZFFuRVZDWHNDVzJUZzBNYURCcjI3K0JKZFl3aHdUOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrT2NjdzdIZHVON2hYM0hYM2poTkpHcVlzMitOVndUd21DbnRMTHVxSzM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqaVMrb1N3UXZGRlFPbk1DVUtCb00rZzBJakpXL3pSeERxT3VMaU5yT3k0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PcGRxOTNRV0hvc1N1TXhESFBqQUwxU1cydWVxWms3K0k5djJnZjEvMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhBbWE4aTVYMTRWQUJlOFk3U3VjSnNjMXVHMnhqL2VDcWFaOFN6UC95aXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9KOUZLN3NVSFBTZlV1b2xrRkp4U2xnU0pudnd0Q2hSOUpZTXJ1TXMyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlRlQ2h3WjU4c2FVTFc3ODB1bS8zUDVabXNHdldlakNHNnRsckZRWGJocz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Impobk9vVWQ2ellNby9NYTdGZ3ByQkg1TEtjdTRRRDRlZEtablRVRVdjb0ZOempobkhqQUxlTTZaK0FXMkF6Rmlsa3hyRXduVmJOLzBaZmhDbXNXT0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6IlBicVM1N2Z3L3k1Yko5UXVIU2xtVFZVaXR3QTErenRmTEFHUkpiU0hmYUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjJTMzc3WlpXIiwibWUiOnsiaWQiOiI5NDc3ODcyMTIzOToxNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI0ODE2Mzc5NzU2NTU4MjoxNEBsaWQiLCJuYW1lIjoiS0lORyBIQU5TQSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSWlVajZNQ0VNSzIrcnNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRWZTbHFUOXJOcHp0eXBYaGx0M1ZUUnU5MHJJRjhwKzQwMktUVFVJYmNUVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWm5vN01wd1RtWDlhaHp0bE9STEtlNmpGbXFSUWFPSU1GYXNVZ0E5RzNaOEZKWUJ4OWJCYlJ3K3YzbG40QWxJbURLY3M1dFdYMFlVSkRLZndEaU8wQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjdvSnVMMXA2Q3JzYmw5YU0wL0lFaW1RNmovRDV6V0lOVzNsNGFua1JTakpCOGVQQmEwNkpZUzBpbnV0V1gzUCtKVUpSK2tuTlNBcmMvVjVyL2IrV0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Nzg3MjEyMzk6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkgwcGFrL2F6YWM3Y3FWNFpiZDFVMGJ2ZEt5QmZLZnVOTmlrMDFDRzNFMSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MzUwNTMzLCJsYXN0UHJvcEhhc2giOiJUckRDOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXlXIn0=',
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
