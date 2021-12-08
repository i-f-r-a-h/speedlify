
module.exports = {
	description: "Ifrah's portfolio",
	options: {
		frequency: 60 * 11 + 30, // 11h, 30m
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://ifrahabdi.netlify.app/",
		"https://ifrahabdi.netlify.app/about.html/",
		"https://ifrahabdi.netlify.app/blog.html/",
		"https://ifrahabdi.netlify.app/contact.html/",
		"https://webhint.io/"
	]
};
