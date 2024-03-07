const id = "geo";
const collection = "showcase";
const data = {title:"Grupo GeoProject",image:
						new Proxy({"src":"/mindevs.github.io/_astro/geo.DGT7PvA3.png","width":906,"height":514,"format":"png","fsPath":"/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/geo.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/geo.png";
							}
							globalThis.astroAsset.referencedImages.add("/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/geo.png");
							return target[name];
						}
					})
					,url:"https://grupogeoproject.com//",featured:5};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/geo.json",
	rawData: "",
};

export { _internal, collection, data, id };
