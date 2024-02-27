const id = "cloud";
const collection = "showcase";
const data = {title:"Nube Privada BGI",image:
						new Proxy({"src":"/_astro/cloud.DPLc9odx.png","width":906,"height":514,"format":"png","fsPath":"/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/cloud.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/cloud.png";
							}
							globalThis.astroAsset.referencedImages.add("/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/cloud.png");
							return target[name];
						}
					})
					,url:"https://mindevs.tech/",featured:8};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/cloud.json",
	rawData: "",
};

export { _internal, collection, data, id };
