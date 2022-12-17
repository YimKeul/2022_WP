const imageIdList = [];

window.addEventListener("load", () => {
    Array.prototype.forEach.call(document.getElementsByTagName("img"), (image) => {
        imageIdList.push(image.id);
        image.addEventListener("dragstart", (e) => e.dataTransfer.setData("text", image.id));
    });

    Array.prototype.forEach.call(document.getElementsByClassName("basket"), (div) => {
        div.addEventListener("dragover", (e) => e.preventDefault());
        div.addEventListener("drop", (e) => {
            e.preventDefault();
            const imageId = e.dataTransfer.getData("text");
            e.currentTarget.appendChild(document.getElementById(imageId));
            saveToLocalStorage(imageId, e.currentTarget.id);
        });
    });

    document.getElementById("readButton").addEventListener("click", _reload);


    function _reload() {
        for (const imageId of loadOrderedImageId()) {
            const div = loadFromLocalStorage(imageId);
            if (div == null) continue;

            document.getElementById(div).appendChild(document.getElementById(imageId));
        }
    }
});

function loadOrderedImageId() {
    const lastModifiedTimeList = [];
    const lastModifiedTimeMap = loadLastModifiedTime();

    for (const imageId in lastModifiedTimeMap) {
        lastModifiedTimeList.push([imageId, lastModifiedTimeMap[imageId]]);
    }
    lastModifiedTimeList.sort((a, b) => a[1] - b[1]);

    return lastModifiedTimeList.map((item) => item[0]);
}

function loadFromLocalStorage(key) {
    if (!Storage) return null;

    return localStorage.getItem(key);
}

function saveToLocalStorage(key, value) {
    if (!Storage) return false;  // failed

    const lastModifiedTimeMap = loadLastModifiedTime();
    localStorage.setItem(key, value);
    lastModifiedTimeMap[key] = Date.now();
    saveLastModifiedTime(lastModifiedTimeMap);

    return true;


    function saveLastModifiedTime(lastModifiedTimeMap) {
        if (!Storage) return false;

        localStorage.setItem("lastModifiedTimeMap", JSON.stringify(lastModifiedTimeMap));
        return true;
    }
}

function loadLastModifiedTime() {
    if (!Storage) return null;
    if (!localStorage.getItem("lastModifiedTimeMap")) return {};
    return JSON.parse(localStorage.getItem("lastModifiedTimeMap"));
}
