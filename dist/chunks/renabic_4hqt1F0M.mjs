const id = "renabic";
const collection = "showcase";
const data = {title:"Registro Nacional Bicicletas",image:
						new Proxy({"src":"/mindevs.github.io/_astro/renabic.gNZ2jgql.png","width":906,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
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
