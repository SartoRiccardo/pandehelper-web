import MarkdownPage from "@/components/MarkdownPage";

const tos = `
# Terms of Service

PandeHelper is a free Discord bot to aid players in their Bloons TD 6 Contested Territory gameplay.

The services and information provided by PandeHelper are for entertainment and informational purposes only. You agree that you will only use PandeHelper, or data/information provided by it, for its intended purposes.

By accessing PandeHelper, you are bound by [Discord’s Terms of Service](https://discord.com/terms?sa=D&source=editors&ust=1648698859773426&usg=AOvVaw1QWND4tAzo8KYhpGeyECpR). Users who are not compliant with Discord’s Terms of Service are therefore not compliant with PandeHelper's Terms of Service.

There is no guarantee of access to PandeHelper. Access to PandeHelper is provided to users who have not had their access revoked. I may revoke a user's access to PandeHelper (either in full or partially) at any time, for any reason.
`;

export const metadata = {
  title: "Terms of Service | PandeHelper",
};

export default function TermsOfService() {
  return <MarkdownPage>{tos}</MarkdownPage>;
}
