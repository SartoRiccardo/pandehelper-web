# Map Information Commands

PandeHelper, with the help of some contributors, can give you every tile's challenge data so you don't have to check it in game to see its restrictions. Other than checking the tiles, you can also [create a Strategy Forum](/setup/strategy-forum) where you and your members share strategies.

![Tile Data showcase](/img/example-tile-info.png)

## Command List

```command
/tile
Displays a tile's Challenge Data.

[params]
>>> tile required
The 3-letter tile code you want to check.

Relic names or aliases also work. For example, if MOAB Clash was on the tile `FFB`, passing `moab clash`, `clash` or `mclash` all will display the tile data for `FFB`.
```

```command
/spawnlock
Displays the 3 tiles next to a team's start postion.

[params]
>>> team required
The color of the team to check the tiles for.
```

```command
/regs race
Get a list of all regular time attack tiles on the map. Useful for Last Day strategies, where you have to get as many regs as you can as fast as possible.
```

```command
/regs sorted
Get a sorted list of **non** time attack tiles. Useful for Last Day strategies so you can check which tiles are shorter than others.
```

```command
/ctmap
Displays the current event's map as an image.
```

```command
/tilestrat-forum create
Creates a brand new [Tile Strategy Forum](/setup/strategy-forum).
```

```info
You must enable community on your server to have a Tile Strategy Forum, as without it you can't create forum channels.
```

```info
You can only have one Tile Strategy Forum per Discord server.
```

```command
/tilestrat-forum set
Sets an existing forum channel into a Tile Strategy Forum.

[params]
>>> forum required
The forum channel you want to set as a Tile Strategy Forum.
```

```command
/tilestrat-forum unset
No longer treats the current Tile Strategy forum as that.
```

```command
/tilestrat-forum stats
Get an overview of how many tiles of each type are logged in the forum.

[params]
>>> season
The Contested Territory event number to check.
```
