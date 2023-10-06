// Ambil tautan yang akan mengaktifkan tampilan keterampilan
const toggleLink = document.getElementById('toggle-skill');

// Ambil elemen keterampilan yang ingin ditampilkan atau disembunyikan
const skillbar = document.getElementById('buka-skill');

// Tambahkan event listener ke tautan
toggleLink.addEventListener('click', function (bar) {
    bar.preventDefault(); // Mencegah tautan melakukan navigasi default

    // Periksa apakah keterampilan sudah ditampilkan atau belum
    if (skillbar.style.display === 'block') {
        // Jika sudah ditampilkan, sembunyikan
        skillbar.style.display = 'none';

    } else {
        // Jika belum ditampilkan, tampilkan
        skillbar.style.display = 'block';
    }
});