class KepElem {
    constructor(imgData) {
        this.imgData = imgData;
        this.element = this.createImgElement();
    }

    createImgElement() {
        const konténer = document.createElement("div"); // Volt: container
        konténer.className = "kép-konténer"; // Volt: .img-container
        const img = document.createElement("img");
        img.src = this.imgData.src;
        img.alt = this.imgData.cim;
        img.dataset.info = `Cím: ${this.imgData.cim}, Leírás: ${this.imgData.leiras}`;
        konténer.appendChild(img);
        return konténer; // Volt: container
    }
}

export default KepElem;