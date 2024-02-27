const id = "mm";
const collection = "showcase";
const data = {title:"MM Concrete & Remodeling",image:
						new Proxy({"src":"/_astro/mm.BqaKXw0C.png","width":906,"height":514,"format":"png","fsPath":"/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/mm.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/mm.png";
							}
							globalThis.astroAsset.referencedImages.add("/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/mm.png");
							return target[name];
						}
					})
					,url:"https://mmconcretecincinnati.com/",featured:4};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/mm.json",
	rawData: "",
};

export { _internal, collection, data, id };
