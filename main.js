(function(){
const S=window.SITE,$=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const isPH=v=>!v||String(v).indexOf("[ADD")===0;
const hasPH=s=>/\[(ADD|CONFIRM)[^\]]*\]/.test(s);
const mark=s=>esc(s).replace(/\[(ADD|CONFIRM)[^\]]*\]/g,m=>'<span class="pending">'+m+'</span>');
function link(label,url,cls){
  if(url===""||url==null)return"";
  if(isPH(url))return S.showPlaceholders?'<span class="pending '+(cls||"")+'">'+esc(label)+": "+esc(url||"[ADD LINK]")+"</span>":"";
  return '<a class="'+(cls||"")+'" href="'+esc(url)+'"'+(/^(https?:)/.test(url)?' target="_blank" rel="noopener"':"")+">"+esc(label)+"</a>";
}
$("h-name").textContent=S.name;$("h-title").textContent=S.title;$("h-tag").textContent=S.tagline;$("h-intro").textContent=S.intro;
const L=S.links;
$("h-btns").innerHTML=[link("Download CV",L.cv,"btn primary"),link("Google Scholar",L.scholar,"btn"),link("GitHub",L.github,"btn"),link("LinkedIn",L.linkedin,"btn"),link("Email","mailto:"+L.email,"btn")].join("");
$("about-body").innerHTML=S.about.map(p=>"<p>"+mark(p)+"</p>").join("");
$("interest-grid").innerHTML=S.interests.map(i=>'<div class="card"><h3>'+esc(i.t)+"</h3><p>"+esc(i.d)+"</p></div>").join("");
$("project-list").innerHTML=S.projects.map(p=>{
  const fig=p.image?'<img src="'+esc(p.image)+'" alt="'+esc(p.title)+'">':'<div><b>[ADD PROJECT IMAGE]</b>'+esc(p.figure)+"<br>Save as assets/images/ and set <code>image</code> in data.js</div>";
  return '<article class="proj"><div class="fig">'+fig+'</div><div class="pbody"><h3>'+esc(p.title)+'</h3><div class="chips">'+p.tags.map(t=>'<span class="chip">'+esc(t)+"</span>").join("")+"</div><dl>"
  +"<dt>Problem</dt><dd>"+mark(p.problem)+"</dd><dt>My contribution</dt><dd>"+mark(p.contribution)+"</dd><dt>Methods</dt><dd>"+p.methods.map(esc).join("; ")+"</dd><dt>Key research challenge</dt><dd>"+mark(p.challenge)+"</dd>"
  +(p.pub?"<dt>Publication</dt><dd>"+esc(p.pub)+"</dd>":"")+'</dl><div class="links">'+link("Paper",p.links.paper,"btn")+link("Code",p.links.code,"btn")+"</div></div></article>";
}).join("");
const hl=a=>esc(a).replace(/(M\. Naznine|Mansura Naznine)/g,"<b>$1</b>");
$("pub-list").innerHTML=S.publications.map(p=>{
  if(p.group)return '<h3 class="sub">'+esc(p.group)+"</h3>";
  return '<div class="pub"><h4>'+esc(p.t)+'</h4><p class="au">'+hl(p.a)+'</p><p class="ve">'+esc(p.v)+(p.y?", "+p.y:"")+'</p><div class="links">'
  +(p.doi?link("DOI","https://doi.org/"+p.doi):link("DOI","[ADD DOI]"))+link("Google Scholar",p.scholar||"[ADD GOOGLE SCHOLAR LINK]")+link("PDF",p.pdf||"[ADD PDF LINK]")+(p.project?link("Project",p.project):"")+"</div></div>";
}).join("");
$("exp-list").innerHTML=S.experience.map(e=>'<div class="exp"><h3>'+esc(e.role)+'</h3><div class="meta">'+esc(e.org)+" · "+mark(e.when)+"</div><ul>"+e.pts.map(x=>"<li>"+mark(x)+"</li>").join("")+"</ul></div>").join("");
$("skill-list").innerHTML='<div class="skills">'+S.skills.map(g=>"<h3>"+esc(g.g)+'</h3><div class="chips">'+g.items.map(i=>'<span class="chip">'+esc(i)+"</span>").join("")+"</div>").join("")+"</div>";
$("edu-list").innerHTML=S.education.map(e=>'<div class="exp"><h3>'+esc(e.deg)+'</h3><div class="meta">'+esc(e.org)+" · "+esc(e.when)+"</div><p>"+esc(e.note)+"</p></div>").join("");
$("vision-body").innerHTML=S.vision.map(p=>"<p>"+esc(p)+"</p>").join("");
$("contact-body").innerHTML='<p>Email: <a href="mailto:'+esc(L.email)+'">'+esc(L.email)+'</a></p><div class="links">'+[link("Download CV",L.cv,"btn primary"),link("Google Scholar",L.scholar,"btn"),link("LinkedIn",L.linkedin,"btn"),link("GitHub",L.github,"btn"),link("ResearchGate",L.researchgate,"btn")].join("")+"</div>";
})();
