//  Base YT : @YASSxOFC 
//  Recode By  famofc
//  90% Fitur By Lynx 

const crypto = require("crypto")
const yts = require("yt-search")
const { Client } = require('ssh2');
const { ytmp3, ytmp4 } = require("ruhend-scraper")

const seller = JSON.parse(fs.readFileSync("./data/reseller.json"))
const ownplus = JSON.parse(fs.readFileSync("./data/owner.json"))
const list = JSON.parse(fs.readFileSync("./data/list.json"))

module.exports = async (famofc, m, store) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
	
const budy = (typeof m.text == 'string' ? m.text : '') 
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await famofc.decodeJid(famofc.user.id)
const isOwner = m.sender.split("@")[0] == global.owner ? true : m.fromMe ? true : ownplus.includes(m.sender)
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isBot = botNumber.includes(m.sender)
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize, sleep } = require('./system/function.js')

m.isGroup = m.chat.endsWith("g.us")
m.metadata = m.isGroup ? (await famofc.groupMetadata(m.chat).catch(_ => {}) || {}) : {}
m.isAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == m.sender) || false) : false
m.isBotAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == botNumber) || false) : false


// >~~~~~~~~~ Database ~~~~~~~~~~~< //

if (m.isGroup) {
const chat = db.groups[m.chat]
if (chat) {
if (!("antilink" in chat)) chat.antilink = false
if (!("antilink2" in chat)) chat.antilink2 = false
} else {
db.groups[m.chat] = {
antilink: false, 
antilink2: false
}
}}

if (!isCmd) {
let check = list.find(e => e.cmd == budy.toLowerCase())
if (check) {
await m.reply(check.respon)
}}

// >~~~~~~~~ Database User ~~~~~~~~< //

const isReseller = seller.includes(m.sender) ? true : isOwner

// >~~~~~~~~ Fake Quoted ~~~~~~~~~~< //

const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `0@newsletter`, newsletterName: `Hore`, jpegThumbnail: "", caption: `Powered By ${namaowner}`, inviteExpiration: 0 }}}

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Powered By ${namabot}`}}}

const qcmd = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `WhatsApp Bot By ${namaowner}`, "description": null, "currencyCode": "IDR", "priceAmount1000": "99999999999999999", "retailerId": `P`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

// >~~~~~~~~~~ Function ~~~~~~~~~~~< //

const example = async (teks) => {
const commander = ` *Contoh Penggunaan :*\n*${cmd}* ${teks}`
return m.reply(commander)
}

const capital = (string) => {
return string.charAt(0).toUpperCase() + string.slice(1);
}

if (isCmd) {
console.log(chalk.white.bgCyan.bold(namabot), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`DARI`), chalk.blue.bold(`${m.sender.split("@")[0]}`), chalk.blue.bold(`Text :`), chalk.blue.bold(`${cmd}`))
}
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(budy) && !isOwner && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await famofc.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await famofc.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

\`\`\`@${m.sender.split("@")[0]} Maaf pesan kamu saya akan saya hapus, karena admin atau ownerbot telah menyalakan fitur antilink grup lain!\`\`\``, mentions: [m.sender]}, {quoted: m})
await famofc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await famofc.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(budy) && !isOwner && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await famofc.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await famofc.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

\`\`\`@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin atau ownerbot telah menyalakan fitur antilink grup lain!\`\`\``, mentions: [m.sender]}, {quoted: m})
await famofc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
//await famofc.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}

const whitelistid = JSON.parse(fs.readFileSync("./data/whitelistid.json"));
const imagePath = './media/fam.jpg';
const imageBuffer = fs.readFileSync(imagePath);

    
    const { createCanvas, loadImage } = require('canvas');
  
    const axios = require('axios');
const FormData = require('form-data');
const { Readable } = require('stream');

async function catbox(buffer) {
  const form = new FormData();
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null); // end of stream

  form.append('reqtype', 'fileupload');
  form.append('fileToUpload', stream, {
    filename: 'image.jpg',
    contentType: 'image/jpeg'
  });

  const res = await axios.post('https://catbox.moe/user/api.php', form, {
    headers: form.getHeaders()
  });

  return res.data;
}
  
 const qs = require('qs')
 
async function ephoto(url, text) {
  let { data } = await axios.get(url)
  let $ = cheerio.load(data)
  let token = $('input[name="token"]').val()
  let build_server = $('#form_value').attr('action')
  let params = {
    text_1: text,
    login: 'OK',
    token
  }

  let res = await axios.post(url + build_server, qs.stringify(params), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  let $$ = cheerio.load(res.data)
  let img = $$("div.thumbnail > img").attr("src")

  if (!img) throw "Gagal mengambil gambar dari server."
  return img.startsWith("http") ? img : `https://en.ephoto360.com${img}`
}  

function delay(ms) {
  return new Promise(res => setTimeout(res, ms))
}
function toCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
    
    function msToTime(ms) {
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return `${h} jam ${m} menit ${s} detik`
}
 
 function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}
function toCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
    
 
function getNamaBulan(bulan) {
  const bln = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return bln[parseInt(bulan) - 1];
}
  
 
const autoresFile = path.join(__dirname, 'system', 'res.json');
let autoresData = { autores: [] };

try {
  if(fs.existsSync(autoresFile)) {
    autoresData = JSON.parse(fs.readFileSync(autoresFile));
  }
} catch (e) {
  console.error('[Autores Load Error]', e);
}

// Atur No Owner Nanti Ketik  .autores
const ownerSambutanTimers = global.ownerSambutanTimers || (global.ownerSambutanTimers = {});
const ownerNumber = '923350963366@s.whatsapp.net';
const stickerUrl = 'https://c.termai.cc/i94/LOhp8fH';


if (m.isGroup && m.sender === ownerNumber && autoresData.autores.includes(m.chat)) {
  const now = Date.now();
  const lastTime = ownerSambutanTimers[m.chat] || 0;

  if (now - lastTime >= 8 * 60 * 1000) {
    ownerSambutanTimers[m.chat] = now;

     
    const nowUTC = new Date();
    const wibHour = (nowUTC.getUTCHours() + 7) % 24;
    let ucapan;
    if (wibHour >= 4 && wibHour < 10) {
      ucapan = 'Selamat pagi... 🌄';
    } else if (wibHour >= 10 && wibHour < 15) {
      ucapan = 'Selamat siang... ☀️';
    } else if (wibHour >= 15 && wibHour < 18) {
      ucapan = 'Selamat Sore... 🌇';
    } else if (wibHour >= 18 && wibHour <= 23) {
      ucapan = 'Selamat malam... 🌃';
    } else {
      ucapan = 'Kamu gak tidur? 🙃';
    }

  
    const sambutanTambahan = [
      'King Kyy Lynx datang 🔥',
      'Waw Kyy Lynx Datang Semua Minggir',
      'Kyy Lynx Kembali Setelah Melawan Para Kroco',
      'Lynx online!',
      'Waktunya membakar semangat! 🔥',
      'Dia datang tanpa undangan 😲',
      'Aura mistis terasa... 🌌',
      'Woi owner hadir!!! 🤴',
      'Gerbang dunia lain terbuka 👁️',
      'Guncangan terjadi... owner muncul! 🌪️',
    ];
    const randomUcapan = sambutanTambahan[Math.floor(Math.random() * sambutanTambahan.length)];

    
    await famofc.sendMessage(m.chat, {
      text: `👋 *${ucapan}*\n${randomUcapan}`,
    }, { quoted: m });

    await famofc.sendMessage(m.chat, {
      sticker: { url: stickerUrl }
    }, { quoted: m });
  }
}

    
 


const mutePath = path.join(__dirname, 'system', 'mute.json')
let muteData = { muted: [] }

if (fs.existsSync(mutePath)) {
  muteData = JSON.parse(fs.readFileSync(mutePath))
}

if (m.isGroup && muteData.muted.includes(m.chat) && !isOwner) return
 
    //
 
    function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
    
   function generateDreamWorld(name) {
  const levels = ['Lucid', 'Vivid', 'Chaotic', 'Ethereal', 'Dark Realm', 'Celestial'];
  const elements = ['Air', 'Fire', 'Water', 'Earth', 'Light', 'Shadow'];
  const events = ['Melihat cermin', 'Terbang di langit', 'Tersesat di hutan', 'Berbicara dengan hewan'];
  const encounters = ['Dewa misterius', 'Bayangan masa lalu', 'Roh penjaga'];
  const powers = ['Mengendalikan waktu', 'Terbang', 'Melihat masa depan', 'Menghilang'];
  const messages = ['Ikuti intuisimu.', 'Ada rahasia yang belum kamu tahu.', 'Perubahan besar akan datang.'];

  return {
    level: levels[Math.floor(Math.random() * levels.length)],
    core: `Inti mimpi tentang ${name}`,
    elements: shuffle(elements).slice(0, 3),
    events: shuffle(events).slice(0, 3),
    encounters: shuffle(encounters).slice(0, 2),
    powers: shuffle(powers).slice(0, 2),
    message: messages[Math.floor(Math.random() * messages.length)],
    quality: `${Math.floor(Math.random() * 51) + 50}%`
  };
}

