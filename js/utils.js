export function escapeHTML(value=''){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
export function downloadFile(filename,content,type='text/plain;charset=utf-8'){
  const link=document.createElement('a'),url=content.startsWith?.('data:')?content:URL.createObjectURL(new Blob([content],{type}));
  link.href=url;link.download=filename.replace(/[^a-z0-9._-]/gi,'-');document.body.append(link);link.click();link.remove();if(!url.startsWith('data:'))setTimeout(()=>URL.revokeObjectURL(url),1000);
}
