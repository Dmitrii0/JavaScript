"use strict";

// Kun lomake lähetetään...
const results = document.querySelector("#results");
const form = document.querySelector("form");

form.addEventListener("submit", async function (evt) {

    // Estetään sivun uudelleenlataus
    evt.preventDefault();

    // Haetaan input-elementin arvo
    const query = document.querySelector("#query").value;

    try {
        // Haetaan tiedot TVMaze API:sta
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
        );

        const jsonData = await response.json();

        console.log(jsonData);

        // Tyhjennetään vanhat hakutulokset
        results.innerHTML = "";

        // Käydään kaikki sarjat läpi
        for (let i = 0; i < jsonData.length; i++) {

            const article = document.createElement("article");

            // Sarjan nimi
            const h2 = document.createElement("h2");
            h2.textContent = jsonData[i].show.name;
            article.appendChild(h2);

            // Linkki sarjaan
            const a = document.createElement("a");
            a.href = jsonData[i].show.url;
            a.textContent = "Lisätietoja";
            a.target = "_blank";
            article.appendChild(a);

            // Sarjan kuva
            const img = document.createElement("img");

            if (jsonData[i].show.image !== null) {
                img.src = jsonData[i].show.image.medium;
                img.alt = jsonData[i].show.name;
                article.appendChild(img);
            }

            // Sarjan kuvaus
            const div = document.createElement("div");
            div.innerHTML = jsonData[i].show.summary;
            article.appendChild(div);

            // Lisätään article HTML-sivulle
            results.appendChild(article);
        }

    } catch (error) {
        console.log(error.message);

    } finally {
        console.log("Lataus valmis.");
    }
});