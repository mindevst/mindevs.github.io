/* empty css                          */
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, u as unescapeHTML, f as renderSlot, g as renderComponent, F as Fragment, A as AstroError, h as ExpectedImageOptions, E as ExpectedImage, i as InvalidImageService, j as ImageMissingAlt, k as UnknownContentCollectionError, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, p as renderHead } from '../astro_DnWqdt-g.mjs';
import 'kleur/colors';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_5CzP0b1H.mjs';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$e = createAstro("https://mindevs.github.io");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Icon;
  const req = Astro2.request;
  const { name = "", title, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new Error(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new Error('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new Error(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new Error(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new Error(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`} <use ${addAttribute(`#${id}`, "xlink:href")}></use> </svg>`;
}, "/var/www/Develop/astro/mindevs-landing/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$d = createAstro("https://mindevs.github.io");
const $$ContentSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ContentSection;
  const { title, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="flex scroll-mt-24 flex-col items-center gap-4 space-y-8"> <div class="flex flex-col items-center gap-4"> ${renderSlot($$result, $$slots["eyebrow"])} <h2 class="gradient-text text-center font-extrabold tracking-tight text-6xl"> ${title} </h2> </div> <p class="max-w-xl text-center font-extrabold text-2xl"> ${renderSlot($$result, $$slots["lead"])} </p> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/var/www/Develop/astro/mindevs-landing/src/components/content-section.astro", void 0);

const $$Astro$c = createAstro("https://mindevs.github.io");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Desarrollo Web",
      description: "Convierte tu presencia en l\xEDnea en una experiencia excepcional con nuestro servicio de desarrollo web, dise\xF1ado para destacar tu marca y cautivar a tus clientes desde el primer clic.",
      icon: "mdi:laptop-account"
    },
    {
      title: "Aplicaciones M\xF3viles",
      description: "Lleva tu negocio al siguiente nivel con nuestra experiencia en desarrollo de aplicaciones m\xF3viles. Conecta con tus clientes dondequiera que est\xE9n.",
      icon: "mdi:mobile-phone-settings-variant"
    },
    {
      title: "Redes e Infraestructura",
      description: "Optimiza la conectividad de tu empresa con nuestra soluci\xF3n de redes: r\xE1pida, confiable y adaptada a tus necesidades.",
      icon: "mdi:local-area-network-connect"
    },
    {
      title: "Instalaci\xF3n de Software",
      description: "Maximiza la eficiencia de tu empresa con este servicio. Conf\xEDa en nosotros para mantener tu negocio en funcionamiento.",
      icon: "mdi:gear-play"
    },
    {
      title: "Asesor\xEDa Especializada",
      description: "Transforma tu negocio con nuestra asesor\xEDa tecnol\xF3gica: soluciones innovadoras para impulsar tu crecimiento y \xE9xito digital",
      icon: "mdi:user-details"
    },
    {
      title: "Equipos C\xF3mputo",
      description: "Equipa tu empresa con tecnolog\xEDa de vanguardia. Descubre nuestra amplia selecci\xF3n de equipos inform\xE1ticos para potenciar tu productividad.",
      icon: "mdi:laptop"
    }
  ];
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Servicios", "id": "features" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<ul class="grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${features.map(({ title, description, icon }) => renderTemplate`<li class="flex flex-col items-center gap-4 border border-default bg-offset p-6"> <div class="size-16 rounded-full border-2 border-current p-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "size-full" })} </div> <p class="text-center font-extrabold text-xl">${title}</p> <p class="text-center text-offset text-sm">${description}</p> </li>`)} </ul> `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" })}` })}`;
}, "/var/www/Develop/astro/mindevs-landing/src/components/features.astro", void 0);

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_5CzP0b1H.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$b = createAstro("https://mindevs.github.io");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/var/www/Develop/astro/mindevs-landing/node_modules/astro/components/Image.astro", void 0);

const $$Astro$a = createAstro("https://mindevs.github.io");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/var/www/Develop/astro/mindevs-landing/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///var/www/Develop/astro/mindevs-landing/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const moonImage = new Proxy({"src":"/mindevs.github.io/_astro/moon.iU9QHMMl.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$9 = createAstro("https://mindevs.github.io");
const $$HeroImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HeroImage;
  const widths = [450, 800, 1200];
  const sizes = "100vw";
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": moonImage, "widths": widths, "sizes": sizes, "alt": "The ridged surface of the moon" })}`;
}, "/var/www/Develop/astro/mindevs-landing/src/components/hero-image.astro", void 0);

