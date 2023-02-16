import assets from "../constants/assets.js";

const preloadedAssets = {};

const preload = (obj = assets, parentObj = assets) => {
    const subAssets = Object.keys(obj);

    subAssets.forEach(subAsset => {
        if (typeof obj[subAsset] === "object") {
            preload(obj[subAsset], obj);
        }
        else {
            const img = new Image();

            img.src = obj[subAsset];

            img.onload = () => {
                obj[subAsset] = img;

                if (Object.keys(parentObj).every(key => typeof parentObj[key] !== "string")) {
                    Object.assign(preloadedAssets, assets);
                }
            }
        }
    })

    window.assets = preloadedAssets;
}

export default preload;