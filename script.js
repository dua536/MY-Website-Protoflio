const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx+'px'; cur.style.top = my+'px';
});
(function animRing(){
  rx += (mx-rx)*0.12;
  ry += (my-ry)*0.12;
  ring.style.left = rx+'px';
  ring.style.top = ry+'px';
  requestAnimationFrame(animRing);
})();
document.querySelectorAll('a,button,.astat,.sk-card,.pcard,.tpill,.ccard,.ach-item,.nav-hire,.btn-g,.btn-o').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

(function(){
  const c = document.getElementById('bg-canvas');
  const ctx = c.getContext('2d');
  let W,H;
  function resize(){ W = c.width = window.innerWidth; H = c.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  const COLORS = ['#ff6b9d','#c77dff','#72efdd','#f8c537'];
  const pts = Array.from({length:120}, () => ({
    x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight,
    r: Math.random()*1.8+0.4, vx: (Math.random()-0.5)*0.35, vy: (Math.random()-0.5)*0.35,
    col: COLORS[Math.floor(Math.random()*4)], alpha: Math.random()*0.55+0.15
  }));
  const shapes = Array.from({length:7}, () => ({
    x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight,
    size: Math.random()*40+20, rot: Math.random()*Math.PI*2,
    vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.3, vr: (Math.random()-0.5)*0.005,
    sides: [3,4,6][Math.floor(Math.random()*3)], col: COLORS[Math.floor(Math.random()*4)]
  }));
  function polygon(ctx,x,y,r,sides,rot){
    ctx.beginPath();
    for(let i=0;i<sides;i++){
      const a=(i/sides)*Math.PI*2+rot;
      i===0?ctx.moveTo(x+Math.cos(a)*r,y+Math.sin(a)*r):ctx.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r);
    }
    ctx.closePath();
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p => {
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=W; if(p.x>W)p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.col; ctx.globalAlpha=p.alpha; ctx.fill();
    });
    shapes.forEach(s => {
      s.x+=s.vx; s.y+=s.vy; s.rot+=s.vr;
      if(s.x<-80)s.x=W+80; if(s.x>W+80)s.x=-80; if(s.y<-80)s.y=H+80; if(s.y>H+80)s.y=-80;
      polygon(ctx,s.x,s.y,s.size,s.sides,s.rot);
      ctx.strokeStyle=s.col; ctx.globalAlpha=0.07; ctx.lineWidth=1; ctx.stroke();
    });
    ctx.globalAlpha=1;
    requestAnimationFrame(draw);
  }
  draw();
})();

