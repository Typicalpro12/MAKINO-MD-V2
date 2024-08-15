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
global.OwnerNumber = ["2347026537089"];
global.ownertag = ["2347026537089"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";q
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"gPIZOOyVNb269unQk6yk57Zt+nQbiKewNx94dTsPkmY="},"public":{"type":"Buffer","data":"0/VtLSxTGa4lpa6NkaZRj1s5glXVhqe3ROrYZJGuhDA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"WEvdxIYfV55+DuzxHhIeplyV/yHBbxhPvG/cNGAR4lg="},"public":{"type":"Buffer","data":"KJ/RI6ejzqymJk9+FVf8HLOZvadVcK6Hmal+gI9JI2Y="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wJBgWiMRaNQ4VpcDAzA3pLYvEAMPLeXCYjOaoT9FA0A="},"public":{"type":"Buffer","data":"uergrch5+mATYqgQoyhxUnk+3PzZfXZsmgWoxTZ0vHs="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SDGtO2HxJMr4EtpAmx6TuKXkXdYLtuDZitFEtE7GokE="},"public":{"type":"Buffer","data":"9dn4ymt6Jn9PB2pBrND5ADn8VKD3Fm3o7GPDoBHa0w8="}},"signature":{"type":"Buffer","data":"y2Omk0L+SQKRhep2TMpRRMPGH+BJP0I9mq/n0gle2dxnFPXufmnudghBHLSRPFnXn51Q5TGSrVZtQPYpfiw7iQ=="},"keyId":1},"registrationId":179,"advSecretKey":"x9Tvih6Ueg4gxaD4oOhMl0Llw+fQatYOlTC6X9ZINiE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"X6YUqJIWShm4R1Qlt1k28Q","phoneId":"47519cdb-3c85-497b-b295-f9c19ad2804f","identityId":{"type":"Buffer","data":"jEveyi7E2y3anDyps11v7BjUq7A="},"registered":true,"backupToken":{"type":"Buffer","data":"74HgJUmBlOXJlcwqdSONayaoMsg="},"registration":{},"pairingCode":"N9WDRBKD","me":{"id":"2347026537089:12@s.whatsapp.net","name":"The one chosen by the sparks of black"},"account":{"details":"CNLr+ZEDEPLe+bUGGAEgACgA","accountSignatureKey":"G5HO/8XzXPjP8YFi2T+Cc4768KXjdcQECebZflbMEA0=","accountSignature":"VqlpFZYfKob8T+U18217MFlbbH6A8aXd4vKOIudGdf1uD3Cp1CyOzeh31lJUHPU9fbTMtMYKfDmzTnEwkNIQAA==","deviceSignature":"jbuiQZ2Of3qumQ77T+wU2QSJ3xyb+68/nVD8cbblfUDhXvYksCNl5aXE1yQ7PRfqISZwX30w4HHVthnJ2SmkiA=="},"signalIdentities":[{"identifier":{"name":"2347026537089:12@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BRuRzv/F81z4z/GBYtk/gnOO+vCl43XEBAnm2X5WzBAN"}}],"platform":"smba","lastAccountSyncTimestamp":1723756417,"myAppStateKeyId":"AAAAAPPP"}`
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
