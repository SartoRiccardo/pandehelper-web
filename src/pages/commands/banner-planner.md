# Banner Planner Commands

A very versatile banner overview that can help both casual and competitive teams get a lot more points than they would otherwise. For a step-by-step guide on how to set it up, check out [how to set up a Banner Planner](/setup/banner-planner).

![Banner Planner showcase](/img/example-banner-planner.png)

## Command List

```command
/planner new
Creates a brand new Planner channel. You can change the planner's name, position, everything, as long as the bot can see and send messages in it.
```

```command
/planner add
Sets an existing channel as a Planner channel.

[params]
>>> channel required
The channel you want to use as a Planner.
```

```command
/planner remove
Stops updating an existing Planner channel. It will not delete the channel, but the existing planner there will stop working.

[params]
>>> channel required
The channel you want to remove the Planner in.
```

```command
/planner config
Configure a planner's values such as which team it belongs to or which Tracker Channel it's linked to.

You can only provide the optional parameters you want to change.

[params]
>>> planner_channel required
The planner channel to alter the configuration for.
>>> ping_channel
Set a channel where PandeHelper will ping team members when tiles are about to expire.
>>> team_role
Set a role that all team members should have. PandeHelper will create and manage a new "has tickets" role based on the role you set, and it will gradually give it to people who used less than 4 tickets during a specific CT day.
>>> tracker_channel
Set the [Tracker Channel](/setup/tracker-channel) linked to this specific planner
```

```command
/planner overwrite
Change the list of tiles that are tracked by your Banner Planner.

[params]
>>> planner_channel required
The planner channel to change the tracked list for.
>>> tiles required
A **comma separated** list of tile codes.

For example: `FFB,AAC,BBC,FAH`
```
