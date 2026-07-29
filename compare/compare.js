

const IIT_DATA = {
  "IIT Bombay": { location:"Mumbai, Maharashtra", established:1958, nirf:3, qs:118, students:10000, faculty:650, campus:550, highestPkg:3.67, avgPkg:28, medianPkg:22, placementRate:92, companies:400, cseAvgPkg:45, cseCutoff:70, eceCutoff:275, eleCutoff:500, mechCutoff:750, civilCutoff:3000, fees:2.5, tags:["1st Gen IIT","QS #118","FAANG Day 1","Finance Hub"], recruiters:["Google","Microsoft","Goldman Sachs","D.E. Shaw","Uber","Qualcomm","Apple","Optiver"], fests:["Mood Indigo","Techfest","SINE Incubator"], strengths:"Top FAANG placements, Finance & Quant hub, strongest QS ranking, massive startup culture via SINE", suitable:[{l:"JEE top 100",w:"JEE rank under 100"},{l:"Finance / Quant",w:"Goldman, D.E. Shaw careers"},{l:"Startup founders",w:"SINE incubator"},{l:"Global career",w:"International placements"}], researchFunding:350, ppos:400, scores:{research:10,placement:10,campus:9,brand:10,fees:7,cutoff:2} },
  "IIT Delhi": { location:"New Delhi", established:1961, nirf:4, qs:150, students:8500, faculty:600, campus:325, highestPkg:4.0, avgPkg:30, medianPkg:24, placementRate:94, companies:500, cseAvgPkg:48, cseCutoff:55, eceCutoff:225, eleCutoff:400, mechCutoff:650, civilCutoff:2500, fees:2.5, tags:["Capital Connect","QS #150","Consulting Leader","Research"], recruiters:["Google","Microsoft","Amazon","JP Morgan","D.E. Shaw","Qualcomm","BCG","McKinsey"], fests:["Rendezvous","Tryst","IIT Delhi E-Summit"], strengths:"Capital city advantage, Top consulting & finance, 94% placement rate, excellent NIRF", suitable:[{l:"JEE top 100",w:"JEE rank under 100"},{l:"Consulting/Finance",w:"McKinsey, Goldman careers"},{l:"Policy aspirants",w:"Near govt institutions"},{l:"Metro city lovers",w:"Delhi campus advantage"}], researchFunding:400, ppos:350, scores:{research:10,placement:10,campus:8,brand:10,fees:7,cutoff:2} },
  "IIT Madras": { location:"Chennai, Tamil Nadu", established:1959, nirf:1, qs:227, students:9500, faculty:620, campus:617, highestPkg:2.8, avgPkg:22, medianPkg:18, placementRate:88, companies:420, cseAvgPkg:38, cseCutoff:80, eceCutoff:350, eleCutoff:550, mechCutoff:1000, civilCutoff:3500, fees:2.5, tags:["NIRF #1 (9 yrs)","Deer on Campus","Deep Tech","Research #1"], recruiters:["Google","Amazon","Microsoft","Nvidia","Samsung","Intel","DE Shaw","Stripe"], fests:["Saarang","Shaastra","Research Park"], strengths:"NIRF #1 for 9 consecutive years, Deep tech research leader, deer inside campus, south India hub", suitable:[{l:"NIRF #1 aspirants",w:"India's top ranked institute"},{l:"Deep tech researchers",w:"Best research infra"},{l:"South India base",w:"Chennai location"},{l:"Unique campus life",w:"Forest + deer on campus"}], researchFunding:500, ppos:300, scores:{research:10,placement:9,campus:10,brand:10,fees:7,cutoff:2} },
  "IIT Kanpur": { location:"Kanpur, Uttar Pradesh", established:1959, nirf:5, qs:278, students:8000, faculty:520, campus:1055, highestPkg:3.5, avgPkg:26, medianPkg:21, placementRate:90, companies:380, cseAvgPkg:42, cseCutoff:100, eceCutoff:375, eleCutoff:550, mechCutoff:850, civilCutoff:3000, fees:2.5, tags:["AI Pioneer","Largest Campus","SIIC Incubation","Academic Rigor"], recruiters:["Google","Microsoft","Amazon","Qualcomm","Intel","ISRO","Goldman Sachs","BCG"], fests:["Antaragni","Techkriti","SIIC"], strengths:"AI & ML research pioneer, 1055-acre largest campus, best CS dept, massive student life", suitable:[{l:"CS/AI focused",w:"One of best CS depts"},{l:"Entrepreneurship",w:"SIIC incubator"},{l:"Large campus lovers",w:"1055-acre campus"},{l:"North India base",w:"Kanpur, UP location"}], researchFunding:380, ppos:280, scores:{research:10,placement:9,campus:9,brand:9,fees:7,cutoff:3} },
  "IIT Kharagpur": { location:"Kharagpur, West Bengal", established:1951, nirf:6, qs:222, students:12000, faculty:700, campus:2100, highestPkg:2.6, avgPkg:20, medianPkg:16, placementRate:86, companies:370, cseAvgPkg:35, cseCutoff:165, eceCutoff:425, eleCutoff:650, mechCutoff:900, civilCutoff:4000, fees:2.48, tags:["India's 1st IIT","2100 Acre Campus","IP Law School","Oldest Legacy"], recruiters:["Google","Microsoft","Amazon","McKinsey","ISRO","Intel","Tata","L&T"], fests:["Spring Fest","Kshitij","Entrepreneurship Cell"], strengths:"India's first IIT (1951), largest 2100-acre campus like a township, IP Law school, strongest alumni", suitable:[{l:"Legacy seekers",w:"India's first IIT"},{l:"Huge campus experience",w:"2100-acre township"},{l:"Dual/M.Tech aspirants",w:"Best 5yr integrated"},{l:"IP Law + Engg",w:"Rajiv Gandhi IP Law School"}], researchFunding:420, ppos:400, scores:{research:9,placement:9,campus:10,brand:9,fees:8,cutoff:3} },
  "IIT Roorkee": { location:"Roorkee, Uttarakhand", established:1847, nirf:7, qs:369, students:10500, faculty:550, campus:365, highestPkg:2.05, avgPkg:18, medianPkg:14, placementRate:83, companies:300, cseAvgPkg:35, cseCutoff:700, eceCutoff:1300, eleCutoff:1700, mechCutoff:2400, civilCutoff:4200, fees:2.5, tags:["Est. 1847","Asia's Oldest","Civil Leader","Heritage Campus"], recruiters:["Google","Microsoft","Goldman Sachs","McKinsey","L&T","Oracle","Qualcomm","ISRO"], fests:["Thomso","Cognizance","E-Cell"], strengths:"Asia's oldest engineering college (1847), 175+ year legacy, civil engineering leader, good QS", suitable:[{l:"Heritage IIT lovers",w:"175+ yr old institute"},{l:"Civil engineering",w:"Best civil + structural"},{l:"North India base",w:"Uttarakhand campus"},{l:"Lower cutoff IIT",w:"Accessible vs top IITs"}], researchFunding:350, ppos:200, scores:{research:8,placement:8,campus:8,brand:8,fees:7,cutoff:5} },
  "IIT Guwahati": { location:"Guwahati, Assam", established:1994, nirf:7, qs:344, students:7000, faculty:450, campus:700, highestPkg:2.4, avgPkg:22.5, medianPkg:18, placementRate:85, companies:250, cseAvgPkg:31.5, cseCutoff:600, eceCutoff:2000, eleCutoff:2000, mechCutoff:4500, civilCutoff:7500, fees:2.5, tags:["Most Beautiful IIT","Brahmaputra","Razorpay Founders","NE Gateway"], recruiters:["Google","Amazon","Microsoft","Oracle","Samsung","PWC","Deloitte","Uber"], fests:["Alcheringa","Techniche","Half Marathon"], strengths:"Most beautiful campus, Brahmaputra riverside, Razorpay & ShareChat founders alumni, active startup culture", suitable:[{l:"Beautiful campus lovers",w:"Stunning riverfront"},{l:"NE India base",w:"Gateway to Northeast"},{l:"Startup culture",w:"Razorpay founders alumni"},{l:"Good CSE package",w:"₹31.5 LPA CSE avg"}], researchFunding:280, ppos:200, scores:{research:8,placement:8,campus:10,brand:8,fees:7,cutoff:4} },
  "IIT Hyderabad": { location:"Sangareddy, Telangana", established:2008, nirf:8, qs:null, students:4200, faculty:280, campus:576, highestPkg:0.945, avgPkg:24.3, medianPkg:20, placementRate:82, companies:200, cseAvgPkg:36.5, cseCutoff:600, eceCutoff:1800, eleCutoff:2100, mechCutoff:5000, civilCutoff:9200, fees:2.5, tags:["India's 1st AI Dept","Japan JICA","TiHAN AV Testbed","Fractal Campus"], recruiters:["Google","Microsoft","Amazon","Meta","Nvidia","Toyota","Qualcomm","Apple"], fests:["Elan & nVision","Japan Hub","FAB LAB"], strengths:"India's 1st B.Tech AI dept, autonomous vehicle testbed (TiHAN), Japan JICA research tie-up", suitable:[{l:"AI/ML enthusiasts",w:"India's first AI dept"},{l:"Japan research interest",w:"JICA collaboration"},{l:"Autonomous vehicles",w:"TiHAN testbed campus"},{l:"High CSE avg",w:"₹36.5 LPA CSE avg"}], researchFunding:250, ppos:100, scores:{research:9,placement:8,campus:8,brand:8,fees:7,cutoff:4} },
  "IIT Indore": { location:"Simrol, Madhya Pradesh", established:2009, nirf:14, qs:null, students:3500, faculty:200, campus:501, highestPkg:0.68, avgPkg:25.4, medianPkg:21, placementRate:90, companies:150, cseAvgPkg:34.5, cseCutoff:1200, eceCutoff:3500, eleCutoff:4000, mechCutoff:7000, civilCutoff:9500, fees:2.5, tags:["Space Science Dept","QS Citations #1 MP","Eco Campus","Fastest Growing"], recruiters:["Google","Amazon","Microsoft","Goldman Sachs","Salesforce","ISRO","Intel","Nvidia"], fests:["Fluxus","Astronomy Club","E-Cell"], strengths:"Unique Space Engineering dept, top research citations, eco campus, 90% placement despite new IIT", suitable:[{l:"Space & astronomy",w:"Unique Space Science dept"},{l:"Research inclined",w:"Top citations per faculty"},{l:"High avg package",w:"₹25.4 LPA overall"},{l:"90% placement target",w:"Excellent for 2nd gen IIT"}], researchFunding:200, ppos:60, scores:{research:8,placement:8,campus:7,brand:7,fees:7,cutoff:5} },
  "IIT BHU Varanasi": { location:"Varanasi, Uttar Pradesh", established:1919, nirf:10, qs:null, students:6500, faculty:350, campus:400, highestPkg:1.2, avgPkg:22.7, medianPkg:18.5, placementRate:88, companies:300, cseAvgPkg:31.5, cseCutoff:900, eceCutoff:2600, eleCutoff:3800, mechCutoff:6200, civilCutoff:12000, fees:2.5, tags:["Est. 1919","UPSC Culture","Nikesh Arora","BHU Ecosystem"], recruiters:["Google","Microsoft","Amazon","Goldman Sachs","Oracle","Uber","Flipkart","Samsung"], fests:["Kashiyatra","Technex","Kashi Ghats"], strengths:"Asia's oldest tech institute (1919), legendary UPSC culture, BHU ecosystem, Nikesh Arora (Palo Alto CEO) alumnus", suitable:[{l:"Legacy & culture",w:"1919 — Asia's oldest tech"},{l:"UPSC aspirants",w:"Famous UPSC track record"},{l:"Spiritual city lovers",w:"Varanasi location"},{l:"Good CSE package",w:"₹31.5 LPA CSE avg"}], researchFunding:220, ppos:300, scores:{research:7,placement:8,campus:8,brand:8,fees:7,cutoff:4} },
  "IIT Bhubaneswar": { location:"Argul, Odisha", established:2008, nirf:27, qs:null, students:3500, faculty:200, campus:936, highestPkg:0.641, avgPkg:20.1, medianPkg:16.5, placementRate:88, companies:150, cseAvgPkg:25.2, cseCutoff:3000, eceCutoff:5000, eleCutoff:6500, mechCutoff:9000, civilCutoff:12000, fees:2.5, tags:["Green Eco Campus","Ocean Research","DIC Innovation","Sustainability"], recruiters:["Google","Amazon","Microsoft","Goldman Sachs","Zomato","Oracle","Samsung","Tata Motors"], fests:["Alma Fiesta","Wissenaire","Ashvamedha"], strengths:"Green eco campus at Barunei Hills, ocean & climate sciences, Design Innovation Centre", suitable:[{l:"Eco-conscious students",w:"Green GRIHA campus"},{l:"Ocean/climate research",w:"Unique ocean sciences"},{l:"Higher cutoff range",w:"Accessible JEE ranks"},{l:"Odisha base preferred",w:"Bhubaneswar location"}], researchFunding:150, ppos:90, scores:{research:7,placement:7,campus:7,brand:6,fees:7,cutoff:6} },
  "IIT Gandhinagar": { location:"Palaj, Gujarat", established:2008, nirf:18, qs:null, students:2500, faculty:180, campus:400, highestPkg:0.62, avgPkg:19.6, medianPkg:16.2, placementRate:92, companies:120, cseAvgPkg:30, cseCutoff:1800, eceCutoff:4000, eleCutoff:4200, mechCutoff:7000, civilCutoff:11000, fees:2.5, tags:["5-Star GRIHA","40% Global Intern","Bicycle Campus","Flexible Curriculum"], recruiters:["Google","Microsoft","Amazon","Oracle","Texas Instruments","Adobe","JP Morgan","Qualcomm"], fests:["Blithchron","Amalthea","Invention Factory"], strengths:"40% students get global internships, India's first 5-star GRIHA, bicycle-only academic zone, flexible curriculum", suitable:[{l:"Global exposure seekers",w:"40% go abroad for internship"},{l:"Eco-campus preference",w:"5-star GRIHA award"},{l:"Flexible studies",w:"Minors in humanities/arts"},{l:"92% placement rate",w:"High despite smaller size"}], researchFunding:180, ppos:80, scores:{research:7,placement:8,campus:9,brand:7,fees:7,cutoff:5} },
  "IIT Jodhpur": { location:"Karwar, Rajasthan", established:2008, nirf:30, qs:null, students:4500, faculty:250, campus:852, highestPkg:0.61, avgPkg:18.3, medianPkg:15, placementRate:90, companies:200, cseAvgPkg:23.5, cseCutoff:2500, eceCutoff:5500, eleCutoff:6200, mechCutoff:10000, civilCutoff:14500, fees:2.5, tags:["AI School","AIIMS Collab","Desert Eco","852 Acres"], recruiters:["Google","Microsoft","Amazon","Adobe","Oracle","Zomato","Qualcomm","Samsung"], fests:["Ignus","Prometeo","JIDAN"], strengths:"Dedicated School of AI & Data Science, AIIMS Jodhpur collaboration, 852-acre desert eco campus, JIDAN startup hub", suitable:[{l:"AI & Data Science focus",w:"Dedicated AI school"},{l:"Medical tech interest",w:"AIIMS collaboration"},{l:"Desert city life",w:"Jodhpur blue city"},{l:"Large campus",w:"852 acres eco campus"}], researchFunding:160, ppos:70, scores:{research:7,placement:7,campus:8,brand:7,fees:7,cutoff:5} },
  "IIT Mandi": { location:"Kamand, Himachal Pradesh", established:2009, nirf:33, qs:null, students:2500, faculty:160, campus:538, highestPkg:0.60, avgPkg:22.38, medianPkg:18, placementRate:89, companies:130, cseAvgPkg:26.55, cseCutoff:3100, eceCutoff:6000, eleCutoff:7000, mechCutoff:10500, civilCutoff:11500, fees:2.5, tags:["Himalayan Campus","TU9 Germany","D-ITP Program","Uhl River"], recruiters:["Google","Amazon","Zomato","Microsoft","Adobe","Intel","JLR","Flipkart"], fests:["Exodia","Nature Walk","Gymkhana"], strengths:"Only IIT in Himalayas, Uhl river flowing through campus, TU9 Germany partnership, unique D-ITP design program", suitable:[{l:"Himalayan campus life",w:"Breathtaking mountain setting"},{l:"Germany research",w:"TU9 exchange program"},{l:"Design-tech interest",w:"D-ITP program unique"},{l:"Good CSE avg",w:"₹26.55 LPA CSE avg"}], researchFunding:140, ppos:80, scores:{research:7,placement:7,campus:9,brand:6,fees:7,cutoff:6} },
  "IIT Ropar": { location:"Rupnagar, Punjab", established:2008, nirf:22, qs:380, students:3000, faculty:200, campus:525, highestPkg:0.55, avgPkg:20.9, medianPkg:17, placementRate:85, companies:150, cseAvgPkg:28.5, cseCutoff:2000, eceCutoff:5000, eleCutoff:5800, mechCutoff:8500, civilCutoff:13200, fees:2.5, tags:["QS #1 India Citations","Supercomputing","AWaDH Hub","Sutlej River"], recruiters:["Google","Amazon","Microsoft","Goldman Sachs","Uber","Intel","Oracle","Arista"], fests:["Zeitgeist","Advitiya","Riverside Life"], strengths:"QS #1 India for citations per faculty, Param Sanganak supercomputer, AWaDH agriculture-water hub, Sutlej riverside", suitable:[{l:"Research focus",w:"QS #1 India research citations"},{l:"Supercomputing interest",w:"Param Sanganak HPC"},{l:"Punjab base",w:"Rupnagar location"},{l:"Agri-water research",w:"AWaDH hub projects"}], researchFunding:170, ppos:60, scores:{research:9,placement:7,campus:8,brand:7,fees:7,cutoff:5} },
  "IIT Patna": { location:"Bihta, Bihar", established:2008, nirf:41, qs:null, students:3500, faculty:180, campus:501, highestPkg:0.8205, avgPkg:22.23, medianPkg:18, placementRate:100, companies:150, cseAvgPkg:23.9, cseCutoff:2700, eceCutoff:6000, eleCutoff:7000, mechCutoff:10500, civilCutoff:15100, fees:2.5, tags:["100% CSE Placed","ESDM Medical Hub","Atlassian Recruits","Bihar Tech Hub"], recruiters:["Google","Amazon","Atlassian","Microsoft","Adobe","Intel","Oracle","Uber"], fests:["Anwesha","Celesta","Infinito"], strengths:"100% placement in CSE & EE, highest pkg ₹82 LPA for 2nd gen IIT, ESDM Medical Electronics incubation", suitable:[{l:"100% placement seekers",w:"100% CSE/EE placed"},{l:"Medical electronics",w:"ESDM incubation hub"},{l:"Bihar/East India base",w:"Bihta, Patna location"},{l:"Atlassian target",w:"Major Atlassian recruiter"}], researchFunding:130, ppos:60, scores:{research:6,placement:8,campus:6,brand:6,fees:7,cutoff:6} },
  "IIT ISM Dhanbad": { location:"Dhanbad, Jharkhand", established:1926, nirf:17, qs:null, students:8000, faculty:300, campus:393, highestPkg:1.1, avgPkg:19.2, medianPkg:16, placementRate:92, companies:250, cseAvgPkg:28.5, cseCutoff:3000, eceCutoff:5100, eleCutoff:7800, mechCutoff:9800, civilCutoff:14000, fees:2.5, tags:["Est. 1926","World Mining #25","PSU Hub","Heritage Campus"], recruiters:["Google","Amazon","Microsoft","Uber","Tata Steel","ONGC","Coal India","Goldman Sachs"], fests:["Srijan","Concetto","Parakram"], strengths:"World top 25 Mining & Petroleum Engg, 1926 heritage, ONGC/Coal India mass placement, PSU hub", suitable:[{l:"Mining/Petroleum focus",w:"World-class mining dept"},{l:"PSU career aspirants",w:"ONGC/Coal India placements"},{l:"Heritage IIT",w:"1926 century-old legacy"},{l:"Core engineering",w:"Strong metallurgy/petroleum"}], researchFunding:200, ppos:200, scores:{research:7,placement:8,campus:7,brand:8,fees:7,cutoff:5} },
  "IIT Goa": { location:"Ponda, Goa", established:2016, nirf:65, qs:null, students:1200, faculty:70, campus:447, highestPkg:0.486, avgPkg:15.5, medianPkg:13, placementRate:85, companies:130, cseAvgPkg:21.5, cseCutoff:4100, eceCutoff:8000, eleCutoff:8600, mechCutoff:10500, civilCutoff:15200, fees:2.5, tags:["3rd Gen IIT","GSoC Culture","Coastal Life","Growing Fast"], recruiters:["Google","Amazon","Microsoft","Intel","Adobe","Cisco","Samsung","Goldman Sachs"], fests:["Fluxus","Goa Vibe","Orion"], strengths:"Coastal Goa location, strong ICPC & Google Summer of Code culture, rapidly growing placement record", suitable:[{l:"Coastal campus life",w:"Goa — beaches nearby"},{l:"Competitive coding",w:"Strong ICPC/GSoC culture"},{l:"Higher JEE rank range",w:"Accessible cutoffs"},{l:"Growing IIT",w:"Early-mover advantage"}], researchFunding:80, ppos:40, scores:{research:5,placement:6,campus:7,brand:5,fees:7,cutoff:7} },
  "IIT Dharwad": { location:"Dharwad, Karnataka", established:2016, nirf:93, qs:null, students:1100, faculty:60, campus:470, highestPkg:0.52, avgPkg:14.2, medianPkg:12, placementRate:80, companies:150, cseAvgPkg:18.6, cseCutoff:5000, eceCutoff:8200, eleCutoff:10200, mechCutoff:13500, civilCutoff:15800, fees:2.5, tags:["IIT Bombay Mentored","470 Acre Campus","Karnataka Tech Belt","Permanent Campus"], recruiters:["Google","Amazon","Microsoft","Intel","TCS","Infosys","Wipro","Texas Instruments"], fests:["Paritosh","Fluxus","Inter-IIT"], strengths:"IIT Bombay mentored, near Hubballi-Dharwad industrial belt, new permanent 470-acre campus, growing fast", suitable:[{l:"IIT Bombay mentored",w:"IITB academic standards"},{l:"Karnataka base",w:"Dharwad-Hubballi belt"},{l:"Higher JEE rank",w:"Accessible cutoffs"},{l:"New campus life",w:"Fresh permanent campus"}], researchFunding:70, ppos:30, scores:{research:5,placement:5,campus:6,brand:5,fees:7,cutoff:7} },
  "IIT Bhilai": { location:"Chhattisgarh", established:2016, nirf:81, qs:null, students:1200, faculty:70, campus:447, highestPkg:0.486, avgPkg:15.5, medianPkg:13, placementRate:85, companies:130, cseAvgPkg:19.8, cseCutoff:5500, eceCutoff:9000, eleCutoff:9800, mechCutoff:12000, civilCutoff:15500, fees:2.5, tags:["FinTech Center","Defense/DRDO","Central India","3rd Gen IIT"], recruiters:["Google","Amazon","Microsoft","L&T Infotech","CDAC","Cognizant","Qualcomm","Adobe"], fests:["Meraz","HackBhilai","Prayatna"], strengths:"FinTech & Cybersecurity research center, DRDO defense collaborations, central India tech hub, growing rapidly", suitable:[{l:"FinTech interest",w:"Specialized FinTech center"},{l:"Defense research",w:"DRDO collaborations"},{l:"Central India base",w:"Chhattisgarh location"},{l:"Higher JEE ranks",w:"Accessible for CSE"}], researchFunding:70, ppos:30, scores:{research:5,placement:6,campus:6,brand:5,fees:7,cutoff:7} },
  "IIT Jammu": { location:"Jagti, J&K", established:2016, nirf:62, qs:null, students:1500, faculty:100, campus:400, highestPkg:0.53, avgPkg:17, medianPkg:15, placementRate:82, companies:150, cseAvgPkg:22, cseCutoff:4300, eceCutoff:9000, eleCutoff:9000, mechCutoff:12000, civilCutoff:16000, fees:2.5, tags:["Himalayan Foothills","Smart Campus","IIT Delhi Mentored","Defense Proximity"], recruiters:["Amazon","Microsoft","Intel","Sprinklr","Samsung","Adobe","TCS","L&T"], fests:["Renaissance","Technuarium","Smart Campus Life"], strengths:"Himalayan foothills setting, IIT Delhi mentored, I2EDC entrepreneurship, defense research proximity", suitable:[{l:"Himalayan setting",w:"Scenic Trikuta hills view"},{l:"J&K base preferred",w:"Regional advantage"},{l:"Defense sector interest",w:"Proximity to defense orgs"},{l:"IIT Delhi standards",w:"Mentored by IITD"}], researchFunding:80, ppos:30, scores:{research:5,placement:6,campus:7,brand:5,fees:7,cutoff:7} },
  "IIT Palakkad": { location:"Palakkad, Kerala", established:2015, nirf:58, qs:null, students:1200, faculty:70, campus:447, highestPkg:0.486, avgPkg:18.9, medianPkg:16, placementRate:85, companies:140, cseAvgPkg:20.7, cseCutoff:5100, eceCutoff:9000, eleCutoff:9600, mechCutoff:12800, civilCutoff:15500, fees:2.5, tags:["Sahyadri Hills","Kerala Tech Hub","Data Science","Mercedes-Benz Recruits"], recruiters:["Google","Amazon","ICICI Bank","Mercedes-Benz","Reliance","GeeksforGeeks","Qualcomm"], fests:["Petrichor","Nila Campus Life","Sarathy"], strengths:"Near Kanjikode industrial belt, Sahyadri hills campus, Data Science research hub, Mercedes-Benz recruiter", suitable:[{l:"Kerala base preferred",w:"Palakkad location"},{l:"Data Science interest",w:"DS research emerging hub"},{l:"Industrial proximity",w:"Kanjikode belt nearby"},{l:"Higher JEE range",w:"Accessible cutoffs"}], researchFunding:80, ppos:35, scores:{research:5,placement:6,campus:7,brand:5,fees:7,cutoff:7} },
  "IIT Tirupati": { location:"Tirupati, Andhra Pradesh", established:2015, nirf:61, qs:null, students:1500, faculty:110, campus:530, highestPkg:0.41, avgPkg:18.9, medianPkg:16, placementRate:80, companies:140, cseAvgPkg:25.2, cseCutoff:3900, eceCutoff:8000, eleCutoff:7200, mechCutoff:10500, civilCutoff:13900, fees:2.5, tags:["IIT Madras Mentored","Design Focus","JNCASR Collab","Temple City"], recruiters:["Google","Amazon","Microsoft","Sprinklr","Adobe","Intel","JLR","Walmart"], fests:["Tirutsava","Technuarium","Gymkhana"], strengths:"IIT Madras mentored, design-centric curriculum, JNCASR & IISc collaborations, decent CSE avg for new IIT", suitable:[{l:"IIT Madras standards",w:"IITM mentored"},{l:"Design-tech focus",w:"Design-centric curriculum"},{l:"Andhra Pradesh base",w:"Tirupati location"},{l:"Research collaborations",w:"JNCASR / IISc ties"}], researchFunding:90, ppos:35, scores:{research:5,placement:6,campus:6,brand:5,fees:7,cutoff:7} }
};

