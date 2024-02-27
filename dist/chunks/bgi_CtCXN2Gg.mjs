const id = "bgi";
const collection = "showcase";
const data = {title:"BGI Ingeniería",image:
						new Proxy({"src":"/_astro/bgi.CO462y70.png","width":906,"height":514,"format":"png","fsPath":"/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/bgi.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/bgi.png";
							}
							globalThis.astroAsset.referencedImages.add("/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/bgi.png");
							return target[name];
						}
					})
					,url:"https://bgingenieria.mx/",featured:7};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/bgi.json",
	rawData: "",
};

export { _internal, collection, data, id };