function interpretDream(data) {
  const meanings = [
    "Menandakan pencarian jati diri.",
    "Pertanda perubahan besar dalam hidup.",
    "Simbol ketidakpastian yang harus dihadapi.",
    "Refleksi ketakutan tersembunyi.",
    "Tanda potensi luar biasa yang belum digali."
  ];
  return meanings[Math.floor(Math.random() * meanings.length)];
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
       
switch (command) {



case 'menu': {
  // Send loading reaction
  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  // Prepare thumbnail image
  const thumbImage = 'https://ik.imagekit.io/egvhzytp2/Picsart_25-08-28_08-56-15-699.jpg?updatedAt=1756342631990';

  // Determine user status
  const userStatus = isOwner ? 'Owner 🥇' : isReseller ? 'Reseller 💼' : 'User 😎';

  // Welcome message in English
  let teks = `
🌟 *𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜 𝐹𝒶𝓂𝒪𝐹𝒞 𝐵𝑜𝓉* 👋  

> *𝐹𝒶𝓂𝒪𝐹𝒞 𝐵𝑜𝓉* 𝒾𝓈 𝒶 𝓋𝑒𝓇𝓈𝒶𝓉𝒾𝓁𝑒 𝒲𝒽𝒶𝓉𝓈𝒜𝓅𝓅 𝒷𝑜𝓉 𝒹𝑒𝓈𝒾𝑔𝓃𝑒𝒹 𝓉𝑜 𝓂𝒶𝓀𝑒 𝓎𝑜𝓊𝓇 𝒹𝒶𝓎 𝓂𝑜𝓇𝑒 𝑒𝓍𝒸𝒾𝓉𝒾𝓃𝑔!   𝒞𝑜𝑜𝓁 𝒻𝑒𝒶𝓉𝓊𝓇𝑒𝓈 𝒾𝓃𝒸𝓁𝓊𝒹𝑒:   

- 📥 𝒟𝑜𝓌𝓃𝓁𝑜𝒶𝒹 𝓂𝑒𝒹𝒾𝒶 𝒻𝓇𝑜𝓂 𝒯𝒾𝓀𝒯𝑜𝓀, 𝒴𝑜𝓊𝒯𝓊𝒷𝑒, 𝒶𝓃𝒹 𝓂𝑜𝓇𝑒.   
- 🖼️ 𝒞𝓇𝑒𝒶𝓉𝑒 𝓈𝓉𝒾𝒸𝓀𝑒𝓇𝓈, 𝓂𝑒𝓂𝑒𝓈, 𝒶𝓃𝒹 𝒶𝓌𝑒𝓈𝑜𝓂𝑒 𝑒𝒹𝒾𝓉𝓈.   
- 📚 𝒞𝒽𝑒𝒸𝓀 𝓌𝑒𝒶𝓉𝒽𝑒𝓇, 𝒲𝒾𝓀𝒾𝓅𝑒𝒹𝒾𝒶, 𝑜𝓇 𝒮𝐼𝑀 𝒹𝒶𝓉𝒶.   
- 💸 𝐸𝓍𝒸𝓁𝓊𝓈𝒾𝓋𝑒 𝒻𝑒𝒶𝓉𝓊𝓇𝑒𝓈 𝒻𝑜𝓇 𝓇𝑒𝓈𝑒𝓁𝓁𝑒𝓇𝓈 𝒶𝓃𝒹 𝑜𝓌𝓃𝑒𝓇𝓈.    

𝒜𝓁𝓁 𝒻𝑒𝒶𝓉𝓊𝓇𝑒𝓈 𝒶𝓇𝑒 𝓃𝑒𝒶𝓉𝓁𝓎 𝑜𝓇𝑔𝒶𝓃𝒾𝓏𝑒𝒹 𝒾𝓃 𝓉𝒽𝒾𝓈 𝓂𝑒𝓃𝓊, 𝓅𝒾𝒸𝓀 𝑜𝓃𝑒 𝓉𝒽𝒶𝓉 𝓂𝒶𝓉𝒸𝒽𝑒𝓈 𝓎𝑜𝓊𝓇 𝓋𝒾𝒷𝑒!😎  

📌 *𝒴𝑜𝓊𝓇 𝒮𝓉𝒶𝓉𝓊𝓈:* ${userStatus}   🛠️ 𝒯𝒽𝑒 𝒷𝑜𝓉 𝒾𝓈 𝒶𝒸𝓉𝒾𝓋𝑒𝓁𝓎 𝒷𝑒𝒾𝓃𝑔 𝒹𝑒𝓋𝑒𝓁𝑜𝓅𝑒𝒹. 𝐼𝒻 𝓎𝑜𝓊 𝒻𝒾𝓃𝒹 𝒶𝓃𝓎 𝒷𝓊𝑔𝓈, 𝓅𝓁𝑒𝒶𝓈𝑒 𝓇𝑒𝓅𝑜𝓇𝓉 𝓉𝑜 𝓉𝒽𝑒 𝑜𝓌𝓃𝑒𝓇!   𝒯𝒽𝒶𝓃𝓀𝓈 𝒻𝑜𝓇 𝓎𝑜𝓊𝓇 𝓈𝓊𝓅𝓅𝑜𝓇𝓉! ❤️ ༻✿

\`🔥 Powered by Lynx\`
`;
 
  // Button message configuration
  let buttonMessage = {
    document: { url: 'https://ik.imagekit.io/egvhzytp2/Picsart_25-08-28_08-56-15-699.jpg?updatedAt=1756342631990' },
    mimetype: 'image/png',
    fileName: ucapan(), // Using ucapan function from famofc.js for greeting
    fileLength: 69420,
    pageCount: 404,
    jpegThumbnail: imageBuffer,
    caption: teks,
    footer: `😎 Bot by: ${global.namaowner || 'Lynx'}`,
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      externalAdReply: {
        title: 'Lynx Bot',
        body: '🔥 Powered by Lynx',
        thumbnailUrl: thumbImage,
        mediaType: 1,
        renderLargerThumbnail: true,
        previewType: 0,
        mediaUrl: 'https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C',
        sourceUrl: 'https://fam-official.serv00.net'
      },
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363390114292114@newsletter',
        newsletterName: 'Lynx'
      }
    },
    buttons: [
      {
        buttonId: '.camerhackbot',
        buttonText: { displayText: '𝙲𝚊𝚖𝚎𝚛𝚊 𝚑𝚊𝚌𝚔' }
      },
      {
        buttonId: '.hackingtool',
        buttonText: { displayText: '𝙵𝚊𝚖𝚘𝚏𝚌 𝚟𝚒𝚙 𝚝𝚘𝚘𝚕𝚔𝚒𝚝' }
      }
    ],
    viewOnce: true,
    headerType: 8
  };

  // Flow menu for interactive command selection
  const flowActions = [{
    buttonId: 'action',
    buttonText: { displayText: '🔍 Explore Features' },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: '𝙼𝚎𝚗𝚞 𝚙𝚊𝚌𝚔',
        sections: [
          {
            title: '🔥 Popular Features',
            highlight_label: '⚡ TOP PICKS',
            rows: [
              {
                header: '🌐 All Commands',
                title: 'View all Lynx Bot features',
                id: '.allmenu'
              },
              {
                header: '🔧 Maker Menu',
                title: 'Create stickers, memes, and more',
                id: '.makermenu'
              },
              {
                header: '👥 Group Menu',
                title: 'Manage your WhatsApp groups',
                id: '.groupmenu'
              },
              {
                header: '🔍 Search Menu',
                title: 'Search for info and media',
                id: '.searchmenu'
              },
              {
                header: '👑 Owner Menu',
                title: 'Exclusive owner commands',
                id: '.ownermenu'
              }
            ]
          },
          {
            title: '📥 Download Features',
            rows: [
              {
                header: '🎵 Play Music/Video',
                title: 'Download songs or videos from YouTube',
                id: '.play'
              },
              {
                header: '📱 SIM Data',
                title: 'Check data by phone number',
                id: '.simdata'
              },
                            {
                header: '🎥 TikTok Download',
                title: 'Download TikTok videos',
                id: '.tt'
              },
              {
                header: '📸 Instagram Download',
                title: 'Download Instagram media',
                id: '.ig'
              },
              {
                header: '📹 Facebook Download',
                title: 'Download Facebook videos',
                id: '.fb'
              },
              {
                header: '📂 GitHub Clone',
                title: 'Clone GitHub repositories',
                id: '.gitclone'
              },
              {
                header: '👻 Snapchat Download',
                title: 'Download Snapchat media',
                id: '.snapchat'
              },
              {
  header: '🐦 Twitter Download',
  title: 'Download Twitter videos',
  id: '.twitter'
},
{
  header: '🍿 Snack Video Download',
  title: 'Download Snack Video clips',
  id: '.snackvideo'
}
              
            ]
          },
          {
            title: '🖼️ Content Creation',
            rows: [
              {
                header: '🖌️ Sticker Maker',
                title: 'Create stickers from images or videos',
                id: '.sticker'
              },
              {
                header: '📸 Fake TikTok Profile',
                title: 'Create a fake TikTok profile',
                id: '.faketiktok'
              },
              {
                header: '🌟 Pornhub Logo',
                title: 'Generate a Pornhub-style logo',
                id: '.ph'
              },
              {
                header: '📝 Quote Image',
                title: 'Create a quote image with custom text',
                id: '.qc'
              },
              {
                header: '📸 Image Quote 2',
                title: 'Create a quote image with dual text',
                id: '.qcimg2'
              },
              {
                header: '😍 Emoji Mix',
                title: 'Combine emojis into stickers',
                id: '.emojimix'
              },
              {
                header: '🔞 Fake XNXX',
                title: 'Generate a fake XNXX screenshot',
                id: '.fakexnxx'
              },
              {
                header: '🧑‍💼 SDM Tinggi',
                title: 'Create a high-SDM profile picture',
                id: '.ppsdmtinggi'
              },
              {
                header: '💬 Request Quote',
                title: 'Send a quote request to channel',
                id: '.req'
              },
              {
                header: '👩 Wife Check',
                title: 'Check if an image is "wife material"',
                id: '.wifecek'
              },
              {
                header: '🎨 Brat Sticker',
                title: 'Create animated Brat sticker',
                id: '.brat'
              },
              {
                header: '🎨 Brat Video Sticker',
                title: 'Create animated Brat video sticker',
                id: '.bratvid'
              },
              {
                header: '🎨 Brat Anime Sticker',
                title: 'Create animated Brat anime sticker',
                id: '.bratanime'
              },
              {
                header: '🎨 Brat 2 Sticker',
                title: 'Create another animated Brat sticker',
                id: '.brat2'
              }
            ]
          },
          {
            title: '📚 Information Tools',
            rows: [
              {
                header: '🌤️ Weather Check',
                title: 'Check weather forecast for a location',
                id: '.weather'
              },
              {
                header: '📖 Wikipedia Search',
                title: 'Search for information on Wikipedia',
                id: '.wikipedia'
              },
              {
                header: '📢 WhatsApp Channel Info',
                title: 'Check details of a WhatsApp channel',
                id: '.idch'
              }
            ]
          },
          {
            title: '👥 Group Management',
            rows: [
              {
                header: '👋 Kick User',
                title: 'Remove a user from the group',
                id: '.kick'
              },
              {
                header: '🔗 Group Link',
                title: 'Get or reset group invite link',
                id: '.linkgc'
              },
              {
                header: '🔄 Reset Group Link',
                title: 'Revoke and generate new group link',
                id: '.resetlink'
              },
              {
                header: '⬆️ Promote Member',
                title: 'Make a member an admin',
                id: '.promote'
              },
              {
                header: '⬇️ Demote Admin',
                title: 'Remove admin status from a member',
                id: '.demote'
              },
              {
                header: '👤 Who Is',
                title: 'Check user info in group',
                id: '.whois'
              },
              {
                header: '🔇 Hide Tag',
                title: 'Send message with hidden tags',
                id: '.hidetag'
              },
              {
                header: '🔓 Open Group',
                title: 'Allow all members to send messages',
                id: '.opengc'
              },
              {
                header: '🔒 Close Group',
                title: 'Restrict messages to admins only',
                id: '.closegc'
              }
            ]
          },
          {
            title: '👑 Owner-Only Commands',
            rows: [
              {
                header: '➕ Add Owner',
                title: 'Add a new owner to the bot',
                id: '.addowner'
              },
              {
                header: '➖ Remove Owner',
                title: 'Remove an owner from the bot',
                id: '.delowner'
              },
              {
                header: '📋 List Groups',
                title: 'View all groups the bot is in',
                id: '.listgrup'
              },
              {
                header: '📨 Broadcast',
                title: 'Send message to all groups',
                id: '.jpm'
              },
              {
                header: '🔇 Mute Group',
                title: 'Mute a group chat',
                id: '.mute'
              },
              {
                header: '🔊 Unmute Group',
                title: 'Unmute a group chat',
                id: '.unmute'
              },
              {
                header: '🔄 Public Mode',
                title: 'Set bot to public mode',
                id: '.public'
              },
              {
                header: '🔒 Self Mode',
                title: 'Set bot to self mode',
                id: '.self'
              },
              {
                header: '➕ Add Whitelist',
                title: 'Add ID to whitelist',
                id: '.addwl'
              },
              {
                header: '➖ Remove Whitelist',
                title: 'Remove ID from whitelist',
                id: '.delwl'
              },
              {
                header: '📋 List Whitelist',
                title: 'View all whitelisted IDs',
                id: '.listwl'
              },
              {
                header: '🗑️ Auto Delete Admin',
                title: 'Delete non-whitelisted admins',
                id: '.autodeladmin'
              }
            ]
          },
          {
            title: 'ℹ️ Bot Info & Utilities',
            rows: [
              {
                header: '📤 Image to URL',
                title: 'Convert image to shareable URL',
                id: '.tourl'
              },
              {
                header: '🏠 Back to Menu',
                title: 'Return to main menu',
                id: '.menu'
              }
            ]
          }
        ]
      })
    },
    viewOnce: true
  }];

  // Add flow actions to buttons
  buttonMessage.buttons.push(...flowActions);

  // Send the menu
  await famofc.sendMessage(m.chat, buttonMessage, { quoted: m });

  // Send success reaction
  await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
