/* ===== CORE: state, helper, menu, kartu, bookmark, router ===== */
const pic=x=>x.img?`<img src="${x.img}" alt="${x.n}" style="width:100%;height:100%;object-fit:cover">`:x.e;
document.querySelector('header img').src=LOGO_SRC;
const $=i=>document.getElementById(i),dg=$('dg'),today=new Date('2026-11-07T00:00:00');
let S={user:null,bk:[],ck:{},ap:{},pr:[{n:"Beasiswa ABC Unggulan",k:12},{n:"Beasiswa Riset Muda",k:4}],f:{q:"",j:"",m:"",t:"",i:""},st:0,cs:0,fm:{}};
try{Object.assign(S,JSON.parse(localStorage.getItem('bsa')||'{}'))}catch(e){}
const sv=()=>{try{localStorage.setItem('bsa',JSON.stringify(S))}catch(e){}};
const left=s=>Math.ceil((new Date(s+'T00:00:00')-today)/864e5),fd=s=>new Date(s+'T00:00:00').toLocaleDateString('id-ID',{day:'numeric',month:'short',year:'numeric'}),cl=n=>n<=7?'u':n<=30?'s2':'o';
const PG={landing:'index.html',login:'masuk.html',daftar:'daftar.html',mitralogin:'mitra-masuk.html',mitradaftar:'mitra-daftar.html',cari:'cari.html',bookmark:'bookmark.html',status:'status.html',detail:'detail.html',checklist:'checklist.html',mitra:'mitra.html',mitraform:'mitra-form.html'};
const go=(n,id)=>{location.href=PG[n]+(id?'?id='+id:'')},role=()=>S.user&&S.user.r;
const logout=()=>{S.user=null;sv();location.href='index.html'};
function menu(){const m=role()==='m'?[['mitra','Portal Mitra'],['mitraform','Daftar program']]:role()==='u'?[['cari','Home'],['bookmark','Bookmark'],['status','Status apply']]:[['landing','Beranda']];
if(role())m.push(['keluar','Keluar']);const h=m.map(x=>x[0]==='keluar'?`<a href="index.html" onclick="logout()">Keluar</a>`:`<a href="${PG[x[0]]}" onclick="dr(0)">${x[1]}</a>`).join('');$('dn').innerHTML=h;$('drn').innerHTML=h;$('hb').style.display=''}
function dr(o){$('dr').classList.toggle('on',!!o)}
function cards(a){return a.map(x=>{const n=left(x.d),b=S.bk.includes(x.id);return `<article class="it"><div class="th">${pic(x)}</div><div class="bd"><div class="row" style="flex-wrap:nowrap;align-items:start"><h3 style="flex:1">${x.n}</h3><button class="bk" onclick="bm(${x.id})" aria-label="Bookmark" aria-pressed="${b}">${b?'★':'☆'}</button></div><div class="mu">${x.o} · ${x.j}</div><div class="dl ${cl(n)}">${n} hari lagi · ${fd(x.d)}</div><a class="bt p" href="detail.html?id=${x.id}" style="margin-top:6px">Lihat detail</a></div></article>`}).join('')}
function bm(id){S.bk=S.bk.includes(id)?S.bk.filter(x=>x!==id):[...S.bk,id];sv();route()}

/* ===== ROUTER: satu file HTML = satu layar. Penandanya <body data-page="..."> ===== */
const page=document.body.dataset.page,qid=new URLSearchParams(location.search).get('id');
function route(){
  const U=['cari','bookmark','status','detail','checklist'],M=['mitra','mitraform'];
  if(U.includes(page)&&role()!=='u'){location.replace(PG.login);return}
  if(M.includes(page)&&role()!=='m'){location.replace(PG.mitralogin);return}
  if(['detail','checklist'].includes(page)&&!D.find(a=>a.id==qid)){location.replace(PG.cari);return}
  menu();
  const R={landing:()=>landing(),login:()=>auth('u',0),daftar:()=>auth('u',1),mitralogin:()=>auth('m',0),mitradaftar:()=>auth('m',1),cari:()=>cari(),bookmark:()=>bookmark(),status:()=>status(),detail:()=>detail(qid),checklist:()=>checklist(qid),mitra:()=>mitra(),mitraform:()=>mitraform()};
  $('app').innerHTML=(R[page]||R.landing)();scrollTo(0,0)}
addEventListener('DOMContentLoaded',()=>{
  if(page==='checklist')S.cs=0;
  if(page==='mitraform'&&S.st===2)S.st=0;
  route();
});
