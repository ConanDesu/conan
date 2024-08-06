document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        cekKhodam();
    }
});

function cekKhodam() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value;

    if (name.trim() === "") {
        alert("Nama harus diisi!");
        return;
    }

    const khodams = [
        "Penjahat Pria",
        "Penjahat Wanita",
        "Pocong Siluman",
        "Penyedot peju",
        "Kuntilanak Ngantuk",
        "Genderuwo Nyanyi Dangdut",
        "Wewe Gombel Penjual Cilok",
        "Tuyul Malas Bekerja",
        "Pocong Fashionista",
        "Genderuwo Penari Jaipong",
        "Kuntilanak Penggemar K-Pop",
        "Wewe Gombel Influencer",
        "Jin Cilik Hacker",
        "Tuyul Trader Saham",
        "Genderuwo Content Creator",
        "Tuyul Investor Bitcoin",
        "Kuntilanak Gamers",
        "Pemeras peju",
        "Tuyul Investor Peju",
        "Pemeras Susu"
    ];
    const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
    document.getElementById('result').innerText = `Khodam kamu adalah: ${randomKhodam}`;
    nameInput.value = ""; // Reset input field
}
