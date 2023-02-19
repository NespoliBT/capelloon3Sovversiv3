import assets from "../constants/assets.js";

const preloadedAssets = {};

const preload = (obj = assets) => {
    const subAssets = Object.keys(obj);
    const promises = [];

    subAssets.forEach(subAsset => {
        if (typeof obj[subAsset] === "object") {
            promises.push(preload(obj[subAsset], obj));
        } else {
            const img = new Image();

            promises.push(new Promise((resolve, reject) => {
                img.onload = () => {
                    obj[subAsset] = img;
                    resolve();
                };

                img.onerror = reject;
                img.src = obj[subAsset];
            }));
        }
    });

    return Promise.all(promises).then(() => {
        return assets;
    });
};

export default preload;