import Kepek from './Kepek.js';
import KepElem from './KepElem.js';
import kepekObj from './KepTomb.js'; // Importáljuk a képobjektumot

const kepek = new Kepek(kepekObj);
const kepKontener = document.getElementById("kepek"); // Javítva: images helyett kepek
const galeriaElőnézet = document.getElementById("galeria-elonezet");


// Képek hozzáadása a galériához
kepek.getKepek().forEach((imgData) => {
    const kepElem = new KepElem(imgData);
    kepKontener.appendChild(kepElem.element);

    kepElem.element.addEventListener("click", () => {
        // Kattintott kép adatainak kiírása a konzolra
        console.log(`Cím: ${imgData.cim}, Leírás: ${imgData.leiras}`);
        
        // Kattintott kép klónozása és hozzáadása a galeriaElőnézet div-hez
        const clonedImage = kepElem.element.querySelector("img").cloneNode(true);
        galeriaElőnézet.innerHTML = "";
        galeriaElőnézet.appendChild(clonedImage);
    });
});
