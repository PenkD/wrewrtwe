export default async function handler(req, res) {
  try {
    const discordUserId = "1307866274071576576"; // Replace with your Discord User ID

    // Fetch public profile from Discord API
    const response = await fetch(`https://discord.com/api/v10/users/${discordUserId}`, {
      headers: { Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}` },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch Discord profile" });
    }

    const data = await response.json();

    // Construct avatar URL
    const avatar = data.avatar
      ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png?size=256`
      : `https://cdn.discordapp.com/embed/avatars/0.png`;

    res.status(200).json({
      username: `${data.username}#${data.discriminator}`,
      avatar,
      status: "offline", // placeholder until you track bot presence
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
}
