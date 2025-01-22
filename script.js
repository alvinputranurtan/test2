const boxes = document.querySelectorAll('.Project1');
let currentIndex = 0;

function updateBoxVisibility(direction) {
    boxes.forEach((box, index) => {
        const shiftValue = box.getAttribute('data-shift') || '0'; // Default shift ke 0 jika tidak ada data

        // Reset animasi dan transformasi
        box.classList.remove('fade-in', 'fade-out-left', 'fade-out-right');
        box.style.transform = '';

        if (index === currentIndex) {
            // Elemen aktif masuk
            if (direction === 'right') {
                box.classList.add('fade-in'); // Masuk dari kanan
                box.style.transform = `translateX(${shiftValue}%)`;
            } else if (direction === 'left') {
                box.classList.add('fade-in'); // Masuk dari kiri
                box.style.transform = `translateX(${shiftValue}%)`;
            }
        } else {
            // Elemen non-aktif keluar
            if (direction === 'right') {
                box.classList.add(index < currentIndex ? 'fade-out-left' : 'fade-out-right');
            } else if (direction === 'left') {
                box.classList.add(index > currentIndex ? 'fade-out-right' : 'fade-out-left');
            }
        }
    });
}

// Navigasi ke kanan
document.getElementById('rightButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % boxes.length; // Geser ke kanan
    updateBoxVisibility('right'); // Arahkan animasi masuk dari kanan
});

// Navigasi ke kiri
document.getElementById('leftButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + boxes.length) % boxes.length; // Geser ke kiri
    updateBoxVisibility('left'); // Arahkan animasi masuk dari kiri
});

// Inisialisasi pertama kali
updateBoxVisibility('right'); // Default animasi dari kanan




const indicators = document.querySelectorAll('.indicator');

// Fungsi untuk memperbarui indikator aktif
function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Perbarui indikator setiap kali ada perubahan
document.getElementById('rightButton').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % boxes.length;
  updateBoxVisibility('right');
  updateIndicators();
});

document.getElementById('leftButton').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
  updateBoxVisibility('left');
  updateIndicators();
});

// Inisialisasi pertama kali
updateIndicators();
