import {mkdir,cp,readFile,access,rm} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
const html=await readFile('index.html','utf8'),css=await readFile('styles.css','utf8'),app=await readFile('js/app.js','utf8'),data=await readFile('js/data.js','utf8');
const files=new Set(['index.html','styles.css','js/app.js','js/data.js','js/model.js','js/utils.js','js/studio.js','js/lessons.js','js/recipes.js']);
for(const match of `${html}\n${app}\n${data}`.matchAll(/(?:assets\/)?([\w-]+\.webp)/g)) files.add('assets/'+match[1]);
for(const match of css.matchAll(/url\((assets\/[\w/.-]+)\)/g))files.add(match[1]);
for(const file of files)await access(file);
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const name of ['index.html','styles.css','js','assets'])await cp(path.join(root,name),path.join(root,'dist',name),{recursive:true});
console.log(`Built static app. ${files.size} runtime references checked. No server or personal-data service required.`);

if(process.env.VERCEL_ENV==='preview'){await mkdir('dist/_checks',{recursive:true});await cp('tests/viewport.html','dist/_checks/viewport.html');}