case 'camerhackbot':{
m.reply(`

*📸Camera hack📸*


🤖*https://t.me/FamCamerahackbot*

Telegram Camera hack bot
Capture👇

Photo ✅
Video ✅
Live Location✅
Device info✅

#famofc`)}
break;
case 'hackingtool':{
m.reply(`
✦ Sim Database 
✦ Camera Hack 
✦ Location Hack 
✦ PHP Hacking RAT 
✦ Android RAT 
✦ WhatsApp Boomer
✦ Card Bin 
✦ Bug Bot 
✦ SMS Boomer
✦ CC Generator
✦ Website Copper
✦ Website Source Code Downloader
✦ AI Image Generator 
✦ JS Encrypt & Decrypt

*Toolkit-url* https://fam-official.serv00.net`)}
break;
/*case 'menu': {
  try {
    const teksHasil = `
  

*ʟɪsᴛᴍᴇɴᴜ*
✦ .allmenu 
✦ .ownermenu
✦ .groupmenu
✦ .searchmenu
✦ .funmenu

ʀᴜɴᴛɪᴍᴇ ᴘʀᴏsᴇs : *${runtime(process.uptime())}*`;


    await famofc.sendMessage(m.chat, {
      text: teksHasil,
      contextInfo: {
        isForwarded: true,
        forwardingScore: 19,
        externalAdReply: {
          title: "Lynx Bot",
          body: "Mod_By_Lynx",
          thumbnailUrl: "https://fam-official.serv00.net/script12/fampng/fam.jpg",
          mediaUrl: "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
          renderLargerThumbnail: false,
          mediaType: 2
        }
      }
    });

    await famofc.sendMessage(m.chat, {
      audio: { url: "./media/fam.mp3" },
      mimetype: "audio/mpeg",
      ptt: true
    });

  } catch (e) {
    console.error("❌ Gagl kirim info:", e);
    await famofc.sendMessage(m.chat, {
      text: " Gagal mengirim info Shiro."
    });
  }
}
break;*/
    
    
case 'allmenu': {
  // Send loading reaction
  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  // Prepare thumbnail image
  const thumbImage = 'https://ik.imagekit.io/egvhzytp2/Picsart_25-08-28_08-56-15-699.jpg?updatedAt=1756342631990';

  // Welcome message
  let teks = `
╭──『 *ᴀʟʟ ᴍᴇɴᴜ* 』
│ All available commands in Lynx Bot!
│ 
│ ✦ .menu
│ ✦ .camerhackbot
│ ✦ .hackingtool
│ ✦ .allmenu
│ ✦ .makermenu
│ ✦ .groupmenu
│ ✦ .searchmenu
│ ✦ .ownermenu
│ ✦ .play
│ ✦ .TikTok 
│ ✦ .Facebook
│ ✦ .Instagram
│ ✦ .snapchat
│ ✦ .twitter
│ ✦ .snackvideo
│ ✦ .gitclone 
│ ✦ .simdata
│ ✦ .sticker
│ ✦ .faketiktok
│ ✦ .ph
│ ✦ .qc
│ ✦ .qcimg2
│ ✦ .emojimix
│ ✦ .fakexnxx
│ ✦ .ppsdmtinggi
│ ✦ .req
│ ✦ .wifecek
│ ✦ .brat
│ ✦ .bratvid
│ ✦ .bratanime
│ ✦ .brat2
│ ✦ .img2ios
│ ✦ .weather
│ ✦ .wikipedia
│ ✦ .idch
│ ✦ .creategroup
│ ✦ .kick
│ ✦ .linkgc
│ ✦ .resetlink
│ ✦ .promote
│ ✦ .demote
│ ✦ .whois
│ ✦ .hidetag
│ ✦ .opengc
│ ✦ .closegc
│ ✦ .listadmin
│ ✦ .setppgc
│ ✦ .tagme
│ ✦ .onautores
│ ✦ .offautores
│ ✦ .tagboom
│ ✦ .addowner
│ ✦ .delowner
│ ✦ .listgrup
│ ✦ .jpm
│ ✦ .public
│ ✦ .self
│ ✦ .tourl
│ ✦ .rvo
╰──────────────
📌 *Your Status:* ${isOwner ? 'Owner 🥇' : isReseller ? 'Reseller 💼' : 'User 😎'}
\`🔥 Powered by Lynx\`
`;

  // Send the message
  await famofc.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        title: 'Lynx Bot',
        body: '🔥 Powered by Lynx',
        thumbnailUrl: thumbImage,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

  // Send success reaction
  await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
 case 'makermenu': {
  // Send loading reaction
  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  // Prepare thumbnail image
  const thumbImage = 'https://ik.imagekit.io/egvhzytp2/Picsart_25-08-28_08-56-15-699.jpg?updatedAt=1756342631990';

  // Welcome message
  let teks = `
╭──『 *ᴍᴀᴋᴇʀ ᴍᴇɴᴜ* 』
│ Content creation commands!
│ 
│ ✦ .sticker
│ ✦ .faketiktok
│ ✦ .ph
│ ✦ .qc
│ ✦ .qcimg2
│ ✦ .emojimix
│ ✦ .fakexnxx
│ ✦ .ppsdmtinggi
│ ✦ .req
│ ✦ .wifecek
│ ✦ .brat
│ ✦ .bratvid
│ ✦ .bratanime
│ ✦ .brat2
│ ✦ .img2ios
╰──────────────
📌 *Your Status:* ${isOwner ? 'Owner 🥇' : isReseller ? 'Reseller 💼' : 'User 😎'}
\`🔥 Powered by Lynx\`
`;

  // Send the message
  await famofc.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        title: 'Lynx Bot',
        body: '🔥 Powered by Lynx',
        thumbnailUrl: thumbImage,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

  // Send success reaction
  await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
 case 'ownermenu': {
  // Check if user is owner
  if (!isOwner) {
    await famofc.sendMessage(m.chat, { text: '❌ This command is for owners only!' }, { quoted: m });
    return;
  }

  // Send loading reaction
  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  // Prepare thumbnail image
  const thumbImage = 'https://ik.imagekit.io/egvhzytp2/Picsart_25-08-28_08-56-15-699.jpg?updatedAt=1756342631990';

  // Welcome message
  let teks = `
╭──『 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 』
│ Owner-only commands!
│ 
│ ✦ .addowner
│ ✦ .delowner
│ ✦ .listgrup
│ ✦ .jpm
│ ✦ .public
│ ✦ .self
╰──────────────
📌 *Your Status:* Owner 🥇
\`🔥 Powered by Lynx\`
`;

  // Send the message
  await famofc.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        title: 'Lynx Bot',
        body: '🔥 Powered by Lynx',
        thumbnailUrl: thumbImage,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

  // Send success reaction
  await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
case 'groupmenu': {
  // Send loading reaction
  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  // Prepare thumbnail image
  const thumbImage = 'https://ik.imagekit.io/egvhzytp2/Picsart_25-08-28_08-56-15-699.jpg?updatedAt=1756342631990';

  // Welcome message
  let teks = `
╭──『 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 』
│ Group management commands!
│ 
│ ✦ .creategroup
│ ✦ .kick
│ ✦ .linkgc
│ ✦ .resetlink
│ ✦ .promote
│ ✦ .demote
│ ✦ .whois
│ ✦ .hidetag
│ ✦ .opengc
│ ✦ .closegc
│ ✦ .listadmin
│ ✦ .setppgc
│ ✦ .tagme
│ ✦ .onautores
│ ✦ .offautores
│ ✦ .tagboom
╰──────────────
📌 *Your Status:* ${isOwner ? 'Owner 🥇' : isReseller ? 'Reseller 💼' : 'User 😎'}
\`🔥 Powered by Lynx\`
`;

  // Send the message
  await famofc.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        title: 'Lynx Bot',
        body: '🔥 Powered by Lynx',
        thumbnailUrl: thumbImage,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

  // Send success reaction
  await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
 case 'searchmenu': {
  // Send loading reaction
  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  // Prepare thumbnail image
  const thumbImage = 'https://ik.imagekit.io/egvhzytp2/Picsart_25-08-28_08-56-15-699.jpg?updatedAt=1756342631990';

  // Welcome message
  let teks = `
╭──『 *sᴇᴀʀᴄʜ ᴍᴇɴᴜ* 』
│ Search and info commands!
│ 
│ ✦ .play
│ ✦ .TikTok 
│ ✦ .Facebook
│ ✦ .Instagram
│ ✦ .snapchat
│ ✦ .twitter
│ ✦ .snackvideo
│ ✦ .gitclone 
│ ✦ .simdata
│ ✦ .wikipedia
│ ✦ .weather
│ ✦ .idch
╰──────────────
📌 *Your Status:* ${isOwner ? 'Owner 🥇' : isReseller ? 'Reseller 💼' : 'User 😎'}
\`🔥 Powered by Lynx\`
`;

  // Send the message
  await famofc.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        title: 'Lynx Bot',
        body: '🔥 Powered by Lynx',
        thumbnailUrl: thumbImage,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

  // Send success reaction
  await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;
case 'twitter':
case 'tw': {
  if (!text) return m.reply(`❌ Please provide a Twitter URL!\nExample: ${prefix}${command} https://twitter.com/IbaiLlanos/status/1569798267365457920`);

  // Validate URL
  if (!text.includes('twitter.com')) {
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    return m.reply('❌ Invalid Twitter URL! Please provide a valid Twitter link.');
  }

  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const apiKey = 'cd8e50f426a27f17ef'; // Replace with your actual API key if different
    const apiUrl = `https://api.nexoracle.com/downloader/twitter?apikey=${apiKey}&url=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl, { timeout: 10000 });
    const data = response.data;

    if (data.status !== 200 || !data.result) {
      await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply('❌ Failed to fetch Twitter media. Invalid link or API error.');
    }

    const { video, username, caption, thumbnail } = data.result;

    // Prepare caption
    const mediaCaption = `🎥 *Twitter Media Downloader*\n\n` +
                        `• *Username:* @${username}\n` +
                        `• *Caption:* ${caption || 'No caption'}\n` +
                        `• *Download Link:* ${video}\n\n` +
                        `🔥 *Powered by FamOFC*`;

    // Send thumbnail with details
    await famofc.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: mediaCaption,
      contextInfo: {
        externalAdReply: {
          title: 'Twitter Media',
          body: `By @${username}`,
          thumbnailUrl: thumbnail,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: video
        }
      }
    }, { quoted: m });

    // Download and send the video
    const videoResponse = await axios.get(video, { responseType: 'arraybuffer' });
    const videoBuffer = Buffer.from(videoResponse.data);

    await famofc.sendMessage(m.chat, {
      video: videoBuffer,
      caption: `✅ *Twitter video downloaded successfully!*\n\n🔥 *Powered by FamOFC*`,
      mimetype: 'video/mp4'
    }, { quoted: m });

    await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (error) {
    console.error('Twitter Downloader Error:', error.message);
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Error downloading Twitter media: ${error.message || 'Unknown error'}`);
  }
}
break;
case 'snackvideo':
case 'sv': {
  if (!text) return m.reply(`❌ Please provide a Snack Video URL!\nExample: ${prefix}${command} https://sck.io/p/jiv-dwZX`);

  // Validate URL
  if (!text.includes('sck.io') && !text.includes('snackvideo.com')) {
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    return m.reply('❌ Invalid Snack Video URL! Please provide a valid Snack Video link.');
  }

  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const apiKey = 'cd8e50f426a27f17ef'; // Replace with your actual API key if different
    const apiUrl = `https://api.nexoracle.com/downloader/snack-video?apikey=${apiKey}&url=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl, { timeout: 10000 });
    const data = response.data;

    if (data.status !== 200 || !data.result) {
      await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply('❌ Failed to fetch Snack Video media. Invalid link or API error.');
    }

    const { thumb, video } = data.result;

    // Prepare caption
    const mediaCaption = `🎥 *Snack Video Downloader*\n\n` +
                        `• *Thumbnail:* ${thumb}\n` +
                        `• *Video Link:* ${video}\n\n` +
                        `🔥 *Powered by FamOFC*`;

    // Send thumbnail with details
    await famofc.sendMessage(m.chat, {
      image: { url: thumb },
      caption: mediaCaption,
      contextInfo: {
        externalAdReply: {
          title: 'Snack Video Media',
          body: 'Downloaded by Lynx Bot',
          thumbnailUrl: thumb,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: video
        }
      }
    }, { quoted: m });

    // Download and send the video
    const videoResponse = await axios.get(video, { responseType: 'arraybuffer' });
    const videoBuffer = Buffer.from(videoResponse.data);

    await famofc.sendMessage(m.chat, {
      video: videoBuffer,
      caption: `✅ *Snack Video downloaded successfully!*\n\n🔥 *Powered by FamOFC*`,
      mimetype: 'video/mp4'
    }, { quoted: m });

    await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (error) {
    console.error('Snack Video Downloader Error:', error.message);
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Error downloading Snack Video: ${error.message || 'Unknown error'}`);
  }
}
break;
case 'snapchat':
case 'snap': {
  if (!text) return m.reply(`❌ Please provide a Snapchat URL!\nExample: ${prefix}${command} https://snapchat.com/t/uzFNUUFv`);

  // Validate URL
  if (!text.includes('snapchat.com')) {
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    return m.reply('❌ Invalid Snapchat URL! Please provide a valid Snapchat link.');
  }

  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const apiKey = 'cd8e50f426a27f17ef'; // Replace with your actual API key
    const apiUrl = `https://api.nexoracle.com/downloader/snapchat?apikey=${apiKey}&url=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl, { timeout: 10000 });
    const data = response.data;

    if (data.status !== 200 || !data.result) {
      await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply('❌ Failed to fetch Snapchat media. Invalid link or API error.');
    }

    const { title, thumb, size, url } = data.result;

    // Prepare caption
    const caption = `📸 *Snapchat Downloader*\n\n` +
                    `• *Title:* ${title}\n` +
                    `• *Size:* ${size}\n` +
                    `• *Download Link:* ${url}\n\n` +
                    `🔥 *Powered by FamOFC*`;

    // Send thumbnail and details
    await famofc.sendMessage(m.chat, {
      image: { url: thumb },
      caption: caption,
      contextInfo: {
        externalAdReply: {
          title: 'Snapchat Media',
          body: 'Downloaded by Lynx Bot',
          thumbnailUrl: thumb,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m });

    // Send media as document
    const mediaResponse = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(mediaResponse.data);

    await famofc.sendMessage(m.chat, {
      document: buffer,
      mimetype: 'video/mp4',
      fileName: `${title}.mp4`,
      caption: `✅ *Snapchat media downloaded successfully!*\n\n🔥 *Powered by FamOFC*`
    }, { quoted: m });

    await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (error) {
    console.error('Snapchat Downloader Error:', error.message);
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Error downloading Snapchat media: ${error.message || 'Unknown error'}`);
  }
}
break;
 
        case 'iqc': {
  const { createCanvas, loadImage } = require('canvas');

  const raw = text?.split('|');
  const pesan = raw?.[0]?.trim();
  const posisi = raw?.[1]?.toLowerCase() === 'kanan' ? 'right' : 'left';

  if (!pesan) return m.reply('Mana teksnya? Gunakan format: *.iqc Lynx');
  if (pesan.length > 50) return m.reply('Teks maksimal 50 karakter ya ');

  const templateUrl = 'https://files.catbox.moe/twko3b.jpg';
  const templateImg = await loadImage(templateUrl);

  const canvas = createCanvas(templateImg.width, templateImg.height);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(templateImg, 0, 0);

  
  ctx.font = '24px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
  ctx.lineWidth = 1.2;

  const maxWidth = 390;
  const xStart = posisi === 'right' ? canvas.width - maxWidth - 45 : 45;
  let y = 412;

  function wrapTextAny(text, x, y, maxWidth, lineHeight) {
    let line = '';
    for (let i = 0; i < text.length; i++) {
      line += text[i];
      const width = ctx.measureText(line).width;

      if (width > maxWidth) {
        const output = line.slice(0, -1);
        ctx.strokeText(output, x, y);
        ctx.fillText(output, x, y);
        line = text[i];
        y += lineHeight;
      }
    }
    ctx.strokeText(line, x, y);
    ctx.fillText(line, x, y);
  }

  wrapTextAny(pesan, xStart, y, maxWidth, 32);

  const buffer = canvas.toBuffer('image/jpeg');

  await famofc.sendMessage(m.chat, {
    image: buffer,
    caption: `By famofc`
  }, { quoted: m });
}
break;
      

  case 'idch':
