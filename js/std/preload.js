import assets from "../constants/assets.js";

const preloadedAssets = {};

const preload = async (obj = assets) => {
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
                img.onerror = (e) => {
                    window.debug && console.log(e, obj[subAsset])
                    reject();
                };
                img.src = obj[subAsset];
            }));
        }
    });

    await Promise.all(promises);
    return assets;
};

export default preload;