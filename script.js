/* ---------- SUBJECT CARD ---------- */
function subject(name,key){
  return `
    <div class="subject">
      <h3>${name}</h3>
      <div class="links">
        <a href="${videoLinks[key]}" target="_blank">📺 Video Playlist</a>
        <a href="#" onclick="openSyllabus('${key}')">📘 Syllabus</a>
        <a href="#" onclick="openTopics('${key}')">⭐ Important Topics</a>
      </div>
    </div>`;
}

/* ---------- HOME ---------- */
function showHome(){
  content.innerHTML = `
    <div class="card">
      <h2>Welcome 👋</h2>
      <p>AKTU learning portal with Videos, Syllabus & Important Topics.</p>
    </div>`;
}

/* ---------- YEARS ---------- */
function showFirstYear(){
  content.innerHTML = `<div class="card"><h2>First Year</h2>
  <div class="subject-grid">
    ${subject("Physics","physics")}
    ${subject("Maths-I","math1")}
    ${subject("Maths-II","math2")}
    ${subject("PPS","pps")}
    ${subject("Chemistry","chemistry")}
    ${subject("Electrical","electrical")}
    ${subject("Electronics","electronics")}
    ${subject("Mechanical","mechanical")}
    ${subject("EVS","evs")}
    ${subject("Soft Skills","softskill")}
  </div></div>`;
}

function showSecondYear(){
  content.innerHTML = `<div class="card"><h2>Second Year (CSE)</h2>
  <div class="subject-grid">
    ${subject("Data Structures","ds")}
    ${subject("DSTL","dstl")}
    ${subject("COA","coa")}
    ${subject("Python","python")}
    ${subject("Laser","laser")}
    ${subject("UHV","uhv")}
    ${subject("Automata","automata")}
    ${subject("TAFL","tafl")}
    ${subject("OOPS with Java","oops")}
    ${subject("Cyber Security","cyber")}
    ${subject("Technical Communication","techcomm")}
    ${subject("DAM","dam")}
  </div></div>`;
}

/* ---------- VIDEO LINKS (UNCHANGED) ---------- */
const videoLinks = { /* SAME LINKS AS BEFORE – ALL PRESENT */ 
  physics:"https://youtube.com/playlist?list=PL-vEH_IPWrhBciuCUwzgYE9srrisOx9hZ",
  math1:"https://youtube.com/playlist?list=PL49mRA0Y_C8sRtmXBbFIZov4pcwRvT86q",
  math2:"https://youtube.com/playlist?list=PL5Dqs90qDljXLjuaGPNgaaoaRa2lXv-Y_",
  pps:"https://www.youtube.com/results?search_query=pps+aktu",
  chemistry:"https://youtube.com/playlist?list=PL-vEH_IPWrhBKXPlljxAHMCkdw7Lb_Qbn",
  electrical:"https://youtube.com/playlist?list=PL-vEH_IPWrhD41z0I7qFs1jcr1K40IGsy",
  electronics:"https://youtube.com/playlist?list=PL-vEH_IPWrhCOFIb-33kHvxOLETaXXSka",
  mechanical:"https://youtube.com/playlist?list=PL-vEH_IPWrhBwwnINNASNM3m4AtsvKyku",
  evs:"https://youtube.com/playlist?list=PL-vEH_IPWrhDHi0HB5xRiNj2AcPQmjW5y",
  softskill:"https://youtube.com/playlist?list=PL-vEH_IPWrhDgG88urqoMevC8tNNwV6u_",

  ds:"https://youtu.be/RBSGKlAvoiM",
  dstl:"https://youtube.com/playlist?list=PL49mRA0Y_C8siHtxUdC7jpu1PH79Sb-uD",
  coa:"https://youtube.com/playlist?list=PLh11ucJN276IV2JaotM0c_YFUmBlSQrSi",
  python:"https://youtu.be/rfscVS0vtbw",
  laser:"https://youtu.be/dAsdH1ECI6s",
  uhv:"https://youtube.com/playlist?list=PLBvTTYUOHEmeYjzc3qrXrX5O6VQhgGEA-",
  automata:"https://youtube.com/playlist?list=PL-vEH_IPWrhDAo4BgZG5kcQ6vtZPr0kav",
  tafl:"https://youtube.com/playlist?list=PLDt-fuLi9lO8bmknIGMcXjxMB0urudE4Y",
  oops:"https://youtube.com/playlist?list=PL-vEH_IPWrhADnPuPGCoiop_nuolZIyqa",
  cyber:"https://youtube.com/playlist?list=PL-vEH_IPWrhCPlf33lGHLivgRdDkC115d",
  techcomm:"https://youtube.com/playlist?list=PL-vEH_IPWrhA-_zolVBomTOLVxIGT7p9f",
  dam:"https://www.youtube.com/results?search_query=dam+aktu"
};

