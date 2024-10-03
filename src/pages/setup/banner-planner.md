# Setting up a Banner Planner

Gives you an overview of your banners, pings members when it's time to retake them, is extremely flexible and can be used even in non Top 3 runs if needed.

To use the planner, <u>**you need a Tile Capture channel**</u> for it. If your team has more "sub-teams", each one of them will need its own separate Planner and Tile Claim channels. Please check out [how to set up a Tracker Channel](/setup/tracker-channel) if you haven't already, then come back.

## Setting up a Planner

1. Create a channel, I'll call it `#planner` but it can be named anything you want
   - Make sure regular members can NOT type on that channel!
2. Use the command `/planner add channel:#planner`
3. Finish setting up the planner with `/planner config planner_channel:#planner ...`. You can pass the following parameters to the command:
   - `tile_claim_channel`: The Tile Capture channel that will be linked to the Planner. The Planner uses it to check tile expiration times.
   - `team_role`: A role every single member of the team has. _In teams with more sub-teams, it's the role specific to the sub-team the Planner is for._
   - `ping_channel`: A channel where the Planner will ping members when it's time to recapture tiles.

If you've done all these steps correctly, it should say `Status: 🟢 ONLINE` in the Control Panel.

![Planner Configuration](https://i.imgur.com/TYc6s7g.gif)

Tiles <u>will not show up in the Planner</u> until they have been captured at least once during the current CT. This means someone has to log them at least once in the Tile Capture channel linked to the Planner.

## Tile Claiming

For Top 3 runs, you'll want to coordinate beforehand who's gonna refresh which banner, you can do this with users "reserving" tiles for later. Users can do this via the dropdown menu at the bottom of the planner, where they can claim and unclaim tiles to signify they'll be available to refresh them once they expire.

![Tile claiming](https://i.imgur.com/oayUrvr.gif)

**Do not confuse this with the Tile Capturing channel!** The tile capturing channel is for registering tile captures, this feature is merely a way to coordinate who's gonna take which banner within the team.

_This feature might be overkill for non Top 3 runs._

## Ping Reminders

<u>If the planner is `🟢 ONLINE`</u>, it will ping members when tiles are about to expire. _Note that this feature is intended for Top 3 runs, where every eco tick matters, so for more casual teams it might be better to turn off this feature as it can get very annoying._

If a tile has been claimed by somebody, they will be reminded to start that tile anywhere from 30 minutes to 1 hour before that tile expires. This should be enough time for them to get to the final round of the tile (if it's not a Time Attack) and camp until it goes stale.

If the tile has **NOT** been claimed by somebody, the Planner will ping all members of the teams who still have tickets left to use up to 2 hours before, and will continue pinging the team at 30 minute intervals until it's either claimed or the tile expires.

Once the tile finally expires, the Planner will send a final ping reminding either the claimer or the members with tickets that it's time to capture it. The bot's ping can be delayed by up to 5 seconds, giving plenty of time to recapture the tile and avoiding messing up the eco tick. It will <u>never</u> ping before the last eco tick has passed.

![Planner pings](https://i.imgur.com/4XEc0n1.gif)

The "has tickets" role is managed by the bot and it's recommended to not touch it. You can change its name, and color, but you should not delete it or change its position in the role hierarchy. Also, the Planner will stop all pings 12 hours before the event ends, as after that banners are suboptimal to claim if the Last Day strategy has been executed correctly.

## Control Panel

Here, team captains can configure how the Planner behaves and which tiles it tracks. All of these buttons require **Manage Server** permissions to be used, so make sure that you (and whoever you want these features to be accessible by) have this permission enabled.

![Control panel](https://i.imgur.com/BgkvCdo.png)

### Planner Switch

The **Turn On/Off** button switches the planner's pings on and off, respectively. In both modes, **the Planner always gets updated** with new captures from the Tile Capture channel, the only difference is that while the Planner is `🔴 OFFLINE`, it won't ping for recaptures.

Offline mode is useful if you have a more casual team and don't care about getting 100% uptime on your banners, but still want an overview present so you can quickly tell which banners are stale, instead of looking all over the map for them.

### Edit Tile Expiry

If a member forgets to log a tile, or logged it later, the capture time in the Planner will be wrong, since it doesn't get that data from the game but relies on the members to be diligent and use it correctly. In case this happens, you can press this button, type the tile code and the time until its rate expires **exactly as seen in-game**. Only type hours and minutes, for example if a tile expires in 10 hours and 30 minutes you should write `10:30`.

![Editing a tile's expire time](https://i.imgur.com/x2rhhg0.gif)

### Force Unclaim

When a member claims a tile for future recapture, nobody else can claim that same tile. This can be a problem if an user claimed a tile they shouldn't have, and forgets to unclaim it. If they do, just press the button and type the tile code, and the tile will be available to be claimed once again.

![Force-unclaiming a tile](https://i.imgur.com/HQ580cI.gif)

### Add and Remove Tiles

Sometimes you want miscellaneous tiles to be tracked, the most common example being spawnlock tiles. Let's say you have the tile `AAB`, a spawn tile, that you can get with a score of 1 tier. This score decays in 13 hours, and you want to take it as soon as it decays to prevent the team you're locking from escaping. The Planner can track those too!

Press the button, type the tile code you want to add to the Planner, type how many hours the tile should be recaptured after (for banners it's 24 hours), and you're good to go!

![Adding a tile](https://i.imgur.com/eLM0jix.gif)

To **remove a tile** from the planner do the same process as before, but <u>leave the "Recapture After" field empty</u>.

![Removing a tile](https://i.imgur.com/LAZQSgG.gif)

#### Adding multiple tiles at once

```info
As of v1.1.0 of the bot, all planners automatically load the current event's banners when it starts, and remove the old ones. Nothing required on your part!
```

Between seasons, if you're using the Planner to track banner decays, you'll want to remove the previous 24 banners and add the 24 new ones. This can take very, VERY long if you're using the button, and even longer if you manage multiple teams and Planners. Luckily, **there's a fast way to add tiles in bulk**.

Simply use the `/planner overwrite` command with the following parameters:

1. `planner_channel`: The Planner to add the tiles to
2. `tile_codes`: The tile codes the Planner should track. This is a list of tiles separated by commas, for example: `AAB,ABC,ABE,FFB,BBC,DBD` will put those 6 tiles in the planner.

`/planner overwrite` will **remove all tiles from the planner and add the new ones**. So it doesn't _add_ new tiles, it _replaces_ them. Hence the name of the command, _overwrite_.

![Overwriting the planner](https://i.imgur.com/B3JkvZm.gif)
