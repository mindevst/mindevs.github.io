const id = "lenc";
const collection = "showcase";
const data = {title:"LC E&C Company",image:
						new Proxy({"src":"/mindevs.github.io/_astro/lenc.DXSBKOVM.png","width":906,"height":514,"format":"png","fsPath":"/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/lenc.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/lenc.png";
							}
							globalThis.astroAsset.referencedImages.add("/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/lenc.png");
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
