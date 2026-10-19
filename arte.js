/* ============================================================
   ARTE DEL MUSEO — mundo estilo "To the Moon", personajes estilo "OMORI"
   Todo se dibuja con código (sin imágenes). Se carga antes del script principal.
   ============================================================ */
const T=16,W=24,H=16;
let g=null;
const R=(c,a,b,w,h)=>{g.fillStyle=c;g.fillRect(a,b,w,h)};
const mk=(w,h,fn)=>{const k=document.createElement('canvas');k.width=w;k.height=h;const p=g;g=k.getContext('2d');g.imageSmoothingEnabled=false;fn();g=p;return k};
const OL='#0c0910',SHD='rgba(8,5,14,.55)';
const bb=(a,b,w,h,c,hi,sh)=>{R(OL,a,b,w,h);R(c,a+1,b+1,w-2,h-2);hi&&R(hi,a+1,b+1,w-2,1);sh&&R(sh,a+1,b+h-2,w-2,1)};
const HEART=[' XX XX ','XXXXXXX','XXXXXXX',' XXXXX ','  XXX  ','   X   '];
function heart(a,b,c,s){HEART.forEach((r,j)=>[...r].forEach((q,i)=>q=='X'&&R(c,a+i*s,b+j*s,s,s)))}
const hs=(a,b)=>(Math.imul(a+7,73856093)^Math.imul(b+13,19349663))>>>0;
const disc=(cx,cy,r,c)=>{for(let j=-r;j<=r;j++)for(let i=-r;i<=r;i++)if(i*i+j*j<=r*r+r*.5)R(c,cx+i,cy+j,1,1)};
const dith=(a,b,w,h,c)=>{for(let j=0;j<h;j++)for(let i=0;i<w;i++)if((i+j)&1)R(c,a+i,b+j,1,1)};
const wallA=(tx,ty)=>ty<2||ty>=H-1||tx<1||(tx>=W-1&&!(ty>=10&&ty<=11))||(ty==5&&tx!=11&&tx!=12);
const wallB=(tx,ty)=>ty<3||ty>=H-1||tx>=W-1||(tx<1&&!(ty>=10&&ty<=11));
const ART={};

