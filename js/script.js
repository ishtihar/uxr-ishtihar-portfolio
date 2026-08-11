const CASES = [
  {
    id: "creation-breakflow",
    domain: "Content Creation · Onboarding",
    title: "Why first-time creators stop midway",
    tags: ["Interviews", "Funnel Research", "Early Career"],
    role: "UX Researcher (Intern)",
    methods: "20 interviews",
    year: "2022",
    summary: "One of my first projects. I studied what makes a person make their first post on ShareChat, and what makes them leave the posting flow before finishing it.",
    context: "Early in my time at ShareChat, the team wanted to know something simple but important: many people signed up, but far fewer became regular creators. Some never posted at all. Others posted once and never came back. This was the first study I did from start to finish, right after being a creator myself.",
    problem: "What makes someone post for the first time? And what makes people leave the posting screen without finishing?",
    questions: [
      "What makes a person try posting for the first time?",
      "Where, exactly, do people get stuck or give up while posting?",
      "What is different about people who keep creating vs. people who post once and stop?",
      "How much of the drop-off is about motivation, and how much is confusing design?"
    ],
    approach: "I did phone interviews with two groups: people who had just posted for the first time, and people who had already posted several times. This let me compare a fresh first impression with a long-term one.",
    participants: "New creators (posted in the last few days) and repeat creators (posted 3 or more times). People were picked based on real app usage, not random selection.",
    findings: [
      "People decided to post for the first time mostly because of a personal or social reason — not because the app pushed them to.",
      "Real design problems and simple lack of interest looked the same in the data. Only by asking people directly could we tell the two apart.",
      "Repeat creators had a clearly different relationship with the app than one-time posters. It wasn't just about wanting to post — it was about staying engaged."
    ],
    insight: "\"Few people are posting\" was not one problem — it was at least two different problems hiding behind the same number. Some people needed a push to start. Others needed the screen itself to be easier to use.",
    implications: "I suggested treating \"why people don't post\" and \"why the flow is confusing\" as two separate problems, instead of one single fix.",
    impact: "This research became an early input into how the team thought about the first-post experience for new users.",
    reflection: "This project taught me a basic lesson: one number can hide two very different stories. I still keep this in mind in every study I do."
  },
  {
    id: "cp-card",
    domain: "Social & Community",
    title: "One feature, five different meanings",
    tags: ["Interviews", "Cohort Research", "Qualitative"],
    role: "Lead Researcher",
    methods: "18 interviews · 2 groups",
    year: "2026",
    summary: "CP Card lets two users form a public 'connection' and show up together on a leaderboard. It had been live for a while, but no one had asked users what it was really doing for them.",
    context: "CP Card is a social feature on ShareChat. One user sends another a connection card — Lover, Bestie, or Family. Once accepted, the two share a public bond for a fixed time, can send each other gifts, and can rank together on a leaderboard. The feature was live and being used, but the team did not have a clear picture of why people used it, or what frustrated them about it.",
    problem: "What is CP Card really doing for the people who use it? And where is it falling short of what they expect?",
    questions: [
      "Why do people send or accept a connection card in the first place?",
      "How do people choose who to send it to?",
      "What actually happens after a connection is formed?",
      "Does the leaderboard really matter to users, or is it a small detail?"
    ],
    approach: "I did 18 one-on-one interviews across two groups — people who tried the feature once, and people who used it regularly. This let me compare a first-time reaction with a long-term one.",
    participants: "First-time users of the feature, and repeat/regular users. People were picked based on real usage, not by asking for volunteers.",
    findings: [
      "One feature was actually serving at least five different needs — wanting to look good on the leaderboard, showing a relationship status publicly, making the profile look nice, staying active in a chatroom, or simply because a friend asked.",
      "Almost everyone sent a connection to someone they already knew — the feature was rarely used to meet someone new.",
      "In most pairs, one person paid for almost everything. Gifting was mostly one-sided, not equal, and the team had not expected this.",
      "The biggest complaints were not about price — they were about fairness and time: connections expiring with no warning, and money spent on a rejected request being lost for good.",
      "Only a small, competitive group of users actually cared about the leaderboard. For most people, it wasn't a strong reason to use the feature."
    ],
    insight: "The feature was good at giving people one nice moment — a good-looking profile badge. It was not as good at building an ongoing relationship. But its reward system (leaderboard, gifting) was built for the second job, not the first.",
    implications: "I suggested fixing the trust and timing problems first — like adding expiry reminders and refunds for rejected requests — before spending more on leaderboard rewards. These basic issues were hurting user trust no matter how much someone liked the feature.",
    impact: "I shared these findings with the product team to help decide what to fix first on the roadmap.",
    reflection: "This project reminded me that a feature can look successful in overall numbers while actually running several different, unrelated experiences underneath. Only real interviews could show the gap between what the leaderboard rewarded and what people actually wanted."
  },
  {
    id: "quicktv-retention",
    domain: "Streaming · Retention",
    title: "Why the most loyal viewers were leaving",
    tags: ["Cohort Research", "Competitive Research", "Interviews"],
    role: "Lead Researcher",
    methods: "Group interviews + comparison study",
    year: "2025–26",
    summary: "Some of QuickTV's biggest, paying viewers — the ones the business depends on most — were cancelling or removing the app. The team did not know why.",
    context: "QuickTV is ShareChat's short-episode video app. The team could see that some of its heaviest, most valuable viewers were cancelling their subscription or removing the app. But the reasons were not visible from the usage data alone.",
    problem: "Why were the platform's most loyal viewers leaving? And what kept the ones who stayed?",
    questions: [
      "What first got these viewers interested in QuickTV?",
      "What makes the ones who stay keep coming back?",
      "What exactly makes someone cancel or remove the app?",
      "How does QuickTV compare, in their own words, to something like Netflix or Hotstar?"
    ],
    approach: "I did group-based interviews across two viewing levels, and within each, three groups — still watching, cancelled, and removed the app. I also compared QuickTV directly against long-video apps that these same viewers used.",
    participants: "People who were currently subscribed and people who used to be, from many different jobs, income levels, and states. Most were found through the app's own ads.",
    findings: [
      "Short, vertical episodes were not a lesser choice for these viewers — it was their real preference. It fit their busy, broken-up schedules better than long videos.",
      "For most of these viewers, QuickTV was their only paid subscription. It wasn't really competing with Netflix or Hotstar — it was competing with their free time.",
      "The single biggest reason people cancelled, mentioned again and again, was not price or content quality — it was shows that ended suddenly without a proper ending.",
      "Regional-language and dubbed international shows — something most competitors don't offer — was a clear reason people stayed loyal."
    ],
    insight: "Whether someone stayed or left was decided less by ads or price, and more by whether a show's story was allowed to finish. That is a clear, fixable reason for people leaving — most apps in this space usually blame price or competition instead.",
    implications: "I suggested making sure shows finish properly should be a top priority — even before price or feature changes. I also suggested continuing to invest in regional and dubbed content, since it was a real strength.",
    impact: "These findings directly shaped how the content team planned what shows to make and promote for the app's most valuable viewers.",
    reflection: "This project taught me not to assume \"they cancelled because of price\" without checking. The real answer was in how people talked about specific shows, not in what they said about the subscription."
  },
  {
    id: "quickpoints",
    domain: "Gamification & Engagement",
    title: "A rewards feature nobody noticed",
    tags: ["Interviews", "Product Audit"],
    role: "Lead Researcher",
    methods: "9 interviews · new & existing users",
    year: "2026",
    summary: "QuickPoints was built to reward users for watching more on QuickTV. But hardly anyone was using it. The question was: is the reward not good enough, or are people simply not finding it?",
    context: "QuickPoints is a reward system inside QuickTV. It gives users points for actions like opening the app or watching more. Very few users were engaging with it, and the team needed to know if the problem was the reward itself, or something before that.",
    problem: "Why isn't a feature made to boost engagement actually boosting engagement?",
    questions: [
      "Do users even know QuickPoints exists?",
      "Do they understand what it rewards, and how points are earned?",
      "Does it actually change how much they watch?"
    ],
    approach: "I did nine interviews — some with users who had already earned a good number of points, and some with brand-new users. This helped me tell apart \"people don't know about it\" from \"people don't want it.\"",
    participants: "Users who already had a lot of points, and users who had just joined the app.",
    findings: [
      "Almost nobody in either group could clearly explain how QuickPoints worked — even people who had already earned real points from it.",
      "Most users closed or ignored the points pop-up the moment they saw it. It just wasn't grabbing their attention.",
      "Unrelated billing and subscription worries elsewhere in the app were taking up the attention that this reward feature needed."
    ],
    insight: "This was not a problem with the reward being weak. It was a problem of people not noticing or understanding the feature. Users weren't saying no to QuickPoints — most of them never really saw it properly in the first place.",
    implications: "I suggested changing the goal from \"make the reward bigger\" to \"make the feature clear and easy to understand in the first few seconds\" — including simple explanations in regional languages.",
    impact: "This changed how the product team prioritised fixes — moving focus away from the reward amount and toward making the feature easier to notice and understand.",
    reflection: "A small, quick study like this is a good reminder: low usage numbers alone don't tell you why. Sometimes the real answer, once you ask, is simple: nobody noticed it."
  }
];