case 'cekidch': {
  if (!text) return m.reply(`📌 *استعمال:* ${prefix + command} <channel_link>\nمثال: ${prefix + command} https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C`);
  if (!text.includes("https://whatsapp.com/channel/")) return m.reply("❌ *غلط لنک:* براہ کرم ایک درست واٹس ایپ چینل لنک فراہم کریں۔");

  try {
    await famofc.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    const result = text.split('https://whatsapp.com/channel/')[1];
    const res = await famofc.newsletterMetadata("invite", result);

    const teks = `📢 *واٹس ایپ چینل کی معلومات*\n\n` +
                 `• *آئی ڈی:* ${res.id}\n` +
                 `• *نام:* ${res.name}\n` +
                 `• *کل سبسکرائبرز:* ${res.subscribers}\n` +
                 `• *حالت:* ${res.state}\n` +
                 `• *تصدیق شدہ:* ${res.verification === "VERIFIED" ? "✅ تصدیق شدہ" : "❌ غیر تصدیق شدہ"}\n\n` +
                 `🔥 *Powered by Lynx Bot*`;

    const msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: {
            body: { text: teks },
            footer: { text: "🔥 Powered by Lynx Bot" },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_copy",
                  buttonParamsJson: `{"display_text":"📋 آئی ڈی کاپی کریں","copy_code":"${res.id}"}`
                }
              ]
            }
          }
        }
      }
    };

    await famofc.relayMessage(m.chat, msg, { quoted: m });
    await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("Cekidch Command Error:", error);
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ *خرابی:* چینل کی معلومات حاصل کرنے میں ناکامی۔ ${error.message || "غلط لنک یا سرور کا مسئلہ۔"}`);
  }
}
break;    
case 'rvo':
case 'readviewonce':
case 'vv': {
  if (!m.quoted) return m.reply(`❌ Reply to a view-once image, video, or audio with: ${prefix}${command}`);

  await famofc.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

  try {
    const mimeType = m.quoted.mtype;
    if (!/imageMessage|videoMessage|audioMessage/.test(mimeType)) {
      return m.reply(`❌ Only view-once images, videos, or audio are supported.`);
    }

    const mediaBuffer = await m.quoted.download();
    if (!mediaBuffer) {
      return m.reply(`❌ Failed to download media. Ensure it's a view-once message.`);
    }

    const messageOptions = {};
    if (mimeType === 'audioMessage') {
      messageOptions.audio = mediaBuffer;
      messageOptions.mimetype = 'audio/mp4';
      messageOptions.ptt = true;
    } else {
      messageOptions[mimeType.replace('Message', '').toLowerCase()] = mediaBuffer;
      if (text) messageOptions.caption = text;
    }

    // Send to current chat and bot's number
    await famofc.sendMessage(m.chat, messageOptions, { quoted: m });
    await famofc.sendMessage(famofc.user.id, messageOptions, { quoted: m });

    await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (err) {
    console.error("ReadViewOnce Error:", err);
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Failed to process view-once media.`);
  }
}
break;
     case 'wikipedia':
case 'wiki': {
  const axios = (await import('axios')).default;
  if (!q) return m.reply('❗ Contoh: .wikipedia Perang Dunia Kedua');

  try {
    const searchURL = `https://id.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&format=json`;
    const searchRes = await axios.get(searchURL);
    const results = searchRes.data.query?.search;
    if (!results?.length) return m.reply('❌ Topik tidak ditemukan di Wikipedia.');

    const title = results[0].title;

    const infoURL = `https://id.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro=true&explaintext=true&redirects=true&titles=${encodeURIComponent(title)}&format=json&pithumbsize=600`;
    const infoRes = await axios.get(infoURL);

    const pages = infoRes.data.query.pages;
    const page = Object.values(pages)[0];

    let extract = page.extract || '🔍 Artikel ditemukan tapi tidak ada ringkasan.';
    if (extract.length > 800) {
      extract = extract.slice(0, 800).trim() + '…';
    }

    const thumb = page.thumbnail?.source;
    const pageURL = `https://id.wikipedia.org/wiki/${encodeURIComponent(title)}`;
    const caption = `📚 *${title}*\n\n${extract}\n\n🌐 *Baca selengkapnya:* ${pageURL}`;

    if (thumb) {
      await famofc.sendMessage(m.chat, {
        image: { url: thumb },
        caption
      }, { quoted: m });
    } else {
      await famofc.sendMessage(m.chat, {
        text: caption
      }, { quoted: m });
    }

  } catch (err) {
    console.error("Wikipedia Error:", err?.response?.data || err);
    m.reply('🚫 Gagal mengambil data dari Wikipedia.');
  }
}
break;
         

case 'weather':
case 'checkweather': {
  const axios = (await import('axios')).default;
  if (!q) return m.reply('❌ Enter a location name!\nExample: .weather Jakarta');

  const apiKey = '07a2b10512dc32968ed9a9e812ef625a';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&appid=${apiKey}&units=metric&lang=en`;

  await famofc.sendMessage(m.chat, { react: { text: "⛅", key: m.key } });

  try {
    const { data } = await axios.get(apiUrl);
    const weather = data.weather[0];
    const icon = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

    const result = `☁️ *Weather Forecast - ${data.name}, ${data.sys.country}*\n\n` +
      `• Weather: ${weather.description}\n` +
      `• Temperature: ${data.main.temp}°C\n` +
      `• Humidity: ${data.main.humidity}%\n` +
      `• Wind: ${data.wind.speed} m/s\n` +
      `• Air Pressure: ${data.main.pressure} hPa\n` +
      `• Time Zone: GMT+${data.timezone / 3600}`;

    await famofc.sendMessage(m.chat, {
      image: { url: icon },
      caption: result
    }, { quoted: m });

  } catch (e) {
    console.error('WEATHER ERROR:', e?.response?.data || e);
    m.reply('❌ Failed to retrieve weather data. Check the location or try again later.');
  }
}
break;
 case 'simdata': {
  if (!text) {
    return m.reply(`❌ Please provide a phone number!\nExample: ${prefix}simdata 03325809154`);
  }

  // Clean input: remove non-digits, preserve leading +
  const cleanedNumber = text.replace(/[^\d+]/g, '').replace(/^\+?(\d+)$/, '$1');

  // Validate phone number (10-13 digits, optional +)
  if (!/^\+?\d{10,13}$/.test(cleanedNumber)) {
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    return m.reply(`❌ Invalid phone number! Example: 03325809154 or +923325809154`);
  }

  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const response = await axios.get(`https://fam-official.serv00.net/sim/famdata.php?num=${encodeURIComponent(cleanedNumber)}`, {
      timeout: 10000
    });

    const data = response.data;
    if (data.status !== 'success' || !Array.isArray(data.data) || data.data.length === 0) {
      await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply(`❌ No data found for number ${text}. Try another number.`);
    }

    let formattedResponse = `✅ *SIM Database Results*\n\n`;
    data.data.forEach((userData, index) => {
      formattedResponse += `📌 *Record ${index + 1}:*\n`;
      formattedResponse += `🔹 Name: ${userData.name || 'Unknown'}\n`;
      formattedResponse += `🔹 Number: ${userData.mobile || 'Unknown'}\n`;
      formattedResponse += `🔹 CNIC: ${userData.cnic || 'Unknown'}\n`;
      formattedResponse += `🔹 Address: ${userData.address?.trim() || 'Unknown'}\n`;
      formattedResponse += `━━━━━━━\n`;
    });
    formattedResponse += `🔍 Powered by FamOFC`;

    await famofc.sendMessage(m.chat, { text: formattedResponse }, { quoted: m });
    await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("SIM Data Error:", { message: error.message, code: error.code });
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(error.code === 'ECONNABORTED' ? `❌ Timeout. Please try again later.` : `❌ Failed to retrieve SIM data.`);
  }
}
break;
      
 case 'tt':