/* ---------- Sprites de objetos ---------- */
function buildSprites(){
 const S=ART.S={};
 const leaf=(x0,y0,x1,y1)=>{const n=Math.max(Math.abs(x1-x0),Math.abs(y1-y0))||1;
  for(let i=0;i<=n;i++){const X=Math.round(x0+(x1-x0)*i/n),Y=Math.round(y0+(y1-y0)*i/n);R('#0f2a1e',X-1,Y-1,i<n*.7?4:3,4)}
  for(let i=0;i<=n;i++){const X=Math.round(x0+(x1-x0)*i/n),Y=Math.round(y0+(y1-y0)*i/n);R('#2a6a47',X,Y,i<n*.7?2:1,2);if(i%2==0)R('#5fb07c',X,Y,1,1)}};
 S.album=mk(32,32,()=>{
  bb(9,22,14,9,'#3d2618','#5c3a25','#24150d');R('#c89d54',9,28,14,1);R('#24150d',11,24,10,1);
  bb(3,12,26,11,'#5c3a25','#8a5a3c','#331f13');R('#c89d54',3,22,26,1);
  bb(4,3,24,15,'#6b2236','#94354f','#421220');R('#c89d54',4,3,3,3);R('#c89d54',25,3,3,3);R('#c89d54',4,15,3,3);R('#c89d54',25,15,3,3);
  R('#efe6d5',6,5,10,11);R('#f7f0e0',16,5,10,11);R('#bfae90',15,5,2,11);R('#cfbf9f',16,5,1,11);
  for(let i=0;i<3;i++)R('#b5a48b',8,8+i*3,6,1);
  R('#2b1d14',18,6,8,7);R('#5b8fc0',19,7,6,3);R('#4d8a65',19,10,6,2);R('#f5d78e',23,8,1,1);R('#fff',19,7,6,1);
  R('#b83b5e',20,14,5,1);heart(8,13,'#b83b5e',1);
  R('#b83b5e',15,15,2,9);R('#e0607f',15,15,1,8)});
 S.cartas=mk(32,32,()=>{
  R(OL,4,24,4,7);R(OL,24,24,4,7);R('#3d2618',5,24,2,6);R('#3d2618',25,24,2,6);
  bb(1,10,30,16,'#4f3220','#7d5135','#2b1a10');R('#2b1a10',3,24,26,1);
  R('#d9c48f',5,12,16,11);R('#ecdcb0',6,12,14,1);R('#bda56b',5,22,16,1);
  [14,16,18,20].forEach(y=>R('#6b4a28',7,y,9+(y%3)*2,1));
  R('#b83b5e',16,19,4,4);R('#e0607f',17,20,1,1);
  bb(23,16,6,7,'#1a1621','#2e2a3a');R('#0a0710',24,16,4,2);
  for(let i=0;i<=10;i++){R(i<4?'#8c6830':'#f5f2eb',24+(i*.5|0),15-i,1,1);if(i>3)R('#d9d4c8',25+(i*.5|0),15-i,1,1)}
  R(OL,3,4,5,7);R('#efe6d5',4,5,3,5);R('#ffd24a',5,2,1,3);R('#fff3b0',5,3,1,1)});
 S.musica=mk(32,32,()=>{
  for(let y=0;y<10;y++){const w=Math.round(18-y*1.3),x0=16-(w>>1);R(OL,x0-1,y+1,w+2,1);R('#d9a74a',x0,y+1,w,1);R('#ffe49e',x0+1,y+1,1,1);R('#8c6218',x0+w-2,y+1,2,1)}
  R(OL,6,0,20,2);R('#f0c060',7,1,18,1);R('#3a2308',8,2,16,2);R('#1c1104',10,3,12,1);
  bb(13,10,6,8,'#b8842d','#ffe49e','#8c6218');
  bb(5,17,22,14,'#4a2c1d','#6e442f','#2b180f');bb(7,19,18,9,'#2e1a10','#3d2417','#1a0e08');
  R('#c89d54',9,21,14,1);R('#c89d54',9,25,14,1);R('#0a0710',11,22,10,3);R('#b83b5e',15,23,2,1);
  R('#8c6830',24,22,4,2);R('#d9a74a',27,21,2,4)});
 S.logros=mk(32,32,()=>{
  bb(7,20,18,10,'#3b3542','#564e61','#221e26');bb(5,28,22,3,'#2a2530','#433c4a','#151217');
  R('#c89d54',10,22,12,4);R('#f5d78e',11,23,10,2);
  bb(6,8,5,7,'#9e7324','#d9a74a');bb(21,8,5,7,'#9e7324','#d9a74a');
  bb(10,4,12,13,'#d9a74a','#fff1b8','#8c6218');R('#fff9d6',12,6,2,8);R('#8c6218',19,6,2,9);
  bb(14,17,4,3,'#9e7324');bb(10,19,12,3,'#d9a74a','#ffe49e');
  [[3,14],[2,18],[3,22],[28,14],[29,18],[28,22]].forEach(([a,b])=>{R('#2f6b45',a,b,2,3);R('#5fb07c',a,b,1,1)})});
 S.pl=mk(16,24,()=>{
  leaf(8,16,2,7);leaf(8,16,14,6);leaf(8,16,8,1);leaf(8,16,4,10);leaf(8,16,12,10);
  bb(3,15,10,9,'#5c3826','#7d4e36','#382115');R('#c89d54',3,17,10,1);R('#382115',4,16,8,1);R('#a06a46',4,19,2,3)});
 S.bn=mk(32,16,()=>{
  R(OL,2,12,4,4);R(OL,26,12,4,4);R('#3d2618',3,12,2,3);R('#3d2618',27,12,2,3);
  bb(0,4,32,9,'#4f3220','#754c32','#29190f');bb(2,1,28,7,'#6b2236','#94354f','#421220');
  R('#c89d54',2,7,28,1);for(let i=0;i<4;i++)R('#7a2c40',6+i*7,3,1,4)});
 S.shelf=mk(32,40,()=>{
  bb(0,0,32,40,'#3b271b','#6e4c34','#1f140d');R('#1a110b',2,2,28,36);
  const cs=['#6b2236','#2d4673','#2f6b45','#9e7324','#4a2c75','#8c4a2f','#3b6998'];
  [2,12,22,32].forEach((y,k)=>{R('#4d3424',2,y+8,28,2);R('#78553c',2,y+8,28,1);let xx=3,i=0;
   while(xx<27){const w=2+((hs(k,i)>>3)%2),h=5+((hs(k,i)>>5)%3);R(OL,xx,y+8-h,w+1,h);R(cs[(hs(k,i)>>2)%7],xx,y+9-h,w,h-1);R('rgba(255,255,255,.22)',xx,y+9-h,1,h-1);xx+=w+1;i++}})});
 S.gb=mk(32,24,()=>{
  R(OL,3,16,4,8);R(OL,25,16,4,8);R('#3d2618',4,16,2,7);R('#3d2618',26,16,2,7);
  bb(0,10,32,9,'#4f3220','#7d5135','#2b1a10');
  bb(11,8,10,3,'#8c6830','#d9a74a');disc(16,3,6,OL);disc(16,3,5,'#2d5a8a');
  R('#4f8a5a',13,1,3,2);R('#4f8a5a',17,3,3,2);R('#4f8a5a',14,5,2,1);R('#7fb0e0',13,0,2,1);R('#c89d54',10,3,13,1);
  R('#d9c48f',2,12,7,5);R('#bda56b',2,16,7,1);R('#6b4a28',3,13,5,1);R('#6b4a28',3,15,4,1)});
 S.tb2=mk(32,24,()=>{
  R(OL,3,16,4,8);R(OL,25,16,4,8);R('#3d2618',4,16,2,7);R('#3d2618',26,16,2,7);
  bb(0,9,32,10,'#4f3220','#7d5135','#2b1a10');
  R('#d9c48f',3,10,19,7);R('#ecdcb0',3,10,19,1);R('#bda56b',3,16,19,1);
  for(let i=0;i<6;i++)R('#a8383b',5+i*3,14-(i%2)*2,1,1);R('#a8383b',20,12,1,3);R('#a8383b',19,13,3,1);
  R(OL,25,3,5,7);R('#efe6d5',26,4,3,5);R('#ffd24a',27,1,1,3);R('#fff3b0',27,2,1,1)});
 ART.board=buildBoard(window.CONTENIDO.planes||[]);
}
function buildBoard(P){return mk(112,40,()=>{
 bb(0,0,112,40,'#3b271b','#6e4c34','#1f140d');
 R('#8a6340',3,3,106,34);for(let j=0;j<34;j++)for(let i=0;i<106;i++){const v=hs(i,j)%9;if(v==0)R('#6e4c2e',3+i,3+j,1,1);else if(v==1)R('#a07850',3+i,3+j,1,1)}
 R('rgba(0,0,0,.3)',3,3,106,2);R('rgba(0,0,0,.3)',3,3,2,34);
 const RK={S:'#d9a74a',A:'#b83b5e',B:'#3b6998',C:'#4f9a6a'};
 P.slice(0,14).forEach((p,i)=>{const col=i%7,row=i/7|0,nx=6+col*15+(hs(i,1)%3)-1,ny=6+row*16+(hs(i,2)%3)-1;
  R('rgba(0,0,0,.35)',nx+1,ny+1,12,13);R(p.hecho?'#bcd3b0':'#e9d9ae',nx,ny,12,13);R(RK[p.rango]||RK.C,nx,ny,12,2);
  for(let l=0;l<3;l++)R(p.hecho?'#7d9a70':'#6b4a28',nx+2,ny+4+l*2,l==2?4:8,1);
  R(p.hecho?'#2f7a4f':'#b83b5e',nx+5,ny-1,2,2);
  if(p.hecho)[[7,10],[8,11],[9,10],[10,9],[11,8]].forEach(([a,b])=>R('#2f7a4f',nx+a-2,ny+b-1,1,1))})})}