(function(){
  const canvas = document.getElementById('char-canvas');
  if(!canvas) return;
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  script.onload = function(){ buildChar(); };
  document.head.appendChild(script);
  function buildChar(){
    const THREE = window.THREE;
    const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    renderer.setSize(500, 620);
    renderer.shadowMap.enabled = true;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, 500/620, 0.1, 100);
    camera.position.set(0, 1.0, 5.2);
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const key = new THREE.DirectionalLight(0xff8ab8, 1.4); key.position.set(3,5,5); scene.add(key);
    const fill = new THREE.DirectionalLight(0xc77dff, 0.9); fill.position.set(-4,2,-2); scene.add(fill);
    scene.add(new THREE.DirectionalLight(0x72efdd, 0.4)).position.set(0,8,0);
    const glow1 = new THREE.PointLight(0xff6b9d, 2, 7); glow1.position.set(2,1,3); scene.add(glow1);
    const glow2 = new THREE.PointLight(0xc77dff, 1.2, 5); glow2.position.set(-2,0,1); scene.add(glow2);
    const M = (col,opts) => new THREE.MeshToonMaterial({color:col,...opts});
    const skin=M(0xf4c4a1),hair=M(0x6b2d18),suit=M(0x22183d),shirt=M(0xfafafa);
    const eye=M(0x0a0515),iris=M(0x3a178a),cheek=M(0xffb0c4,{transparent:true,opacity:.55});
    const lip=M(0xd84878),gold=M(0xf8c537),btn=M(0xc77dff),hair2=M(0x8c3e22),lash=M(0x0a0515);
    const screen=M(0x1a1a42),sGlow=M(0x72efdd,{transparent:true,opacity:.65}),laptop=M(0x1e1a38);
    const g = new THREE.Group();
    function add(geo,mat,pos,rot,scl){
      const m=new THREE.Mesh(geo,mat);
      if(pos)m.position.set(...pos); if(rot)m.rotation.set(...rot); if(scl)m.scale.set(...scl);
      g.add(m); return m;
    }
    add(new THREE.CylinderGeometry(.48,.56,1.12,14),suit,[0,-.22,0]);
    add(new THREE.CylinderGeometry(.31,.36,.42,10),shirt,[0,.34,0]);
    [-1,1].forEach(s=>{const l=new THREE.Mesh(new THREE.BoxGeometry(.17,.52,.09),suit);l.position.set(s*.14,.2,.41);l.rotation.z=s*.13;g.add(l);});
    [0,1,2].forEach(i=>add(new THREE.SphereGeometry(.038,8,8),btn,[0,.34-i*.22,.5]));
    [-1,1].forEach(s=>add(new THREE.SphereGeometry(.22,12,12),suit,[s*.63,.29,0]));
    [-1,1].forEach(s=>{add(new THREE.CylinderGeometry(.135,.115,.92,8),suit,[s*.73,-.2,0],[0,0,s*.14]);add(new THREE.SphereGeometry(.125,10,10),skin,[s*.84,-.7,0]);});
    add(new THREE.CylinderGeometry(.13,.12,.55,8),suit,[.35,-.58,.18],[.2,0,-.7]);
    add(new THREE.CylinderGeometry(.13,.12,.55,8),suit,[-.25,-.6,.18],[.2,0,.6]);
    add(new THREE.CylinderGeometry(.155,.185,.3,10),skin,[0,.7,0]);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.48,22,22),skin);head.scale.y=1.09;head.position.set(0,1.24,0);g.add(head);
    [-1,1].forEach(s=>{const ck=new THREE.Mesh(new THREE.SphereGeometry(.14,8,8),cheek);ck.position.set(s*.31,1.14,.39);ck.scale.z=.38;g.add(ck);});
    [-1,1].forEach(s=>{
      add(new THREE.SphereGeometry(.1,10,10),M(0xffffff),[s*.17,1.27,.38],null,[1,1,.55]);
      add(new THREE.SphereGeometry(.065,10,10),iris,[s*.17,1.27,.43],null,[1,1,.45]);
      add(new THREE.SphereGeometry(.04,8,8),eye,[s*.17,1.27,.46],null,[1,1,.38]);
      add(new THREE.SphereGeometry(.018,6,6),M(0xffffff),[s*.19,1.29,.48]);
      add(new THREE.BoxGeometry(.2,.03,.02),lash,[s*.17,1.334,.42],[0,0,s*.04]);
    });
    [-1,1].forEach(s=>add(new THREE.BoxGeometry(.17,.028,.04),M(0x3e1508),[s*.17,1.4,.38],[0,0,s*(-.14)]));
    add(new THREE.SphereGeometry(.045,8,8),skin,[0,1.18,.47],null,[.75,.55,1]);
    add(new THREE.SphereGeometry(.09,10,10),lip,[0,1.1,.45],null,[1.25,.48,.48]);
    add(new THREE.SphereGeometry(.085,10,10),lip,[0,1.05,.45],null,[1.15,.56,.48]);
    [-1,1].forEach(s=>{add(new THREE.SphereGeometry(.1,8,8),skin,[s*.48,1.22,0],null,[.55,1,.38]);add(new THREE.SphereGeometry(.046,8,8),gold,[s*.5,1.07,0]);});
    const hTop=new THREE.Mesh(new THREE.SphereGeometry(.5,20,20),hair);hTop.position.y=1.38;hTop.scale.set(1,.62,1);g.add(hTop);
    add(new THREE.SphereGeometry(.52,14,14),hair,[0,1.12,-.22],null,[1.06,1.22,.88]);
    const wL=[];
    [[-.54,.9,0,[.7,1.52,.58]],[-.5,.54,.05,[.64,1.22,.56]],[-.44,.22,-.05,[.58,1.02,.52]]].forEach(([x,y,z,s])=>{const m=new THREE.Mesh(new THREE.SphereGeometry(.28,10,10),hair);m.position.set(x,y,z);m.scale.set(...s);g.add(m);wL.push(m);});
    const wR=[];
    [[.52,.86,0,[.63,1.42,.54]],[.47,.5,.05,[.58,1.1,.54]]].forEach(([x,y,z,s])=>{const m=new THREE.Mesh(new THREE.SphereGeometry(.27,10,10),hair);m.position.set(x,y,z);m.scale.set(...s);g.add(m);wR.push(m);});
    add(new THREE.SphereGeometry(.07,8,8),hair2,[-.14,1.69,.23],null,[.55,.38,.38]);
    add(new THREE.BoxGeometry(.54,.04,.38),laptop,[.38,-.52,.28],[-.18,.28,.14]);
    add(new THREE.BoxGeometry(.54,.36,.02),screen,[.38,-.31,.1],[-.85,.28,.14]);
    const scrGlow=add(new THREE.BoxGeometry(.48,.3,.01),sGlow,[.38,-.31,.115],[-.85,.28,.14]);
    const ring3=add(new THREE.TorusGeometry(1.4,.015,8,60),M(0xff6b9d,{transparent:true,opacity:.25}),[0,-1.3,0],[Math.PI/2,0,0]);
    g.position.y=-.6; scene.add(g);
    const starGeo=new THREE.BufferGeometry();
    const N=70,sp=new Float32Array(N*3),sc=new Float32Array(N*3);
    const pal=[new THREE.Color('#ff6b9d'),new THREE.Color('#c77dff'),new THREE.Color('#72efdd'),new THREE.Color('#f8c537')];
    for(let i=0;i<N;i++){const r=1.6+Math.random()*1.3,th=Math.random()*Math.PI*2,ph=Math.random()*Math.PI;sp[i*3]=r*Math.sin(ph)*Math.cos(th);sp[i*3+1]=r*Math.cos(ph)+.5;sp[i*3+2]=r*Math.sin(ph)*Math.sin(th);const c=pal[i%4];sc[i*3]=c.r;sc[i*3+1]=c.g;sc[i*3+2]=c.b;}
    starGeo.setAttribute('position',new THREE.BufferAttribute(sp,3));
    starGeo.setAttribute('color',new THREE.BufferAttribute(sc,3));
    const stars=new THREE.Points(starGeo,new THREE.PointsMaterial({size:.055,vertexColors:true,transparent:true,opacity:.9}));
    scene.add(stars);
    let mouseX=0,mouseY=0;
    document.addEventListener('mousemove',e=>{mouseX=(e.clientX/window.innerWidth)*2-1;mouseY=-((e.clientY/window.innerHeight)*2-1);});
    let t=0;
    (function tick(){
      requestAnimationFrame(tick); t+=.012;
      g.position.y=-.6+Math.sin(t)*.09;
      g.rotation.y=Math.sin(t*.45)*.12+mouseX*.18;
      g.rotation.x=mouseY*.07;
      wL[0].position.y=.9+Math.sin(t*1.1)*.032;
      wL[1].position.y=.54+Math.sin(t*1.3)*.04;
      wL[2].position.y=.22+Math.sin(t*.9)*.03;
      wR[0].position.y=.86+Math.sin(t*1.2)*.035;
      wR[1].position.y=.5+Math.sin(t)*.04;
      scrGlow.material.opacity=.42+Math.sin(t*1.8)*.22;
      glow1.intensity=1.6+Math.sin(t*1.5)*.5;
      glow2.intensity=1.0+Math.sin(t*1.2+1)*.35;
      ring3.material.opacity=.18+Math.sin(t)*.1;
      stars.rotation.y=t*.18;
      stars.rotation.x=Math.sin(t*.3)*.08;
      renderer.render(scene,camera);
    })();
  }
})();