case 'tiktok': {
  if (!text) {
    return m.reply(`❌ Please provide a TikTok video link!\nExample: ${prefix}tt https://www.tiktok.com/@username/video/123456789`);
  }

  const url = text.trim();
  if (!/^(https?:\/\/)/i.test(url) || !url.includes('tiktok.com')) {
    return m.reply(`❌ Invalid TikTok URL! Example: https://www.tiktok.com/@username/video/123456789`);
  }

  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const apiUrl = `https://rest-lily.vercel.app/api/downloader/tiktok?url=${encodeURIComponent(url)}`;
    const response = await axios.get(apiUrl, { headers: { Accept: '*/*' }, timeout: 10000 });
    const data = response.data;

    if (data.status !== true || !data.data) {
      await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply(`❌ Failed to fetch TikTok media: ${data.message || 'No media found for the provided URL.'}`);
    }

    const { no_watermark, music, title, creator } = data.data;
    if (!no_watermark || !music) {
      await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply(`❌ No downloadable media found. Ensure the video is public and try again.`);
    }

    // Send No-Watermark Video
    await famofc.sendMessage(m.chat, {
      video: { url: no_watermark },
      caption: `✅ *TikTok Video*\n\n` +
               `📝 *Title*: ${title || 'Unknown'}\n` +
               `👤 *Creator*: ${creator || 'Unknown'}\n` +
               `🔍 *Powered by FamOFC*`
    }, { quoted: m });

    // Send Audio
    await famofc.sendMessage(m.chat, {
      audio: { url: music },
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m });

    await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("TikTok Downloader Error:", error.message);
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Error: ${error.message || 'Failed to download TikTok media. Please try again later.'}`);
  }
}
break;
case 'ttstalk':
case 'tiktokstalk': {
  if (!args[0]) return m.reply(
    "🔍 *TikTok Stalk*\n" +
    "──────────────────\n" +
    "Enter the TikTok username you want to stalk\n\n" +
    "Example: .ttstalk mrbeast"
  );

  try {
    const username = args.join(' ');
    const res = await fetch(`https://api.siputzx.my.id/api/stalk/tiktok?username=${username}`);
    const json = await res.json();

    if (!json.status) return m.reply("❌ Username not found!");

    const user = json.data.user;
    const stats = json.data.stats;

    let text = `✨ *TIKTOK USER INFO*\n`;
    text += `─────────────────────\n\n`;
    text += `📛 *Name:* ${user.nickname || '-'}\n`;
    text += `🔗 *Username:* @${user.uniqueId}\n`;
    text += `📝 *Bio:* ${user.signature || '-'}\n`;
    text += `🌐 *Region:* ${user.region || '-'}\n`;
    text += `\n`;
    text += `📊 *Account Statistics:*\n`;
    text += `• 👥 *Followers:* ${stats.followerCount.toLocaleString()}\n`;
    text += `• 🔁 *Following:* ${stats.followingCount.toLocaleString()}\n`;
    text += `• ❤️ *Total Likes:* ${stats.heartCount.toLocaleString()}\n`;
    text += `• 🎞️ *Total Videos:* ${stats.videoCount}\n`;
    text += `\n`;
    text += `🔒 *Private Account:* ${user.privateAccount ? 'Yes' : 'No'}\n`;
    text += `✅ *Verified:* ${user.verified ? 'Yes' : 'No'}\n`;
    text += `\n`;
    text += `🌟 *Profile Link:*\nhttps://www.tiktok.com/@${user.uniqueId}`;

    famofc.sendMessage(m.chat, {
      image: { url: user.avatarThumb },
      caption: text
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('⚠️ Failed to retrieve data. Try again later.');
  }
}
break;  
case 'gitclone': {
  if (!text) {
    return m.reply(`📌 *استعمال:* ${prefix + command} <github_url>\nمثال: ${prefix + command} https://github.com/Skyzodev/Simplebot\n\n🔥 *Powered by Lynx Bot*`);
  }
  const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
  if (!regex.test(text)) {
    return m.reply(`❌ *غلط GitHub یو آر ایل!* براہ کرم ایک درست ریپوزٹری یو آر ایل فراہم کریں (مثال: https://github.com/Skyzodev/Simplebot)۔\n\n🔥 *Powered by Lynx Bot*`);
  }

  try {
    // Send loading reaction
    await famofc.sendMessage(m.chat, { react: { text: '🔍', key: m.key } });

    const [, user, repo] = text.match(regex) || [];
    const cleanRepo = repo.replace(/.git$/, '');
    const url = `https://api.github.com/repos/${user}/${cleanRepo}/zipball`;

    // Fetch ZIP file metadata
    const response = await axios.head(url, {
      headers: { Accept: "*/*" },
      timeout: 10000
    });
    if (response.status !== 200) throw new Error("ریپوزٹری نہیں ملی یا ناقابل رسائی ہے۔");

    const filename = response.headers['content-disposition']?.match(/attachment; filename=(.*)/)?.[1] || `${cleanRepo}.zip`;

    // Send ZIP file as document
    await famofc.sendMessage(m.chat, {
      document: { url: url },
      mimetype: 'application/zip',
      fileName: filename,
      caption: `📦 *Lynx Bot*\n` +
               `👤 *User:* ${user}\n` +
               `📂 *Repo:* ${cleanRepo}\n\n` +
               `🔥 *Powered by Lynx Bot*`,
      contextInfo: {
        mentionedJid: [m.sender],
        isForwarded: true,
        forwardingScore: 19,
        externalAdReply: {
          showAdAttribution: true,
          title: "Lynx Bot",
          body: ` ${global.botname || "Lynx Bot"}`,
          thumbnailUrl: global.ppuser || "https://ik.imagekit.io/egvhzytp2/Picsart_25-08-28_08-56-15-699.jpg?updatedAt=1756342631990",
          sourceUrl: global.website || "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m });

    // Send success reaction
    await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("Gitclone Command Error:", error);
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Error :۔ ${error.message || "ریپوزٹری نہیں ملی یا ناقابل رسائی ہے۔"}\n\n🔥 *Powered by Lynx Bot*`);
  }
}
break;
case 'totalfeatures': {
  try {
    const fs = require('fs');
    const path = './famofc.js'; // Change if your file has a different name/location

    const content = fs.readFileSync(path, 'utf-8');

    // Extract all cases
    const caseRegex = /case ['"`]([^'"`]+)['"`]/g;
    let match;
    const caseList = [];

    while ((match = caseRegex.exec(content)) !== null) {
      caseList.push(match[1]);
    }

    const total = caseList.length;

    // Count the most frequently used cases
    const countMap = {};
    for (const name of caseList) {
      const cmd = name.split(' ')[0]; // Split if using: case 'cmd1': case 'cmd2':
      countMap[cmd] = (countMap[cmd] || 0) + 1;
    }

    // Sort by most frequent
    const sortedCommands = Object.entries(countMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10) // Take top 10
      .map(([cmd], i) => `${i + 1}. *.${cmd}*`)
      .join('\n');

    const resultText = `*Total Features in the Bot Currently:* *${total} features*\n\n*Top Most Frequently Used Features:*\n${sortedCommands}`;

    await famofc.sendMessage(m.chat, {
      text: resultText,
      contextInfo: {
        externalAdReply: {
          title: "✦ ⏤͟͟͞͞ Lynx Bot=",
          body: "Total and Top Features Analysis",
          thumbnailUrl: "https://ik.imagekit.io/egvhzytp2/Picsart_25-08-28_08-56-15-699.jpg?updatedAt=1756342631990",
          mediaUrl: "https://whatsapp.com",
          renderLargerThumbnail: false,
          mediaType: 2
        },
        forwardingScore: 19,
        isForwarded: true
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('Failed to read features: ' + err.message);
  }
}
break;
case 'mute': {
  if (!m.isGroup) return m.reply('❗ Only usable in groups.');
  if (!isOwner) return m.reply('❌ Owner only.');

  if (!muteData.muted.includes(m.chat)) {
    muteData.muted.push(m.chat);
    fs.writeFileSync(mutePath, JSON.stringify(muteData, null, 2));
    m.reply('✅ This group has been muted. The bot will not respond.');
  } else {
    m.reply('The group is already muted.');
  }
}
break;

case 'unmute': {
  if (!m.isGroup) return m.reply('❗ Only usable in groups.');
  if (!isOwner) return m.reply('❌ Owner only.');

  if (muteData.muted.includes(m.chat)) {
    muteData.muted = muteData.muted.filter(id => id !== m.chat);
    fs.writeFileSync(mutePath, JSON.stringify(muteData, null, 2));
    m.reply('✅ This group has been unmuted. The bot is active again.');
  } else {
    m.reply('This group is not muted.');
  }
}
break;
case 'fakengl': {
  const sharp = (await import('sharp')).default;
  const axios = (await import('axios')).default;

  if (!text) return m.reply('❗ Enter text!\n\nExample:\n.fakengl Where’s my premium');

  await famofc.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } });

  try {
    const bgUrl = 'https://files.catbox.moe/lbyyov.jpg';
    const bgBuffer = await axios.get(bgUrl, { responseType: 'arraybuffer' }).then(res => res.data);

    const maxCharsPerLine = 27;
    const words = text.split(' ');
    let lines = [''];
    for (const word of words) {
      const lastLine = lines[lines.length - 1];
      if ((lastLine + ' ' + word).trim().length <= maxCharsPerLine) {
        lines[lines.length - 1] += (lastLine ? ' ' : '') + word;
      } else {
        lines.push(word);
      }
    }

    const svgText = `
      <svg width="1440" height="1164" xmlns="http://www.w3.org/2000/svg">
        <style>
          .title {
            fill: black;
            font-size: 65px;
            font-weight: bold;
            font-family: "Poppins", sans-serif;
            dominant-baseline: middle;
            text-anchor: middle;
          }
        </style>
        ${lines.map((line, i) => {
          const lineHeight = 85;
          const yPos = 705 + (i - (lines.length - 1) / 2) * lineHeight;
          return `<text x="50%" y="${yPos}" class="title">${line}</text>`;
        }).join('\n')}
      </svg>
    `;

    const textBuffer = Buffer.from(svgText);

    const final = await sharp(bgBuffer)
      .composite([{ input: textBuffer, top: 0, left: 0 }])
      .resize(1440, 1164)
      .png()
      .toBuffer();

    await famofc.sendMessage(m.chat, {
      image: final,
      caption: '✅ *Successfully created Fake NGL!*'
    }, { quoted: m });

  } catch (err) {
    console.error('[FAKENGL ERROR]', err);
    m.reply(`❌ Failed to create fake NGL\n\n• *Error:* ${err.message}`);
  }
}
break;
  case 'instagram':
case 'ig': {
  // Set command description (if your bot uses metadata)
  command.description = 'downloads';

  // Check if URL is provided
  if (!text) {
    return m.reply(`📌 *استعمال:* ${prefix + command} <instagram_url>\nمثال: ${prefix + command} https://www.instagram.com/reel/123456789/\n\n🔥 *Powered by Lynx Bot*`);
  }

  // Validate URL
  const url = text.trim();
  if (!/^(https?:\/\/)/i.test(url) || !url.includes("instagram.com")) {
    return m.reply(`❌ *غلط یو آر ایل!* براہ کرم ایک درست انسٹاگرام ویڈیو یو آر ایل فراہم کریں (مثال: https://www.instagram.com/reel/123456789/)۔\n\n🔥 *Powered by Lynx Bot*`);
  }

  try {
    // Send loading reaction
    await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    // Fetch media from API
    const api = `https://rest-lily.vercel.app/api/downloader/igdl?url=${encodeURIComponent(url)}`;
    const response = await axios.get(api, {
      headers: { Accept: "*/*" },
      timeout: 10000
    });
    const data = response.data;

    if (data.data && data.data.length > 0) {
      const videoData = data.data[0];
      const videoUrl = videoData.url;
      const thumb = videoData.thumbnail;

      // Caption for the video
      const caption = `🎥 *انسٹاگرام ویڈیو*\n\n` +
                      `🔗 *یو آر ایل:* ${url}\n\n` +
                      `🔥 *Powered by Lynx Bot*`;

      // Send video
      await famofc.sendMessage(m.chat, {
        video: { url: videoUrl }
        
      }, { quoted: m });

      // Send success reaction
      await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } else {
      await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return m.reply(`❌ *ویڈیو نہیں ملی!* براہ کرم اپنا انسٹاگرام لنک چیک کریں۔\n\n🔥 *Powered by Lynx Bot*`);
    }
  } catch (error) {
    console.error("Instagram Downloader Error:", error);
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ *خرابی:* ڈاؤن لوڈنگ کے دوران کچھ غلط ہو گیا۔ ${error.message || "براہ کرم دوبارہ کوشش کریں۔"}\n\n🔥 *Powered by Lynx Bot*`);
  }
}
break;
case 'req3': {
  const waifuImages = [
    'https://files.catbox.moe/3rtvux.jpg',
    'https://files.catbox.moe/lo2ykk.jpg',
    'https://files.catbox.moe/v5ks10.jpg',
    'https://files.catbox.moe/oawwlm.jpg',
    'https://files.catbox.moe/jgf5gm.jpg',
    'https://files.catbox.moe/c2kief.jpg'
  ];

  let [topText, bottomText, thirdText] = text.split("|").map(v => v?.trim());

  if (!topText) return m.reply(`⚠️ Text cannot be empty!\n\nExample:\n.qcimg Asep Murid Kyy|famofc|©famofcGithub`);

  try {
    const randomBg = waifuImages[Math.floor(Math.random() * waifuImages.length)];
    const bg = await loadImage(randomBg);
    const canvas = createCanvas(bg.width, bg.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.drawImage(bg, 0, 0);

    // Main text
    ctx.font = 'bold 34px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.fillText(topText, 450, 215);

    // Second text
    if (bottomText) {
      ctx.font = 'italic bold 24px Arial';
      ctx.fillText(bottomText, 450, 265);
    }

    // Third text
    if (thirdText) {
      ctx.font = 'normal 20px Arial';
      ctx.fillText(thirdText, 450, 295);
    }

    const buffer = canvas.toBuffer();

    // Send to channel
    await famofc.sendMessage('120363390114292114@newsletter', {
      image: buffer,
      caption: "🖼️ *Request Successful*"
    });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Failed to create image:\n${e.message}`);
  }
}
break;
   case 'qcimg': {
  const waifuImages = [
    'https://files.catbox.moe/3rtvux.jpg',
    'https://files.catbox.moe/lo2ykk.jpg',
    'https://files.catbox.moe/v5ks10.jpg',
    'https://files.catbox.moe/oawwlm.jpg',
    'https://files.catbox.moe/jgf5gm.jpg',
    'https://files.catbox.moe/c2kief.jpg'
  ];

  let [topText, bottomText, thirdText] = text.split("|").map(v => v?.trim());

  if (!topText) return m.reply(`⚠️ Text cannot be empty!\n\nExample:\n.qcimg I am strong|But tired|Lol`);

  try {
    const randomBg = waifuImages[Math.floor(Math.random() * waifuImages.length)];
    const bg = await loadImage(randomBg);
    const canvas = createCanvas(bg.width, bg.height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.drawImage(bg, 0, 0);

    // Main text
    ctx.font = 'bold 34px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.fillText(topText, 450, 215);

    // Second text
    if (bottomText) {
      ctx.font = 'italic bold 24px Arial';
      ctx.fillText(bottomText, 450, 265);
    }

    // Third text
    if (thirdText) {
      ctx.font = 'normal 20px Arial';
      ctx.fillText(thirdText, 450, 295);
    }

    const buffer = canvas.toBuffer();
    await famofc.sendMessage(m.chat, {
      image: buffer,
      caption: "🖼️ *Successfully created quote image!*"
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Failed to create image:\n${e.message}`);
  }
}
break;
    case 'sitiquote': {
  const { createCanvas, loadImage } = require('canvas');
  const axios = require('axios');

  if (!text) return m.reply('📌 Example:\n.sitiquote It’s better to live with Xavier than to suffer.');

  try {
    const bgUrl = 'https://files.catbox.moe/szc3hz.jpg';
    const { data: bgBuffer } = await axios.get(bgUrl, { responseType: 'arraybuffer' });
    const bgImg = await loadImage(bgBuffer);

    const canvas = createCanvas(bgImg.width, bgImg.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bgImg, 0, 0);

    const fontSize = 32;
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    const maxWidth = canvas.width * 0.8;
    const x = canvas.width / 2;

    const yStart = canvas.height * 0.13;
    const lineHeight = fontSize + 10;
    const lines = wrapText(ctx, text, maxWidth);
    const totalHeight = lines.length * lineHeight;

    const rectPadding = 24;
    const rectY = yStart - 15;
    const rectX = canvas.width * 0.1;
    const rectW = canvas.width * 0.8;
    const rectH = totalHeight + rectPadding;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(rectX, rectY, rectW, rectH);

    ctx.fillStyle = '#ffffff';
    lines.forEach((line, i) => {
      ctx.fillText(line, x, yStart + i * lineHeight);
    });

    const buffer = canvas.toBuffer();
    await famofc.sendMessage(m.chat, {
      image: buffer,
      caption: ' *Siti Quote by famofc!*'
    }, { quoted: m });

  } catch (e) {
    console.error('[sitiquote ERROR]', e);
    m.reply('❌ Failed to create Siti Quote image.');
  }

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (let word of words) {
      const testLine = line + word + ' ';
      if (ctx.measureText(testLine).width > maxWidth) {
        lines.push(line.trim());
        line = word + ' ';
      } else {
        line = testLine;
      }
    }
    if (line) lines.push(line.trim());
    return lines;
  }
}
break;
 case 'fakengl2': {
  const { createCanvas, loadImage } = require('canvas');
  const axios = require('axios');

  if (!text) return m.reply('📌 Example:\n.fakengl Lynx Wibu');

  try {
    const bgUrl = 'https://files.catbox.moe/lbyyov.jpg';
    const { data: bgBuffer } = await axios.get(bgUrl, { responseType: 'arraybuffer' });
    const bgImg = await loadImage(bgBuffer);

    const canvas = createCanvas(bgImg.width, bgImg.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bgImg, 0, 0);

    const fontSize = 64;
    ctx.font = `bold ${fontSize}px "Arial Black", Arial, sans-serif`;
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';

    const maxWidth = canvas.width * 0.8;
    const x = canvas.width / 2;
    const yStart = canvas.height * 0.595;

    const lines = wrapText(ctx, text, maxWidth);
    const lineHeight = fontSize + 12;

    lines.forEach((line, i) => {
      ctx.fillText(line, x, yStart + i * lineHeight);
    });

    const buffer = canvas.toBuffer();
    await famofc.sendMessage(m.chat, {
      image: buffer,
      caption: '*Fake NGL by Lynx Successful*'
    }, { quoted: m });

  } catch (err) {
    console.error('[fakengl ERROR]', err);
    m.reply('❌ Failed to create Fake NGL image.');
  }

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (let word of words) {
      const testLine = line + word + ' ';
      if (ctx.measureText(testLine).width > maxWidth) {
        lines.push(line.trim());
        line = word + ' ';
      } else {
        line = testLine;
      }
    }
    if (line) lines.push(line.trim());
    return lines;
  }
}
break;
case 'fb':
case 'facebook': {
  let url = text.trim();

  // Extract URL from quoted message in group if no URL provided
  if (!url && m.quoted && m.chat.endsWith('@g.us')) {
    url = m.quoted.text?.trim() || '';
  }

  // Validate URL
  if (!url) {
    return m.reply(`❌ Please provide a Facebook video link!\nExample: ${prefix}fb https://fb.watch/xyz`);
  }

  if (!url.includes('facebook.com') && !url.includes('fb.watch')) {
    return m.reply(`❌ Invalid URL! Must be a Facebook link (facebook.com or fb.watch).`);
  }

  await famofc.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    const axios = require('axios');
    const apiUrl = `https://tcs-demonic2.vercel.app/api/fbdownloader?url=${encodeURIComponent(url)}`;
    const response = await axios.get(apiUrl, { headers: { Accept: '*/*' }, timeout: 10000 });
    const data = response.data;

    if (!data.success || !data.data.success) {
      throw new Error(data.message || 'Failed to fetch video links.');
    }

    const { hdlink, sdlink } = data.data;
    const videoUrl = hdlink || sdlink;

    if (!videoUrl) {
      throw new Error('No video links available.');
    }

    // Fetch video as buffer
    const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const videoBuffer = Buffer.from(videoResponse.data);

    // Check file size (WhatsApp limit ~100MB)
    const fileSizeMB = videoBuffer.length / (1024 * 1024);
    if (fileSizeMB <= 100) {
      await famofc.sendMessage(m.chat, {
        video: videoBuffer,
        caption: `✅ *Facebook Video Downloaded!*\n\n` +
                 `📽 *Quality*: ${hdlink ? 'HD' : 'SD'}\n` +
                 `🔗 *URL*: ${url}\n` +
                 `🔍 *Powered by FamOFC*`
      }, { quoted: m });
    } else {
      let message = `⚠ *Video too large (${fileSizeMB.toFixed(2)} MB)!*\n\n` +
                    `🎥 *Facebook Video Links:*\n`;
      if (hdlink) message += `📽 *HD*: ${hdlink}\n`;
      if (sdlink) message += `📽 *SD*: ${sdlink}\n`;
      message += `\n🔗 *URL*: ${url}\n🔍 *Powered by FamOFC*`;
      await m.reply(message);
      await famofc.sendMessage(m.chat, { react: { text: '⚠', key: m.key } });
    }

    await famofc.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (error) {
    console.error("Facebook Downloader Error:", error.message);
    await famofc.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    await m.reply(`❌ Error: ${error.message || 'Failed to download video. Please try again.'}`);
  }
}
break;
  case 'attendance':
case 'checkin': {
  if (!m.isGroup) return famofc.sendMessage(m.chat, { text: "This feature can only be used in groups." }, { quoted: m });
  if (!m.isAdmin && m.isGroup) return famofc.sendMessage(m.chat, { text: "Only admins can use this feature." }, { quoted: m });

  const metadata = await famofc.groupMetadata(m.chat);
  const groupName = metadata.subject || 'Unknown Group';
  const participants = metadata.participants.map(p => p.id).filter(Boolean);

  // Format local time for Asia/Jakarta
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(now);

  const day = parts.find(p => p.type === 'weekday')?.value || '-';
  const date = parts.filter(p => ['day', 'month', 'year'].includes(p.type)).map(p => p.value).join(' ');
  const time = parts.filter(p => ['hour', 'minute'].includes(p.type)).map(p => p.value).join(':') + ' WIB';

  const attendanceText = `*DAILY ATTENDANCE!!*\n*PLEASE FILL THE ATTENDANCE BELOW 📢*

🏠 *GROUP:* ${groupName}
🌏 *DAY:* ${day}
📆 *DATE:* ${date}
🕒 *TIME:* ${time}`;

  await famofc.sendMessage(m.chat, {
    text: attendanceText,
    mentions: participants
  }, { quoted: m });

  await famofc.sendMessage(m.chat, {
    poll: {
      name: "Today's Attendance ✅",
      values: [
        "Present ✋",
        "Excused 📄",
        "Sick 🤒",
        "Absent ❌"
      ],
      selectableCount: 1
    }
  }, { quoted: m });

  break;
}

case 'tagme':
case 'tag': {
  if (!m.isGroup) return m.reply('❗ This feature can only be used in groups!');

  if (command == 'tag') {
    if (!text) return m.reply('❗ Enter the number to tag!');

    const number = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await famofc.sendMessage(m.chat, {
      text: `Hey buddy @${number.split('@')[0]}`,
      mentions: [number]
    }, { quoted: m });

  } else {
    const sender = m.sender;
    await famofc.sendMessage(m.chat, {
      text: `@${sender.split('@')[0]}`,
      mentions: [sender]
    }, { quoted: m });
  }
}
break;

case 'onautores': {
  if (!autoresData.autores.includes(m.chat)) {
    autoresData.autores.push(m.chat);
    fs.writeFileSync(autoresFile, JSON.stringify(autoresData, null, 2));
    m.reply('✅ Owner Auto Response activated!');
  } else m.reply('Already active.');
  break;
}

case 'offautores': {
  if (autoresData.autores.includes(m.chat)) {
    autoresData.autores = autoresData.autores.filter(id => id !== m.chat);
    fs.writeFileSync(autoresFile, JSON.stringify(autoresData, null, 2));
    m.reply('❎ Owner Auto Response deactivated!');
  } else m.reply('Not active yet.');
  break;
}

case 'tagboom': {
  if (!m.isAdmin && !isOwner) return m.reply('This feature is only for group admins!');

  if (!text.includes('|')) return m.reply('❗ Incorrect format.\nExample: *.tagboom @user|5*');

  let match = text.match(/@(\d{9,15})\|(\d+)/);
  if (!match) return m.reply('❗ Invalid tag format.\nExample: *.tagboom @user|5*');

  let target = match[1] + '@s.whatsapp.net';
  let count = parseInt(match[2]);

  if (isNaN(count) || count < 1 || count > 20) return m.reply('❗ Count must be between 1 - 20.');

  for (let i = 0; i < count; i++) {
    await famofc.sendMessage(m.chat, {
      text: `💥 Boom boom tag!!\n@${match[1]}`,
      mentions: [target]
    });
    await delay(1500);
  }
}
break;

case 'creategroup':
case 'makegroup': {
  if (!isOwner && !m.isAdmin) return m.reply('❌ This feature is only for group admins or bot owners!');
  if (!text) return m.reply('⚠️ Enter the name of the group to create!\nExample: *.creategroup New Group Name*');
  if (typeof famofc.groupCreate !== "function") return m.reply('❌ groupCreate is not available in the connection object.');

  try {
    // Create group with the user as the only initial member
    const group = await famofc.groupCreate(text, [m.sender]);
    const invite = await famofc.groupInviteCode(group.id);

    await m.reply(
      `✅ *Group successfully created!*\n\n` +
      `📛 *Name:* ${group.subject}\n` +
      `🔗 *Link:* https://chat.whatsapp.com/${invite}\n\n` +
      `⏳ *Join within 30 seconds to be promoted as admin.*`
    );

    // Wait 30 seconds, then promote user to admin
    await sleep(30000);
    await famofc.groupParticipantsUpdate(group.id, [m.sender], 'promote');
    await famofc.sendMessage(group.id, { text: '✅ You have been made a group admin.' });
  } catch (err) {
    console.error(err);
    m.reply(`❌ Failed to create group!\n\n${err.message}`);
  }
  break;
}
case 'img2ios':
case 'iosstyle': {
  if (!m.quoted || !m.quoted.mimetype || !m.quoted.mimetype.includes('image')) {
    return m.reply('❗ Reply to an image with the *img2ios* command');
  }

  try {
    const axios = require('axios');
    const { createCanvas, loadImage } = require('canvas');
    const moment = require('moment-timezone');

    const mediaData = await famofc.downloadMediaMessage(m.quoted);

    const templateURL = 'https://files.catbox.moe/4j4xaj.jpg';
    const templateBuffer = (await axios.get(templateURL, { responseType: 'arraybuffer' })).data;
    const template = await loadImage(templateBuffer);
    const image = await loadImage(mediaData);

    const canvas = createCanvas(template.width, template.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(template, 0, 0);

    const bubbleX = 36;
    const bubbleY = 363;
    const bubbleW = 616;
    const bubbleH = 860;
    const radius = 21;

    const imgRatio = image.width / image.height;
    const bubbleRatio = bubbleW / bubbleH;
    let drawW, drawH;

    if (imgRatio > bubbleRatio) {
      drawH = bubbleH;
      drawW = drawH * imgRatio;
    } else {
      drawW = bubbleW;
      drawH = drawW / imgRatio;
    }

    const offsetX = bubbleX - (drawW - bubbleW) / 2;
    const offsetY = bubbleY - (drawH - bubbleH) / 2;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(bubbleX + radius, bubbleY);
    ctx.lineTo(bubbleX + bubbleW - radius, bubbleY);
    ctx.quadraticCurveTo(bubbleX + bubbleW, bubbleY, bubbleX + bubbleW, bubbleY + radius);
    ctx.lineTo(bubbleX + bubbleW, bubbleY + bubbleH - radius);
    ctx.quadraticCurveTo(bubbleX + bubbleW, bubbleY + bubbleH, bubbleX + bubbleW - radius, bubbleY + bubbleH);
    ctx.lineTo(bubbleX + radius, bubbleY + bubbleH);
    ctx.quadraticCurveTo(bubbleX, bubbleY + bubbleH, bubbleX, bubbleY + bubbleH - radius);
    ctx.lineTo(bubbleX, bubbleY + radius);
    ctx.quadraticCurveTo(bubbleX, bubbleY, bubbleX + radius, bubbleY);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(image, offsetX, offsetY, drawW, drawH);
    ctx.restore();

    const time = moment().tz('Asia/Jakarta').format('HH.mm');
    ctx.font = '25px sans-serif';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'right';
    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowBlur = 3;
    ctx.fillText(time, bubbleX + bubbleW - 20, bubbleY + bubbleH - 30);

    const buffer = canvas.toBuffer();

    await famofc.sendMessage(m.chat, {
      image: buffer,
      caption: '✅ iOS style applied.'
    }, { quoted: m });

  } catch (err) {
    console.error('[IMG2IOS ERROR]', err);
    m.reply('❌ Failed to create iOS style.\n' + err.message);
  }
}
break;

case 'playch': {
  if (!isOwner) return m.reply(msg.owner);
  if (!args[0]) return m.reply('⚠️ Enter the MP3 audio link!\n\nExample: .playch https://example.com/audio.mp3');

  const query = args.join(' ');
  if (!query.endsWith('.mp3')) return m.reply('❌ The provided link is not an MP3 file.');

  const idChannel = '120363390114292114@newsletter'; // ← Replace with your channel ID

  try {
    await famofc.sendMessage(idChannel, {
      audio: { url: query },
      mimetype: 'audio/mpeg',
      ptt: true,
      contextInfo: {
        externalAdReply: {
          title: "✦ ⏤͟͟͞͞ Lynx Bot=",
          body: "🌀 playch",
          thumbnailUrl: "https://c.termai.cc/i46/Ezr",
          mediaUrl: "https://whatsapp.com/channel/0029Vb2pMIt1NCrUCy9Q0f3C",
          renderLargerThumbnail: false,
          mediaType: 2
        },
        forwardingScore: 1999,
        isForwarded: true
      }
    });

    let resultText = '✅ `Audio successfully sent to channel.`';
    await famofc.sendMessage(m.chat, {
      text: resultText,
      contextInfo: {
        externalAdReply: {
          title: "✦ ⏤͟͟͞͞ Lynx Bot=",
          body: "🌀 playch",
          thumbnailUrl: "https://fam-official.serv00.net/script12/fampng/fam.jpg",
          mediaUrl: "https://chat.whatsapp.com/HrkwWzIrhHI8ANbUNUz2iq?mode=r_",
          renderLargerThumbnail: false,
          mediaType: 2
        },
        forwardingScore: 19,
        isForwarded: true
      }
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('❌ Failed to send audio to channel.');
  }
}
break;

case 'listpc': {
  if (!m.isGroup && !m.isAdmin && !isOwner) return m.reply('❌ This feature is only for *Group Admins* or *Owners*!');

  let anu = Object.keys(store.messages).filter(a => a.endsWith('.net') || a.endsWith('.lid'));
  let text = `● *LIST PERSONAL CHATS*\n\nTotal Chats: ${anu.length} Chats\n\n`;

  if (anu.length === 0) return m.reply(text);

  for (let i of anu) {
    if (store.messages?.[i]?.array?.length) {
      let name = famofc.getName(i) || 'Unknown';
      text += `➤ *Name:* ${name}\n➤ *User:* @${i.split('@')[0]}\n➤ *Chat:* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`;
    }
  }
  m.reply(text, null, {
    mentions: anu.map(j => j)
  });
}
break;

case 'listadmin':
case 'admin':
case 'atmin': {
  if (!m.isGroup) return m.reply('❌ This feature can only be used in groups!');

  try {
    await famofc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    const metadata = await famofc.groupMetadata(m.chat);
    const participants = metadata.participants;
    const botNumber = famofc.user.id;

    const admins = participants.filter(p => p.admin);
    const mentions = admins.map(p => p.id);

    const owner = admins.find(p => p.id === metadata.owner);
    const bot = admins.find(p => p.id === botNumber);
    const others = admins.filter(p => ![metadata.owner, botNumber].includes(p.id));

    let text = `╭━━〔 *Group Admin List* 〕\n┃    ${metadata.subject}\n┃\n`;
    let no = 1;

    if (owner) text += `┃ ${no++}. 👑 Owner: @${owner.id.split('@')[0]}\n`;
    if (bot) text += `┃ ${no++}. 🤖 Bot: @${bot.id.split('@')[0]}\n`;
    for (const p of others) {
      text += `┃ ${no++}. 👤 Admin: @${p.id.split('@')[0]}\n`;
    }

    text += `┃\n╰━━━━━━━━━━─⊷\n> Lynx [吉田 四郎]`;

    await famofc.sendMessage(m.chat, {
      text,
      mentions
    }, { quoted: m });

  } catch (err) {
    console.error('❌ List Admin Error:', err);
    m.reply('⚠️ Failed to retrieve admin data. Ensure the bot is not restricted from accessing metadata.');
  }
}
break;

case 'setppgc':
case 'ppgc': {
  if (!m.isGroup) return m.reply('❌ Can only be used in groups.');
  if (!m.isBotAdmin) return m.reply('❌ Bot is not a group admin!');
  if (!m.isAdmin) return m.reply('❌ You are not a group admin!');
  if (!quoted || !/image/.test(mime)) return m.reply('❌ Reply to the image you want to set as the group profile picture.');

  let media = await quoted.download();
  await famofc.updateProfilePicture(m.chat, media).then(() => {
    m.reply('✅ Group profile picture successfully updated.');
  }).catch((err) => {
    console.error(err);
    m.reply('❌ Failed to update group profile picture.');
  });
}
break;

case 'promote': {
  if (!m.isGroup) return m.reply('❌ Only for groups!');
  if (!m.isAdmin) return m.reply('❌ Only admins can promote others.');
  if (!m.isBotAdmin) return m.reply('❌ Bot must be an admin.');

  if (!m.quoted) return m.reply('❌ Reply to the user’s message you want to promote.');

  let target = m.quoted.sender;
  await famofc.groupParticipantsUpdate(m.chat, [target], 'promote');
  m.reply(`✅ Successfully promoted: @${target.split('@')[0]}`, null, { mentions: [target] });
}
break;

case 'demote': {
  if (!m.isGroup) return m.reply('❌ Only for groups!');
  if (!m.isAdmin) return m.reply('❌ Only admins can demote others.');
  if (!m.isBotAdmin) return m.reply('❌ Bot must be an admin.');

  if (!m.quoted) return m.reply('❌ Reply to the user’s message you want to demote.');

  let target = m.quoted.sender;
  await famofc.groupParticipantsUpdate(m.chat, [target], 'demote');
  m.reply(`✅ Successfully demoted: @${target.split('@')[0]}`, null, { mentions: [target] });
}
break;

case 'resetlink':
case 'revokeinvitelink':
case 'revokelink': {
  if (!m.isGroup) return m.reply('❌ This feature is only for groups.');
  if (!m.isBotAdmin) return m.reply('❌ Bot must be an admin to reset the group link.');

  await famofc.groupRevokeInvite(m.chat);
  m.reply('✅ Group link successfully reset.\nType *.linkgc* to see the new link.');
}
break;

case 'linkgc':
case 'linkgroup': {
  if (!m.isGroup) return m.reply('❌ This command can only be used in groups!');
  if (!m.isBotAdmin) return m.reply('❌ Bot is not a group admin!');

  let response = await famofc.groupInviteCode(m.chat);
  let metadata = await famofc.groupMetadata(m.chat);

  if (!metadata.announce) {
    m.reply(`🔗 Group Link:\nhttps://chat.whatsapp.com/${response}`);
  } else {
    m.reply('❌ This group is private, link not available.');
  }
}
break;

case 'whois': {
  if (!m.isGroup) return m.reply('❌ This feature can only be used in groups.');

  let target;
  if (m.mentionedJid && m.mentionedJid.length > 0) {
    target = m.mentionedJid[0];
  } else if (m.quoted && m.quoted.sender) {
    target = m.quoted.sender;
  } else {
    return m.reply('❌ Reply to a member you want to check.\nExample: *.whois reply to message*');
  }

  const user = await famofc.onWhatsApp(target);
  const pp = await famofc.profilePictureUrl(target, 'image').catch(() => 'https://telegra.ph/file/6880771c1b3fa5b4dfb3e.jpg');
  const name = await famofc.getName(target);
  const bio = (await famofc.fetchStatus(target).catch(() => {}))?.status || '-';

  const text = `❏ *User Information*
- Name: ${name}
- Number: wa.me/${target.split("@")[0]}
- Bio: ${bio}`;

  famofc.sendMessage(m.chat, {
    image: { url: pp },
    caption: text
  }, { quoted: m });
}
break;

case 'listgcp':
case 'listgroup':
case 'listgc': {
  if (!isOwner) return m.reply('❌ This feature is only for Owners.');

  try {
    const groups = Object.values(await famofc.groupFetchAllParticipating());
    if (!groups || groups.length === 0) return m.reply('❌ Bot is not in any groups.');

    let text = `┌──⭓ *📋 LIST OF JOINED GROUPS*\n│\n`;
    let total = 0;

    for (let i = 0; i < groups.length; i++) {
      const g = groups[i];
      text += `│ *${i + 1}. ${g.subject}*\n`;
      text += `│ ├ 🆔 ID: ${g.id}\n`;
      text += `│ ├ 👥 Members: ${g.participants.length} people\n`;
      text += `│ ├ 🔐 Status: ${g.announce ? '🔒 Closed' : '🔓 Open'}\n`;
      text += `│ └ 👤 Creator: ${g.owner ? '@' + g.owner.split('@')[0] : 'Unknown / Left'}\n│\n`;
      total++;
    }

    text += `└──⭓ *Total Groups:* ${total} groups`;

    m.reply(text);
  } catch (err) {
    console.error(err);
    m.reply('❌ Failed to retrieve group list.');
  }
}
break;

case 'ppsdmtinggi': {
  if (!m.quoted || !/image/.test(mime)) return m.reply('Reply to an image with caption *.ppsdmtinggi*');

  try {
    await famofc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

    const buffer = await famofc.downloadMediaMessage(m.quoted);
    const link = await catbox(buffer);
    const result = `https://zenzxz.dpdns.org/maker/tosdmtinggi?url=${encodeURIComponent(link)}`;

    await famofc.sendMessage(m.chat, {
      image: { url: result },
      caption: "Congratulations, you have become a person with high SDM 😳🥶🥶🥶🤓"
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Failed to create high SDM profile picture\n\n• *Error:*\n${e.message}\n\n> Report to owner immediately`);
  }
}
break;

case 'fakexnxx': {
  if (!text.includes('|')) return m.reply(`❌ Incorrect format!\n\nExample:\n.fakexnxx Yoshi|BuKaTiTiJozZ|69|420`);

  try {
    let [name, quote, likes, dislikes] = text.split('|').map(v => v.trim());

    if (!name || !quote || !likes || !dislikes)
      return m.reply(`❌ Incomplete format!\n\nUse:\n.fakexnxx Name|Quote|Likes|Dislikes`);

    await famofc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    const apiURL = `https://api.siputzx.my.id/api/canvas/fake-xnxx?name=${encodeURIComponent(name)}&quote=${encodeURIComponent(quote)}&likes=${encodeURIComponent(likes)}&dislikes=${encodeURIComponent(dislikes)}`;

    await famofc.sendMessage(m.chat, {
      image: { url: apiURL },
      caption: `✅ *Fake-XNXX Generated:*\n\n👤 *Name:* ${name}\n💬 *Quote:* ${quote}\n👍 *Likes:* ${likes}\n👎 *Dislikes:* ${dislikes}`
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Failed to create image!\n\n• *Error:*\n${e.message || e}\n\n> Try again later.`);
  }
}
break;

case 'qcimg2': {
  if (!text) return m.reply(`Send command like\n.qcimg2 Your text`);

  const { createCanvas, loadImage } = require('canvas');

  try {
    const background = await loadImage('https://c.termai.cc/i86/rj9');
    const canvas = createCanvas(background.width, background.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(background, 0, 0);

    const lines = text.split(/[\n|]+/);
    const topText = lines[0]?.trim() || '';
    const bottomText = lines[1]?.trim() || '';

    const x = 540; // Shifted left from 560 → 540
    const topY = 215; // Higher position
    const bottomY = 265;

    // Top text
    ctx.font = 'bold 34px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'left';
    ctx.fillText(topText, x, topY);

    // Bottom text
    if (bottomText) {
      ctx.font = 'italic 24px Arial';
      ctx.fillStyle = '#cccccc';
      ctx.fillText(bottomText, x, bottomY);
    }

    const buffer = canvas.toBuffer();
    await famofc.sendMessage(m.chat, { image: buffer }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Failed to create image:\n${e.message}`);
  }
}
break;

case 'wifecheck':
case 'wifecek': {
  const qmsg = m.quoted ? m.quoted : m;
  const mime = (qmsg.msg || qmsg).mimetype || qmsg.mimetype || '';

  if (!mime.includes('image')) {
    return m.reply('❌ Send or reply to an image with caption *wifecheck*');
  }

  try {
    await famofc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });

    const buffer = await famofc.downloadMediaMessage(qmsg);
    const userImg = await loadImage(buffer);
    const template = await loadImage('https://files.catbox.moe/ns0e1n.jpg');

    const canvas = createCanvas(template.width, template.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(template, 0, 0);

    const boxX = 740;
    const boxY = 380;
    const boxWidth = 600;
    const boxHeight = 600;

    const aspect = userImg.width / userImg.height;
    let srcX, srcY, srcW, srcH;

    if (aspect > boxWidth / boxHeight) {
      srcH = userImg.height;
      srcW = srcH * (boxWidth / boxHeight);
      srcX = (userImg.width - srcW) / 2;
      srcY = 0;
    } else {
      srcW = userImg.width;
      srcH = srcW / (boxWidth / boxHeight);
      srcX = 0;
      srcY = (userImg.height - srcH) / 2;
    }

    ctx.shadowColor = '#00FFFF';
    ctx.shadowBlur = 25;

    ctx.drawImage(
      userImg,
      srcX, srcY, srcW, srcH,
      boxX, boxY, boxWidth, boxHeight
    );

    const result = canvas.toBuffer('image/png');

    await famofc.sendMessage(m.chat, {
      image: result,
      caption: '✅ Wife detector activated!'
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply(`❌ Failed to create image.\n\n• *Error:* ${err.message}`);
  }
}
break;

case 'emojimix': {
  if (!text.includes('+')) return m.reply(`Example: ${prefix}emojimix 😍+😭`);
  let [emoji1, emoji2] = text.split('+');

  try {
    let code1 = emoji1.codePointAt(0).toString(16);
    let code2 = emoji2.codePointAt(0).toString(16);
    let res = await fetch(`https://emojik.vercel.app/s/${code1}_${code2}?size=128`);
    let buffer = await res.buffer();

    const { Sticker, StickerTypes } = require('wa-sticker-formatter');
    const sticker = new Sticker(buffer, {
      pack: packname,
      author: author,
      type: StickerTypes.FULL
    });

    const stickerBuffer = await sticker.toBuffer();
    await famofc.sendMessage(m.chat, {
      sticker: stickerBuffer
    }, { quoted: m });

  } catch (err) {
    m.reply(`❌ Error occurred:\n${err.message}`);
  }
}
break;

case 'req': {
  if (!text) {
    await famofc.sendMessage(m.chat, {
      text: '❗ Incorrect format!\nExample: .req your message|right'
    }, { quoted: m });
    break;
  }

  const [message, positionRaw] = text.split('|').map(v => v?.trim());
  const position = positionRaw?.toLowerCase() === 'right' ? 'right' : 'left';

  if (!message) {
    await famofc.sendMessage(m.chat, {
      text: '❌ Message is empty!'
    }, { quoted: m });
    break;
  }

  if (message.length > 60) {
    await famofc.sendMessage(m.chat, {
      text: '❌ Maximum 60 characters!'
    }, { quoted: m });
    break;
  }

  const now = new Date();
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now);

  const apiUrl = `https://velyn.mom/api/maker/iqc?message=${encodeURIComponent(message)}&position=${position}&jam=${encodeURIComponent(time)}`;

  // Send to channel
  await famofc.sendMessage("120363390114292114@newsletter", {
    image: { url: apiUrl },
    caption: `🆕 *New Request!*\n\n💬 Message: *${message}*\n📍 Position: *${position === 'right' ? 'right' : 'left'}*\n⏰ Time: *${time}*`
  });

  // Reply to sender
  await famofc.sendMessage(m.chat, {
    text: `✅ Your request has been sent to the channel!\nMessage: *${message}*\nPosition: *${position === 'right' ? 'right' : 'left'}*`
  }, { quoted: m });

  break;
}
case 'ph':
case 'pornhub': {
  if (!text || !text.includes('|')) {
    await famofc.sendMessage(m.chat, { text: `Example: .${command} Kyy|hub` }, { quoted: m });
    break;
  }

  let [text1, text2] = text.split('|').map(v => v.trim());
  if (!text1 || !text2) {
    await famofc.sendMessage(m.chat, { text: '❗ Both texts cannot be empty!\nExample: .ph yoshi|hub' }, { quoted: m });
    break;
  }

  try {
    let api = `https://apikey.sazxofficial.web.id/api/imagecreator/pornhub?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
    let res = await fetch(api);
    let json = await res.json();

    if (!json.status || !json.result) {
      await famofc.sendMessage(m.chat, { text: '❌ Failed to retrieve image from API.' }, { quoted: m });
      break;
    }

    await famofc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    await famofc.sendMessage(m.chat, {
      image: { url: json.result },
      caption: `✅ *Successfully created Pornhub logo!*\n\n• *Text1:* ${text1}\n• *Text2:* ${text2}`
    }, { quoted: m });

  } catch (err) {
    await famofc.sendMessage(m.chat, { text: '❌ An error occurred while processing the request.' }, { quoted: m });
  }
}
break;

case 'brat2': {
  if (!text) return m.reply(example('your text'));
  try {
    const axios = require('axios');
    const { tmpdir } = require('os');
    const { join } = require('path');
    const fs = require('fs');
    const { spawn } = require('child_process');
    const videoUrl = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}&mode=animated`;
    const res = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const tmpMp4 = join(tmpdir(), `brat-${Date.now()}.mp4`);
    const tmpWebp = join(tmpdir(), `brat-${Date.now()}.webp`);
    fs.writeFileSync(tmpMp4, res.data);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
        '-i', tmpMp4,
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '0',
        '-t', '6',
        '-an',
        '-vsync', '0',
        '-s', '512x512',
        '-f', 'webp',
        tmpWebp
      ]);
      ffmpeg.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error('FFmpeg failed with code ' + code));
      });
    });
    const stickerBuffer = fs.readFileSync(tmpWebp);
    await famofc.sendMessage(m.chat, {
      sticker: stickerBuffer,
      packname: global.packname,
      author: global.author,
    }, { quoted: m });
    fs.unlinkSync(tmpMp4);
    fs.unlinkSync(tmpWebp);
  } catch (err) {
    console.error("Error:", err);
    m.reply('Failed to create animated sticker. Try again later.');
  }
}
break;

case 'play': {
  if (!text) return m.reply('Enter the song title or YouTube link to search!');
  try {
    const axios = require('axios');
    const fs = require('fs');
    const path = require('path');
    await famofc.sendMessage(m.chat, { react: { text: "🌿", key: m.key } });
    let apiUrl = `https://api.alvianuxio.eu.org/api/play?query=${encodeURIComponent(text)}&apikey=kayzuMD&format=mp3`;
    let { data } = await axios.get(apiUrl, { timeout: 15000 });
    if (!data || !data.data || !data.data.response) {
      return m.reply('Failed to find the song.');
    }
    let song = data.data.response;
    let caption = `🎵 *Title:* ${song.title}\n`
      + `⏳ *Duration:* ${song.duration}\n`
      + `📅 *Uploaded:* ${song.uploadDate}\n`
      + `👀 *Views:* ${song.views?.toLocaleString() || 'N/A'}\n`
      + `🎤 *Channel:* ${song.channel?.name || 'Unknown'}\n`
      + `🔗 *Video:* ${song.videoUrl}\n`
      + `🎧 *Download:* ${song.download}`;
    const videoId = song.videoUrl.includes('v=') ? song.videoUrl.split('v=')[1].split('&')[0] : null;
    const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
    await famofc.sendMessage(m.chat, {
      text: caption,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: song.title,
          body: `Music Player`,
          mediaType: 1,
          thumbnailUrl: thumbnailUrl,
          sourceUrl: song.videoUrl
        }
      }
    }, { quoted: m });
    const sanitizedTitle = song.title.replace(/[^\w\s-]/gi, '_').substring(0, 50);
    let audioPath = path.join(__dirname, `temp_${Date.now()}_${sanitizedTitle}.mp3`);
    try {
      const response = await axios({
        method: 'get',
        url: song.download,
        responseType: 'arraybuffer',
        timeout: 60000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      if (!response.data || response.data.length === 0) {
        throw new Error('Empty response data');
      }
      fs.writeFileSync(audioPath, Buffer.from(response.data));
      try {
        await famofc.sendMessage(m.chat, {
          audio: fs.readFileSync(audioPath),
          mimetype: 'audio/mpeg',
          fileName: `${sanitizedTitle}.mp3`,
        }, { quoted: m });
      } catch (audioSendError) {
        await famofc.sendMessage(m.chat, {
          document: fs.readFileSync(audioPath),
          mimetype: 'audio/mpeg',
          fileName: `${sanitizedTitle}.mp3`,
        }, { quoted: m });
      }
      if (fs.existsSync(audioPath)) {
        fs.unlinkSync(audioPath);
      }
      await famofc.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
    } catch (downloadError) {
      try {
        const alternativeUrl = `https://api.akuari.my.id/downloader/youtube?link=${song.videoUrl}`;
        const altResponse = await axios.get(alternativeUrl);
        if (altResponse.data && altResponse.data.mp3) {
          const audioResponse = await axios({
            method: 'get',
            url: altResponse.data.mp3,
            responseType: 'arraybuffer',
            timeout: 60000
          });
          audioPath = path.join(__dirname, `temp_alt_${Date.now()}_${sanitizedTitle}.mp3`);
          fs.writeFileSync(audioPath, Buffer.from(audioResponse.data));
          await famofc.sendMessage(m.chat, {
            document: fs.readFileSync(audioPath),
            mimetype: 'audio/mpeg',
            fileName: `${sanitizedTitle}.mp3`,
          }, { quoted: m });
          if (fs.existsSync(audioPath)) {
            fs.unlinkSync(audioPath);
          }
          await famofc.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        } else {
          throw new Error('Alternative API failed');
        }
      } catch (altError) {
        if (fs.existsSync(audioPath)) {
          fs.unlinkSync(audioPath);
        }
        m.reply('Failed to download audio. Try again later.');
        await famofc.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
      }
    }
  } catch (error) {
    m.reply('An error occurred while searching or processing the song.');
    await famofc.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
  }
}
break;

case 'faketiktok': {
  if (!text || text.split('|').length < 10) {
    await famofc.sendMessage(m.chat, {
      text: `❌ Incorrect format!\n\nExample:\n.faketiktok shiro|yoshi.nnsi|https://c.termai.cc/i21/F9|true|6.6m|19|53m|no bio yet|false|true\n\nTo convert an image to a link: send an image, then reply with *.catbox*, and copy the link`
    }, { quoted: m });
    break;
  }

  const [
    name, username, ppInput, verified,
    followers, following, likes,
    bio, dark, isFollow
  ] = text.split('|').map(v => v.trim());

  let ppUrl = ppInput || 'https://c.termai.cc/i21/F9';

  const apiUrl = `https://flowfalcon.dpdns.org/imagecreator/faketiktok?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&pp=${encodeURIComponent(ppUrl)}&verified=${verified}&followers=${followers}&following=${following}&likes=${likes}&bio=${encodeURIComponent(bio)}&dark=${dark}&isFollow=${isFollow}`;

  try {
    await famofc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    const res = await fetch(apiUrl);
    const buffer = await res.arrayBuffer();

    await famofc.sendMessage(m.chat, {
      image: Buffer.from(buffer),
      caption: `✅ *Fake TikTok Profile*\n\n• *Name:* ${name}\n• *Username:* ${username}\n• *Followers:* ${followers}\n• *Following:* ${following}\n• *Likes:* ${likes}\n• *Verified:* ${verified}\n• *Dark Mode:* ${dark}\n• *Followed Back:* ${isFollow}\n• *Bio:* ${bio}`
    }, { quoted: m });

  } catch (err) {
    console.error('Error faketiktok:', err);
    await famofc.sendMessage(m.chat, { text: '❌ Failed to create fake TikTok profile.' }, { quoted: m });
  }
}
break;

case 'brat': {
  if (!text) return m.reply(example('your text'));
  try {
    const axios = require('axios');
    const { tmpdir } = require('os');
    const { join } = require('path');
    const fs = require('fs');
    const { spawn } = require('child_process');
    const videoUrl = `https://aqul-brat.hf.space/?text=${encodeURIComponent(text)}&mode=animated`;
    const res = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const tmpMp4 = join(tmpdir(), `brat-${Date.now()}.mp4`);
    const tmpWebp = join(tmpdir(), `brat-${Date.now()}.webp`);
    fs.writeFileSync(tmpMp4, res.data);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
        '-i', tmpMp4,
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '0',
        '-t', '6',
        '-an',
        '-vsync', '0',
        '-s', '512x512',
        '-f', 'webp',
        tmpWebp
      ]);
      ffmpeg.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error('FFmpeg failed with code ' + code));
      });
    });
    const stickerBuffer = fs.readFileSync(tmpWebp);
    await famofc.sendMessage(m.chat, {
      sticker: stickerBuffer,
      packname: global.packname,
      author: global.author,
    }, { quoted: m });
    fs.unlinkSync(tmpMp4);
    fs.unlinkSync(tmpWebp);
  } catch (err) {
    console.error("Error:", err);
    m.reply('Failed to create animated sticker. Try again later.');
  }
}
break;
case "bratvid":
case "bratvideo": {
  if (!text) return m.reply(example('your text'));
  try {
    const axios = require('axios');
    const { tmpdir } = require('os');
    const { join } = require('path');
    const fs = require('fs');
    const { spawn } = require('child_process');
    const videoUrl = `https://brat.termai.cc/animate?text=${encodeURIComponent(text)}&mode=animated`;
    const res = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const tmpMp4 = join(tmpdir(), `brat-${Date.now()}.mp4`);
    const tmpWebp = join(tmpdir(), `brat-${Date.now()}.webp`);
    fs.writeFileSync(tmpMp4, res.data);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
        '-i', tmpMp4,
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '0',
        '-t', '6',
        '-an',
        '-vsync', '0',
        '-s', '512x512',
        '-f', 'webp',
        tmpWebp
      ]);
      ffmpeg.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error('FFmpeg failed with code ' + code));
      });
    });
    const stickerBuffer = fs.readFileSync(tmpWebp);
    await famofc.sendMessage(m.chat, {
      sticker: stickerBuffer,
      packname: global.packname,
      author: global.author,
    }, { quoted: m });
    fs.unlinkSync(tmpMp4);
    fs.unlinkSync(tmpWebp);
  } catch (err) {
    console.error("Error:", err);
    m.reply('Failed to create animated sticker. Try again later.');
  }
}
break;

