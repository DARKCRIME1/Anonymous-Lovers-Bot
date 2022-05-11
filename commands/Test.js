const Aqua = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const config = require('../config'); 
const axios = require('axios');

const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const Language = require('../language');
const Lang = Language.getString('scrapers');
var gis = require('g-i-s');
const https = require('https');
let wk = config.WORKTYPE == 'public' ? false : true

 Aqua.addrex({pattern: 'al', fromMe: wk, desc: 'Lang.SONG_DESC', deleteCommand: false}, (async (message, match) => {

        
          
        
         const msg = '┌──────────────◉'
         var logo = await axios.get('https://telegra.ph/file/a940d68c360026508f0cb.jpg',{responseType: 'arraybuffer'});
 
    var PIC = Buffer.from(logo.data)
    const dot = config.HANDLERS
    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image )
   var HANDLE = '';
    if (/\[(\W*)\]/.test(dot)) {
        HANDLE = dot.match(/\[(\W*)\]/)[1][0];
    } else {
        HANDLE = '.';
    }
   const buttons = [
        {buttonId: HANDLE + 'menu', buttonText: {displayText: 'MENU' }, type: 1},
        {buttonId: HANDLE + 'git', buttonText: {displayText: 'GIT' }, type: 1}

    ]
    const buttonMessage = {
       
        contentText: msg,
        footerText: msg,
        buttons: buttons,
        headerType: 4 ,
        imageMessage: media.message.imageMessage 
    }
   await message.client.sendMessage(message.jid, buttonMessage ,MessageType.buttonsMessage, {quoted: message.data});
  }));

Aqua.addrex({pattern: 'menu', fromMe: wk, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => { 
         await message.client.sendMessage(message.jid,'Lang.NEED_VIDEO',MessageType.text, {quoted: message.data});
      


}));

Aqua.addrex({pattern: 'git', fromMe: wk, dontAddCommandList: true, deleteCommand: false}, (async (message, match) => { 
       await message.client.sendMessage(message.jid,'Lang.NEED_VIDEO',MessageType.text, {quoted: message.data}); 
       
}));
