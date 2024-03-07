const id = "mm";
const collection = "showcase";
const data = {title:"MM Concrete & Remodeling",image:
						new Proxy({"src":"/mindevs.github.io/_astro/mm.amil8NAh.png","width":906,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
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
