import fs from 'fs'
import path from 'path'

/**
 * @param { string } folder The name of the folder you need to handler
 * @param { boolean } subfolders Set true If the folder has other folders inside
 */

const slashhandler = (folder, collection, subfolders = false) => {
    if (subfolders) {
        const slashcommands = fs.readdirSync(path.join(__dirname, folder)) // ./slashcmd

        for (const folders of slashcommands) {
            const folder = fs.readdirSync(`${folder}/${folders}`)

            for (const file of folder) {
                const command = require(`${folder}/${folders}/${file}`)
                collection.set(command.data.name, cmd)
            }
        }
    } else {
        const slashcommands = fs.readdirSync(folder) // ./slashcmd

        for (const file of slashcommands) {
            const command = require(`${folder}/${file}`)
            collection.set(command.data.name, cmd)
        }
    }
}

/**
 * @param { Client } client Discord client
 * @param { string } folderc The path  of the folder you need to handler
 */

const eventhandler = (client, folderc) => {
    const events = fs.readdirSync(folderc)

    for (const file of events) {
        const event = require(`${folderc}/${file}`)
        client.on(event.name, (...args) => event.run(client, ...args))
    }
}

export {
    slashhandler, eventhandler
}
