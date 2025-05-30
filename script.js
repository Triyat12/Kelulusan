document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    // Daftar pengguna sederhana (ganti dengan data yang sebenarnya)
    const users = [
        { nama: 'Budi', kode: '123' },
        { nama: 'Siti', kode: '456' },
        // Tambahkan data siswa lainnya di sini
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const namaInput = document.getElementById('nama').value;
        const kodeInput = document.getElementById('kode').value;

        const user = users.find(u => u.nama.toLowerCase() === namaInput.toLowerCase() && u.kode === kodeInput);

        if (user) {
            localStorage.setItem('namaLulus', user.nama);
            window.location.href = 'lulus.html';
        } else {
            errorMessage.textContent = 'Nama atau kode unik salah.';
        }
    });
});
