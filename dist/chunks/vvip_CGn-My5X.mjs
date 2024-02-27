const id = "vvip";
const collection = "showcase";
const data = {title:"VVIP HR Solutions",image:
						new Proxy({"src":"/_astro/vvip.BMEs4_Uq.png","width":906,"height":514,"format":"png","fsPath":"/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/vvip.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/vvip.png";
							}
							globalThis.astroAsset.referencedImages.add("/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/vvip.png");
							return target[name];
						}
					})
					,url:"https://vviphrsolutions.com/",featured:1};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/vvip.json",
	rawData: "",
};

export { _internal, collection, data, id };
