module.exports = {
TOKEN: "", //token
ownerID: "487940627086966796", //discord id เจ้าของ.
botInvite: "https://discord.com/oauth2/authorize?client_id=1042035853242929173&scope=bot&permissions=27648860222", //write your discord bot invite.
//OTAyMTM2NTc4NzM3MDc4Mjkz.GXXE5e.GrdY7MXxXMOjxvvA-onKgqguuh_cew1N3T77Nc --MoMoTeamBot
supportServer: "https://discord.gg/pgx2TcsbFx", //Support Server.
mongodbURL: "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0", //write your mongodb url to connect database. ce1aHGLncoBqSZ1H7Rcym0zg29lsMNY626YKQCU1XqGgY2b340dppFw7yAVWawZo
status: 'XenoDev - THZDEV Team - MoMo Team',
commandsDir: './commands', //Please don't touch
language: "th", //en, tr, nl ,th เลือกภาษา
embedColor: "ffa600", //hex color code
errorLog: "720889469338910820", //write your discord error log channel id.
  
    voteManager: { //optional
        status: false, //true or false
        api_key: "", //write your top.gg api key. 
        vote_commands: ["back","channel","clear","dj","filter","loop","nowplaying","pause","play","playlist","queue","resume","save","search","skip","stop","time","volume"], //write your use by vote commands.
        vote_url: "", //write your top.gg vote url.
    },

    playlistSettings:{
        maxPlaylist: 20, //max playlist count
        maxMusic: 100, //max music count
    },

opt: {
DJ: {
commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] //Please don't touch
},

voiceConfig: {
leaveOnFinish: false, //If this variable is "true", the bot will leave the channel the music ends.
leaveOnStop: false, //If this variable is "true", the bot will leave the channel when the music is stopped.

leaveOnEmpty: { //The leaveOnEnd variable must be "false" to use this system.
status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
cooldown: 10000, //1000 = 1 second
},

},

maxVol: 500, //You can specify the maximum volume level.

}
}
