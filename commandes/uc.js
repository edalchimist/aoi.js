module.exports = ({
    name: "update",
    aliases: ['uc','ucc'],
    $if: "v4",
    code: `
    $if[$hasPerms[$guildID;$clientID;managemessages]==true]
    $endif
    $updatecommands
    **Update :
    \`\`\`
    toutes les commandes ont été refresh ( $commandsCount )
    \`\`\`**
    $onlyForIDs[$botownerid;**Développeur :
    \`\`\`
    Cette commande est réservée à $username[$botOwnerId] !
    \`\`\`**]
    `})