const iitNames = Object.keys(IIT_DATA).sort();
const selected = [];

// populate select
const sel = document.getElementById('iitSelect');
iitNames.forEach(n => {
  const o = document.createElement('option');
  o.value = n; o.textContent = n;
  sel.appendChild(o);
});

function addCollege() {
  const val = sel.value;
  if (!val) return;
  if (selected.includes(val)) { sel.value = ''; return; }
  if (selected.length >= 4) { alert('Max 4 colleges allowed.'); return; }
  selected.push(val);
  sel.value = '';
  renderTags();
  updateUI();
}

function removeCollege(name) {
  const i = selected.indexOf(name);
  if (i > -1) selected.splice(i, 1);
  renderTags();
  updateUI();
  if (selected.length < 2) { document.getElementById('resultSection').style.display = 'none'; document.getElementById('placeholder').style.display = 'block'; }
}

function renderTags() {
  const wrap = document.getElementById('selectedTags');
  if (selected.length === 0) { wrap.innerHTML = '<span class="empty-tag">No colleges selected yet</span>'; return; }
  wrap.innerHTML = selected.map(n => `<div class="sel-tag"><span>${n}</span><span class="remove" onclick="removeCollege('${n}')">✕</span></div>`).join('');
}

function updateUI() {
  document.getElementById('selCount').textContent = selected.length;
  document.getElementById('compareBtn').disabled = selected.length < 2;
}

