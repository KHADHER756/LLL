let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?
global.thumbt = global.img
global.fsx = 999999999999
global.kontak = [
['917560920774', 'πππππππ₯', true],
['917560920774', 'πππΌπππΌππ π½ππ β΄β°β΄-οΎ [BOT MD]', true]
]
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'Apikeys',
  'https://melcanz.com': 'Apikeys',
  'https://api.lolhuman.xyz': 'Apikeys',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

global.WM = 'πππΌπππΌππ π½ππ-πππππππ₯'
global.linkgc = 'https://chat.whatsapp.com/FhPPp43dYlNLi499ZJuq5X'
global.linkig = 'https://www.instagram.com/khadh3r'
global.deslink = 'https://chat.whatsapp.com/FhPPp43dYlNLi499ZJuq5X'
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'https://telegra.ph/file/5a7adde75e966077a7692.jpg'

global.wait = '_*α΄‘Κα΄α΄κ±α΄α΄α΄ Κα΄α΄ α΄Κα΄α΄α΄κ±κ±ΙͺΙ΄Ι’...*_'
global.eror = '_*.α΄Ι΄ α΄ΚΚα΄Κ α΄α΄α΄α΄Κα΄α΄ Κα΄α΄α΄Κα΄ α΄α΄ α΄α΄‘Ι΄α΄Κ.*_'

//========Url Template Buttons==========//
global.dtu = 'π­πππππ'
global.urlnya = "https://www.instagram.com/khadh3r"

//============= callButtons ============//
global.dtc = 'ππππ πππππ'
global.phn = '+917560920774'

//========== Tampilan Bot =============//
global.sa = 'β­β'
global.gx = 'ββ'
global.gy = 'ββ’'
global.gz = 'β'
global.sb = 'β°ββββΰΏ'
global.kki = 'γ'
global.kka = 'γ'
global.zt = '*'
global.zc = ''

global.thumbnailUrl = [
  'https://telegra.ph/file/5a7adde75e966077a7692.jpg', 'https://telegra.ph/file/5a7adde75e966077a7692.jpg',
  'https://telegra.ph/file/5a7adde75e966077a7692.jpg', 'https://telegra.ph/file/5a7adde75e966077a7692.jpg',
  'https://telegra.ph/file/5a7adde75e966077a7692.jpg', 'https://telegra.ph/file/5a7adde75e966077a7692.jpg',
  'https://telegra.ph/file/5a7adde75e966077a7692.jpg', 'https://telegra.ph/file/5a7adde75e966077a7692.jpg',
  'https://telegra.ph/file/5a7adde75e966077a7692.jpg', 'https://telegra.ph/file/5a7adde75e966077a7692.jpg'
]

//============= Games ================//
global.true = '_*Trueβ*_'
global.false = '_*Falseβ*_'
global.little = "a little more, cheer up  :')"

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π§¬',
      limit: 'π',
      healt: 'β€οΈ',
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      sampah: 'π',
      armor: 'π₯Ό',
      fishingrod: 'π£',
      pickaxe: 'βοΈ',
      sword: 'βοΈ',
      kayu: 'πͺ΅',
      batu: 'πͺ¨',
      iron: 'βοΈ',
      string: 'πΈοΈ',
      kuda: 'π',
      kucing: 'π' ,
      anjing: 'π',
      makananpet: 'π',
      gold: 'π',
      emerald: 'π'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
