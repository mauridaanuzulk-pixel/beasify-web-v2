/* ===== AUTH: landing, pop-up pilih peran, login, daftar ===== */
function landing(){return `<div class="w"><div class="hero"><div><h1>Temukan beasiswa yang cocok untukmu</h1><p>Semua informasi beasiswa resmi dalam satu aplikasi. Cari, simpan, dan siapkan dokumen sebelum deadline.</p><button class="p" onclick="pop()">Mulai sekarang</button></div><div class="ph">${HERO_IMG?`<img src="${HERO_IMG}" alt="" style="width:100%;height:100%;object-fit:cover">`:"🎓"}</div></div>
<div class="g3"><div class="card"><h3>Terpusat</h3>Tidak perlu buka banyak website dan grup.</div><div class="card"><h3>Terverifikasi</h3>Sumber resmi dan tanggal pembaruan jelas.</div><div class="card"><h3>Tepat waktu</h3>Bookmark, checklist dokumen, dan hitung mundur deadline.</div></div></div>`}
function pop(){dg.innerHTML=`<h3 style="text-align:center">Temukan beasiswa impian atau publikasikan program beasiswa Anda</h3><div class="row"><a class="bt p" href="masuk.html" onclick="dg.close()">Cari beasiswa</a><a class="bt p" href="mitra-masuk.html" onclick="dg.close()">Portal mitra</a></div><p class="lk"><a onclick="dg.close()">Batal</a></p>`;dg.showModal()}
function auth(r,up){const m=r==='m';return `<div class="w"><div class="card au"><h2>${up?(m?'Registrasi Mitra':'Daftar akun'):(m?'Login Mitra':'Login')}</h2>
${up?`<label>${m?'Nama institusi':'Nama pengguna'}<input id="a1"></label>`:''}<label>Email<input id="a2" type="email"></label>
${up&&m?'<label>Nomor telepon<input id="a4" type="tel"></label>':''}<label>Kata sandi<input id="a3" type="password"></label>
${up?'<label>Ulangi kata sandi<input id="a5" type="password"></label>':''}
<button class="p bl" onclick="login('${r}',${up})">${up?(m?'Daftar sebagai mitra':'Daftar'):'Masuk'}</button>
${!up?'<div class="or">atau</div><button class="bl" onclick="login(\''+r+'\',0)">Masuk dengan Google</button>':''}
<div class="lk">${up?'Sudah punya akun? <a href="'+(m?'mitra-masuk.html':'masuk.html')+'">Masuk</a>':'Belum punya akun? <a href="'+(m?'mitra-daftar.html':'daftar.html')+'">Daftar</a>'}</div></div></div>`}
function login(r,up){const e=$('a2').value.trim();if(!e){alert('Isi email terlebih dahulu.');return}
if(up&&$('a3').value!==$('a5').value){alert('Kata sandi tidak sama.');return}
S.user={r,name:e.split('@')[0]};sv();go(r==='m'?'mitra':'cari')}
