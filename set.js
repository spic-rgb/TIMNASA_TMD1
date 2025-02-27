const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'nRTaWduYXR1cmVLZXkiOiJvYzgvU21KT0lMSGxzNkdYVzlzd3NZNUxGaExJVXlZb204dUJ5Ti96L2g4PSIsImFjY291bnRTaWduYXR1cmUiOiJmY1Z2YUtkdU1FL2MrR1lTd0RHaVJqMngyQnhqNitSaVB1dFBTc3FOR3kxSmNhNzI5TExha0dzeWdSc2VGZTZDZ1ZEeEtsTDRBOGNRQmR4ZlN2SWZEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWWxaYUJkbWxEMjg2MjRVK0k0TUFPc1NqbmhTS3lhNWhaL0psRHd0MmhsQXZ0M25nbzlhMVkySHE2OFRmWld6cVFOamhLVFc4MzQzc3NGcVhTNUJ4aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3Nzg4NTgyNDY6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUhQUDBwaVRpQ3g1Yk9obDF2Yk1MR09TeFlTeUZNbUtKdkxnY2pmOC80ZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MDU5MTQ2OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLVHkifQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "TIMNASA-TMD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "263778858246",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    TIMNASA_TMD : process.env.AUTO_LIKE_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
