const id = "lenc";
const collection = "showcase";
const data = {title:"LC E&C Company",image:
						new Proxy({"src":"/mindevs.github.io/_astro/lenc.10gSjlTI.png","width":906,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					})
					,url:"https://lc-encus.com/",featured:2};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/lenc.json",
	rawData: "",
};

export { _internal, collection, data, id };
