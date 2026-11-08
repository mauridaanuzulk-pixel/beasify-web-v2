/* ===== CONFIG & DATA: edit logo, foto hero, dan daftar beasiswa di sini ===== */
/* MICROSOFT CLARITY: isi Project ID dari dashboard Clarity (cukup di sini, berlaku untuk semua halaman) */
const CLARITY_ID='';
if(CLARITY_ID){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",CLARITY_ID)}

/* ===== PENGATURAN YANG MUDAH DIEDIT =====
   LOGO_SRC : ganti dengan "logo.png" jika file logo.png ada di folder yang sama.
   HERO_IMG : foto di halaman awal, mis. "images/wisuda.jpg". Kosongkan untuk memakai emoji.
   Data beasiswa ada di daftar D di bawah. Isi img:"images/nama.jpg" untuk mengganti emoji dengan gambar.
   Warna ada di :root pada bagian CSS paling atas. */
const LOGO_SRC="gambar/logo.png";
const HERO_IMG="gambar/wisuda.jpg"
const D=[
{id:1,n:"KIP Kuliah",o:"Kemdikbudristek",u:"kip-kuliah.kemdikbud.go.id",j:"S1",t:"Pemerintah",m:"Semua",ipk:0,b:"Biaya kuliah + biaya hidup bulanan",d:"2027-02-28",docs:["KTP/KK","Rapor atau ijazah","Bukti desil atau KIP","Foto rumah"],e:"🎓",img:"gambar/kipkul.jpg"},
{id:2,n:"LPDP Reguler",o:"Kemenkeu RI",u:"lpdp.kemenkeu.go.id",j:"S2",t:"Pemerintah",m:"Semua",ipk:3,b:"Biaya studi, hidup, dan riset",d:"2026-12-05",docs:["Ijazah + transkrip","Esai kontribusi","Surat rekomendasi","Sertifikat bahasa"],e:"🌏",img:"gambar/Gambar2.jpg"},
{id:3,n:"GenBI",o:"Bank Indonesia",u:"bi.go.id",j:"S1",t:"Pemerintah",m:"Ekonomi/Bisnis",ipk:3,b:"Tunjangan bulanan + pembinaan",d:"2026-11-18",docs:["Transkrip nilai","Surat aktif kuliah","Esai","Rekomendasi dosen"],e:"🏦",img:"gambar/Gambar3.jpg"},
{id:4,n:"Djarum Beasiswa Plus",o:"Djarum Foundation",u:"djarumbeasiswaplus.org",j:"S1",t:"Swasta",m:"Teknik/Informatika",ipk:3,b:"Uang saku + pelatihan soft skill",d:"2027-01-15",docs:["Transkrip","Esai","Rekomendasi","Pas foto"],e:"💼",img:"gambar/Gambar4.jpg"},
{id:5,n:"Beasiswa ABC Unggulan",o:"Kampus Mitra",u:"kampus.ac.id",j:"S1",t:"Kampus",m:"Teknik/Informatika",ipk:3.2,b:"Potongan UKT 50–100%",d:"2026-11-12",docs:["KHS","Surat aktif","Portofolio proyek"],e:"💻",img:"gambar/Gambar5.jpg"},
{id:6,n:"Beasiswa Prestasi SMA",o:"Pemda Provinsi",u:"provinsi.go.id",j:"SMA/SMK",t:"Pemerintah",m:"Semua",ipk:0,b:"Bantuan SPP + perlengkapan",d:"2026-12-20",docs:["Rapor","KK","Sertifikat prestasi"],e:"🏅",img:"gambar/kampus.jpg"}];
