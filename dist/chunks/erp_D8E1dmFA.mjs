const id = "erp";
const collection = "showcase";
const data = {title:"Sistema Control Clientes",image:
						new Proxy({"src":"/mindevs.github.io/_astro/erp.B59usTt6.png","width":906,"height":514,"format":"png","fsPath":"/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/erp.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/erp.png";
							}
							globalThis.astroAsset.referencedImages.add("/var/www/Develop/astro/mindevs-landing/src/content/showcase/_images/erp.png");
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
