const id = "corset";
const collection = "showcase";
const data = {title:"Decks Landing Page",image:
						new Proxy({"src":"/mindevs.github.io/_astro/deck.JXbb0CFm.png","width":906,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
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