const $$Astro$8 = createAstro("https://mindevs.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  const links = [
    {
      url: "https://mindevs.tech/",
      description: "Mindev's official website",
      icon: "mdi:home"
    },
    {
      url: "https://www.facebook.com/mindevs.tech",
      description: "Mindevs en facebook",
      icon: "fa-brands:facebook"
    },
    {
      url: "#",
      description: "Mindev's on Twitter",
      icon: "fa-brands:twitter"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative flex h-64 items-center justify-center"> <div class="absolute inset-0 overflow-hidden opacity-40"> ${renderComponent($$result, "HeroImage", $$HeroImage, {})} </div> <ul class="relative grid grid-cols-2 gap-4 sm:grid-cols-4"> ${links.map((link) => renderTemplate`<li> <a class="flex size-16 items-center justify-center rounded-full border-2 border-current p-4"${addAttribute(link.url, "href")}> <span class="sr-only">${link.description}</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-full", "name": link.icon })} </a> </li>`)} </ul> </footer>`;
}, "/var/www/Develop/astro/mindevs-landing/src/components/footer.astro", void 0);

const $$Astro$7 = createAstro("https://mindevs.github.io");
const $$ThemeSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ThemeSwitcher;
  return renderTemplate`<!--
  negative margin is sum of button width (6) and gap size of flex parent (6)
  TODO don't hardcode these values
-->${maybeRenderHead()}<button id="theme-switcher" type="button" class="-ml-12 origin-[right_center] scale-0 transition-all duration-500" data-astro-cid-l4aeqea3> <div id="icon-theme-light" data-astro-cid-l4aeqea3> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:white-balance-sunny", "class": "size-6", "data-astro-cid-l4aeqea3": true })} <span class="sr-only" data-astro-cid-l4aeqea3>Use light theme</span> </div> <div id="icon-theme-dark" class="hidden" data-astro-cid-l4aeqea3> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:weather-night", "class": "size-6", "data-astro-cid-l4aeqea3": true })} <span class="sr-only" data-astro-cid-l4aeqea3>Use dark theme</span> </div> </button>  `;
}, "/var/www/Develop/astro/mindevs-landing/src/components/theme-switcher.astro", void 0);

