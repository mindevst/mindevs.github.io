const id = "bgi";
const collection = "showcase";
const data = {title:"BGI Ingeniería",image:
						new Proxy({"src":"/mindevs.github.io/_astro/bgi.juOtsu9B.png","width":906,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					})
					,url:"https://bgingenieria.mx/",featured:7};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/bgi.json",
	rawData: "",
};

export { _internal, collection, data, id };
