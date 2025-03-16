// Ensure Firebase SDK is available
if (typeof firebase === "undefined") {
    console.error("Firebase SDK not loaded. Check your HTML script order.");
} else {
    console.log("Firebase SDK loaded successfully.");

    // Firebase Configuration
    const firebaseConfig = {
        apiKey: "AIzaSyC59PY-oTgpTOEzuzbqYO-LQuK7658gQ6Y",
        authDomain: "wallpaper-downloader-93db5.firebaseapp.com",
        projectId: "wallpaper-downloader-93db5",
        storageBucket: "wallpaper-downloader-93db5.appspot.com",
        messagingSenderId: "454896926962",
        appId: "1:454896926962:web:f35a715800d9662da8106b"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Initialize Firestore
    const db = firebase.firestore();

    // Function to Fetch Wallpapers
    function fetchWallpapers() {
        const gallery = document.getElementById("wallpaper-gallery");

        db.collection("wallpapers").get().then((querySnapshot) => {
            gallery.innerHTML = ""; // Clear existing content

            querySnapshot.forEach((doc) => {
                const wallpaper = doc.data();

                // Create wallpaper card
                const wallpaperDiv = document.createElement("div");
                wallpaperDiv.classList.add("wallpaper-card");

                wallpaperDiv.innerHTML = `
                    <img src="${wallpaper.url}" alt="${wallpaper.name}" class="wallpaper-image"/>
                    <p>${wallpaper.name}</p>
                    <a href="${wallpaper.link}" target="_blank">View on Instagram</a>
                `;

                gallery.appendChild(wallpaperDiv);
            });
        }).catch((error) => {
            console.error("Error fetching wallpapers:", error);
        });
    }

    // Fetch wallpapers when the page loads
    document.addEventListener("DOMContentLoaded", fetchWallpapers);
}
