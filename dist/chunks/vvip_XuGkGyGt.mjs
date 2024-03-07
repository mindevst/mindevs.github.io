const id = "vvip";
const collection = "showcase";
const data = {title:"VVIP HR Solutions",image:
						new Proxy({"src":"/mindevs.github.io/_astro/vvip.TBLOP1Kn.png","width":906,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
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
