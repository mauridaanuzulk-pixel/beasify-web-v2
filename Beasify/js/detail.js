/* ===== DETAIL: detail beasiswa dan checklist dokumen ===== */
function detail(id) {
    const x = D.find(a => a.id == id),
        n = left(x.d);
    return `<div class="w">
        <a href="cari.html" class="mu" style="text-decoration:none">← Kembali</a>
        <div class="det" style="margin-top:12px">
            <div class="ph">${pic(x)}</div>
            <div>
                <span class="bg2">✓ Terverifikasi</span>
                <h1 style="font-size:36px;margin:10px 0 4px">${x.n}</h1>
                <div class="mu">${x.o} · <a href="https://${x.u}" target="_blank" rel="noopener">${x.u}</a></div>
                <h3 style="margin:20px 0 6px">Benefit</h3>
                <p style="margin:0">${x.b}</p>
                <h3 style="margin:20px 0 6px">Syarat</h3>
                <p style="margin:0">Jenjang ${x.j} · Jurusan ${x.m} · IPK min ${x.ipk || 'tanpa batas'}</p>
                <h3 style="margin:20px 0 6px">Deadline</h3>
                <p class="dl ${cl(n)}" style="margin:0 0 20px">${fd(x.d)} (${n} hari lagi)</p>
                <div class="row" style="max-width:360px">
                    <button onclick="bm(${x.id})">${S.bk.includes(x.id) ? '★ Tersimpan' : '☆ Simpan'}</button>
                    <button class="p" onclick="S.cs=0;go('checklist',${x.id})">Daftar</button>
                </div>
            </div>
        </div>
    </div>`;
}

function checklist(id) {
    const x = D.find(a => a.id == id),
        c = S.ck[id] || [],
        s = S.cs,
        T = ['Pilih beasiswa', 'List dokumen', 'Submit'];

    let b = '';
    if (s == 0) {
        b = `<div class="card"><h3>${x.n}</h3><p>${x.o}<br>Deadline ${fd(x.d)}</p></div>`;
    } else if (s == 1) {
        b = `<h3 style="margin-bottom:12px">List kelengkapan dokumen</h3>` +
            x.docs.map((d, i) => {
                    const f = (S.fl || {})[id + '_' + i];
                    return `<div style="margin-bottom:12px">
                    <label class="ck" style="color:var(--tx);font-size:16px;margin-bottom:6px">
                        <input type="checkbox" ${c.includes(i) ? 'checked' : ''} onchange="ckd(${id},${i},this.checked)"> ${d}
                    </label>
                    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding-left:4px;font-size:14px">
                        ${f ? `<span>📎 ${escf(f)}</span> <button onclick="ckx(${id},${i})">Hapus lampiran</button>` : `<label style="display:inline-flex;gap:6px;align-items:center">Lampirkan file: <input type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onchange="ckf(${id},${i},this)" style="width:auto"></label>`}
                    </div>
                </div>`;
            }).join('') + 
            `<p class="mu" style="font-size:13px">Lampiran hanya dicatat sebagai nama file di perangkat ini (demo), belum diunggah ke server.</p>`;
    } else {
        b = `<div class="card">
            <h3>Siap submit?</h3>
            <p>${c.length} dari ${x.docs.length} dokumen sudah kamu siapkan, ${Object.keys(S.fl || {}).filter(k => k.startsWith(id + '_')).length} di antaranya terlampir.${c.length < x.docs.length ? ' Lengkapi dulu agar tidak ditolak.' : ''}</p>
        </div>`;
    }

    return `<div class="w" style="max-width:640px">
        <div class="st">${T.map((t, i) => `<div class="${i <= s ? 'on' : ''}">${t}</div>`).join('')}</div>
        ${b}
        <div class="row" style="margin-top:18px">
            ${s ? `<button onclick="S.cs--;route()">Kembali</button>` : `<a class="bt" href="detail.html?id=${id}">Batal</a>`}
            <button class="p" onclick="${s < 2 ? 'S.cs++;route()' : `cf(${id})`}">${s < 2 ? 'Lanjut' : 'Submit'}</button>
        </div>
    </div>`;
}

function ckd(id, i, on) {
    let c = S.ck[id] || [];
    S.ck[id] = on ? [...new Set([...c, i])] : c.filter(a => a !== i);
    sv();
}

function cf(id) {
    const x = D.find(a => a.id == id);
    dg.innerHTML = `<h3>Kamu akan diarahkan ke halaman resmi pendaftaran</h3>
        <p class="mu">https://${x.u}</p>
        <div class="row">
            <button onclick="dg.close()">Batal</button>
            <a class="bt p" href="https://${x.u}" target="_blank" rel="noopener" onclick="S.ap[${id}]='Diarahkan ke situs resmi';sv();dg.close();go('status')">Buka</a>
        </div>`;
    dg.showModal();
}

const escf = t => String(t).replace(/[&<>"']/g, m => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[m]));

function ckf(id, i, el) {
    const f = el.files && el.files[0];
    if (!f) return;
    S.fl = S.fl || {};
    S.fl[id + '_' + i] = f.name;
    ckd(id, i, true);
    route();
}

function ckx(id, i) {
    S.fl = S.fl || {};
    delete S.fl[id + '_' + i];
    sv();
    route();
}