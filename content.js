/**
 * ============================================================
 *   CONTENT CONFIGURATION — content.js
 *   Edit file ini untuk mengubah teks presentasi.
 *   JANGAN ubah nama variabel / key!
 *   Setelah edit, simpan file ini lalu refresh browser.
 * ============================================================
 */

const PPT_CONFIG = {

  /* ─────────────────────────────────────────────────────────
   * 1. IDENTITAS UTAMA
   * ───────────────────────────────────────────────────────── */
  identity: {
    titleLine1: "Real-Time Monitoring Tegangan",
    titleLine2: "dan Kontrol Suhu",
    titleSuffix: "dengan Metode Hysteresis pada PLTS Hybrid Berbasis IoT",
    subTitle: "Studi Kasus · Megadata ISP KRD Banjarsari",
    eyebrow: "PLTS Hybrid · IoT · Laravel",
    coverFooter: "Program Studi S1 Teknik Informatika · Telkom University Purwokerto · 2025",
    closingDept: "S1 Teknik Informatika",
    closingFak: "Fakultas Informatika",
    closingUniv: "Telkom University Purwokerto",
    closingMitra: "Mitra: Megadata ISP KRD Banjarsari",
  },

  /* ─────────────────────────────────────────────────────────
   * 2. IDENTITAS DOSEN & MAHASISWA
   * ───────────────────────────────────────────────────────── */
  persons: {
    mahasiswa: { nama: "Harun Ar Rasyid", id: "NIM. 2211102080" },
    pembimbing1: { nama: "Anggi Zafia, S.T., M.Eng.", nip: "NIP : 23870011" },
    pembimbing2: { nama: "Dasril Aldo, S.Kom., M.Kom.", nip: "NIP : 23940013" },
    penguji1: { nama: "Gunawan Wibisono, S.Kom., M.Kom", nip: "NIP : 13860001" },
    penguji2: { nama: "Fahrudin Mukti Wibowo, S.Kom., M.Eng", nip: "NIP : 18840116" },
  },

  /* ─────────────────────────────────────────────────────────
   * 3. SLIDE 2 — LATAR BELAKANG
   * ───────────────────────────────────────────────────────── */
  latarBelakang: {
    kondisiEksisting: "Sistem PLTS Hybrid di Megadata ISP KRD Banjarsari berada di lokasi terpencil. Monitoring daya dan suhu ruang baterai masih dilakukan secara <strong>manual</strong>.",
    masalah1: {
      judul: "Waktu Respon Lambat",
      isi: "Petugas membutuhkan <strong style=\"color:var(--text-1)\">10–15 menit</strong> perjalanan menuju lokasi PLTS. Dengan medan perjalanan yang masih tanah merah yang licin saat hujan.",
    },
    masalah2: {
      judul: "Optimasi Suhu Otomatis",
      isi: "Penambahan kipas pendingin perangkat elektronik pada gardu PLTS dengan kontrol otomatis.",
    },
    solusi: [
      "<strong>Real-time monitoring</strong> kelistrikan & suhu berbasis web Laravel",
      "<strong>Kontrol suhu otomatis</strong> dengan algoritma Hysteresis + Exhaust Fan",
      "<strong>Alert System</strong> berbasis Buzzer & threshold dinamis dari dashboard",
      // "Eliminasi kebutuhan patroli manual — notifikasi <strong>instan</strong>",
    ],
    kemitraan: "Kemitraan resmi dengan <strong>Megadata ISP KRD Banjarsari</strong> sebagai objek implementasi.",
  },

  /* ─────────────────────────────────────────────────────────
   * 4. SLIDE 3 — RUMUSAN & TUJUAN
   * ───────────────────────────────────────────────────────── */
  rumusanTujuan: {
    rumusan: [
      "<strong>Akses & Medan Sulit:</strong> Keterbatasan mitra dalam memantau gardu PLTS secara real-time karena medan jalan.",
      "<strong>Pemantauan Manual:</strong> Pembacaan parameter masih manual tanpa alert real-time, memicu keterlambatan penanganan.",
      "<strong>Overheat Perangkat:</strong> Belum ada kontrol kipas pendingin otomatis untuk elektronika gardu PLTS.",
    ],
    batasan: [
      "Fokus pada implementasi IoT monitoring kelistrikan/suhu & kontrol exhaust, bukan keseluruhan PLTS.",
      "Objek pantau terbatas pada 4 baterai, listrik PLN, dan suhu gardu PLTS.",
      "Kontrol terbatas pada kipas pendingin perangkat elektronika gardu.",
    ],
    tujuan: [
      { judul: "Monitoring & Kontrol Real-time:", isi: "Membangun sistem IoT untuk memantau tegangan baterai & PLN serta mengendalikan kipas pendingin secara otomatis." },
      { judul: "Integrasi 7 Sensor:", isi: "Mengintegrasikan sensor untuk monitoring & alert tegangan PLN, 4 baterai, suhu gardu, dan suhu jaringan." },
      { judul: "Otomatisasi Suhu Elektronika:", isi: "Mengontrol kipas pendingin perangkat elektronika gardu secara otomatis berdasarkan pembacaan sensor suhu." },
    ],
  },

  /* ─────────────────────────────────────────────────────────
   * 5. SLIDE 4 — FLOWCHART PENELITIAN (panel kanan)
   * ───────────────────────────────────────────────────────── */
  flowchart: {
    fase: [
      { no: "1", judul: "Inisiasi & Analisis Awal", isi: "Studi literatur diikuti observasi dan wawancara langsung ke Megadata ISP KRD Banjarsari (Mitra) untuk mengumpulkan seluruh kebutuhan fungsional sistem." },
      { no: "2", judul: "Metode & Perakitan Alat", isi: "Menentukan metode penelitian experimental dilanjutkan tahap perakitan perangkat keras IoT Unit 1 (monitoring) & Unit 2 (alert system)." },
      { no: "3", judul: "Uji Coba & Iterasi Loop", isi: "Prosedur pengujian fungsional alat. Jika terdapat kesalahan (<em>error/conflict</em>), sistem diprogram ulang dan diuji kembali hingga terverifikasi berhasil." },
      { no: "4", judul: "Implementasi & Evaluasi", isi: "Penerapan langsung sistem di lapangan mitra, evaluasi keandalan durabilitas, serta penyusunan laporan Tugas Akhir secara sistematis." },
    ],
  },

  /* ─────────────────────────────────────────────────────────
   * 6. SLIDE 6 — TAHAPAN PERCOBAAN HARDWARE (tabel)
   *    status: "ok" | "fail" | "warn"
   * ───────────────────────────────────────────────────────── */
  tahapanPercobaan: [
    { no: 1, status: "ok", kegiatan: "Koneksi sensor tegangan DC dengan Arduino Nano", deskripsi: "Sensor tegangan dihubungkan dengan pin analog A0-A3 Arduino Nano untuk pembacaan tegangan baterai.", hasil: "Arduino mampu membaca dan menampilkan nilai tegangan baterai." },
    { no: 2, status: "ok", kegiatan: "Koneksi sensor suhu DS18B20 dengan Arduino Nano", deskripsi: "Dua sensor DS18B20 dihubungkan dengan pin data Arduino Nano menggunakan komunikasi OneWire.", hasil: "Arduino Nano mampu membaca nilai dari kedua sensor suhu." },
    { no: 3, status: "fail", kegiatan: "Koneksi sensor PZEM-004T dengan pin TX/RX Arduino Nano", deskripsi: "Modul PZEM-004T dihubungkan dengan Arduino dengan komunikasi serial perangkat keras (HW Serial).", hasil: "Arduino Nano gagal membaca nilai dari sensor PZEM-004T (konflik pin HW Serial)." },
    { no: 4, status: "ok", kegiatan: "Rekonfigurasi koneksi sensor PZEM-004T dengan pin 2 dan 3 Arduino Nano", deskripsi: "Modul PZEM-004T dihubungkan ulang ke Arduino Nano dengan komunikasi serial perangkat lunak (SoftwareSerial).", hasil: "Arduino Nano berhasil membaca parameter listrik AC (tegangan, arus, daya)." },
    { no: 5, status: "ok", kegiatan: "Pengujian modul relay pada Arduino Nano", deskripsi: "Relay dikendalikan dengan metode Hysteresis berdasarkan nilai sensor suhu.", hasil: "Relay berhasil dikendalikan secara otomatis sesuai dengan perubahan suhu." },
    { no: 6, status: "warn", kegiatan: "Pengujian komunikasi I2C antara Arduino Nano dengan ESP8266", deskripsi: "Data sensor dikirim dari Arduino Nano ke ESP8266 melalui jalur komunikasi I2C.", hasil: "Komunikasi berhasil namun terdapat limitasi buffer I2C maksimal 32 karakter." },
    { no: 7, status: "ok", kegiatan: "Pemindahan pembacaan sensor suhu ke ESP8266", deskripsi: "Sensor suhu DS18B20 langsung dihubungkan ke ESP8266 pada pin D5 untuk mengurangi beban buffer I2C.", hasil: "ESP8266 berhasil membaca nilai sensor suhu secara mandiri." },
    { no: 8, status: "ok", kegiatan: "Pemindahan kontrol relay kipas ke ESP8266 via PCF8574", deskripsi: "Relay dikendalikan langsung oleh ESP8266 menggunakan modul ekspansi I/O I2C PCF8574.", hasil: "ESP8266 berhasil mengendalikan relay otomatis berdasarkan nilai suhu." },
    { no: 9, status: "fail", kegiatan: "Pengujian durabilitas sistem", deskripsi: "Sistem dijalankan secara nonstop dalam jangka waktu panjang di lapangan.", hasil: "Arduino Nano hang setelah 6 hari beroperasi nonstop (memerlukan reset manual)." },
    { no: 10, status: "ok", kegiatan: "Implementasi sistem Auto Reset Arduino Nano", deskripsi: "ESP8266 diprogram untuk memicu reset pin RST Arduino Nano via salah satu port relay.", hasil: "Sistem auto reset berjalan sukses untuk memulihkan Arduino secara berkala." },
    { no: 11, status: "ok", kegiatan: "Pengujian perangkat IoT Alert System", deskripsi: "ESP8266 kedua membaca parameter sensor dan threshold realtime dari web server untuk kendali buzzer.", hasil: "ESP8266 berhasil menyalakan buzzer jika parameter melebihi threshold min/max." },
  ],

  /* ─────────────────────────────────────────────────────────
   * 7. SLIDE 7 — PERUBAHAN ARSITEKTUR (Before vs After)
   * ───────────────────────────────────────────────────────── */
  perubahanArsitektur: {
    before: {
      label: "Rangkaian Awal",
      judul: "Kendala & Desain Awal",
      poin: [
        "<strong>Konflik Hardware Serial:</strong> Pembacaan sensor PZEM-004T pada pin TX/RX bawaan Arduino Nano mengalami bentrok/konflik data serial.",
        "<strong>Limitasi Buffer I2C:</strong> Buffer pengiriman I2C antara Arduino & ESP8266 terbatasi maksimal 32 karakter sehingga data sensor terpotong.",
        "<strong>Durabilitas Rendah:</strong> Arduino Nano mengalami hang secara berkala setelah beroperasi nonstop selama 6 hari.",
      ],
    },
    after: {
      label: "Rangkaian akhir",
      judul: "Solusi & Desain Akhir",
      poin: [
        "<strong>SoftwareSerial & Pin Remap:</strong> Rekonfigurasi PZEM-004T menggunakan SoftwareSerial ke Pin 2 & 3 Arduino Nano berhasil membaca data AC secara presisi.",
        "<strong>Pemisahan Jalur Sensor (DS18B20):</strong> Pemindahan sensor suhu DS18B20 langsung ke ESP8266 (Pin D5) & ekspansi I/O PCF8574 guna memangkas beban payload I2C.",
        "<strong>Sistem Auto-Reset Aktif:</strong> ESP8266 mendeteksi Arduino hang lalu melakukan reset otomatis melalui pin RST Arduino via relay.",
      ],
    },
  },

  /* ─────────────────────────────────────────────────────────
   * 8. SLIDE 10 — SENSOR & KOMPONEN UTAMA
   * ───────────────────────────────────────────────────────── */
  sensorKomponen: [
    {
      judul: "Voltage Divider Resistor",
      img: "voltage divider.png",
      deskripsi: "Menggunakan resistor seri untuk menurunkan tegangan DC baterai (0–30V) ke rentang baca analog Arduino Nano (0–5V). Kalibrasi presisi dengan faktor skala teruji.",
      tag: "DC Baterai (1-4)",
      icon: "fa-car-battery"
    },
    {
      judul: "PZEM-004T (AC Sensor)",
      img: "pzem_004t.png",
      deskripsi: "Mengukur parameter kelistrikan AC PLN (Tegangan, Arus, Daya Aktif) secara real-time via komunikasi serial UART dengan tingkat akurasi tinggi.",
      tag: "Kelistrikan PLN",
      icon: "fa-bolt"
    },
    {
      judul: "DS18B20 (Suhu)",
      img: "ds18b20.png",
      deskripsi: "Sensor suhu digital one-wire yang andal dengan rentang -55°C s.d. +125°C. Diintegrasikan pada satu pin digital untuk memantau dua titik gardu sekaligus.",
      tag: "Suhu Rak Gardu",
      icon: "fa-temperature-half"
    }
  ],

  /* ─────────────────────────────────────────────────────────
   * 9. SLIDE 11 — METODE HYSTERESIS
   * ───────────────────────────────────────────────────────── */
  metodeHysteresis: {
    rumusText: "Sinyal kendali exhaust fan (<strong>v</strong>) ditentukan berdasarkan pembacaan suhu (<strong>u</strong>):",
    setpointAtas: "34°C",
    setpointBawah: "32°C",
    alertText: "Nilai setpoint atas (35°C) dan setpoint bawah (32°C) dapat diubah secara dinamis melalui dashboard Laravel.",
    deadbandPoin: [
      "<strong>Zona Mati (Deadband):</strong><br>Selisih suhu batas ON dan OFF (&alpha; - &beta; = 3°C). Berfungsi sebagai penyangga perubahan status.",
      "<strong>Eliminasi Chattering:</strong><br>Mencegah exhaust fan menyala dan mati secara berulang-ulang dalam waktu singkat akibat fluktuasi suhu kecil.",
      "<strong>Usia Komponen Lebih Panjang:</strong><br>Mengurangi frekuensi switching pada sakelar relay mekanis sehingga memperpanjang masa pakai komponen sistem."
    ]
  },

  /* ─────────────────────────────────────────────────────────
   * 10. SLIDE 12 — IMPLEMENTASI DASHBOARD
   * ───────────────────────────────────────────────────────── */
  dashboardLaravel: [
    { judul: "Visualisasi Real-time", deskripsi: "Tampilan barchart memperbarui data otomatis setiap payload API baru diterima.", icon: "fa-chart-area" },
    { judul: "Log Historis", deskripsi: "Seluruh rekaman parameter disimpan di MySQL dan dapat difilter berdasarkan rentang tanggal maupun perangkat.", icon: "fa-table-list" },
    { judul: "Manajemen Threshold", deskripsi: "Admin dapat mengubah batas suhu, tegangan min/maks dari antarmuka web tanpa perlu menyentuh firmware ESP8266.", icon: "fa-sliders" },
    // { judul: "Multi-device", deskripsi: "Mendukung penambahan perangkat monitor di lokasi berbeda dengan isolasi data per <code style=\"color:var(--sky);font-size:11px\">device_id</code>.", icon: "fa-server" }
  ],

  /* ─────────────────────────────────────────────────────────
   * 11. SLIDE 13 — PENGUJIAN SENSOR
   * ───────────────────────────────────────────────────────── */
  kalibrasiSensor: {
    baris: [
      { sensor: "Voltage Divider", parameter: "Tegangan Baterai 1", pembanding: "Multimeter Digital", error: "0.47%", status: "Lolos Kalibrasi", isGroupStart: true, groupSpan: 4, statusSpan: 4 },
      { sensor: "Voltage Divider", parameter: "Tegangan Baterai 2", pembanding: "", error: "0.48%", status: "" },
      { sensor: "Voltage Divider", parameter: "Tegangan Baterai 3", pembanding: "", error: "0.42%", status: "" },
      { sensor: "Voltage Divider", parameter: "Tegangan Baterai 4", pembanding: "", error: "0.44%", status: "" },

      { sensor: "DS18B20", parameter: "Suhu Router Mikrotik", pembanding: "Termometer HTC-1", error: "0.328%", status: "Sangat Akurat", isGroupStart: true, groupSpan: 2, statusSpan: 2 },
      { sensor: "DS18B20", parameter: "Suhu Adaptor PLTS", pembanding: "", error: "0.309%", status: "" },

      { sensor: "PZEM-004T", parameter: "Tegangan Listrik AC", pembanding: "Din Rail Meter", error: "0.2%", status: "Sangat Akurat", isGroupStart: true, groupSpan: 3, statusSpan: 3 },
      { sensor: "PZEM-004T", parameter: "Arus Listrik AC", pembanding: "", error: "0.01%", status: "" },
      { sensor: "PZEM-004T", parameter: "Daya Aktif AC", pembanding: "", error: "0.28%", status: "" }
    ]
  },

  /* ─────────────────────────────────────────────────────────
   * 12. SLIDE 14 — PENGUJIAN REAL-TIME
   * ───────────────────────────────────────────────────────── */
  pengujianRealtime: {
    delayVal: "2.37",
    delayUnit: "detik",
    mediaTransmisi: "WiFi",
    alertText: "Pada saat pengujian ini, delay mikrokontroles ESP8266 dibuat sekecil mungkin. Nilai delay didapati dari pengurangan timestamp sensor data created degnan date time ntp ESP8266."
  },

  /* ─────────────────────────────────────────────────────────
   * 13. SLIDE 15 — PENGUJIAN HYSTERESIS CONTROL
   * ───────────────────────────────────────────────────────── */
  pengujianHysteresis: {
    stats: [
      { val: "26", desc: "Pergantian (Deadband 0°C)", color: "ro" },
      { val: "6", desc: "Pergantian (Deadband 1°C)", color: "am" },
      { val: "0", desc: "Pergantian (Deadband ≥2°C)", color: "em" },
      { val: "2°C", desc: "Deadband Optimal", color: "" }
    ],
    analisis: [
      "<strong>Deadband 0°C (Tanpa Hysteresis):</strong> Mengalami chattering parah dengan total <strong>26 kali</strong> sakelar relay secara berulang (Relay 1: 22 kali, Relay 2: 4 kali).",
      "<strong>Deadband 1°C:</strong> Chattering berkurang secara signifikan menjadi hanya <strong>6 kali</strong> sakelar relay (Relay 1: 4 kali, Relay 2: 2 kali).",
      "<strong>Deadband ≥2°C:</strong> Chattering relay exhaust fan berhasil dieliminasi sepenuhnya menjadi <strong>0 kali</strong> perpindahan status (Relay 1 & 2: 0 kali)."
    ]
  },

  /* ─────────────────────────────────────────────────────────
   * 14. SLIDE 16 — HASIL BLACKBOX TESTING
   * ───────────────────────────────────────────────────────── */
  blackboxTesting: {
    summary: {
      total: 29,
      berhasil: 29,
      gagal: 0,
      rate: "100%"
    },
    baris: [
      { modul: "Autentikasi (Login/Register)", total: 5, berhasil: 5, gagal: 0, rate: "100%" },
      { modul: "Dasbor Utama", total: 5, berhasil: 5, gagal: 0, rate: "100%" },
      { modul: "Pengaturan Batas Sensor", total: 5, berhasil: 5, gagal: 0, rate: "100%" },
      { modul: "Riwayat Data (Logs)", total: 5, berhasil: 5, gagal: 0, rate: "100%" },
      { modul: "Aksi Data Eksternal (Ekspor)", total: 5, berhasil: 5, gagal: 0, rate: "100%" },
      { modul: "Manajemen Profil Pengguna", total: 4, berhasil: 4, gagal: 0, rate: "100%" }
    ]
  },

  /* ─────────────────────────────────────────────────────────
   * 15. SLIDE 17 — ANALISIS HASIL
   * ───────────────────────────────────────────────────────── */
  analisisHasil: {
    latensiVal: "2.37",
    latensiUnit: "detik",
    latensiDesc: "Rata-rata delay pada kondisi WiFi stabil (RSRP −75 dBm). Memadai untuk monitoring real-time PLTS.",
    performaSuhuPoin: [
      "<strong>Titik 1 (Rak Mikrotik):</strong> Suhu maksimal turun dari 39.94°C menjadi 37.19°C (Penurunan <strong>2.75°C</strong>).",
      "<strong>Titik 2 (Rak Power Supply):</strong> Suhu maksimal turun dari 37.56°C menjadi 37.44°C (Penurunan <strong>0.12°C</strong>)."
    ],
    alertSistemPoin: [
      "Buzzer <strong>intermiten</strong> saat suhu 35–40°C (peringatan dini).",
      "Buzzer <strong>kontinu</strong> saat suhu >40°C atau tegangan <21.0V (kritis).",
      "Latensi aktivasi Buzzer: < 1 siklus polling."
    ],
    dampakOperasionalPoin: [
      "Waktu respons: <strong>15 menit → instan</strong>.",
      "Kebutuhan patroli manual <strong>tereliminasi</strong>.",
      "Threshold dapat diperbarui tanpa downtime hardware."
    ],
    alertBoxText: "Seluruh metrik melampaui target minimum — sistem siap diimplementasikan sebagai solusi produksi."
  },

  /* ─────────────────────────────────────────────────────────
   * 16. SLIDE 18 — IMPLEMENTASI MITRA & SDGs
   * ───────────────────────────────────────────────────────── */
  implementasiMitra: {
    dampakMitraPoin: [
      "<strong>Monitoring Jarak Jauh:</strong> Memantau parameter kelistrikan dan suhu dari kantor mitra secara real-time tanpa perjalanan fisik harian ke gardu bukit.",
      "<strong>Notifikasi Peringatan Dini:</strong> Perangkat Alert System dengan buzzer di kantor berbunyi instan ketika sensor mendeteksi anomali.",
      "<strong>Proteksi Overheat:</strong> Otomatisasi fan secara preventif memelihara stabilitas suhu ruang baterai."
    ],
    mitraAlertBox: "Sistem berhasil dideploy mandiri di server lokal Megadata ISP KRD Banjarsari untuk kelangsungan layanan internet.",
    sdg7Title: "SDG 7 (Energi Bersih & Terjangkau):",
    sdg7Desc: "Meningkatkan keandalan dan masa pakai baterai PLTS sebagai energi bersih di gardu pemancar internet.",
    sdg9Title: "SDG 9 (Industri, Inovasi, & Infrastruktur):",
    sdg9Desc: "Menerapkan teknologi IoT mandiri pada infrastruktur transmisi jaringan internet nirkabel.",
    sdg11Title: "SDG 11 (Kota & Pemukiman Berkelanjutan):",
    sdg11Desc: "Mendukung akses telekomunikasi yang andal bagi pemukiman warga di daerah terpencil."
  },

  /* ─────────────────────────────────────────────────────────
   * 17. SLIDE 19 — KESIMPULAN & SARAN
   * ───────────────────────────────────────────────────────── */
  kesimpulan: {
    poin: [
      "<strong>Sistem Monitoring IoT:</strong> Berhasil diimplementasikan untuk memantau tegangan 4 baterai, listrik PLN, dan suhu gardu PLTS secara real-time via dashboard Laravel dengan rata-rata delay <strong>2.37 detik</strong>.",
      "<strong>Integrasi & Alert System:</strong> Sukses mengintegrasikan 7 sensor (DC voltage divider, AC PZEM-004T, 2 DS18B20) secara otomatis, dilengkapi alert buzzer lokal di kantor mitra untuk mempercepat penanganan.",
      "<strong>Kontrol Hysteresis Exhaust Fan:</strong> Berhasil diterapkan untuk mengatur kipas pendingin otomatis berdasarkan suhu perangkat, menjaga suhu tetap berada pada rentang batas aman."
    ],
    saran: [
      "<strong>Protokol MQTT:</strong> Migrasi dari HTTPClient ke protokol MQTT yang mendukung publish-subscribe untuk efisiensi monitoring real-time dan beban server lebih ringan.",
      "<strong>Parameter Tambahan:</strong> Menambahkan pemantauan arus pengisian/pengosongan baterai, daya inverter, dan performa panel surya agar informasi lebih komprehensif.",
      "<strong>Multi-channel Notifikasi:</strong> Mengembangkan notifikasi ke berbagai media eksternal (WhatsApp, Telegram, email) agar peringatan tersampaikan lebih cepat.",
      "<strong>Metode Kontrol Presisi:</strong> Menerapkan algoritma kontrol suhu yang lebih optimal seperti PID Controller atau Fuzzy Logic pada exhaust fan."
    ]
  },

};

