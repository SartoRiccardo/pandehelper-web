import MarkdownPage from "@/components/MarkdownPage";

const policy = `
# Privacy Policy

To keep PandeHelper's (the "bot") services online, I collect some necessary data from Discord users (the "User", "you").

## Data Collected
- **User ID:** The unique identifier associated to any particular account that may interact with PandeHelper. This is to keep track of some features like BTD6 ingame actions, and more. *User IDs are accessible by any Discord user.*
- **Guild ID:** The unique identifier associated to any Discord guild that may have PandeHelper installed. This is to check which particular features are available to which guilds. *Guild IDs are accessible by any Discord user.*
- **Channel ID:** The unique identifier associated to any Discord text channel that may have been given to PandeHelper to install a feature. This is to check which features are available to which channels. *Channel IDs are accessible by any Discord user.*
- **Partial Message Content:** In some scenarios, PandeHelper may save part or all of an User's message to be used later. This only happens in channels where the bot is explicitely allowed to do so, such as [Tracker Channels](/setup/tracker-channel).

I do not sell or otherwise share any collected data with any third parties.

If you have any privacy-related requests or concerns, such as a data removal request, please contact \`@chimenea.mo\` on Discord.
`;

export const metadata = {
  title: "Privacy Policy | PandeHelper",
};

export default function PrivacyPolicy() {
  return <MarkdownPage>{policy}</MarkdownPage>;
}
