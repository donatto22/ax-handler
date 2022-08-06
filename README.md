# Ax `Discord` Handler
An easy way to make an event and command handler on discord

```js
const handler = require('ax-handler')
```

## Use example
You only need one function to handler your slash commands and events

```js
// The first parameter, is the discord client
// Second parameter, is the path of your folder
handler.eventhandler(client, path.join(__dirname, 'events'))
```

```js
// The first parameter is the path of the folder
// Second parameter is the collection of slash commands
// If you have subfolders, set the third parameter on true
client.slashcommands = new Collection()
handler.slashhandler('slashcmd', client.slashcommands, true)
```

### Output
```mkd
> Bot is ready
> Slashcommands loaded successfully
```