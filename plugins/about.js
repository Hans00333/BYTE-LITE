const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ʙʏᴛᴇ-ʟɪᴛᴇ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ ᴀɴsᴀʀ-ᴘᴀɴʜᴡᴀʀ*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ ᴀɴsᴀʀ-ᴘᴀɴʜᴡᴀʀ*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴛᴀʟᴋᴅʀᴏᴠᴇ*
*│  ◦* *ᴀɢᴇ➠ 15 ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ᴍɪʀᴘᴜʀᴋʜᴀs*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • BYTE-LITE - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠ᴀɴsᴀʀ-ᴅʀᴏᴠᴇ*
*│  ◦* *▢➠ʜᴀᴍᴢᴀ-ᴅʀᴏᴠᴇ*
*│  ◦* *▢➠ᴡᴀʟᴋ-ᴅʀᴏᴠᴇ*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
