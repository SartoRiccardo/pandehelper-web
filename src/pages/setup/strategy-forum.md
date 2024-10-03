# Tile Strategy Forum

The bot can manage a forum where users can post strategies for their tiles. Each post comes with the embed showing a tile's specs (like `/tile`), and some instructions on how to write a good strategy post. The only thing you should <u>**never touch**</u> is the names of the tags created by the bot. Anything else is fair game.

![Tile Strategy Forum](https://i.imgur.com/xE0iQ2l.png)

## Creating a forum

Simply run `/tilestrat-forum create` and the bot will do everything for you!

![Creating a tile strategy forum](https://i.imgur.com/5kRvmFc.gif)

Alternatively, you can use `/tilestrat-forum set` to set an existing forum channel as your Tile Strat forum. Likewise, you can use `/tilestrat-forum unset` to make the bot stop using the current forum channel as the Tile Strat forum.

## Looking up a tile

Just run `/tilestrat` and pass its tile code! The bot will create a new thread for that tile if it hasn't been made already, and if it already exists it will just point to that. It will also load data from previous events.

![Looking up a tile](https://i.imgur.com/rxCRBpx.gif)

```info
If the bot creates a thread for a tile and nobody sends anything in it, it will get automatically deleted after roughly 3 hours.
```

## Getting an overview of the forum

You can use `/tilestrat-forum stats` to check how many tiles have been actually logged by your users. Try aiming for 100%!

![Using /tilestrat-forum stats](https://i.imgur.com/uVB2lSd.gif)
