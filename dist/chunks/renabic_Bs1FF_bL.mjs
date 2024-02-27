const id = "renabic";
const collection = "showcase";
const data = {title:"Registro Nacional Bicicletas",image:
						new Proxy({"src":"/_astro/renabic.CA1naOCq.png","width":906,"height":514,"format":"png","fsPath":"/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/renabic.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/renabic.png";
							}
							globalThis.astroAsset.referencedImages.add("/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/renabic.png");
							return target[name];
						}
					})
					,url:"https://renabic.mindevs.tech/",featured:9};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/renabic.json",
	rawData: "",
};

export { _internal, collection, data, id };