const $$Astro$6 = createAstro("https://mindevs.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { title: "Contacto", url: "#intro" },
    { title: "Servicios", url: "#features" },
    { title: "Portafolio", url: "#showcase" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="page-header" class="absolute bottom-0 z-20 flex w-full items-center justify-between border-b border-transparent px-8 py-4 text-white" data-astro-cid-hpnw4vwy> <a class="flex items-center gap-3 hover:!text-default" href="#" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "logomark", "class": "size-10", "data-astro-cid-hpnw4vwy": true })} <h1 data-astro-cid-hpnw4vwy>Mindevs.Tech</h1> </a> <div data-astro-cid-hpnw4vwy> <div class="flex items-center gap-6" data-astro-cid-hpnw4vwy> <nav class="hidden sm:block" data-astro-cid-hpnw4vwy> <ul class="flex items-center gap-6" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="text-sm"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> <button id="open-nav-button" type="button" class="btn sm:hidden" aria-label="Navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:menu", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> ${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "data-astro-cid-hpnw4vwy": true })} </div> <div id="menu-modal" class="modal hidden" aria-hidden="true" data-astro-cid-hpnw4vwy> <div class="fixed inset-0 bg-default px-8 py-4 text-default" data-astro-cid-hpnw4vwy> <div class="space-y-4" role="dialog" aria-modal="true" data-astro-cid-hpnw4vwy> <header class="text-right" data-astro-cid-hpnw4vwy> <button id="close-nav-button" type="button" class="btn" aria-label="Close navigation" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:close", "class": "size-8", "data-astro-cid-hpnw4vwy": true })} </button> </header> <div class="flex justify-center" data-astro-cid-hpnw4vwy> ${renderComponent($$result, "Icon", $$Icon, { "name": "logomark", "class": "size-16", "data-astro-cid-hpnw4vwy": true })} </div> <nav data-astro-cid-hpnw4vwy> <ul class="flex flex-col" data-astro-cid-hpnw4vwy> ${navItems.map(({ title, url }) => renderTemplate`<li data-astro-cid-hpnw4vwy> <a class="block py-4 text-center text-xl"${addAttribute(url, "href")} data-astro-cid-hpnw4vwy> ${title} </a> </li>`)} </ul> </nav> </div> </div> </div> </div> </header>  <noscript> <style>
    #open-nav-button {
      display: none;
    }
  </style> </noscript> `;
}, "/var/www/Develop/astro/mindevs-landing/src/components/header.astro", void 0);

const $$Astro$5 = createAstro("https://mindevs.github.io");
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Soluciones a medida", "id": "intro" }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<div class="grid grid-cols-1 "> <a href="https://wa.me/+527751236884" class="flex items-center justify-center gap-3 border-2 border-current px-6 py-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:whatsapp", "class": "size-8" })} <span>Escribenos!</span> </a> </div> `, "eyebrow": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "slot": "eyebrow", "name": "logomark", "class": "size-32" })}`, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate`
Transformamos ideas en
<span class="text-primary">soluciones digitales</span>
innovadoras que impulsan el <span class="text-primary">éxito</span> de tu proyecto.
` })}` })}`;
}, "/var/www/Develop/astro/mindevs-landing/src/components/intro.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/mindevs.github.io", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://mindevs.github.io", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/showcase/bgi.json": () => import('../bgi_kvdM5lvo.mjs'),"/src/content/showcase/cloud.json": () => import('../cloud_WQrAbldZ.mjs'),"/src/content/showcase/corset.json": () => import('../corset_z06YsKfc.mjs'),"/src/content/showcase/erp.json": () => import('../erp_K_FZ_5U1.mjs'),"/src/content/showcase/geo.json": () => import('../geo_7CvsD7G-.mjs'),"/src/content/showcase/lenc.json": () => import('../lenc_khHSaDmm.mjs'),"/src/content/showcase/mm.json": () => import('../mm_hqf2BaiD.mjs'),"/src/content/showcase/renabic.json": () => import('../renabic_4hqt1F0M.mjs'),"/src/content/showcase/vvip.json": () => import('../vvip_XuGkGyGt.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"showcase":{"type":"data","entries":{"bgi":"/src/content/showcase/bgi.json","cloud":"/src/content/showcase/cloud.json","corset":"/src/content/showcase/corset.json","erp":"/src/content/showcase/erp.json","geo":"/src/content/showcase/geo.json","lenc":"/src/content/showcase/lenc.json","mm":"/src/content/showcase/mm.json","renabic":"/src/content/showcase/renabic.json","vvip":"/src/content/showcase/vvip.json"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$4 = createAstro("https://mindevs.github.io");
const $$ShowcaseCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ShowcaseCard;
  const { site } = Astro2.props;
  const widths = [450, 800];
  const sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw";
  return renderTemplate`${maybeRenderHead()}<a class="group aspect-video hover:!text-default"${addAttribute(site.data.url, "href")}> <figure class="relative h-full w-full overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full bg-cover object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-20 group-focus:scale-110 group-focus:opacity-20", "src": site.data.image, "widths": widths, "sizes": sizes, "alt": `A screenshot of ${site.data.url}` })} <figcaption class="absolute inset-0"> <div class="flex h-full flex-col items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100"> <h3 class="text-center font-extrabold uppercase text-xl"> ${site.data.title} </h3> <p class="border border-current px-4 py-2">${site.data.url}</p> </div> </figcaption> </figure> </a>`;
}, "/var/www/Develop/astro/mindevs-landing/src/components/showcase-card.astro", void 0);

const $$Astro$3 = createAstro("https://mindevs.github.io");
const $$Showcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Showcase;
  const featuredSites = await getCollection(
    "showcase",
    ({ data }) => "featured" in data
  );
  const orderedSites = featuredSites.sort(
    (a, b) => a.data.featured - b.data.featured
  );
  return renderTemplate`${renderComponent($$result, "ContentSection", $$ContentSection, { "title": "Proyectos", "id": "showcase" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-6xl space-y-2"> <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> ${orderedSites.map((site) => renderTemplate`${renderComponent($$result2, "ShowcaseCard", $$ShowcaseCard, { "site": site })}`)} </div> <p class="text-right text-sm"></p> </div> `, "lead": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "lead" }, { "default": ($$result3) => renderTemplate`
Desde soluciones móviles hasta plataformas <span class="text-primary">empresariales</span>.${" "}` })}` })}`;
}, "/var/www/Develop/astro/mindevs-landing/src/components/showcase.astro", void 0);

const astronautImage = new Proxy({"src":"/mindevs.github.io/_astro/astronaut.BBP-uQK4.png","width":1250,"height":1160,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://mindevs.github.io");
const $$Starfield = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Starfield;
  return renderTemplate`${maybeRenderHead()}<div id="starfield" class="absolute inset-0"> <canvas id="starfield-canvas"></canvas> </div> `;
}, "/var/www/Develop/astro/mindevs-landing/src/components/starfield.astro", void 0);

const $$Astro$1 = createAstro("https://mindevs.github.io");
const $$Splash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Splash;
  const widths = [450, 800];
  const sizes = "(min-width: 640px) 42vw, 67vw";
  return renderTemplate`${maybeRenderHead()}<section class="relative h-full bg-black" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Starfield", $$Starfield, { "data-astro-cid-3egmgwtg": true })} <div id="splash-bg-fallback" class="absolute inset-0 hidden opacity-40" data-astro-cid-3egmgwtg> ${renderComponent($$result, "HeroImage", $$HeroImage, { "data-astro-cid-3egmgwtg": true })} </div> <div class="relative grid h-full place-items-center sm:grid-cols-2" data-astro-cid-3egmgwtg> <h2 class="flex flex-col items-center gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Icon", $$Icon, { "name": "logomark", "class": "size-24 text-white md:size-32", "data-astro-cid-3egmgwtg": true })} <div class="gradient-text text-center font-extrabold tracking-tighter text-8xl" data-astro-cid-3egmgwtg>
