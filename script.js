
const welcome = document.getElementById('welcome');
const unlockForm = document.getElementById('unlock-form');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

const movie = document.getElementById('movie');
const memoryCount = document.getElementById('memory-count');
const memoryMedia = document.getElementById('memory-media');
const memoryCaption = document.getElementById('memory-caption');
const memoryNote = document.getElementById('memory-note');
const prevButton = document.getElementById('prev-memory');
const nextButton = document.getElementById('next-memory');

const music = document.getElementById('background-music');
const letterSection = document.getElementById('letter-section');
const letterContent = document.getElementById('letter-content');
const ending = document.getElementById('ending');
const openEnding = document.getElementById('open-ending');
const heartButton = document.getElementById('heart-button');
const heartMessage = document.getElementById('heart-message');

// Temporary password. We'll replace this with your special date later.
const correctPassword = 'PREKCHHA';

// Every caption is written especially around the memories you described.
const memories = [
  {
    type: 'photo',
    file: '2.jpeg',
    title: 'The beginning of us ♡',
    caption: 'Hamari first GD wali memories!',
    note: 'Yaad hai, kitni photos li thi humne? Mujhe achha lagta tha dekhna ki kitne log tujhse baat karte the aur tere kitne friends the. Tab mujhe nahi pata tha ki tu meri life ka itna important part ban jayegi.'
  },
  {
    type: 'video',
    file: '3.mp4',
    title: 'First-year wali pagalpan',
    caption: 'Camera on, duniya off. 🤭',
    note: 'First year mein ek doosre ki recordings banana, bina kisi reason ke hasna aur random moments ko memories bana lena. I wish hum kabhi-kabhi un days mein wapas jaa paate.'
  },
  {
    type: 'photo',
    file: '6.jpeg',
    title: 'My favourite picture of us',
    caption: 'Tu meri best pictures leti hai, yaar. 🥹',
    note: 'Meri favourite photos mein se ek. Tu pata nahi kaise meri pictures mein woh side capture kar leti hai jo mujhe khud bhi nahi dikhti. Maybe isliye kyunki tu mujhe itne pyaar se dekhti hai.'
  },
  {
    type: 'video',
    file: '1.mp4',
    title: 'The hair-volume mission',
    caption: 'Bhoomika aur main, teri hairstylists. 😭',
    note: 'Tere baalon ko volumize karte hue jo moments the na, woh kitne cute the. Humari dosti ki beauty hi yahi hai — kuch extraordinary karna zaroori nahi, tere saath normal moments bhi special ban jaate hain.'
  },
  {
    type: 'photo',
    file: '4.jpeg',
    title: 'Mummy likes you too ♡',
    caption: 'Ghar walon ki favourite bhi tu hi.',
    note: 'Mummy tujhe kitna pasand karti hain. Mujhe bolti hain ki tujhse ladai mat kiya kar, achhi ladki hai. Aur honestly, unki baat sunke mujhe bhi yaad aata hai ki main kitni lucky hoon jo tu meri life mein hai.'
  },
  {
    type: 'video',
    file: '7.mp4',
    title: 'Home away from home',
    caption: 'Jab main sick thi aur tune mere socks pehnaye. 🤍',
    note: 'Mere haath mein cannula tha aur tu mere socks pehna rahi thi. Shayad tere liye woh ek chhota sa moment tha, but mere liye nahi. Main jab bhi sick hoti hoon ya life mein kuch hota hai, mujhe tere paas bhaagne ka mann karta hai. Tu mere liye ghar jaisi hai.'
  },
  {
    type: 'photo',
    file: '1.jpeg',
    title: 'My birthday girl memory',
    caption: 'Mere birthday ki ek favourite yaad. 🎂',
    note: 'Mere birthday par teri yeh picture mere liye special hai. Celebrations achhe hote hain, but unmein apne favourite log hon toh woh moments aur bhi zyada precious ban jaate hain.'
  },
  {
    type: 'video',
    file: '5.mp4',
    title: 'Our endless conversations',
    caption: 'Problems ho ya random bakwaas, tu hai toh baat hai. ♡',
    note: 'Hum jab bhi kisi problem mein hote hain, ek doosre se baat kar lete hain. Tujhse main woh sab bol sakti hoon jo shayad kisi aur ko nahi bol paati. Tere saath ghanton baat kar sakti hoon aur phir bhi lagega ki aur bolna hai.'
  },
  {
    type: 'photo',
    file: '3.jpeg',
    title: 'First-year fit checks',
    caption: 'Outfits bhi, confidence bhi, memories bhi. ✨',
    note: 'First year ke fit checks! Kitni saari chhoti-chhoti cheezein hain jo shayad us waqt normal lagti thi, but aaj unhe yaad karke smile aa jaati hai. I am so glad ki in moments mein tu mere saath thi.'
  },
  {
    type: 'video',
    file: '8.mp4',
    title: 'Your first metro adventure',
    caption: 'Escalator vs. Preksha. 😂',
    note: 'Jab main tujhe pehli baar metro station le gayi thi aur tu escalator use nahi kar paa rahi thi! Main jab bhi is memory ke baare mein sochti hoon, mujhe hasi aa jaati hai. Tere saath firsts bhi unforgettable ho jaate hain.'
  },
  {
    type: 'photo',
    file: '7.jpeg',
    title: 'How are you this pretty?',
    caption: 'Beauty dekh ke kabhi-kabhi system hi hang ho jaata hai. 😭',
    note: 'Teri beauty ko appreciate karna mera full-time kaam hai, apparently. Kabhi-kabhi toh mazaak mein lagta hai tere liye gender bhi change kar loon. Tu bas itni hi pretty rehna, okay? 🤭'
  },
  {
    type: 'video',
    file: '2.mp4',
    title: 'My favourite birthday video',
    caption: 'A moment I wish I could save forever. ♡',
    note: 'Yeh meri favourite videos mein se ek hai. Kuch videos bas videos nahi hote — unmein ek feeling hoti hai, ek din hota hai, aur woh log hote hain jinhe hum baar-baar apni life mein choose karte.'
  },
  {
    type: 'photo',
    file: '5.jpeg',
    title: 'Our Dandiya-night photoshoot',
    caption: 'Finally, our planned pictures! ✨',
    note: 'Dandiya night par saath mein photoshoot plan karna kitna special tha. Mujhe achha lagta hai jab hum kisi chhoti si cheez ko bhi plan karke apni memory bana lete hain. More pictures, more nights, more us.'
  },
  {
    type: 'video',
    file: '4.mp4',
    title: 'My phone is basically your gallery',
    caption: 'Surprise: tere itne saare photos aur videos hain mere paas. 🤭',
    note: 'Jab tu mere phone se apni recordings karti thi, tujhe shayad pata bhi nahi tha ki mere phone mein teri kitni memories collect ho rahi hain. Kabhi-kabhi sabse precious memories hum bina soche bana lete hain.'
  },
  {
    type: 'video',
    file: '9.mp4',
    title: 'One umbrella, two idiots',
    caption: 'Tujhe tease karne ka chance main kaise chhod doon? ☔',
    note: 'Ek umbrella share karna aur mera tujhe pareshan karna — classic us. Main tujhe annoy karti rahungi, tu mujhe daantti rehna. Bas life mein aise chhote moments humesha rehne chahiye.'
  },
  {
    type: 'video',
    file: '6.mp4',
    title: 'Your little world in my room',
    caption: 'First-year room memories. ♡',
    note: 'Mere room mein tere saath bitaye hue woh random moments. Koi grand plan nahi, koi special occasion nahi — bas tu thi, main thi aur apni chhoti si duniya thi. Kabhi-kabhi wahi moments sabse zyada miss hote hain.'
  }
];

