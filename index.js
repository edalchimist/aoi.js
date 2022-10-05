const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "TOKEN DU BOT ",
  prefix: ["$getServerVar[prefix]","<@$clientID>"],
  intents: "all",
})

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commandes/");


bot.variables({
    prefix: ";",  //prefix par defaut du bot 
  })

//Events
bot.onMessage()
bot.onTypingStart();
bot.onRateLimit();
bot.onChannelDelete();
bot.onChannelUpdate();
bot.onChannelCreate();
bot.onVoiceStateUpdate();
bot.onRoleUpdate();
bot.onMemberUpdate();
bot.onRoleDelete();
bot.onRoleCreate();
bot.onBanAdd();
bot.onBanRemove();
bot.onMessageUpdate();
bot.onPresenceUpdate();
bot.onGuildJoin();
bot.onGuildLeave();
bot.onUserUpdate();
bot.onMessageDelete();
bot.onInteractionCreate();
bot.onGuildUpdate();
bot.onEmojiCreate();
bot.onEmojiUpdate();
bot.onEmojiDelete();
bot.onReactionRemoveAll();
bot.onReactionRemoveEmoji();
bot.onMessageDeleteBulk();
bot.onWebhookUpdate();
bot.onChannelPinsUpdate();
bot.onVariableCreate();
bot.onVariableUpdate();
bot.onVariableDelete();
bot.onApplicationCmdCreate()
bot.onApplicationCmdUpdate();;
bot.onApplicationCmdDelete();
bot.onStickerCreate();
bot.onStickerUpdate();
bot.onStickerDelete();
bot.onThreadCreate();
bot.onThreadUpdate();
bot.onThreadDelete();
bot.onThreadListSync();

//exemple de commande (dans l'index)
bot.command({
name: "ping",
aliases: ["ms"],
code: `$title[**Pong!**]
$description[j'ai $pingms ^^]
$thumbnail[$authorAvatar]
$footer[$pingms]
$color[BLACK]
`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

//variables
bot.variables({

})

//statut du bot.
bot.status({
  text: "Ton statut",
  type: "PLAYING",
  status: "idle",
  time: 12
})