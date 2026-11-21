/* =================================
   1. ALERT SELAMAT DATANG
================================= */

window.addEventListener("load", function() {
  alert("Selamat datang di website Jelajah Raja Ampat! 🌊");
});


/* =================================
   2. DATA DETAIL DESTINASI
================================= */

const dataDestinasi = {
  "Piaynemo": {
    kategori: "Wisata Alam",
    deskripsi: "Piaynemo merupakan salah satu ikon wisata Raja Ampat. Tempat ini terkenal dengan gugusan pulau karst kecil yang dikelilingi laut jernih berwarna biru."
  },
  "Pulau Wayag": {
    kategori: "Wisata Alam",
    deskripsi: "Pulau Wayag dikenal dengan gugusan pulau karst dan pemandangan laut yang luas. Kawasan ini menjadi salah satu panorama alam terkenal di Raja Ampat."
  },
  "Pasir Timbul": {
    kategori: "Wisata Alam",
    deskripsi: "Pasir Timbul adalah hamparan pasir putih yang muncul ketika air laut surut. Pengunjung dapat menikmati pemandangan laut di sekitarnya."
  },
  "Papeda Ikan Kuah Kuning": {
    kategori: "Kuliner",
    deskripsi: "Papeda merupakan makanan berbahan dasar sagu yang bertekstur kenyal dan biasanya disantap bersama ikan serta kuah kuning berbumbu."
  },
  "Ikan Bakar": {
    kategori: "Kuliner",
    deskripsi: "Ikan bakar menjadi salah satu hidangan yang mudah dijumpai di wilayah pesisir Papua, biasanya disajikan dengan sambal dan pelengkap."
  },
  "Sagu Lempeng": {
    kategori: "Kuliner",
    deskripsi: "Sagu lempeng adalah olahan sagu tradisional berbentuk lempengan yang dikenal di berbagai wilayah Papua."
  },
  "Tari Wor": {
    kategori: "Budaya",
    deskripsi: "Tari Wor merupakan salah satu tradisi tari masyarakat Biak di Papua yang berkaitan dengan kegiatan adat dan kebudayaan."
  },
  "Suling Tambur": {
    kategori: "Budaya",
    deskripsi: "Suling tambur merupakan kesenian musik tradisional Papua yang memadukan alat musik tiup dan pukul."
  },
  "Noken": {
    kategori: "Budaya",
    deskripsi: "Noken adalah tas tradisional Papua yang dibuat dengan teknik rajutan atau anyaman dan memiliki nilai budaya bagi masyarakat Papua."
  }
};


/* =================================
   3. FUNGSI LIHAT DETAIL
================================= */

function lihatDetail(nama) {
  const destinasi = dataDestinasi[nama];
  
  if (destinasi) {
    alert(
      "Nama: " + nama +
      "\nKategori: " + destinasi.kategori +
      "\n\nInformasi:\n" + destinasi.deskripsi
    );
  } else {
    alert("Informasi destinasi tidak ditemukan.");
  }
}


/* =================================
   4. PROSES FORM PEMESANAN
================================= */

const formPemesanan = document.getElementById("formPemesanan");

formPemesanan.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Mengambil nilai dari input
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const destinasi = document.getElementById("destinasi").value;
  const tanggal = document.getElementById("tanggal").value;
  const jumlah = document.getElementById("jumlah").value;
  const pesan = document.getElementById("pesan").value.trim();
  
  // Validasi formulir
  if (
    nama === "" ||
    email === "" ||
    destinasi === "" ||
    tanggal === "" ||
    jumlah === ""
  ) {
    alert("Mohon lengkapi semua data yang wajib diisi!");
    return;
  }
  
  if (Number(jumlah) < 1) {
    alert("Jumlah pengunjung minimal 1 orang.");
    return;
  }
  
  // Membuat ringkasan pemesanan
  const ringkasan =
    "RINGKASAN PEMESANAN KUNJUNGAN\n\n" +
    "Nama: " + nama + "\n" +
    "Email: " + email + "\n" +
    "Destinasi: " + destinasi + "\n" +
    "Tanggal: " + tanggal + "\n" +
    "Jumlah Pengunjung: " + jumlah + " orang\n" +
    "Catatan: " + (pesan || "-");
  
  // Menampilkan hasil pada halaman
  const hasil = document.getElementById("hasilPemesanan");
  
  hasil.innerHTML = `
        <div class="booking-form">
            <h3>Pemesanan Berhasil Dibuat!</h3>
            <br>
            <p><strong>Nama:</strong> ${escapeHTML(nama)}</p>
            <p><strong>Email:</strong> ${escapeHTML(email)}</p>
            <p><strong>Destinasi:</strong> ${escapeHTML(destinasi)}</p>
            <p><strong>Tanggal:</strong> ${escapeHTML(tanggal)}</p>
            <p><strong>Jumlah Pengunjung:</strong> ${escapeHTML(jumlah)} orang</p>
            <p><strong>Catatan:</strong> ${escapeHTML(pesan || "-")}</p>

            <a href="#" class="email-button" id="kirimEmail">
                Kirim Melalui Email
            </a>
        </div>
    `;
  
  // Menyiapkan isi email
  const subjek = encodeURIComponent("Pemesanan Kunjungan Jelajah Raja Ampat");
  const isiEmail = encodeURIComponent(ringkasan);
  
  // Membuat tombol email
  document.getElementById("kirimEmail").addEventListener("click", function(event) {
    event.preventDefault();
    
    const emailTujuan = "pengelola@example.com";
    
    window.location.href =
      "mailto:" + emailTujuan +
      "?subject=" + subjek +
      "&body=" + isiEmail;
  });
  
  alert("Data pemesanan berhasil diproses!");
});


/* =================================
   5. FUNGSI PENGAMAN TAMPILAN TEKS
================================= */

function escapeHTML(teks) {
  return String(teks).replace(/[&<>"']/g, function(karakter) {
    const pengganti = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    
    return pengganti[karakter];
  });
}