

const Trex = require('../events');
const {MessageType, MessageOptions, Mimetype, Presence} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../media');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Trex.addrex({pattern: 'alive', fromMe: true,  deleteCommand: false,  desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🙈 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: '⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️ ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/0c88b73ec76e82f0933d7.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. 🍁```\n\n🍁 My name : ❰🍁🔱 T Rex BOT 🔱🍁❱\n\n🍁 Developer: HIRUWA\n\n🍁Thank You For Using ❰🍁🔱  T Rex BOT  🔱🍁❱"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🙈 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️ ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰🍁🔱  T Rex BOT  🔱🍁❱*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: true,  deleteCommand: false,  desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️*\n\n` + 
                '```Installed version :```\n' +
                ' V 3.0.0 Public'+
                `\n\n🍁 Check github for bot: `
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Trex.addrex({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🙈 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MNU', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
 ]

const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️ ▷',
    buttons: buttons,
    headerType: 1
}

            
            var image = await axios.get ('https://telegra.ph/file/0c88b73ec76e82f0933d7.jpg', {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hey There! I'm Online now. 🍁```\n\n🍁 My name : ❰🍁🔱 T Rex BOT 🔱🍁❱\n\n🍁 Developer: HIRUWA\n\n🍁Thank You For Using ❰🍁🔱  T Rex BOT  🔱🍁❱"})
            
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)


    }
    else {
        const buttons = [
  {buttonId: 'MENU', buttonText: {displayText: '🙈 I AM FINE 😜'}, type: 1},//jakakkak
  {buttonId: 'MEN', buttonText: {displayText: '🥺 I  AM SAD 😥'}, type: 1},
  ]
const btn = {
   // imageMessage: 'https://telegra.ph/file/cd35928cef2be17d339c1.jpg',
    contentText: "♥️💫 HOW ARE YOU 🙈♥️",
    footerText: 'BY ⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️ ▷',
    buttons: buttons,
    headerType: 1
}



            
            var image = await axios.get ( Config.AL , {responseType: 'arraybuffer'})
       

       await message.client.updatePresence(message.jid,Presence.composing)

        await new Promise(r => setTimeout(r, 1000));

 
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*❰🍁🔱  T Rex BOT  🔱🍁❱*' })
        await message.client.sendMessage (message.jid, btn, MessageType.buttonsMessage)

     }
    }));

    Trex.addrex({pattern: 'sysd', fromMe: true,  deleteCommand: false,  desc: Lang.SYSD_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Trex.addrex({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*⚕️🎭⚜️ Anonymous Bot ⚜️🎭⚕️*\n\n` + 
                '```Installed version :```\n' +
                ' V 3.0.0 - Public'+
                `\n\n🍁 Check github for bot:  `
           , MessageType.text);
            
        }));
}