let currentMemory = 0;

function showMemory(index) {
  currentMemory = (index + memories.length) % memories.length;
  const memory = memories[currentMemory];

  memoryCount.textContent =
    `MEMORY ${currentMemory + 1} OF ${memories.length}`;

  memoryMedia.replaceChildren();

  const media = document.createElement(
    memory.type === 'video' ? 'video' : 'img'
  );

  media.className = 'memory-asset';
  media.src = `public/memories/${memory.file}`;

  if (memory.type === 'video') {
    media.controls = true;
    media.playsInline = true;
    media.preload = 'metadata';

    
    // Keep the background song playing while videos play.
    media.addEventListener('play', resumeMusic);

  } else {
    media.alt = memory.title;
    media.loading = 'eager';
  }

  media.addEventListener('error', () => {
    const error = document.createElement('p');
    error.className = 'media-error';
    error.textContent =
      `Could not load ${memory.file}. Please check its name in public/memories.`;
    memoryMedia.replaceChildren(error);
  });

  memoryMedia.appendChild(media);
  memoryCaption.textContent = memory.title;
  memoryNote.textContent = memory.caption + '\n' + memory.note;

  prevButton.disabled = false;
  nextButton.textContent =
    currentMemory === memories.length - 1
      ? 'Read my letter ♡ →'
      : 'Next memory ♡ →';
}

