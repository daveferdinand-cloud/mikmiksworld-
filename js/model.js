export const STORAGE_KEY = 'mikmiks-world:v2';
export function localDay(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
const dayNumber = day => Date.parse(`${day}T12:00:00Z`) / 86400000;
export function freshState() {
  return {version:2, draftStory:{title:'', genre:'Mystery', body:'', outline:'', cover:'cherry', id:null}, books:[], artDraft:{strokes:[],background:'#fffdf8'}, artworks:[], favoriteRecipes:[], recipeNotes:{}, completedRecipes:[], craftProgress:{}, finishedCrafts:[], savedCrafts:[], plushes:[], stats:{lastDay:null,streak:0,best:0}, lastRoom:'home'};
}
export function normalizeState(input) {
  const out = freshState();
  if(!input || input.version !== 2) return out;
  for(const key of ['books','artworks','favoriteRecipes','completedRecipes','finishedCrafts','savedCrafts','plushes']) {
    if(Array.isArray(input[key])) out[key] = input[key];
  }
  for(const key of ['recipeNotes','craftProgress','stats','draftStory','artDraft']) {
    if(input[key] && typeof input[key] === 'object' && !Array.isArray(input[key])) out[key] = {...out[key],...input[key]};
  }
  if(!Array.isArray(out.artDraft.strokes)) out.artDraft.strokes=[];
  return out;
}
export function createStore(storage, onError = () => {}) {
  let memory=freshState();
  try { memory=normalizeState(JSON.parse(storage.getItem(STORAGE_KEY))); } catch { onError('Saved work could not be opened. Download a backup before clearing browser data.'); }
  return {
    get:()=>memory,
    update(change) {
      const next=structuredClone(memory);
      change(next);
      try { storage.setItem(STORAGE_KEY, JSON.stringify(next)); memory=next; return true; }
      catch { memory=next; onError('This browser could not save. Keep this tab open and download your work.'); return false; }
    }
  };
}
export function recordActivity(state, today=localDay()) {
  if(state.stats.lastDay===today) return;
  const gap=dayNumber(today)-dayNumber(state.stats.lastDay);
  state.stats.streak=gap===1 ? state.stats.streak+1 : 1;
  state.stats.best=Math.max(state.stats.best,state.stats.streak);
  state.stats.lastDay=today;
}
export function currentStreak(stats,today=localDay()) {
  return dayNumber(today)-dayNumber(stats.lastDay)<=1 ? stats.streak : 0;
}
export function wordCount(text) { return text.trim() ? text.trim().split(/\s+/u).length : 0; }
export function nextItem(items, current, random=Math.random) {
  if(items.length<2) return items[0];
  const options=items.filter(x=>x!==current);
  return options[Math.floor(random()*options.length)];
}
export function scaledAmount(amount,servings=1) {
  if(typeof amount!=='number') return amount;
  const n=amount*servings;
  const whole=Math.floor(n),rest=Math.round((n-whole)*8);
  const fractions=['','⅛','¼','⅜','½','⅝','¾','⅞'];
  return rest===8?String(whole+1):`${whole||''}${fractions[rest]||''}`||'0';
}
export function filterRecipes(recipes,{query='',category='All',pantry=[],favorites=null}={}) {
  const q=query.trim().toLowerCase();
  return recipes.filter(r=>(category==='All'||r.category===category) && (!q||`${r.title} ${r.ingredients.map(x=>x.name).join(' ')}`.toLowerCase().includes(q)) && (!favorites||favorites.includes(r.id)))
    .map(r=>({...r,missing:r.ingredients.filter(i=>!pantry.includes(i.key)).length}))
    .sort((a,b)=>pantry.length?a.missing-b.missing:0);
}
export function badges(state) {
  return [
    ['First mark','Save your first artwork.',state.artworks.length>=1],
    ['First edition','Bind your first story.',state.books.length>=1],
    ['Made by me','Finish three craft projects.',state.finishedCrafts.length>=3],
    ['Kitchen creative','Make three different recipes.',state.completedRecipes.length>=3],
    ['A week of making','Create on seven consecutive days.',state.stats.best>=7]
  ];
}