case "bratanim":
case "bratanime": {
  if (!text) return m.reply(example('your text'));
  try {
    const axios = require('axios');
    const { tmpdir } = require('os');
    const { join } = require('path');
    const fs = require('fs');
    const { spawn } = require('child_process');
    const videoUrl = `https://nirkyy-dev.hf.space/api/v1/bratnime?text=${encodeURIComponent(text)}&mode=animated`;
    const res = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const tmpMp4 = join(tmpdir(), `brat-${Date.now()}.mp4`);
    const tmpWebp = join(tmpdir(), `brat-${Date.now()}.webp`);
    fs.writeFileSync(tmpMp4, res.data);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
        '-i', tmpMp4,
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '0',
        '-t', '6',
        '-an',
        '-vsync', '0',
        '-s', '512x512',
        '-f', 'webp',
        tmpWebp
      ]);
      ffmpeg.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error('FFmpeg failed with code ' + code));
      });
    });
    const stickerBuffer = fs.readFileSync(tmpWebp);
    await famofc.sendMessage(m.chat, {
      sticker: stickerBuffer,
      packname: global.packname,
      author: global.author,
    }, { quoted: m });
    fs.unlinkSync(tmpMp4);
    fs.unlinkSync(tmpWebp);
  } catch (err) {
    console.error("Error:", err);
    m.reply('Failed to create animated sticker. Try again later.');
  }
}
break;

