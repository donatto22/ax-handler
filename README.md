# Ax Handler
An easy way to make an event and command handler on discord

```js
const handler = require('ax-handler')
```

## Use example
You only need one function to handler your slash commands and events

```js
// The first parameter, is the discord client
// Second parameter, is the name of your folder
handler.eventhandler(client, 'events')
```

```js
// The first parameter, is the discord client
// Second parameter is the name of the folder
// If you have subfolders, set the third parameter on true
handler.slashhandler(client, 'slashcmd', true)
```

### Output
```mkd
> Bot is ready
> Slashcommands loaded successfully
```