/* ---------- Fondos (cada sala) ---------- */
function buildBG(B){
 const top=B?3:2,TH=top*T,wl=B?wallB:wallA,S=ART.S;
 return mk(W*T,H*T,()=>{
  const c1=B?'#2e2a3f':'#3a2e39',c2=B?'#3a3552':'#453744',c3=B?'#221e30':'#2e232d';
  R(c1,0,0,W*T,TH);
  for(let i=0;i<W*2;i++){R(c2,i*8+2,2,3,TH-12);R(c3,i*8,2,1,TH-12)}
  for(let j=5;j<TH-16;j+=9)for(let i=0;i<W*2;i++)if((i+(j/9|0))%2==0){R(c2,i*8+3,j,2,5);R(c2,i*8+2,j+2,4,1);R(c3,i*8+3,j+5,2,1)}
  R('#1d141a',0,0,W*T,2);R('#6e503b',0,2,W*T,1);R('#2a1b12',0,3,W*T,1);
  R('#4f3626',0,TH-11,W*T,2);R('#8a6444',0,TH-11,W*T,1);R('#2a1b12',0,TH-9,W*T,1);
  R('#3b271b',0,TH-8,W*T,6);R('#261810',0,TH-2,W*T,2);
  for(let i=0;i<W;i++){R('#2a1b12',i*T+2,TH-7,12,4);R('#4d3424',i*T+3,TH-6,10,2);R('#6a4a34',i*T+3,TH-6,10,1)}
  for(let ty=top;ty<H;ty++)for(let tx=0;tx<W;tx++){
   const a=tx*T,b=ty*T,v=hs(tx,ty);
   if(wl(tx,ty)){
    if(!B&&ty==5&&tx>0&&tx<W-1){
     R('#1a131c',a,b,T,2);R('#4e3a29',a,b+2,T,2);R('#3a2e39',a,b+4,T,6);R('#453744',a+4,b+4,4,6);
     R('#5e4430',a,b+10,T,2);R('#362419',a,b+12,T,3);R('#1a110b',a,b+15,T,1);
     if(tx==10){R('#5e4430',a+12,b,4,T);R('#7a5940',a+13,b+1,2,T-2)}
     if(tx==13){R('#5e4430',a,b,4,T);R('#7a5940',a+1,b+1,2,T-2)}
    }else{
     R('#151018',a,b,T,T);for(let k=0;k<4;k++)R('#1d1621',a+((k*5+ty)%12),b+k*4,3,2);
     if(tx==0){R('#4f3626',a+T-3,b,2,T);R('#78553c',a+T-2,b,1,T)}
     if(tx==W-1){R('#4f3626',a+1,b,2,T);R('#78553c',a+1,b,1,T)}
     if(ty==H-1){R('#4f3626',a,b,T,3);R('#78553c',a,b+1,T,1)}}
    continue}
   if(B||ty<6){
    const c=['#6e4c34','#664630','#745038'][v%3],d=['#7d583d','#734f38','#835e42'][v%3];
    R(c,a,b,T,T);R(d,a+1,b+1,T-2,6);R(d,a+1,b+9,T-2,6);R('#3d2719',a,b+7,T,1);R('#3d2719',a,b+15,T,1);
    if(v%2)R('#3d2719',a,b,1,7);else R('#3d2719',a+8,b+8,1,7);
    if(v%5==0){R('#5a3c28',a+4,b+3,3,1);R('#5a3c28',a+10,b+11,2,1)}
    R('rgba(255,220,170,.05)',a+2,b+2,T-4,2);if(B)R('rgba(20,10,50,.14)',a,b,T,T);
   }else{
    const k=(tx+ty)&1,base=k?'#8c7d70':'#7d6e62',hi=k?'#9e8f81':'#8f7f72',sh=k?'#665a50':'#594e45';
    R(base,a,b,T,T);R(hi,a+1,b+1,T-2,1);R(hi,a+1,b+1,1,T-2);R(sh,a+1,b+T-2,T-2,1);R(sh,a+T-2,b+1,1,T-2);
    R('#423933',a,b+T-1,T,1);R('#423933',a+T-1,b,1,T);
    if(v%4==0){R(sh,a+3,b+4,1,1);R(sh,a+4,b+5,1,1);R(sh,a+5,b+6,2,1);R(sh,a+7,b+7,1,1);R(hi,a+8,b+8,2,1)}
    if(v%7==1)R(hi,a+9,b+10,3,1)}
   if(ty==top||(!B&&ty==6&&tx!=11&&tx!=12)){R('rgba(10,6,15,.55)',a,b,T,5);R('rgba(10,6,15,.28)',a,b+5,T,4)}
   if(tx==1){R('rgba(10,6,15,.45)',a,b,4,T);R('rgba(10,6,15,.2)',a+4,b,3,T)}
   if(tx==W-2){R('rgba(10,6,15,.45)',a+T-4,b,4,T);R('rgba(10,6,15,.2)',a+T-7,b,3,T)}
   if(ty==H-2)R('rgba(10,6,15,.35)',a,b+T-4,T,4)}
  const win=(w,y,moon)=>{
   [w-5,w+23].forEach(dx=>{R('#5a1f2f',dx,y-2,6,22);R('#7a2c40',dx+1,y-2,1,22);R('#3d1420',dx+3,y-2,1,22);R('#3d1420',dx+5,y-2,1,22);R('#c89d54',dx+(dx<w?3:2),y+8,2,2)});
   R('#c89d54',w-5,y-3,34,2);R('#7a5a24',w-5,y-2,34,1);
   bb(w-1,y-1,26,19,'#3b271b','#6e4c34','#1f140d');
   R('#0b1528',w+1,y+1,22,15);R('#132542',w+1,y+7,22,9);dith(w+1,y+6,22,2,'#132542');R('#1e385c',w+1,y+12,22,4);dith(w+1,y+11,22,2,'#1e385c');
   [[3,3],[18,4],[8,9],[20,11]].forEach(([a,b])=>R('#fff',w+1+a,y+1+b,1,1));
   if(moon){disc(w+16,y+5,3,'#e8f4ff');R('#c8dcf0',w+15,y+5,1,1);R('#c8dcf0',w+17,y+6,1,1)}
   R('#0c1721',w+1,y+13,22,3);R('#152936',w+2,y+12,9,2);R('#152936',w+13,y+11,8,3);
   R('#2a1b12',w+11,y+1,2,15);R('#2a1b12',w+1,y+8,22,2);R('#593d2b',w+12,y+1,1,15);
   R('#4a3222',w-2,y+17,28,3);R('#78553c',w-2,y+17,28,1)};
  const sc=(l,y)=>{R('#2a1b12',l,y+5,4,6);R('#8a6444',l-1,y+9,6,2);bb(l-1,y,6,6,'#ffcf6b','#fff7d6','#c98a2c')};
  const door=L=>{const x0=L?0:W*T-T,y0=10*T;
   R('#07050b',x0,y0,T,2*T);R('#120d1a',L?x0+8:x0,y0,8,2*T);
   R('#5e4430',x0,y0-5,T,5);R('#8a6444',x0,y0-5,T,1);R('#5e4430',x0,y0+2*T,T,3);R('#3b271b',x0,y0+2*T,T,1);
   bb(x0+2,y0-15,12,9,'#3b271b','#6e4c34');R('#d9c48f',x0+4,y0-13,8,5);R('#a8383b',x0+7,y0-12,2,2);R('#6b4a28',x0+5,y0-9,6,1)};
  if(!B){[100,228,330].forEach((w,i)=>win(w,3,i==1));[88,140,210,316].forEach(l=>sc(l,7));
   const rx=128,ry=112,rw=128,rh=96;
   R('rgba(0,0,0,.45)',rx-2,ry+2,rw+4,rh);R('#241018',rx,ry,rw,rh);R('#5e1d2f',rx+1,ry+1,rw-2,rh-2);
   R('#c89d54',rx+3,ry+3,rw-6,rh-6);R('#8c6830',rx+4,ry+4,rw-8,rh-8);R('#4a1625',rx+6,ry+6,rw-12,rh-12);R('#6b2236',rx+9,ry+9,rw-18,rh-18);
   for(let y=ry+10;y<ry+rh-10;y+=2)for(let x0=rx+10;x0<rx+rw-10;x0+=4)R('#611e30',x0+(y%4),y,2,1);
   for(let i=0;i<rw-16;i+=4){R('#b88a44',rx+8+i,ry+6,2,1);R('#b88a44',rx+8+i,ry+rh-7,2,1)}
   [[rx+10,ry+10],[rx+rw-16,ry+10],[rx+10,ry+rh-16],[rx+rw-16,ry+rh-16]].forEach(([cx,cy])=>{R('#d9b26f',cx,cy,6,6);R('#5e1d2f',cx+1,cy+1,4,4);R('#f5d78e',cx+2,cy+2,2,2)});
   disc(192,160,16,'#8c6830');disc(192,160,14,'#4a1625');heart(178,147,'#3d101d',4);heart(178,146,'#e3be78',4);heart(178,146,'#f7dfa8',2);
   for(let i=0;i<15;i++){R('#d9b26f',rx-3,ry+4+i*6,3,3);R('#8c6830',rx-3,ry+6+i*6,3,1);R('#d9b26f',rx+rw,ry+4+i*6,3,3);R('#8c6830',rx+rw,ry+6+i*6,3,1)}
   door(0);
  }else{
   [76,284].forEach(w=>win(w,12,1));[118,266].forEach(l=>sc(l,14));
   g.drawImage(S.shelf,20,TH-40);g.drawImage(S.shelf,332,TH-40);
   bb(130,2,124,44,'#2a1b12','#4d3424','#150d08');g.drawImage(ART.board,136,4);
   R('#c89d54',134,0,2,3);R('#c89d54',248,0,2,3);
   const rx=120,ry=112,rw=144,rh=80;
   R('rgba(0,0,0,.45)',rx-2,ry+2,rw+4,rh);R('#101c2e',rx,ry,rw,rh);R('#1f3550',rx+1,ry+1,rw-2,rh-2);
   R('#c89d54',rx+3,ry+3,rw-6,rh-6);R('#8c6830',rx+4,ry+4,rw-8,rh-8);R('#162a44',rx+6,ry+6,rw-12,rh-12);R('#223e5e',rx+9,ry+9,rw-18,rh-18);
   disc(192,152,22,'#c89d54');disc(192,152,20,'#162a44');
   R('#f5d78e',191,128,3,48);R('#f5d78e',168,151,48,3);R('#e3be78',178,138,3,3);R('#e3be78',206,138,3,3);R('#e3be78',178,164,3,3);R('#e3be78',206,164,3,3);
   disc(192,152,4,'#b83b5e');disc(192,152,2,'#f7dfa8');
   for(let i=0;i<rw-16;i+=4){R('#b88a44',rx+8+i,ry+6,2,1);R('#b88a44',rx+8+i,ry+rh-7,2,1)}
   for(let i=0;i<10;i++){R('#d9b26f',rx-3,ry+4+i*8,3,3);R('#d9b26f',rx+rw,ry+4+i*8,3,3)}
   door(1)}
 })}