(function(){
  const wrap=document.getElementById('idWrap'),card=document.getElementById('idCard');
  if(!wrap||!card)return;
  wrap.addEventListener('mousemove',e=>{
    const r=wrap.getBoundingClientRect();
    const rx=((e.clientY-r.top-r.height/2)/r.height)*-18;
    const ry=((e.clientX-r.left-r.width/2)/r.width)*18;
    card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  });
  wrap.addEventListener('mouseleave',()=>{card.style.transform='';});
})();

(function(){
  const el=document.getElementById('typeRole');
  if(!el)return;
  const roles=['Full-Stack Developer','RPA Specialist','Problem Solver'];

  let ri=0,ci=0,del=false;
  function tick(){
    const cur=roles[ri];
    if(!del){ci++;}else{ci--;}
    const txt=cur.slice(0,ci);
    el.innerHTML=`<span style="background:linear-gradient(135deg,var(--pk),var(--go));-webkit-background-clip:text;-webkit-text-fill-color:transparent">${txt}</span><span style="color:var(--mt)"> · Karachi, Pakistan</span>`;
    if(!del&&ci===cur.length){del=true;setTimeout(tick,1800);return;}
    if(del&&ci===0){del=false;ri=(ri+1)%roles.length;setTimeout(tick,280);return;}
    setTimeout(tick,del?55:95);
  }
  setTimeout(tick,1600);
})();

(function(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('vis'),i*70);});
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.sk-card,.titem,.pcard,.tpill,.ccard,.ach-item,.citem,.reveal').forEach(el=>obs.observe(el));
  document.querySelectorAll('.tpill').forEach((el,i)=>el.style.transitionDelay=i*.06+'s');
})();