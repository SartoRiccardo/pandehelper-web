# Tile Capturing Commands

The commands on this page are all to handle [Tracker Channels](/setup/tracker-channel) and view tickets used by your teams.

![Example of a Tracker Channel](/img/example-tracker-channel.png)

## Command List

```command
/tickets track
Starts tracking a channel for tile captures. If you want to know more about how Tracker Channels work, check out [how to set up a Tracker Channel](/setup/tracker-channel)

[params]
>>> channel required
The channel to start tracking.
```

```command
/tickets untrack
Stops tracking a Tracker Channel.

[params]
>>> channel required
The channel to stop tracking.
```

```command
/tickets view
Shows a table showing, for every member, how many tickets they used in the 7 days of CT.

[params]
>>> channel required
The channel to check ticket usage for.
>>> season
The event number you want to check for. Defaults to the current event.
```

```command
/tickets member
Shows, for a specific member, how many tickets they used, on which tiles, and when.

[params]
>>> channel   required
The Tracker Channel to check ticket usage for.
>>> member    required
The member you want to check.
>>> season
The event number. Defaults to the current event.
```

```command
/tickets tile
Shows, for a specific tile, when it was captured, after how long, and by whom during the event.

[params]
>>> channel   required
The Tracker Channel to check ticket usage for.
>>> tile    required
The 3-letter tile code you want to check.
>>> season
The event number. Defaults to the current event.
```