/* ---------- Iluminación HD-2D por sala ---------- */
function buildLight(B){return mk(W*T,H*T,()=>{
 const glow=(cx,cy,r,col)=>{const q=g.createRadialGradient(cx,cy,1,cx,cy,r);q.addColorStop(0,col);q.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=q;g.fillRect(cx-r,cy-r,r*2,r*2)};
 const beam=(w,y)=>{const q=g.createLinearGradient(w+12,y,w-18,y+105);q.addColorStop(0,'rgba(145,195,255,.26)');q.addColorStop(.5,'rgba(120,170,240,.10)');q.addColorStop(1,'rgba(100,150,230,0)');g.fillStyle=q;g.beginPath();g.moveTo(w,y);g.lineTo(w+24,y);g.lineTo(w+2,y+105);g.lineTo(w-32,y+105);g.closePath();g.fill()};
 if(!B){[100,228,330].forEach(w=>beam(w,20));[88,140,210,316].forEach(l=>glow(l+2,10,38,'rgba(255,195,95,.28)'));
  [3,10,17].forEach(fx=>glow((fx+1)*T,16,32,'rgba(255,215,130,.18)'));
  [[3,8],[19,8],[3,12],[19,12]].forEach(([a,b])=>glow((a+1)*T,(b+1)*T,44,'rgba(255,190,100,.16)'));glow(192,160,85,'rgba(255,180,110,.09)')}
 else{[76,284].forEach(w=>beam(w,30));[118,266].forEach(l=>glow(l+2,16,40,'rgba(255,195,95,.3)'));
  glow(192,26,80,'rgba(255,205,125,.2)');glow(192,152,90,'rgba(255,180,110,.08)');glow(104,148,36,'rgba(255,200,120,.12)');glow(280,148,36,'rgba(255,200,120,.12)')}
 const v=g.createRadialGradient(W*T/2,H*T/2,W*T*.28,W*T/2,H*T/2,W*T*.68);
 v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(.7,'rgba(8,5,15,.35)');v.addColorStop(1,'rgba(4,2,9,.82)');g.fillStyle=v;g.fillRect(0,0,W*T,H*T)})}