const grid = document.getElementById('workGrid');
CASES.forEach((c, i) => {
  const row = document.createElement('button');
  row.className = 'work-row';
  row.setAttribute('data-id', c.id);
  row.innerHTML = `
    <span class="row-idx">0${i+1}</span>
    <div class="row-main">
      <span class="row-domain">${c.domain}</span>
      <h3>${c.title}</h3>
      <div class="row-tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
    <span class="row-arrow">↗</span>
  `;
  row.addEventListener('click', () => openCase(c.id));
  grid.appendChild(row);
});

const overlay = document.getElementById('caseOverlay');
const caseBody = document.getElementById('caseBody');
const backBtn = document.getElementById('backBtn');

function renderCase(c){
  const idx = CASES.findIndex(x => x.id === c.id);
  const prev = CASES[(idx - 1 + CASES.length) % CASES.length];
  const next = CASES[(idx + 1) % CASES.length];
  caseBody.innerHTML = `
    <div class="case-domain">${c.domain} · ${c.year}</div>
    <h1>${c.title}</h1>
    <div class="case-meta-row">
      <span class="tag">${c.role}</span>
      <span class="tag">${c.methods}</span>
      ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
    <div class="case-block"><h2>Context</h2><p>${c.context}</p></div>
    <div class="case-block"><h2>Research Problem</h2><p>${c.problem}</p></div>
    <div class="case-block"><h2>Research Questions</h2><ul>${c.questions.map(q => `<li>${q}</li>`).join('')}</ul></div>
    <div class="case-block"><h2>Research Approach</h2><p>${c.approach}</p></div>
    <div class="case-block"><h2>Participants</h2><p>${c.participants}</p></div>
    <div class="case-block"><h2>Key Findings</h2><ul>${c.findings.map(f => `<li>${f}</li>`).join('')}</ul></div>
    <div class="case-block"><h2>Insight</h2><p>${c.insight}</p></div>
    <div class="case-block"><h2>Product Implications</h2><p>${c.implications}</p></div>
    <div class="case-block"><h2>Impact</h2><div class="impact-box"><p style="margin:0;">${c.impact}</p></div></div>
    <div class="case-block"><h2>Reflection</h2><p>${c.reflection}</p></div>
    <div class="case-nav-footer">
      <a href="#" data-nav="${prev.id}">← ${prev.title}</a>
      <a href="#" data-nav="${next.id}">${next.title} →</a>
    </div>
  `;
  caseBody.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', (e) => { e.preventDefault(); openCase(el.getAttribute('data-nav')); });
  });
}

function openCase(id){
  const c = CASES.find(x => x.id === id);
  if(!c) return;
  renderCase(c);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
}
function closeCase(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
backBtn.addEventListener('click', closeCase);
window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && overlay.classList.contains('open')) closeCase();
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const revealEls = document.querySelectorAll('[data-reveal]');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
}, {threshold:0.12});
revealEls.forEach(el => revealObs.observe(el));

const tItems = document.querySelectorAll('.t-item');
const tObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('is-active'); });
}, {threshold:0.5});
tItems.forEach(el => tObs.observe(el));

const glow = document.getElementById('cursorGlow');
let hasFinePointer = window.matchMedia('(pointer: fine)').matches;
if(hasFinePointer){
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}