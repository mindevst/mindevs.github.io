const id = "corset";
const collection = "showcase";
const data = {title:"Decks Landing Page",image:
						new Proxy({"src":"/_astro/deck.ldtvQIWa.png","width":906,"height":514,"format":"png","fsPath":"/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/deck.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/deck.png";
							}
							globalThis.astroAsset.referencedImages.add("/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/deck.png");
							return target[name];
						}
					})
					,url:"https://corset.dev/",featured:6};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/corset.json",
	rawData: "",
};

export { _internal, collection, data, id };