/* ---------- Personajes (tus sprites originales estilo OMORI, 18x26) ---------- */
function drawOmoriGirl(d,f,fit){
  g.translate(0,1);
  if(d==2){g.translate(18,0);g.scale(-1,1);d=1}
  const by=(f==1||f==2)?-1:0;
  const K='#0a080c',
        SK='#fce2c4', SS='#e8c09e', BL='#f0a098',
        HR='#593628', HS='#3d2218', HL='#784c3a',
        JN='#4f77a3', JNS='#37567a', SHW='#f5f2eb';

  const lL = f==1?-1:f==2?1:0;
  const rL = f==2?-1:f==1?1:0;
  const aL = f==1?1:f==2?-1:0;
  const aR = f==2?1:f==1?-1:0;

  if(d!=1){
    R(K,2,3+by,14,12);
    R(HS,3,4+by,12,10);
  }

  if(d==1){
    R(K,6+rL,17,5,6); R(JNS,7+rL,18,3,3); R(SHW,7+rL,21,3,1);
    R(K,6+lL,17,5,6); R(JN,7+lL,18,3,3); R(SHW,7+lL,21,3,1);
  }else{
    R(K,5,17+lL,4,6); R(JN,6,18+lL,2,3); R(JNS,6,18+lL,1,3); R(SHW,6,21+lL,2,1);
    R(K,9,17+rL,4,6); R(JN,10,18+rL,2,3); R(JNS,11,18+rL,1,3); R(SHW,10,21+rL,2,1);
  }

  const topC = fit==1?'#9c7a5e':'#1c1a24';
  const topH = fit==1?'#b59173':'#2e2b3a';
  if(d==1){
    R(K,5,12+by,8,6); R(topC,6,13+by,6,4);
    if(fit==0)R(SK,6,16+by,6,1);
    R(K,7+aL,13+by,4,5);
    R(fit==2?topC:SK,8+aL,14+by,2,3);
  }else{
    const armC = fit==2?topC:SK;
    R(K,3,12+by+aL,3,5); R(armC,4,13+by+aL,1,3);
    R(K,12,12+by+aR,3,5); R(armC,13,13+by+aR,1,3);
    R(K,5,12+by,8,6); R(topC,6,13+by,6,4); R(topH,7,13+by,4,2);
    if(d==3){
      if(fit==0){
        R(SK,7,13+by,4,1);
        R(SK,6,16+by,6,1);
      }else if(fit==1){
        R(SK,7,13+by,4,1);
        R(topH,6,16+by,3,2);
      }else{
        R('#e6e4e0',8,13+by,2,4);
        R('#ffffff',6,14+by,1,2); R('#ffffff',11,14+by,1,2);
      }
    }
  }

  if(d==3){
    R(K,3,1+by,12,12); R(K,4,0+by,10,13); R(K,2,3+by,14,9);
    R(K,1,6+by,2,4); R(SK,2,7+by,1,2);
    R(K,15,6+by,2,4); R(SK,15,7+by,1,2);
    R(SK,4,4+by,10,8); R(SS,5,11+by,8,1);
    R(K,6,7+by,1,2); R(K,5,7+by,1,1);
    R(K,11,7+by,1,2); R(K,12,7+by,1,1);
    R(BL,5,9+by,2,1); R(BL,11,9+by,2,1);
    R(HR,4,1+by,10,3); R(HL,5,2+by,3,1); R(HL,10,2+by,3,1);
    R(HS,8,1+by,2,2);
    R(HR,3,3+by,4,2); R(HR,3,5+by,2,2); R(HS,4,4+by,2,1);
    R(HR,11,3+by,4,2); R(HR,13,5+by,2,2); R(HS,12,4+by,2,1);
    R(K,2,9+by,3,6); R(HR,3,9+by,2,5); R(HL,3,10+by,1,2);
    R(K,13,9+by,3,6); R(HR,13,9+by,2,5); R(HL,14,10+by,1,2);
  }else if(d==0){
    R(K,3,1+by,12,13); R(K,4,0+by,10,14); R(K,2,3+by,14,11);
    R(K,1,6+by,2,4); R(SK,2,7+by,1,2);
    R(K,15,6+by,2,4); R(SK,15,7+by,1,2);
    R(HR,3,2+by,12,11); R(HS,3,10+by,12,3);
    R(HL,5,3+by,3,4); R(HL,10,3+by,3,4);
    R(HS,8,2+by,2,10);
  }else{
    R(K,3,1+by,12,12); R(K,4,0+by,10,13); R(K,2,3+by,14,9);
    R(SK,4,4+by,8,8); R(SS,5,11+by,6,1);
    R(K,5,7+by,1,2); R(K,6,7+by,1,1);
    R(BL,5,9+by,2,1);
    R(K,9,6+by,2,3); R(SS,9,7+by,1,1);
    R(HR,4,1+by,10,3); R(HL,6,2+by,5,1);
    R(HR,3,3+by,4,3);
    R(K,9,3+by,6,12); R(HR,10,4+by,4,10); R(HL,11,5+by,2,5); R(HS,10,11+by,4,3);
  }
}