Sistemas
<br data-astro-cid-3egmgwtg> Aplicaciones,
<br data-astro-cid-3egmgwtg> Puntos de venta,
<br data-astro-cid-3egmgwtg>Websites,
<br data-astro-cid-3egmgwtg> y más.
</div> </h2> <div id="astronaut" class="w-2/3 max-w-3xl self-start sm:w-10/12 sm:self-auto sm:justify-self-start" data-astro-cid-3egmgwtg> ${renderComponent($$result, "Image", $$Image, { "class": "h-full w-full object-cover", "src": astronautImage, "widths": widths, "sizes": sizes, "loading": "eager", "alt": "A geek guy floating in freelance space ", "data-astro-cid-3egmgwtg": true })} </div> </div> </section> <noscript> <style>
    #splash-bg-fallback {
      display: block;
    }
  </style> </noscript> `;
}, "/var/www/Develop/astro/mindevs-landing/src/components/splash.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mindevs.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { generator, site } = Astro2;
  const image = new URL("social.jpg", site);
  const description = "Sistemas integrales, Aplicaciones M\xF3viles, P\xE1ginas Web y M\xE1s";
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="h-full motion-safe:scroll-smooth" data-theme="dark"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="favicon.svg" type="image/svg+xml"><meta name="generator"', '><title>Mindevs.Tech</title><meta name="description"', '><!-- social media --><meta property="og:title" content="Mindevs.Tech"><meta property="og:type" content="website"><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta name="twitter:card" content="summary_large_image"><!-- initialize theme --><script>\n      const themeSaved = localStorage.getItem("theme");\n\n      if (themeSaved) {\n        document.documentElement.dataset.theme = themeSaved;\n      } else {\n        const prefersDark = window.matchMedia(\n          "(prefers-color-scheme: dark)",\n        ).matches;\n        document.documentElement.dataset.theme = prefersDark ? "dark" : "light";\n      }\n\n      window\n        .matchMedia("(prefers-color-scheme: dark)")\n        .addEventListener("change", (event) => {\n          if (!localStorage.getItem("theme")) {\n            document.documentElement.dataset.theme = event.matches\n              ? "dark"\n              : "light";\n          }\n        });\n    <\/script>', '</head> <body class="h-full overflow-x-hidden bg-default text-default text-base selection:bg-secondary selection:text-white"> ', " ", ' <div class="space-y-24 px-8 py-32"> ', " ", " ", " </div> ", " </body></html>"])), addAttribute(generator, "content"), addAttribute(description, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(site, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Splash", $$Splash, {}), renderComponent($$result, "Intro", $$Intro, {}), renderComponent($$result, "Features", $$Features, {}), renderComponent($$result, "Showcase", $$Showcase, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "/var/www/Develop/astro/mindevs-landing/src/pages/index.astro", void 0);

const $$file = "/var/www/Develop/astro/mindevs-landing/src/pages/index.astro";
const $$url = "/mindevs.github.io";

export { $$Index as default, $$file as file, $$url as url };