function resumeMusic() {
  if (!music.paused) return;
  music.play().catch(() => {
    // The visitor can start the music with the browser's audio controls.
  });
}

unlockForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (passwordInput.value.trim().toUpperCase() !== correctPassword) {
    message.textContent =
      'Almost, my little heart… try our special date ♡';
    message.style.color = '#a45474';
    return;
  }

  message.textContent = 'Opening our little world… ♡';
  welcome.classList.add('hidden');
  movie.classList.remove('hidden');

  showMemory(0);

  // Audio starts after the visitor submits the form.
  try {
    await music.play();
  } catch {
    music.controls = true;
    music.setAttribute('aria-label', 'Play our background song');
  }

  movie.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

prevButton.addEventListener('click', () => {
  showMemory(currentMemory - 1);
});

nextButton.addEventListener('click', () => {
  if (currentMemory < memories.length - 1) {
    showMemory(currentMemory + 1);
  } else {
    letterSection.classList.remove('hidden');
    letterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

const letterParagraphs = [
  'Preksha, mujhe nahi pata main tujhe kaise samjhaun ki tu meri life mein kitni important hai. College life tere bina imagine karna bhi ajeeb lagta hai. Jab tu aas-paas nahi hoti na, I genuinely miss you. Kabhi-kabhi koi chhoti si baat hoti hai aur sabse pehle mann karta hai tujhe bataun.',
  'Tu mere liye sirf best friend nahi hai. Tu woh person hai jiske saamne main apni saari bakwaas kar sakti hoon, apni problems share kar sakti hoon aur bina soche apna real self ban sakti hoon. Tu mera safe place hai, mera home away from home.',
  'Mujhe pata hai main kabhi-kabhi tujhe bahut annoy karti hoon, tease karti hoon aur shayad unnecessary tang bhi karti hoon. But ek baat yaad rakhna: main tujhe jaan-bujhkar kabhi hurt nahi karna chahti. Agar kabhi meri kisi baat se tujhe bura lage, I hope hum baat karke sab theek kar sakein. Teri feelings mere liye matter karti hain.',
  'Mujhe humari silly memories, random conversations, photos, videos, room wali bakwaas, tera meri pictures lena aur woh moments sab yaad rahenge jahan kuch special ho hi nahi raha tha — phir bhi sab special tha, because it was with you.',
  'Life aage badhegi, college khatam hoga, routines change honge aur hum dono busy bhi ho sakte hain. But main chahti hoon ki tu kabhi doubt na kare ki tu mere liye kitni precious hai. Distance ho ya badalte schedules, I will always be rooting for you.',
  'Thank you meri life mein aane ke liye. Thank you meri care karne ke liye, meri baatein sunne ke liye aur mujhe woh feeling dene ke liye ki mere paas koi apna hai. Main promise nahi kar sakti ki main hamesha perfect rahungi, but I will always try to be a friend who loves you, respects you and shows up for you.',
  'I love you so much, meri little heart. Tu meri life ka woh part hai jise main kabhi ordinary nahi samajhungi. Aur agar kabhi tu bhool jaaye ki tu kitni loved hai, toh yeh chhoti si movie dobara dekh lena. Har memory mein ek hi baat chhupi hai: I am so, so lucky to have you. ♡'
];

letterParagraphs.forEach((paragraph) => {
  const p = document.createElement('p');
  p.textContent = paragraph;
  letterContent.appendChild(p);
});

openEnding.addEventListener('click', () => {
  ending.classList.remove('hidden');
  ending.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

heartButton.addEventListener('click', () => {
  heartMessage.classList.remove('hidden');
  heartButton.textContent = '♥';
  heartButton.setAttribute('aria-expanded', 'true');
  heartMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
