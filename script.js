const canvas=document.getElementById("bg")
const ctx=canvas.getContext("2d")

let w=canvas.width=window.innerWidth
let h=canvas.height=window.innerHeight

window.addEventListener("resize",()=>{
w=canvas.width=window.innerWidth
h=canvas.height=window.innerHeight
})

const particles=Array.from({length:140}).map(()=>({
x:Math.random()*w,
y:Math.random()*h,
r:Math.random()*2,
dx:(Math.random()-0.5)*0.4,
dy:(Math.random()-0.5)*0.4
}))

function draw(){
ctx.clearRect(0,0,w,h)
ctx.fillStyle="rgba(255,150,0,0.8)"

particles.forEach(p=>{
p.x+=p.dx
p.y+=p.dy
if(p.x<0||p.x>w) p.dx*=-1
if(p.y<0||p.y>h) p.dy*=-1
ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fill()
})

requestAnimationFrame(draw)
}
draw()
