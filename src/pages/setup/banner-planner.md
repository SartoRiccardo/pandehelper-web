# Setting up a Banner Planner

The Banner Planner is a very versatile feature that can you can use both if you're aiming for a Top 3 position or if you want to play casually and have an overview of your board directly through Discord. It works if you have one team or if you're a bigger organization with multiple subteams.

## Setting up a Planner

```info
To use a Planner, you must first have a Tracker Channel setup. If don't have one, please check out [how to set up a Tracker Channel](/setup/tracker-channel). If your Discord server hosts multiple teams, you should have a separate Planner and Tracker Channel pair for each one.
```

For this guide, I'll assume you already have:

- A [Tracker Channel](/setup/tracker-channel) named `#tile-claims`
- A role you give to your team members called `@team-member`
- A general chat where your team talks in called `#team-chat`

To set up a Banner Planner:

1. Create a channel, I'll call it `#planner` but it can be named anything you want
   - This channel is meant to be read-only, so members should generally **NOT** have write perms on this channel.
2. Use the command `/planner add channel:#planner`
3. Finish setting up the planner with `/planner config planner_channel:#planner team_role:@team-member tile_claim_channel:#tile-claims ping_channel:#team-chat`

If you've done all these steps correctly, it should say `Status: 🟢 ONLINE` in the Control Panel.

The bot will create a special role that it will give to team members who still have tickets left (have spent less than 4 tickets during that CT day). It will usually be named `@team-role (has tickets)`. It's recommended not to touch that role.

```info
Tiles will not show up in the Planner until they have been captured at least once during the current CT. This means someone has to log them at least once in the Tile Capture channel linked to the Planner.
```

![Planner Configuration](https://i.imgur.com/TYc6s7g.gif)

## Tile Reserving

For Top 3 runs, you should coordinate beforehand who's gonna refresh which banner. In the Planner, users can select a tile they want to _reserve_ to claim for themselves later via the dropdown menu at the bottom of the planner. Users can reserve up to 4 tiles per CT day (the Planner assumes your team has no team tickets).

Once the tile has been claimed via the Tracker Channel, the tile will go back to being unreserved and anyone on the team can claim it again.

![Tile claiming](https://i.imgur.com/oayUrvr.gif)

## Ping Reminders

```warn
This feature is intended for Top 3 attempts, where claiming things as soon as they're available is necessary. For more casual runs, this feature can get really annoying so it's recommended to keep the banner `🔴 OFFLINE`.
```

If the planner is `🟢 ONLINE`, it will ping members when tiles are about to expire.

If a tile has been claimed by somebody, they will be reminded to start that tile around 30 minutes before that tile expires. This should be enough time for them to get to the final round of the tile (if it's not a Time Attack) and stay on it until it goes stale.

If the tile has **NOT** been claimed by somebody, the Planner will ping all members of the teams who still have tickets left to use around 2 hours before, and will continue pinging the team at 30 minute intervals until it's either claimed by somebody or the tile expires.

Once the tile finally expires, the Planner will send a final ping reminding either the claimer or the members with tickets that it's time to capture it. The bot's ping is delayed by around 5 seconds, giving plenty of time to recapture the tile and avoiding messing up the eco tick. It will **never** ping before the last eco tick has passed.

The banner will stop all pings 12 hours before the event ends, as by that point capturing a banner should be suboptimal.

![Planner pings](https://i.imgur.com/4XEc0n1.gif)

## Control Panel

Here, team leaders can configure how the Planner behaves and which tiles it tracks. All of these buttons require **Manage Server** permissions to be used unless stated otherwise, so make sure that you (and whoever you want these features to be accessible by) have this permission enabled.

![Control panel](https://i.imgur.com/BgkvCdo.png)

### Planner Switch

The **Turn On/Off** button switches the planner's pings on and off, respectively. In both modes, **the Planner always gets updated** with new captures from the Tile Capture channel, the only difference is that while the Planner is `🔴 OFFLINE`, it won't ping for recaptures.

Offline mode is useful if you have a more casual team and don't care about getting 100% uptime on your banners, but still want an overview present so you can quickly tell which banners are stale, instead of looking all over the map for them.

### Edit Tile Expiry

```info
All users with the team's role can use this button
```

If a member forgets to log a tile, or logged it later, the capture time in the Planner will be wrong, since it doesn't get that data from the game but relies on the members to be diligent and use it correctly. In case this happens, you can press this button, type the tile code and the time until its rate expires **exactly as seen in-game**. Only type hours and minutes, for example if a tile expires in 10 hours and 30 minutes you should write `10:30`.

![Editing a tile's expire time](https://i.imgur.com/x2rhhg0.gif)

### Force Unclaim

When a member claims a tile for future recapture, nobody else can claim that same tile. This can be a problem if an user claimed a tile they shouldn't have, and forgets to unclaim it. If they do, just press the button and type the tile code, and the tile will be available to be claimed once again.

![Force-unclaiming a tile](https://i.imgur.com/HQ580cI.gif)

### Add and Remove Tiles

Sometimes you want other tiles to be tracked, the most common example being spawnlock tiles. Let's say you have the tile `AAB`, a spawn tile, that you can get with a score of 1 tier. This score decays in 13 hours, and you want to take it as soon as it decays to prevent the team you're locking from escaping. The Planner can track those too!

Press the button, type the tile code you want to add to the Planner, type how many hours the tile should be recaptured after (for banners it's 24 hours), and you're good to go!

![Adding a tile](https://i.imgur.com/eLM0jix.gif)

To **remove a tile** from the planner do the same process as before, but leave the "Recapture After" field empty.

![Removing a tile](https://i.imgur.com/LAZQSgG.gif)

#### Adding multiple tiles at once

```info
As of v1.1.0 of the bot, all planners automatically load the current event's banners when it starts, and remove the old ones. Nothing required on your part!
```

If you want to completely change which tiles are being tracked by the Planner, you can do so with the `/planner overwrite` command. This command doesn't _add_ tiles to the planner, it _replaces_ them completely.

![Overwriting the planner](https://i.imgur.com/B3JkvZm.gif)
