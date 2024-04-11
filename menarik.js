const navButtons = document.querySelectorAll('.nav-btn');
const contents = document.querySelectorAll('.content');

let activeButton = navButtons[0]; // Set tombol pertama sebagai tombol yang aktif secara default

// Tambahkan kelas 'active' pada tombol pertama secara default
activeButton.classList.add('active');
activeButton.classList.add('text-blue-500');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        contents.forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(target).classList.remove('hidden');

        // Menghapus kelas 'active' dari tombol yang sebelumnya aktif
        if (activeButton !== null) {
            activeButton.classList.remove('active');
            activeButton.classList.remove('text-blue-500'); // Hapus kelas warna biru dari tombol sebelumnya
        }

        // Menambahkan kelas 'active' ke tombol yang sedang aktif
        button.classList.add('active');
        button.classList.add('text-blue-500'); // Tambahkan kelas warna biru ke tombol yang sedang aktif

        activeButton = button; // Update variabel activeButton dengan tombol yang baru aktif
    });
});