function drawOmoriBoy(d,f){
  g.translate(0,1);
  if(d==2){g.translate(18,0);g.scale(-1,1);d=1}
  const by=(f==1||f==2)?-1:0;
  const K='#0a080c',
        SK='#fce2c4', SS='#e8c09e',
        HR='#3b261d', HS='#261710', HL='#593b2e',
        GL='#e6f2ff',
        SH='#1a1921', COL='#f0ede6', PN='#25242e', SHW='#f5f2eb';

  const lL = f==1?-1:f==2?1:0;
  const rL = f==2?-1:f==1?1:0;
  const aL = f==1?1:f==2?-1:0;
  const aR = f==2?1:f==1?-1:0;

  if(d==1){
    R(K,6+rL,17,5,6); R(PN,7+rL,18,3,3); R(SHW,7+rL,21,3,1);
    R(K,6+lL,17,5,6); R(PN,7+lL,18,3,3); R(SHW,7+lL,21,3,1);
  }else{
    R(K,5,17+lL,4,6); R(PN,6,18+lL,2,3); R(SHW,6,21+lL,2,1);
    R(K,9,17+rL,4,6); R(PN,10,18+rL,2,3); R(SHW,10,21+rL,2,1);
  }

  if(d==1){
    R(K,5,12+by,8,6); R(SH,6,13+by,6,4); R(COL,6,12+by,3,1);
    R(K,7+aL,13+by,4,5); R(SH,8+aL,13+by,2,2); R(SK,8+aL,15+by,2,2);
  }else{
    R(K,3,12+by+aL,3,5); R(SH,4,13+by+aL,1,2); R(SK,4,15+by+aL,1,1);
    R(K,12,12+by+aR,3,5); R(SH,13,13+by+aR,1,2); R(SK,13,15+by+aR,1,1);
    R(K,5,12+by,8,6); R(SH,6,13+by,6,4);
    if(d==3){
      R(COL,6,12+by,2,2); R(COL,10,12+by,2,2); R(SK,8,12+by,2,1);
    }
  }

  if(d==3){
    R(K,3,1+by,12,12); R(K,4,0+by,10,13); R(K,2,2+by,14,9);
    R(K,1,6+by,2,4); R(SK,2,7+by,1,2);
    R(K,15,6+by,2,4); R(SK,15,7+by,1,2);
    R(SK,4,4+by,10,8); R(SS,5,11+by,8,1);
    R(K,6,7+by,1,2); R(K,11,7+by,1,2);
    R(GL,4,6+by,4,1); R(GL,10,6+by,4,1);
    R(GL,4,6+by,1,3); R(GL,8,7+by,2,1); R(GL,13,6+by,1,3);
    R(GL,5,9+by,2,1); R(GL,11,9+by,2,1);
    R(HR,3,1+by,12,4); R(HL,5,1+by,3,2); R(HL,10,1+by,3,2);
    R(HS,4,4+by,2,2); R(HR,7,4+by,2,2); R(HS,10,4+by,2,1); R(HR,12,4+by,2,2);
  }else if(d==0){
    R(K,3,1+by,12,12); R(K,4,0+by,10,13); R(K,2,2+by,14,9);
    R(K,1,6+by,2,4); R(SK,2,7+by,1,2);
    R(K,15,6+by,2,4); R(SK,15,7+by,1,2);
    R(SK,4,9+by,10,3);
    R(HR,3,1+by,12,9); R(HS,4,8+by,10,2);
    R(HL,5,2+by,3,3); R(HL,10,2+by,3,3);
  }else{
    R(K,3,1+by,12,12); R(K,4,0+by,10,13); R(K,2,2+by,14,9);
    R(SK,4,4+by,8,8); R(SS,5,11+by,6,1);
    R(K,5,7+by,1,2);
    R(GL,3,6+by,4,1); R(GL,3,6+by,1,3); R(GL,7,7+by,2,1);
    R(K,9,6+by,2,3); R(SS,9,7+by,1,1);
    R(HR,3,1+by,11,4); R(HL,6,2+by,5,2);
    R(HR,3,4+by,3,2); R(HR,10,4+by,4,6); R(HS,11,8+by,3,2);
  }
}

function initArt(){
 buildSprites();
 ART.bg=[buildBG(0),buildBG(1)];ART.light=[buildLight(0),buildLight(1)];
 ART.GIRL=[0,1,2].map(fit=>[0,1,2,3].map(d=>[0,1,2].map(f=>mk(18,26,()=>drawOmoriGirl(d,f,fit)))));
 ART.BOY=[0,1,2,3].map(d=>[0,1,2].map(f=>mk(18,26,()=>drawOmoriBoy(d,f))));
}