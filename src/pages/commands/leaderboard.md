# Leaderboard Commands

PandeHelper comes with an hourly self-updating Contested Territory leaderboard showing the Top 100 teams, just like the in-game one. It also shows how many points each team gained since the last hour, which can approximate their eco. Note that raw point gain is not always gonna be exactly the other team's eco.

![Leaderboard showcase](/img/example-leaderboard.png)

## Command List

```command
/leaderboard add
Sets a channel as a leaderboard channel. **It will show the leaderboard in the next update** (which is usually ~1 hour or less after you used it).

[params]
>>> channel   required
The channel to send the leaderboard in.
```

```command
/leaderboard remove
Stops updating a leaderboard in a certain channel.

[params]
>>> channel   required
The channel to stop updating the leaderboard in.
```