function clearAll() {
  selected.length = 0;
  renderTags(); updateUI();
  document.getElementById('resultSection').style.display = 'none';
  document.getElementById('placeholder').style.display = 'block';
}

function buildCutoffBar(rank, maxR) {
  const pct = Math.round(Math.max(0, (1 - rank / maxR) * 100));
  return `<div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>`;
}

function runCompare() {
  if (selected.length < 2) return;
  const data = selected.map(n => ({ name: n, ...IIT_DATA[n] }));
  document.getElementById('placeholder').style.display = 'none';
  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('resultHeading').textContent = data.map(d => d.name).join(' vs ');
  document.getElementById('resultCount').textContent = data.length;

  buildCards(data);
  buildTable(data);
  buildVerdict(data);
  setTimeout(() => document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function buildCards(data) {
  const MAX = 18000;
  document.getElementById('cardsGrid').innerHTML = data.map((d, idx) => `
  <div class="iit-card" style="animation-delay:${idx*0.07}s">
    <div class="card-head">
      <div class="card-nirf">NIRF #${d.nirf}</div>
      <div class="card-name">${d.name}</div>
      <div class="card-loc">${d.location}</div>
      <div class="card-est">Est. ${d.established} · ${d.campus} acres</div>
    </div>
    <div class="card-body">
      <div class="stat-grid">
        <div class="stat-mini"><div class="v">₹${d.highestPkg}Cr</div><div class="l">Highest Pkg</div></div>
        <div class="stat-mini"><div class="v">₹${d.avgPkg}L</div><div class="l">Avg Pkg</div></div>
        <div class="stat-mini"><div class="v">${d.placementRate}%</div><div class="l">Placed</div></div>
        <div class="stat-mini"><div class="v">${d.companies}+</div><div class="l">Companies</div></div>
      </div>
      <div class="sec-label">JEE Cutoffs (Gen)</div>
      <div class="bar-row"><div class="br-top"><span>CSE</span><span>~${d.cseCutoff}</span></div>${buildCutoffBar(d.cseCutoff,MAX)}</div>
      <div class="bar-row"><div class="br-top"><span>ECE</span><span>~${d.eceCutoff}</span></div>${buildCutoffBar(d.eceCutoff,MAX)}</div>
      <div class="bar-row"><div class="br-top"><span>Electrical</span><span>~${d.eleCutoff}</span></div>${buildCutoffBar(d.eleCutoff,MAX)}</div>
      <div class="bar-row"><div class="br-top"><span>Mechanical</span><span>~${d.mechCutoff}</span></div>${buildCutoffBar(d.mechCutoff,MAX)}</div>
      <div class="sec-label">Top Recruiters</div>
      <div class="recruiters-wrap">${d.recruiters.map(r=>`<span class="rec-chip">${r}</span>`).join('')}</div>
      <div class="sec-label">Tags</div>
      <div class="tag-strip">${d.tags.map((t,i)=>`<span class="tag-s ${['blue','green','amber','purple','red'][i%5]}">${t}</span>`).join('')}</div>
      <div class="sec-label">Key Strength</div>
      <div class="strength-text">${d.strengths}</div>
    </div>
  </div>`).join('');
}

function cellWrap(val, cls) { return cls ? `<span class="${cls}">${val}</span>` : val; }
function bestWorst(num, arr, higher=true) {
  if (arr.length < 2) return '';
  const best = higher ? Math.max(...arr) : Math.min(...arr);
  const worst = higher ? Math.min(...arr) : Math.max(...arr);
  if (num === best) return 'cell-best';
  if (num === worst) return 'cell-worst';
  return '';
}

function buildTable(data) {
  const N = data.length;
  const rows = [
    { sec: '🏛️ General Info' },
    { label:'NIRF Rank',        fn: d=>`#${d.nirf}`,         raw: d=>d.nirf,          hib: false },
    { label:'QS World Rank',    fn: d=>d.qs ? `#${d.qs}` : '—', raw: d=>d.qs||9999,   hib: false },
    { label:'Established',      fn: d=>d.established,         raw: d=>d.established,   hib: false },
    { label:'Campus (acres)',   fn: d=>d.campus,              raw: d=>d.campus },
    { label:'Total Students',   fn: d=>d.students.toLocaleString(), raw: d=>d.students },
    { label:'Faculty',          fn: d=>`${d.faculty}+`,       raw: d=>d.faculty },
    { label:'Annual Fees',      fn: d=>`₹${d.fees} L`,        raw: d=>d.fees,          hib: false },
    { sec: '📋 JEE Cutoffs (Gen)' },
    { label:'CSE Cutoff',       fn: d=>`~${d.cseCutoff}`,     raw: d=>d.cseCutoff,     hib: false },
    { label:'ECE Cutoff',       fn: d=>`~${d.eceCutoff}`,     raw: d=>d.eceCutoff,     hib: false },
    { label:'Electrical',       fn: d=>`~${d.eleCutoff}`,     raw: d=>d.eleCutoff,     hib: false },
    { label:'Mechanical',       fn: d=>`~${d.mechCutoff}`,    raw: d=>d.mechCutoff,    hib: false },
    { label:'Civil',            fn: d=>`~${d.civilCutoff}`,   raw: d=>d.civilCutoff,   hib: false },
    { sec: '💼 Placements' },
    { label:'Highest Pkg',      fn: d=>`₹${d.highestPkg} Cr`, raw: d=>d.highestPkg },
    { label:'Avg Package',      fn: d=>`₹${d.avgPkg} LPA`,   raw: d=>d.avgPkg },
    { label:'Median Package',   fn: d=>`₹${d.medianPkg} LPA`,raw: d=>d.medianPkg },
    { label:'CSE Avg Package',  fn: d=>`₹${d.cseAvgPkg} LPA`,raw: d=>d.cseAvgPkg },
    { label:'Placement Rate',   fn: d=>`${d.placementRate}%`, raw: d=>d.placementRate },
    { label:'Companies',        fn: d=>`${d.companies}+`,     raw: d=>d.companies },
    { label:'PPOs',             fn: d=>`${d.ppos}+`,          raw: d=>d.ppos },
    { sec: '⭐ Ratings (/10)' },
    { label:'Research',         fn: d=>`${d.scores.research}/10`,   raw: d=>d.scores.research },
    { label:'Placements',       fn: d=>`${d.scores.placement}/10`,  raw: d=>d.scores.placement },
    { label:'Campus Life',      fn: d=>`${d.scores.campus}/10`,     raw: d=>d.scores.campus },
    { label:'Brand Value',      fn: d=>`${d.scores.brand}/10`,      raw: d=>d.scores.brand },
    { label:'Fees Value',       fn: d=>`${d.scores.fees}/10`,       raw: d=>d.scores.fees },
    { label:'Cutoff Ease',      fn: d=>`${d.scores.cutoff}/10`,     raw: d=>d.scores.cutoff },
    { sec: '✨ Campus' },
    { label:'Fests',            fn: d=>d.fests.join(' · '),          raw: null },
    { label:'Top Recruiters',   fn: d=>d.recruiters.slice(0,5).join(', '), raw: null },
  ];

  let html = `<thead><tr><th>Parameter</th>${data.map(d=>`<th class="th-iit">${d.name}</th>`).join('')}</tr></thead><tbody>`;
  rows.forEach(r => {
    if (r.sec) { html += `<tr class="sec-row"><td colspan="${N+1}">${r.sec}</td></tr>`; return; }
    const raws = r.raw ? data.map(d => r.raw(d)) : null;
    html += `<tr><td>${r.label}</td>${data.map((d,i) => {
      const disp = r.fn(d);
      const cls = raws ? bestWorst(raws[i], raws, r.hib !== false) : '';
      return `<td>${cellWrap(disp, cls)}</td>`;
    }).join('')}</tr>`;
  });
  html += '</tbody>';
  document.getElementById('compareTable').innerHTML = html;
}

function buildVerdict(data) {
  const scored = [...data].map(d => ({
    d,
    total: d.scores.research + d.scores.placement + d.scores.campus + d.scores.brand + d.scores.fees
  })).sort((a,b) => b.total - a.total);

  const labels = ['🥇 Overall Best Pick','🥈 Runner Up','🥉 Honorable Mention'];
  const classes = ['w1','w2','w3'];
  document.getElementById('verdictGrid').innerHTML = scored.map((s,i) => {
    const c = s.d;
    const reasons = [];
    if (c.nirf <= 5) reasons.push(`NIRF #${c.nirf}`);
    if (c.avgPkg >= 22) reasons.push(`₹${c.avgPkg} LPA avg`);
    if (c.scores.research >= 9) reasons.push('World-class research');
    if (c.placementRate >= 90) reasons.push(`${c.placementRate}% placed`);
    if (c.campus >= 700) reasons.push(`${c.campus}-acre campus`);
    if (c.scores.fees >= 8) reasons.push('Excellent value for money');
    return `<div class="verdict-card ${classes[i]||'w3'}">
      <div class="vc-label">${labels[i]||'🎖️ Notable'}</div>
      <div class="vc-name">${c.name}</div>
      <div class="vc-reason">${(reasons.slice(0,3).join(' · ')) || 'Strong all-round performance'}</div>
    </div>`;
  }).join('');

  document.getElementById('profilesWrap').innerHTML = data.flatMap(d =>
    d.suitable.map(s => `<div class="profile-chip"><strong>${d.name}:</strong> ${s.l}</div>`)
  ).join('');
}

// allow Enter on select
document.getElementById('iitSelect').addEventListener('keydown', e => { if (e.key === 'Enter') addCollege(); });
