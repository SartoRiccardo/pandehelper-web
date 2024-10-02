export default [
  {
    label: "Invite",
    url: `https://discord.com/api/oauth2/authorize?client_id=${process.env.NEXT_PUBLIC_BOT_ID}&permissions=${process.env.NEXT_PUBLIC_BOT_PERMS}&scope=bot&integration_type=0`,
  },
  {
    label: "Commands",
    children: [
      {
        label: "Tile Capturing",
        url: "/commands/tile-capturing",
      },
      {
        label: "Banner Planner",
        url: "/commands/banner-planner",
      },
      {
        label: "Map Information",
        url: "/commands/map-information",
      },
      {
        label: "Leaderboard",
        url: "/commands/leaderboard",
      },
      {
        label: "Other",
        url: "/commands/other",
      },
    ],
  },
  {
    label: "Setting Up",
    children: [
      {
        label: "Tracker Channel",
        url: "/setup/tracker-channel",
      },
      {
        label: "Banner Planner",
        url: "/setup/banner-planner",
      },
      {
        label: "Strategy Forum",
        url: "/setup/strategy-forum",
      },
    ],
  },
];