/* ══════════════════════════════════════════════════════════════
 *  RENDER ENGINE — JANGAN EDIT BAGIAN INI
 * ══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  const C = PPT_CONFIG;

  function setText(id, html) { const e = document.getElementById(id); if (e) e.innerHTML = html; }
  function buildList(items) { return items.map(i => `<li>${i}</li>`).join(''); }

  // 1 — Cover identity
  setText('cfg-eyebrow', C.identity.eyebrow);
  setText('cfg-title1', C.identity.titleLine1);
  setText('cfg-title2', C.identity.titleLine2);
  setText('cfg-title-suffix', C.identity.titleSuffix);
  setText('cfg-subtitle', C.identity.subTitle);
  setText('cfg-footer', C.identity.coverFooter);

  // 2 — Persons
  ['mahasiswa', 'pembimbing1', 'pembimbing2', 'penguji1', 'penguji2'].forEach(key => {
    const p = C.persons[key];
    const el = document.getElementById('cfg-person-' + key);
    if (!p || !el) return;
    el.querySelector('.cp-name').textContent = p.nama;
    el.querySelector('.cp-id').innerHTML = p.nip || p.id || '';
  });

  // 3 — Latar Belakang
  const lb = C.latarBelakang;
  setText('cfg-lb-eksisting', lb.kondisiEksisting);
  setText('cfg-lb-m1-judul', lb.masalah1.judul);
  setText('cfg-lb-m1-isi', lb.masalah1.isi);
  setText('cfg-lb-m2-judul', lb.masalah2.judul);
  setText('cfg-lb-m2-isi', lb.masalah2.isi);
  setText('cfg-lb-solusi', buildList(lb.solusi));
  setText('cfg-lb-kemitraan', lb.kemitraan);

  // 4 — Rumusan & Tujuan
  const rt = C.rumusanTujuan;
  setText('cfg-rt-rumusan', buildList(rt.rumusan));
  setText('cfg-rt-batasan', buildList(rt.batasan));
  setText('cfg-rt-tujuan', rt.tujuan.map(t =>
    `<li style="margin-bottom:14px;"><strong>${t.judul}</strong><br>${t.isi}</li>`).join(''));

  // 5 — Flowchart fase cards
  C.flowchart.fase.forEach((f, i) => {
    const card = document.getElementById('cfg-fc-' + i);
    if (!card) return;
    card.querySelector('.cfg-fc-judul').innerHTML = `<span class="badge ${i % 2 === 0 ? 'blue' : ''}">${f.no}</span> ${f.judul}`;
    card.querySelector('.cfg-fc-isi').innerHTML = f.isi;
  });

  // 6 — Tahapan Percobaan table rows
  const statusIcon = { ok: 'fa-circle-check', fail: 'fa-circle-xmark', warn: 'fa-triangle-exclamation' };
  const statusColor = { ok: 'var(--emerald)', fail: 'var(--rose)', warn: 'var(--amber)' };
  const tbody = document.getElementById('cfg-tahapan-tbody');
  if (tbody) {
    tbody.innerHTML = C.tahapanPercobaan.map(r => `
      <tr>
        <td style="text-align:center;font-family:var(--font-mono);padding:6px 8px;">${r.no}</td>
        <td style="font-weight:600;padding:6px 12px;">${r.kegiatan}</td>
        <td style="padding:6px 12px;line-height:1.45;">${r.deskripsi}</td>
        <td style="padding:6px 12px;line-height:1.45;color:${statusColor[r.status]};font-weight:500;">
          <i class="fa-solid ${statusIcon[r.status]}"></i> ${r.hasil}
        </td>
      </tr>`).join('');
  }

  // 7 — Perubahan Arsitektur
  const pa = C.perubahanArsitektur;
  setText('cfg-pa-before-label', pa.before.label);
  setText('cfg-pa-before-judul', pa.before.judul);
  setText('cfg-pa-before-poin', buildList(pa.before.poin));
  setText('cfg-pa-after-label', pa.after.label);
  setText('cfg-pa-after-judul', pa.after.judul);
  setText('cfg-pa-after-poin', buildList(pa.after.poin));

  // 8 — Sensor & Komponen (Slide 10)
  const sensorKomponenList = document.getElementById('cfg-sensor-komponen-list');
  if (sensorKomponenList) {
    sensorKomponenList.innerHTML = C.sensorKomponen.map((s, idx) => `
      <div class="card ${idx === 0 ? 'sky' : ''}" style="display:flex;flex-direction:column;justify-content:space-between;">
          <div>
              <div class="card-icon"><i class="fa-solid ${s.icon}" style="color:${idx === 0 ? 'var(--sky)' : (idx === 1 ? 'var(--amber)' : 'var(--rose)')}"></i></div>
              <h3>${s.judul}</h3>
              <div class="card-img-wrapper">
                  <img src="${s.img}" alt="${s.judul}">
              </div>
              <p style="margin-top:6px;font-size:11.5px;line-height:1.6;">${s.deskripsi}</p>
          </div>
          <div class="tag ${idx === 0 ? 'sky' : (idx === 1 ? 'am' : 'rose')}" style="margin-top:10px;align-self:start;">${s.tag}</div>
      </div>
    `).join('');
  }

  // 9 — Metode Hysteresis (Slide 11)
  setText('cfg-s11-rumus-text', C.metodeHysteresis.rumusText);
  setText('cfg-s11-setpoint-atas', C.metodeHysteresis.setpointAtas);
  setText('cfg-s11-setpoint-bawah', C.metodeHysteresis.setpointBawah);
  setText('cfg-s11-deadband-poin', buildList(C.metodeHysteresis.deadbandPoin));
  const s11Alert = document.getElementById('cfg-s11-alert-text');
  if (s11Alert) {
    s11Alert.innerHTML = `<i class="fa-solid fa-circle-info" style="color:var(--sky)"></i> ${C.metodeHysteresis.alertText}`;
  }

  // 10 — Implementasi Dashboard (Slide 12)
  const dashboardCols = document.getElementById('cfg-dashboard-cols');
  if (dashboardCols) {
    const images = ["dashboardUI.png", "logs.png", "devicesetting.png"];
    const labels = ["Dashboard Utama", "Logs / Detail", "Threshold Setting"];
    dashboardCols.innerHTML = C.dashboardLaravel.map((feat, idx) => `
      <div style="flex:1; display:flex; flex-direction:column; gap:10px;">
          <!-- Image Zone -->
          <div class="img-zone" id="iz-impl-dashboard-${idx+1}" onclick="triggerUpload('iz-impl-dashboard-${idx+1}')" style="flex:1; min-height:160px;">
              <img id="img-impl-dashboard-${idx+1}" src="${images[idx]}" class="loaded" alt="${feat.judul}">
              <div class="iz-hint">
                  <i class="fa-solid ${feat.icon} iz-icon" style="font-size:24px"></i>
                  <div class="iz-label" style="font-size:11px;">${labels[idx]}</div>
                  <div class="iz-sub" style="font-size:9px;">Klik untuk upload</div>
              </div>
              <input type="file" accept="image/*"
                  onchange="loadImgZone('img-impl-dashboard-${idx+1}','iz-impl-dashboard-${idx+1}',this)">
          </div>
          <!-- Compact Feature Card -->
          <div class="card ${idx === 0 ? 'sky' : ''}" style="padding:10px 12px; display:flex; flex-direction:column; gap:4px; height:80px; justify-content:center;">
              <h3 style="font-size:11px; margin:0;"><i class="fa-solid ${feat.icon}" style="${idx !== 0 ? 'color:var(--sky);' : ''}margin-right:6px; font-size:12px;"></i> ${feat.judul}</h3>
              <p style="font-size:9.5px; margin:0; line-height:1.4; color:var(--text-2);">${feat.deskripsi}</p>
          </div>
      </div>
    `).join('');
  }

  // 11 — Pengujian Sensor (Slide 13)
  const calTbody = document.getElementById('cfg-kalibrasi-tbody');
  if (calTbody) {
    calTbody.innerHTML = C.kalibrasiSensor.baris.map(r => {
      let tds = '';
      if (r.isGroupStart) {
        let bg = 'rgba(14,165,233,0.02)';
        if (r.sensor.includes('DS18')) bg = 'rgba(225,29,72,0.02)';
        if (r.sensor.includes('PZEM')) bg = 'rgba(217,119,6,0.02)';
        tds += `<td rowspan="${r.groupSpan}" style="padding:4px 8px; font-weight:700; color:var(--text-1); border-bottom:1px solid var(--border); background:${bg};"><strong style="color:var(--text-1)">${r.sensor}</strong></td>`;
      }
      tds += `<td style="padding:4px 8px;">${r.parameter}</td>`;
      if (r.isGroupStart) {
        tds += `<td rowspan="${r.groupSpan}" style="padding:4px 8px; border-bottom:1px solid var(--border); color:var(--text-3);">${r.pembanding}</td>`;
      }
      let errCol = 'var(--text-1)';
      if (parseFloat(r.error) < 0.4) errCol = 'var(--emerald)';
      tds += `<td style="padding:4px 8px; font-family:var(--font-mono); font-weight:600; color:${errCol};">${r.error}</td>`;

      if (r.isGroupStart) {
        tds += `<td rowspan="${r.statusSpan}" style="padding:4px 8px; border-bottom:1px solid var(--border);"><span class="tag em" style="font-size:9px; padding:2px 6px;"><i class="fa-solid fa-circle-check"></i> ${r.status}</span></td>`;
      }
      return `<tr>${tds}</tr>`;
    }).join('');
  }

  // 12 — Pengujian Real-Time (Slide 14)
  const delayValEl = document.getElementById('cfg-s14-delay-val');
  if (delayValEl) {
    delayValEl.innerHTML = `${C.pengujianRealtime.delayVal}<span style="font-size:14px">${C.pengujianRealtime.delayUnit}</span>`;
  }
  setText('cfg-s14-media-val', C.pengujianRealtime.mediaTransmisi);
  const s14AlertText = document.getElementById('cfg-s14-alert-text');
  if (s14AlertText) {
    s14AlertText.innerHTML = `<i class="fa-solid fa-circle-info" style="color:var(--sky)"></i> ${C.pengujianRealtime.alertText}`;
  }

  // 13 — Pengujian Hysteresis (Slide 15)
  const s15Stats = document.getElementById('cfg-s15-stats');
  if (s15Stats) {
    s15Stats.innerHTML = C.pengujianHysteresis.stats.map(s => {
      let colClass = s.color ? s.color : '';
      let borderCol = s.color === 'ro' ? 'rgba(244,63,94,0.3)' : (s.color === 'am' ? 'rgba(245,158,11,0.3)' : (s.color === 'em' ? 'rgba(16,185,129,0.3)' : 'rgba(56,189,248,0.3)'));
      return `
        <div class="stat-box" style="border-color:${borderCol}">
            <div class="stat-val ${colClass}" style="font-size:24px;">${s.val}</div>
            <div class="stat-lbl">${s.desc}</div>
        </div>
      `;
    }).join('');
  }
  setText('cfg-s15-analisis', buildList(C.pengujianHysteresis.analisis));

  // 14 — Blackbox Testing (Slide 16)
  setText('cfg-s16-summary-total', C.blackboxTesting.summary.total);
  setText('cfg-s16-summary-berhasil', C.blackboxTesting.summary.berhasil);
  setText('cfg-s16-summary-gagal', C.blackboxTesting.summary.gagal);
  const rateEl = document.getElementById('cfg-s16-summary-rate');
  if (rateEl) {
    rateEl.innerHTML = `${C.blackboxTesting.summary.rate.replace('%', '')}<span style="font-size:16px">%</span>`;
  }
  const s16Tbody = document.getElementById('cfg-s16-tbody');
  if (s16Tbody) {
    let rowsHtml = C.blackboxTesting.baris.map(r => `
      <tr>
          <td>${r.modul}</td>
          <td style="text-align: center; font-family: var(--font-mono);">${r.total}</td>
          <td style="text-align: center; font-family: var(--font-mono); color: var(--emerald); font-weight: 600;">${r.berhasil}</td>
          <td style="text-align: center; font-family: var(--font-mono);">${r.gagal}</td>
          <td style="text-align: center;"><span class="tag em"><i class="fa-solid fa-check"></i> ${r.rate}</span></td>
      </tr>
    `).join('');
    rowsHtml += `
      <tr style="background: rgba(14, 165, 233, 0.05); font-weight: 700;">
          <td>Total</td>
          <td style="text-align: center; font-family: var(--font-mono);">${C.blackboxTesting.summary.total}</td>
          <td style="text-align: center; font-family: var(--font-mono); color: var(--emerald);">${C.blackboxTesting.summary.berhasil}</td>
          <td style="text-align: center; font-family: var(--font-mono);">${C.blackboxTesting.summary.gagal}</td>
          <td style="text-align: center;"><span class="tag em" style="font-weight: 700;"><i class="fa-solid fa-square-check"></i> ${C.blackboxTesting.summary.rate} Pass</span></td>
      </tr>
    `;
    s16Tbody.innerHTML = rowsHtml;
  }

  // 15 — Analisis Hasil (Slide 17)
  setText('cfg-s17-latensi-val', C.analisisHasil.latensiVal);
  setText('cfg-s17-latensi-unit', C.analisisHasil.latensiUnit);
  setText('cfg-s17-latensi-desc', C.analisisHasil.latensiDesc);
  setText('cfg-s17-suhu-poin', buildList(C.analisisHasil.performaSuhuPoin));
  setText('cfg-s17-alert-poin', buildList(C.analisisHasil.alertSistemPoin));
  setText('cfg-s17-dampak-poin', buildList(C.analisisHasil.dampakOperasionalPoin));
  const s17AlertBox = document.getElementById('cfg-s17-alert-box');
  if (s17AlertBox) {
    s17AlertBox.innerHTML = `<i class="fa-solid fa-info-circle" style="color:var(--sky)"></i> ${C.analisisHasil.alertBoxText}`;
  }

  // 16 — Implementasi & Dampak SDGs (Slide 18)
  setText('cfg-s18-dampak-poin', buildList(C.implementasiMitra.dampakMitraPoin));
  const s18AlertBox = document.getElementById('cfg-s18-alert-box');
  if (s18AlertBox) {
    s18AlertBox.innerHTML = `<i class="fa-solid fa-handshake" style="color:var(--emerald)"></i> ${C.implementasiMitra.mitraAlertBox}`;
  }
  setText('cfg-s18-sdg7-title', C.implementasiMitra.sdg7Title);
  setText('cfg-s18-sdg7-desc', C.implementasiMitra.sdg7Desc);
  setText('cfg-s18-sdg9-title', C.implementasiMitra.sdg9Title);
  setText('cfg-s18-sdg9-desc', C.implementasiMitra.sdg9Desc);
  setText('cfg-s18-sdg11-title', C.implementasiMitra.sdg11Title);
  setText('cfg-s18-sdg11-desc', C.implementasiMitra.sdg11Desc);

  // 17 — Kesimpulan & Saran (Slide 19)
  setText('cfg-kes-poin', buildList(C.kesimpulan.poin));
  setText('cfg-kes-saran', buildList(C.kesimpulan.saran));

  // Closing slide
  setText('cfg-closing-dept', C.identity.closingDept);
  setText('cfg-closing-fak', C.identity.closingFak);
  setText('cfg-closing-univ', C.identity.closingUniv);
  setText('cfg-closing-mitra', C.identity.closingMitra);
});