/* ---------- SYLLABUS ---------- */
const syllabusData = {
  physics:{title:"Physics",units:["Quantum Mechanics","EM Theory","Optics","Lasers","Nanomaterials"]},
  math1:{title:"Maths-I",units:["Matrices","Calculus","Series","Integrals","Vectors"]},
  math2:{title:"Maths-II",units:["ODE","Laplace","Fourier","Complex","Residue"]},
  pps:{title:"PPS",units:["Algorithms","C Basics","Arrays","Functions","Pointers"]},
  chemistry:{title:"Chemistry",units:["Atomic","Spectroscopy","Electro","Fuels","Polymers"]},
  electrical:{title:"Electrical",units:["DC","AC","Transformers","Machines","Safety"]},
  electronics:{title:"Electronics",units:["Diodes","Transistors","Op-Amps","Digital","Comm"]},
  mechanical:{title:"Mechanical",units:["Mechanics","Engines","RAC","Fluids","Manufacturing"]},
  evs:{title:"EVS",units:["Ecosystem","Resources","Pollution","Issues","Sustainability"]},
  softskill:{title:"Soft Skills",units:["Communication","Personality","Ethics","Leadership","Interview"]},

  ds:{title:"DS",units:["Arrays","Stacks","Trees","Graphs","Sorting"]},
  dstl:{title:"DSTL",units:["Logic","Sets","Relations","Graphs","Combinatorics"]},
  coa:{title:"COA",units:["Data","ALU","Memory","IO","Pipeline"]},
  python:{title:"Python",units:["Basics","Control","DS","Files","OOP"]},
  laser:{title:"Laser",units:["Principle","Solid","Gas","Apps","Optical"]},
  uhv:{title:"UHV",units:["Harmony","Self","Family","Society","Ethics"]},
  automata:{title:"Automata",units:["FA","RE","CFG","PDA","TM"]},
  tafl:{title:"TAFL",units:["Languages","Grammar","Parsing","Semantics","Compiler"]},
  oops:{title:"OOPS",units:["OOP","Classes","Inheritance","Exceptions","Threads"]},
  cyber:{title:"Cyber",units:["Threats","Crypto","Network","Web","Laws"]},
  techcomm:{title:"Tech Comm",units:["Process","Writing","Presentation","Reports","Skills"]},
  dam:{title:"DAM",units:["Logic","Relations","Algebra","Graphs","Combinatorics"]}
};

/* ---------- IMPORTANT TOPICS (ALL SUBJECTS SAFE) ---------- */
const importantTopics = {};
Object.keys(syllabusData).forEach(k=>{
  importantTopics[k]=[
    ["Concept explanation","Definitions","Numericals / examples"],
    ["Theoretical derivations","Applications","Problems"],
    ["Diagrams","Algorithms / flow","Use cases"],
    ["Comparisons","Advantages","Limitations"],
    ["University exam focus","Short notes","Long answers"]
  ];
});

/* ---------- SYLLABUS POPUP ---------- */
function openSyllabus(key){
  syllabusTitle.innerText = syllabusData[key].title;
  syllabusContent.innerHTML =
    "<ul>"+syllabusData[key].units.map(u=>`<li>${u}</li>`).join("")+"</ul>";
  syllabusModal.style.display="block";
}
function closeSyllabus(){ syllabusModal.style.display="none"; }

/* ---------- IMPORTANT TOPICS POPUP (FIXED) ---------- */
let currentKey="";
function openTopics(key){
  currentKey=key;
  unitSelect.value="";
  topicsContent.innerHTML="";
  topicsTitle.innerText="Important Topics – "+syllabusData[key].title;
  topicsModal.style.display="block";
}

function showTopics(){
  const u = unitSelect.value;
  if(u==="") return;
  topicsContent.innerHTML =
    "<ul>"+importantTopics[currentKey][u].map(t=>`<li>${t}</li>`).join("")+"</ul>";
}

function closeTopics(){ topicsModal.style.display="none"; }

/* ---------- CONTACT ---------- */
function showContact(){
  content.innerHTML=`<div class="card"><h2>Contact</h2><p>Email: cseportal@example.com</p></div>`;
}

showHome();