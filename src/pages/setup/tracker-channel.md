# Setting up a Tracker Channel

The original purpose of the bot was to have a way to log all tile captures so they could be easier to check during or after the event.

1. Create a new channel, let's name it `#tile-claim`
2. Execute the command `/tickets track channel:#tile-claim`

The channel is now tracked as a Tile Capture channel!

![Setting up a tracker channel](https://i.imgur.com/7L3MrFP.gif)

## Logging tile captures

This is what your team members should be doing.
Every time they capture a tile, they should write its code in a tracked channel and react to their own message with the emoji "👍" or "✅".

Tile captures **are not logged while CT is not active.** If you try doing some tests in a day where there is no CT, the tile won't get logged: don't worry, that's normal! Since CT has a very predictable schedule, the bot automatically knows when a new event starts, and which number it is.

![Logging a tile capture](https://i.imgur.com/g7pma8I.gif)

### Why do I have to react?

> Why do I have to react? to my message? Isn't typing the tile code enough?

This is the tile claiming system Pandemonium uses and the bot was originally made for that team, so that's why it's like this. In Pandemonium, you would type the tile code **when you started the tile**, and react with the emoji once you've claimed it. This way, you could immediately see if someone was actively working on a tile, and you would avoid "tile snipes".

## Checking tile captures

As a team leader, you'll want to check what your users are up to. The bot comes with the commands:

- `/tickets view`: General overview of tiles captured in a certain tracked channel
- `/tickets member`: In-depth view of what a specific member has captured
- `/tickets tile`: In-depth view of when a specific tile has been captured, and by whom.

In all 3 commands, the `channel` parameter should be a Tile Capture channel that is being tracked, so you should have [set it up](#setting-up-a-tile-capture-channel) beforehand.

All these commands require the **Manage Server** permission to be executed, so make sure your team captains (or whoever you want to be able to use these commands) has it enabled.

![Checking a team's captures](https://i.imgur.com/BgkvCdo.png)
