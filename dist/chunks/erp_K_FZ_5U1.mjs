const id = "erp";
const collection = "showcase";
const data = {title:"Sistema Control Clientes",image:
						new Proxy({"src":"/mindevs.github.io/_astro/erp.efbrE7es.png","width":906,"height":514,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					})
					,url:"https://mindevs.tech/",featured:3};
const _internal = {
	type: 'data',
	filePath: "/var/www/Develop/astro/mindevs-landing/src/content/showcase/erp.json",
	rawData: "",
};

export { _internal, collection, data, id };
