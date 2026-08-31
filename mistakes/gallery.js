const items=[
['01','Poor cell quality','See how skewness, non-orthogonality, and distortion damage stability and accuracy.'],
['02','Insufficient refinement','Identify where coarse cells fail to capture curvature, wakes, and steep solution gradients.'],
['03','Ignoring boundary layers','Connect inflation layers, wall treatment, and solved y⁺ to reliable wall predictions.'],
['04','Abrupt size transitions','Explore why sudden jumps in neighboring cell size increase interpolation error.'],
['05','Chasing cell count','Replace “more cells” with targeted resolution, quality, and quantities of interest.'],
['06','Skipping grid convergence','Use systematic refinement and GCI to estimate spatial discretization uncertainty.'],
['07','Trusting statistics alone','Look beyond summary metrics and locate the worst cells in critical flow regions.']
];
const grid=document.querySelector('.lesson-grid');
const useEditorialArt=document.body.classList.contains('editorial');
items.forEach((x,i)=>{const article=document.createElement('article');article.className='lesson'+(i===0?' feature':'');const load=i===0?'fetchpriority="high"':'loading="lazy"';const src=useEditorialArt?`assets/editorial/lesson-${i+1}.png`:`../mesh/mistakes/assets/lesson-${i+1}-card.png`;const href=useEditorialArt?`lesson.html?lesson=${i+1}`:`../mesh/mistakes/lesson.html?lesson=${i+1}`;article.innerHTML=`<a href="${href}"><div class="visual"><img src="${src}" alt="Scientific mesh visualization for ${x[1]}" width="1200" height="675" ${load}></div><div class="copy"><h2><span class="num">${x[0]}</span>${x[1]}</h2><p>${x[2]}</p></div></a>`;grid.appendChild(article)});
