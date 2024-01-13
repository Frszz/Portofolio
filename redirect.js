// Definisikan fungsi untuk mengarahkan ke profil LinkedIn
function redirectToLinkedIn() {
    // Ganti URL di bawah ini dengan URL profil LinkedIn Anda
    var linkedinURL = "https://www.linkedin.com/in/muhammad-faris-adira-437b83292/";
    
    // Buka tautan ke profil LinkedIn
    window.location.href = linkedinURL;
}

// Dapatkan elemen gambar berdasarkan ID
var linkedin = document.getElementById("linkedin");

// Tambahkan event listener untuk memanggil fungsi saat gambar diklik
linkedin.addEventListener("click", redirectToLinkedIn);

/////////////////////////////////////////////////////////////////////////////

// Definisikan fungsi untuk mengarahkan ke profil Github
function redirectToGithub() {
    // Ganti URL di bawah ini dengan URL profil Github Anda
    var githubURL = "https://github.com/Frszz";
    
    // Buka tautan ke profil Github
    window.location.href = githubURL;
}

// Dapatkan elemen gambar berdasarkan ID
var github = document.getElementById("github");

// Tambahkan event listener untuk memanggil fungsi saat gambar diklik
github.addEventListener("click", redirectToGithub);

/////////////////////////////////////////////////////////////////////////////

// redirect.js
function redirectToProject1() {
    // Ganti URL berikut dengan URL tujuan Anda
    var project1Url = 'https://github.com/Frszz/Basarnas';
    
    // Lakukan redirect
    window.location.href = project1Url;
}

function redirectToProject2() {
    // Ganti URL berikut dengan URL tujuan Anda
    var project2Url = 'https://github.com/Frszz/Rafda-Shop';
    
    // Lakukan redirect
    window.location.href = project2Url;
}

function redirectToProject3() {
    // Ganti URL berikut dengan URL tujuan Anda
    var project3Url = 'https://github.com/Frszz/Mutamadra';
    
    // Lakukan redirect
    window.location.href = project3Url;
}
