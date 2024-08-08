const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["INFINITE EDITS"];
global.OwnerNumber = ["2348150351856"];
global.ownertag = ["2348150351856"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"QDE+kbPZ+Td27Rb7KNXgjQ83/5Gf9881U18t0cior0I="},"public":{"type":"Buffer","data":"ONfm/oTiXm143x9mMd/fqeHZ5tqO/t2GLPOZiyej2SI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"YMcbSIMik8ZqsngyK2TZPX896OLdAZ1yE2cAANefZXg="},"public":{"type":"Buffer","data":"zUlVZHRN4UYRicyCzlTf5HZTXGWMpsYEED1SAIA3yDY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"qJqsFhKt/Q5jngpo9l03+dvGQp/Cab6VeKKOV3gFu3c="},"public":{"type":"Buffer","data":"/wGuOoJVeTK+ZlnsMqjKIsUKsZoCD/NZoTLeYG8Bz18="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"8IxTk3nlNmHQGMnNajVNM1TcA5Jk039NMwRHdyGJKU4="},"public":{"type":"Buffer","data":"Isfz7duPwwdw77dbsYBmrUF/B3de0TAk/7rYiCxeXnM="}},"signature":{"type":"Buffer","data":"ev1KeldDgXMHIflPVkKCgLUOvmQTsEf3VpMTvCpVG8p4opw6vAxlEoWJ0eA1EqfGtcN60gsvy5ow5EpEjrC+AQ=="},"keyId":1},"registrationId":149,"advSecretKey":"AmZNuvgYdDDykJxK31DbaeYILSPF5HJk2AY4psSbCAQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"i3gswokmRPKQ8qMpFmbl6Q","phoneId":"f22f64dc-6ebd-43a2-a2fa-8b19bae37759","identityId":{"type":"Buffer","data":"cIHLSJ5P8LI5X8qw4whoHTIJP1M="},"registered":true,"backupToken":{"type":"Buffer","data":"FLGKHo4980dQN6kBV3tT07gcVU0="},"registration":{},"pairingCode":"SFFFL5K1","me":{"id":"2348150351856:17@s.whatsapp.net"},"account":{"details":"CPG7vMYDENnp1LUGGAIgACgA","accountSignatureKey":"PtHGMQLGWC8e903hopGn4SSZbKwm1YC9PHac8LaeoV4=","accountSignature":"sFnpmyliqOJqwNXgo8CEYSjG88qkCmA71FmlMxue72IxXn26558QCOkWWKcEqWaNyAIQJVZoeCV+uNzh/SuCAA==","deviceSignature":"saxSsQUZKG+rFJLhua2YPOrfzT/kj0ngPZDIAMwRGiq7+dvFFSuSwNPHwz4HccriKB4HZbueYEzIwGYgfzYjAQ=="},"signalIdentities":[{"identifier":{"name":"2348150351856:17@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BT7RxjECxlgvHvdN4aKRp+EkmWysJtWAvTx2nPC2nqFe"}}],"platform":"android","lastAccountSyncTimestamp":1723151590,"myAppStateKeyId":"AAAAANuI"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
