/*
document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("wallpaper-gallery");

    // Sample wallpapers (Replace with actual data fetching later)
    const wallpapers = [
        { name: "River & boat", url: "/public/images/River-Boat.jpg", link: "https://instagram.com/post1" },
        { name: "Sky", url: "/public/images/sky.jpg", link: "https://instagram.com/post2" }
    ];

    function loadWallpapers() {
        gallery.innerHTML = "";
        wallpapers.forEach(wallpaper => {
            const wallpaperDiv = document.createElement("div");
            wallpaperDiv.classList.add("wallpaper");
            
            wallpaperDiv.innerHTML = `
                <img src="${wallpaper.url}" alt="${wallpaper.name}">
                <h3>${wallpaper.name}</h3>
                <a href="${wallpaper.link}" target="_blank">View on Instagram</a>
                <br>
                <button onclick="downloadImage('${wallpaper.url}')">Download</button>
            `;
            gallery.appendChild(wallpaperDiv);
        });
    }

    function downloadImage(url) {
        const a = document.createElement("a");
        a.href = url;
        a.download = url.split("/").pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    loadWallpapers();
});

*/
