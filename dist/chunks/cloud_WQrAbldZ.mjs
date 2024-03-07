const id = "cloud";
const collection = "showcase";
const data = {title:"Nube Privada BGI",image:
						new Proxy({"src":"/mindevs.github.io/_astro/cloud.zy3PaHcT.png","width":906,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
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
