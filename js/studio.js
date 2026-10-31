import {escapeHTML as esc} from './utils.js';
export function drawStrokes(canvas,strokes,background='#fffdf8') {
  const ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle=background;ctx.fillRect(0,0,canvas.width,canvas.height);
  for(const s of strokes) drawStroke(ctx,s,background);
}
function drawStroke(ctx,s,background) {
  if(!s.points?.length)return;
  ctx.save();ctx.strokeStyle=s.tool==='eraser'?background:s.color;ctx.fillStyle=ctx.strokeStyle;
  ctx.lineWidth=s.size;ctx.lineCap='round';ctx.lineJoin='round';ctx.globalAlpha=s.tool==='marker'?.28:1;
  const p=s.points[0],end=s.points.at(-1);ctx.beginPath();
  if(s.tool==='rectangle'){ctx.strokeRect(p.x,p.y,end.x-p.x,end.y-p.y);}
  else if(s.tool==='ellipse'){ctx.ellipse((p.x+end.x)/2,(p.y+end.y)/2,Math.max(.1,Math.abs(end.x-p.x)/2),Math.max(.1,Math.abs(end.y-p.y)/2),0,0,Math.PI*2);ctx.stroke();}
  else if(s.tool==='line'){ctx.moveTo(p.x,p.y);ctx.lineTo(end.x,end.y);ctx.stroke();}
  else if(s.points.length===1){ctx.arc(p.x,p.y,s.size/2,0,Math.PI*2);ctx.fill();}
  else{ctx.moveTo(p.x,p.y);for(const point of s.points.slice(1))ctx.lineTo(point.x,point.y);ctx.stroke();}
  ctx.restore();
}
export function artworkURL(work){const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=900;drawStrokes(canvas,work.strokes,work.background);return canvas.toDataURL('image/png');}
export function mountStudio(container,{draft,onDraft,onSave,onExport,guide='',notify}) {
  let strokes=structuredClone(draft.strokes||[]),undone=[],clearAction=null,draftId=draft.id||null,background=draft.background||'#fffdf8',tool='pencil',color='#392d3a',size=5,active=null;
  container.innerHTML=`<div class="studio"><div class="studio-toolbar"><div class="tools" role="group" aria-label="Drawing tools">${[['pencil','Pencil'],['pen','Pen'],['marker','Marker'],['eraser','Eraser'],['line','Line'],['rectangle','Rectangle'],['ellipse','Ellipse']].map(([id,name])=>`<button class="tool" data-tool="${id}" aria-pressed="${id==='pencil'}">${name}</button>`).join('')}</div><div class="color-picks" aria-label="Colours">${['#392d3a','#922f49','#bb7b8e','#9681ac','#698d94','#738369','#d0a552','#f4eddd'].map((c,i)=>`<button style="background:${c}" aria-label="Use ${c} colour" aria-pressed="${i===0}" data-color="${c}"></button>`).join('')}<label title="Choose any colour"><input type="color" value="${color}" aria-label="Custom drawing colour"></label></div><label class="brush-label">Size <input type="range" min="2" max="45" value="5" aria-label="Brush size"></label><div class="tools"><button class="tool" data-action="undo" aria-label="Undo last stroke">↶ Undo</button><button class="tool" data-action="redo" aria-label="Redo last stroke">↷ Redo</button><button class="tool" data-action="clear">Fresh page</button></div></div><div class="canvas-surface"><canvas width="1200" height="900" aria-label="Your drawing canvas. Use a mouse, stylus, or finger." tabindex="0"></canvas>${guide?`<svg class="canvas-guide" viewBox="0 0 400 300" aria-hidden="true">${guide}</svg>`:''}</div><div class="studio-bottom"><div><input class="studio-title" aria-label="Artwork title" maxlength="80" placeholder="Give it a title…" value="${esc(draft.title||'')}"><div class="autosave" id="art-save-status">Your working page saves as you draw.</div></div><div class="button-row"><button class="text-link" data-action="export">Download PNG ↗</button><button class="button small-btn" data-action="save">Keep in my gallery →</button></div></div></div>`;
  const canvas=container.querySelector('canvas'),ctx=canvas.getContext('2d'),titleInput=container.querySelector('.studio-title'),status=container.querySelector('#art-save-status');
  const render=()=>{drawStrokes(canvas,strokes,background);if(active)drawStroke(ctx,active,background);container.querySelector('[data-action=undo]').disabled=!strokes.length&&!clearAction;container.querySelector('[data-action=redo]').disabled=!undone.length;};
  const snapshot=()=>({strokes:structuredClone(strokes),background,title:titleInput.value,id:draftId});
  const persist=()=>{const okay=onDraft(snapshot());status.textContent=okay?'Working page saved on this browser.':'Not saved — download your work before closing.';};
  const point=e=>{const rect=canvas.getBoundingClientRect();return{x:Math.max(0,Math.min(1200,Math.round((e.clientX-rect.left)*1200/rect.width))),y:Math.max(0,Math.min(900,Math.round((e.clientY-rect.top)*900/rect.height)))};};
  canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();if(active)return;if(strokes.length>1500){notify('This page has many marks. Save it, then start a fresh page.');return;}canvas.setPointerCapture(e.pointerId);active={tool,color,size:tool==='pen'?Math.max(2,size*.65):size,points:[point(e)]};render();});
  canvas.addEventListener('pointermove',e=>{if(!active)return;e.preventDefault();const p=point(e),last=active.points.at(-1);if(p.x===last.x&&p.y===last.y)return;if(['line','rectangle','ellipse'].includes(tool))active.points=[active.points[0],p];else if(active.points.length<4000)active.points.push(p);render();});
  const finish=()=>{if(!active)return;strokes.push(active);active=null;undone=[];render();persist();};
  canvas.addEventListener('pointerup',finish);canvas.addEventListener('pointercancel',finish);canvas.addEventListener('lostpointercapture',finish);
  container.querySelectorAll('[data-tool]').forEach(b=>b.addEventListener('click',()=>{tool=b.dataset.tool;container.querySelectorAll('[data-tool]').forEach(x=>x.setAttribute('aria-pressed',x===b));}));
  const choose=c=>{color=c;if(tool==='eraser'){tool='pencil';container.querySelectorAll('[data-tool]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.tool===tool));}container.querySelectorAll('[data-color]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.color===color));};
  container.querySelectorAll('[data-color]').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.color)));container.querySelector('input[type=color]').addEventListener('input',e=>choose(e.target.value));container.querySelector('input[type=range]').addEventListener('input',e=>{size=Number(e.target.value);});
  const undo=()=>{if(strokes.length){undone.push(strokes.pop());render();persist();}else if(clearAction){const old=clearAction;strokes=structuredClone(old.strokes);draftId=old.id;titleInput.value=old.title;clearAction=null;undone.push({clear:old});render();persist();}},redo=()=>{if(undone.length){const action=undone.pop();if(action.clear){clearAction=action.clear;strokes=[];draftId=null;titleInput.value='';}else strokes.push(action);render();persist();}};
  container.querySelector('[data-action=undo]').onclick=undo;container.querySelector('[data-action=redo]').onclick=redo;
  canvas.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redo():undo();}});
  container.querySelector('[data-action=clear]').onclick=()=>{finish();if(!strokes.length)return;clearAction={strokes:structuredClone(strokes),id:draftId,title:titleInput.value};strokes=[];draftId=null;titleInput.value='';undone=[];render();persist();notify('Fresh page. Undo brings the whole drawing back.');};
  container.querySelector('[data-action=export]').onclick=()=>onExport(artworkURL(snapshot()),titleInput.value||'My artwork');
  container.querySelector('[data-action=save]').onclick=()=>{finish();if(!strokes.length){notify('Make your first mark, then keep it in the gallery.');return;}draftId=onSave({...snapshot(),title:titleInput.value.trim()||'Untitled study'})||draftId;};
  titleInput.oninput=persist;render();
  return {destroy(){finish();},snapshot};
}
