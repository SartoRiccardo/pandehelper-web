# Setting up a Tracker Channel

The original purpose of PandeHelper was to have a way to log all tile captures so they could be easier to check during or after the event.

1. Create a new channel, let's name it `#tile-claim`
2. Execute the command `/tickets track channel:#tile-claim`

The channel is now tracked as a Tracker Channel!

![Setting up a tracker channel](https://i.imgur.com/7L3MrFP.gif)

## Logging tile captures

This is what your team members should be doing.

1. When a member starts a tile, they should write its code in the Tracker Channel.
2. Once they complete it, they should react to their own message with the emoji "👍" or "✅".

```info
Tile captures **are not logged while CT is not active.** If you try doing some tests in a day where there is no CT, the tile won't get logged: don't worry, that's normal! Since CT has a very predictable schedule, the bot automatically knows when a new event starts, and which number it is.
```

![Logging a tile capture](https://i.imgur.com/g7pma8I.gif)

### Why do I have to react?

> Why do I have to react to my message? Isn't typing the tile code enough?

A tile message without a reaction means that it's easy for other members to see that someone else has already claimed and/or is doing a tile. The bot also keeps that in mind, if you try to start a tile someone else is already doing it will react to your own message with ⚠️.

## Checking tile captures

Team members can check general ticket usage via the following commands:

- `/tickets view` General overview of tiles captured in a certain tracked channel
- `/tickets member` In-depth view of what a specific member has captured
- `/tickets tile` In-depth view of when a specific tile has been captured, and by whom.

In all 3 commands, the `channel` parameter should be a Tile Capture channel that is being tracked, so you should have [set it up](#setting-up-a-tile-capture-channel) beforehand.
