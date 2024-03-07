const id = "geo";
const collection = "showcase";
const data = {title:"Grupo GeoProject",image:
						new Proxy({"src":"/mindevs.github.io/_astro/geo.Axk-z7wN.png","width":906,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
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