case "idgc": {
  if (!m.isGroup) return m.reply(msg.group);
  return m.reply(m.chat);
}
break;

case "addown":
case "addowner": {
  if (!isOwner) return m.reply(msg.owner);
  if (!text && !m.quoted) return example("6285XX or @tag");
  let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  if (!input) return example("6285XX or @tag");
  if (ownplus.includes(input)) return m.reply(`Number ${input.split("@")[0]} is already registered as an owner!`);
  if (input == botNumber) return m.reply(`Number ${input.split("@")[0]} is already registered as an owner!`);
  if (input.split("@")[0] == global.owner) return m.reply(`Number ${input.split("@")[0]} is already registered as an owner!`);
  await ownplus.push(input);
  await fs.writeFileSync("./data/owner.json", JSON.stringify(ownplus, null, 2));
  return m.reply(`Successfully added ${input.split("@")[0]} as an *owner*`);
}
break;

case "delown":
case "delowner": {
  if (!isOwner) return m.reply(msg.owner);
  if (!text && !m.quoted) return example("6285XX or @tag");
  let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  if (!input) return example("6285XX or @tag");
  if (!ownplus.includes(input)) return m.reply(`Number ${input.split("@")[0]} is not registered as an owner!`);
  if (input == botNumber) return m.reply(`Number ${input.split("@")[0]} is not registered as an owner!`);
  if (input.split("@")[0] == global.owner) return m.reply(`Number ${input.split("@")[0]} is not registered as an owner!`);
  const posi = ownplus.indexOf(input);
  await ownplus.splice(posi, 1);
  await fs.writeFileSync("./data/owner.json", JSON.stringify(ownplus, null, 2));
  return m.reply(`Successfully removed ${input.split("@")[0]} as an *owner*`);
}
break;
case "jpm": {
  if (!isOwner) return m.reply(msg.owner);
  if (!text) return example("your text & photo (optional)");
  let rest;
  if (/image/.test(mime)) {
    rest = await famofc.downloadAndSaveMediaMessage(qmsg);
  }
  const allgrup = await famofc.groupFetchAllParticipating();
  const res = await Object.keys(allgrup);
  let count = 0;
  const ttks = text;
  const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks };
  const jid = m.chat;
  await m.reply(`Processing ${rest !== undefined ? "text & photo jpm" : "text jpm"} to ${res.length} group chats`);
  try {
    await famofc.sendMessage(global.idsaluran, pesancoy);
  } catch {}
  for (let i of res) {
    try {
      await famofc.sendMessage(i, pesancoy, { quoted: qchannel });
      count += 1;
    } catch {}
    await sleep(4000);
  }
  if (rest !== undefined) await fs.unlinkSync(rest);
  await famofc.sendMessage(jid, { text: `Jpm ${rest !== undefined ? "text & photo" : "text"} successfully sent to ${count} groups` }, { quoted: m });
}
break;

