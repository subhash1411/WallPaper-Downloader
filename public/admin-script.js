// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC59PY-oTgpTOEzuzbqYO-LQuK7658gQ6Y",
    authDomain: "wallpaper-downloader-93db5.firebaseapp.com",
    projectId: "wallpaper-downloader-93db5",
    storageBucket: "wallpaper-downloader-93db5.firebasestorage.app",
    messagingSenderId: "454896926962",
    appId: "1:454896926962:web:f35a715800d9662da8106b",
    measurementId: "G-DCDV9L9MVM"
  };
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();



document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("upload-form");

    uploadForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const imageFile = document.getElementById("image-file").files[0];
        const instagramLink = document.getElementById("instagram-link").value;

        if (!name || !imageFile || !instagramLink) {
            alert("Please fill in all fields.");
            return;
        }

        // Upload image to Cloudinary
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", "wallpaper_upload"); // Replace with your Cloudinary upload preset
        formData.append("cloud_name", "dubszdq1n"); // Replace with your Cloudinary cloud name

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dubszdq1n/image/upload`, {
                method: "POST",
                body: formData
            });
        
            const data = await response.json();
            console.log("Cloudinary Response:", data);
        
            if (!data.secure_url) {
                throw new Error("Cloudinary did not return a valid image URL.");
            }
        
            const imageUrl = data.secure_url;
        
            // Save details in Firestore
            const wallpaperData = {
                name,
                url: imageUrl,
                link: instagramLink
            };
        
            db.collection("wallpapers").add(wallpaperData)
                .then(() => {
                    alert("Wallpaper uploaded successfully!");
                    uploadForm.reset();
                })
                .catch(error => {
                    console.error("Firestore Error:", error); // Logs Firestore error to debug
                    alert("Failed to save image details in Firestore.");
                });
        
        } catch (error) {
            console.error("Error uploading image: ", error);
            alert("Image upload failed. Try again.");
        }
        
    });
});