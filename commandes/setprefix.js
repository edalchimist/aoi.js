module.exports = {
    name: "setprefix",
    code: `$title[Préfix Défini]
    $description[Le préfixe est désormais : \`$message[1]\`]
    $addTimestamp
    $argsCheck[1;:x: | Veuillez **indiquer le prefixe.**]
    $setServerVar[prefix;$message[1]]
    $onlyForIDs[$botOwnerId; tu n'es pas owner du bot]`
  }