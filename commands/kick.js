const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kickt eine @Person mit einem Grund!')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('Die Person die gekickt werden soll')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('grund')
				.setDescription('Gibt den Grund an weshalb die Person gekickt werden soll. (Optional)')
				.setRequired(false)),
	async execute(interaction) {
		const user = interaction.options.getMember('user');
		const reason = interaction.options.getString('grund');
		if (!reason) {
			user.kick();
			await interaction.reply(`Der User ${user.username} mit der ID: ${user.id} wurde vom Server gekickt.`);
		}
		else {
			user.kick();
			await interaction.reply(`Der User ${user.username} mit der ID: ${user.id} wurde mit dem Grund: \`\`${reason}\`\` vom Server gekickt`);
		}
	},
};