case "listgc":
case "listgroup": {
  if (!isOwner) return;
  let teks = ` *── List all group chats*\n`;
  let a = await famofc.groupFetchAllParticipating();
  let gc = Object.values(a);
  teks += `\n* *Total groups:* ${gc.length}\n`;
  for (const u of gc) {
    teks += `\n* *ID:* ${u.id}\n* *Name:* ${u.subject}\n* *Members:* ${u.participants.length}\n* *Status:* ${u.announce == false ? "Open" : "Admin Only"}\n* *Creator:* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Left Group"}\n`;
  }
  return m.reply(teks);
}
break;

case "tourl": {
  if (!/image/.test(mime)) return example("by sending/replying to a photo");
  let media = await famofc.downloadAndSaveMediaMessage(qmsg);
  const { ImageUploadService } = require('node-upload-images');
  const service = new ImageUploadService('pixhost.to');
  let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'imgtmp.png');
  let teks = directLink.toString();
  await famofc.sendMessage(m.chat, { text: teks }, { quoted: m });
  await fs.unlinkSync(media);
}
break;

case "closegc":
case "close":
case "opengc":
case "open": {
  if (!m.isGroup) return m.reply(msg.group);
  if (!isOwner && !m.isAdmin) return m.reply(msg.admin);
  if (!m.isBotAdmin) return m.reply(msg.botadmin);
  if (/open|opengc/.test(command)) {
    if (m.metadata.announce == false) return;
    await famofc.groupSettingUpdate(m.chat, 'not_announcement');
  } else if (/closegc|close/.test(command)) {
    if (m.metadata.announce == true) return;
    await famofc.groupSettingUpdate(m.chat, 'announcement');
  }
}
break;

case "kick":
case "kik": {
  if (!m.isGroup) return m.reply(msg.group);
  if (!isOwner && !m.isAdmin) return m.reply(msg.admin);
  if (!m.isBotAdmin) return m.reply(msg.botadmin);
  if (text || m.quoted) {
    const input = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false;
    var onWa = await famofc.onWhatsApp(input.split("@")[0]);
    if (onWa.length < 1) return m.reply("Number not registered on WhatsApp");
    const res = await famofc.groupParticipantsUpdate(m.chat, [input], 'remove');
  } else {
    return example("@tag/reply");
  }
}
break;

case "ht":
case "hidetag": {
  if (!m.isGroup) return m.reply(msg.group);
  if (!isOwner && !m.isAdmin) return m.reply(msg.admin);
  if (!text) return example("your message");
  let member = m.metadata.participants.map(v => v.id);
  await famofc.sendMessage(m.chat, { text: text, mentions: [...member] }, { quoted: m });
}
break;

case "sticker":
case "stiker":
case "sgif":
case "s": {
  if (!/image|video/.test(mime)) return example("by sending a photo/video");
  if (/video/.test(mime)) {
    if ((qmsg).seconds > 15) return m.reply("Maximum video duration is 15 seconds!");
  }
  m.reply(msg.wait);
  var media = await famofc.downloadAndSaveMediaMessage(qmsg);
  await famofc.sendStimg(m.chat, media, m, { packname: "WhatsApp Bot 2025" });
  await fs.unlinkSync(media);
}
break;

case "public": {
  if (!isOwner) return m.reply(msg.owner);
  famofc.public = true;
  m.reply("Successfully changed bot mode to *Public*");
}
break;

case "self": {
  if (!isOwner) return m.reply(msg.owner);
  famofc.public = false;
  m.reply("Successfully changed bot mode to *Self*");
}
break;
default:
if ((m.text).startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return famofc.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return famofc.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return famofc.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return famofc.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
famofc.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
famofc.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

}} catch (e) {
console.log(e)
famofc.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})