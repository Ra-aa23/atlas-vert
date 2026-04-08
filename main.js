/* ===== ATLAS VERT — main.js ===== */

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  fr: {
    dir: 'ltr',
    nav: { home: 'Accueil', activities: 'Activités', booking: 'Réservation', contact: 'Contact' },
    hero: {
      badge: 'Tourisme Nature & Montagne — Maroc',
      title: 'Explorez l\'Atlas,<br><em>Vivez l\'Essentiel</em>',
      sub: 'Randonnées, rafting, camping sous les étoiles — des aventures authentiques au cœur des montagnes marocaines à 1 868 m d\'altitude.',
      btn1: 'Réserver une activité',
      btn2: 'Découvrir'
    },
    stats: { s1: 'Altitude', s2: 'Activités', s3: 'Aventuriers', s4: 'Note moyenne' },
    acts: {
      mini: 'NOS ACTIVITÉS',
      title: 'Nos <em>Aventures</em>',
      items: [
        { name: 'Rafting', cat: 'Aventure Aquatique', price: '400 DH', unit: '/pers.', desc: 'Descendez l\'Oued Ahansal sur 12 km de rapides sauvages.', badge: 'Populaire', badgeClass: 'gold', feats: ['2-3h', '12 km', 'Facile'], btn: 'Détails & Réservation' },
        { name: 'Camping', cat: 'Séjour Nature', price: '60 DH', unit: '/nuit', desc: 'Tentes traditionnelles sous les étoiles au pied des montagnes.', feats: ['1 nuit+', 'Feu de camp', 'Repas inclus'], btn: 'Détails & Réservation' },
        { name: 'Randonnée', cat: 'Montagne', price: '300 DH', unit: '/groupe', desc: 'Atteignez le sommet à 1 868m et découvrez les cascades cachées.', badge: 'Nouveau', badgeClass: 'green', feats: ['3-10h', '668m dénivelé', 'Sommet'], btn: 'Détails & Réservation' },
        { name: 'VTT', cat: 'Cyclisme', price: '150 DH', unit: '/jour', desc: 'Parcourez 25 km de pistes dans l\'Atlas avec un guide local.', feats: ['5-6h', '25 km', 'Casque inclus'], btn: 'Détails & Réservation' },
        { name: 'Quad', cat: 'Aventure', price: '250 DH', unit: '/h', desc: 'Conduisez librement sur les pistes accidentées de l\'Atlas.', badge: 'Hot', badgeClass: 'red', feats: ['Solo / Biplace', 'Casque fourni', 'Liberté totale'], btn: 'Détails & Réservation' },
        { name: 'Hébergement', cat: 'Séjour', price: '400 DH', unit: '/nuit', desc: 'Maison meublée traditionnelle avec douche, cuisine et vue montagne.', feats: ['Douche', 'Cuisine', 'Vue Atlas'], btn: 'Détails & Réservation' }
      ]
    },
    why: {
      mini: 'POURQUOI NOUS CHOISIR',
      title: 'Pourquoi <em>Atlas Vert</em> ?',
      items: [
        { icon: '🗺', title: 'Guides Locaux', desc: 'Des experts qui connaissent chaque sentier, chaque cascade et chaque secret de l\'Atlas.' },
        { icon: '🛡', title: 'Sécurité Totale', desc: 'Équipement certifié, guides diplômés et protocoles de sécurité rigoureux pour toutes les activités.' },
        { icon: '🌿', title: 'Authenticité', desc: 'Découvrez la vraie culture amazighe, la cuisine locale et la nature préservée du Maroc profond.' }
      ]
    },
    testi: {
      mini: 'TÉMOIGNAGES',
      title: 'Ils ont <em>vécu l\'aventure</em>',
      items: [
        { stars: 5, text: '"تجربة الرافتينج على وادي أحنصال كانت مذهلة! المرشدون يعرفون المنطقة بشكل مثالي."', author: 'محمد العمراني', city: 'مراكش', tag: 'Rafting' },
        { stars: 5, text: '"التخييم تحت النجوم، الاستقبال الحار، لحظات لا تُنسى في قلب جبال الأطلس."', author: 'فاطمة الزهراء', city: 'فاس', tag: 'Camping' },
        { stars: 5, text: '"الصعود إلى قمة 1868م كان تحدياً رائعاً. المناظر الطبيعية خيالية!"', author: 'يوسف بنعلي', city: 'الدار البيضاء', tag: 'Randonnée' }
      ]
    },
    cta: {
      title: 'Prêt pour votre prochaine aventure ?',
      sub: 'Réservez maintenant et découvrez la magie des montagnes de l\'Atlas marocain',
      wa: 'Réserver via WhatsApp',
      book: 'Réservation en ligne'
    },
    footer: {
      desc: 'Découvrez la magie des montagnes de l\'Atlas à travers des aventures authentiques à 1 868m d\'altitude au Maroc.',
      links: 'Liens rapides',
      info: 'Informations',
      contact: 'Contact',
      copy: '© 2026 Atlas Vert — المغرب. Tous droits réservés.',
      linkItems: ['Accueil', 'Rafting', 'Camping', 'Randonnée', 'VTT', 'Quad'],
      infoItems: ['Réservation', 'Contact', 'Blog', 'Guide'],
      phone: '+212 635-491573',
      location: 'Maroc'
    },
    booking: {
      title: 'Réserver votre Aventure',
      sub: 'Remplissez le formulaire — nous vous confirmons sous 24h',
      selectAct: 'Choisissez votre activité',
      pills: ['🚣 Rafting', '⛺ Camping', '🥾 Randonnée', '🚵 VTT', '🏍 Quad', '🏠 Hébergement'],
      name: 'Nom complet', phone: 'Téléphone / WhatsApp',
      date: 'Date souhaitée', persons: 'Nombre de personnes',
      msg: 'Message (optionnel)',
      namePh: 'Votre nom complet', phonePh: '+212...',
      msgPh: 'Questions ou demandes spéciales...',
      activity: 'Activité', personsLabel: 'Personnes', total: 'Total estimé',
      submit: 'Confirmer la réservation',
      waSubmit: 'Réserver via WhatsApp',
      successTitle: 'Réservation envoyée !',
      successMsg: 'Nous vous contactons dans les 24 heures. Merci de votre confiance — Atlas Vert 🌿'
    }
  },
  en: {
    dir: 'ltr',
    nav: { home: 'Home', activities: 'Activities', booking: 'Booking', contact: 'Contact' },
    hero: {
      badge: 'Nature & Mountain Tourism — Morocco',
      title: 'Explore the Atlas,<br><em>Live the Essentials</em>',
      sub: 'Hiking, rafting, camping under the stars — authentic adventures in the heart of the Moroccan mountains at 1,868 m altitude.',
      btn1: 'Book an activity',
      btn2: 'Discover'
    },
    stats: { s1: 'Altitude', s2: 'Activities', s3: 'Adventurers', s4: 'Average rating' },
    acts: {
      mini: 'OUR ACTIVITIES',
      title: 'Our <em>Adventures</em>',
      items: [
        { name: 'Rafting', cat: 'Water Adventure', price: '400 DH', unit: '/person', desc: 'Descend 12 km of wild Oued Ahansal rapids through stunning gorges.', badge: 'Popular', badgeClass: 'gold', feats: ['2-3h', '12 km', 'Easy'], btn: 'Details & Booking' },
        { name: 'Camping', cat: 'Nature Stay', price: '60 DH', unit: '/night', desc: 'Traditional tents under the stars at the foot of the Atlas mountains.', feats: ['1 night+', 'Campfire', 'Meals included'], btn: 'Details & Booking' },
        { name: 'Hiking', cat: 'Mountain', price: '300 DH', unit: '/group', desc: 'Reach the summit at 1,868m and discover hidden waterfalls.', badge: 'New', badgeClass: 'green', feats: ['3-10h', '668m ascent', 'Summit'], btn: 'Details & Booking' },
        { name: 'MTB', cat: 'Cycling', price: '150 DH', unit: '/day', desc: 'Ride 25 km of Atlas trails with a certified local guide.', feats: ['5-6h', '25 km', 'Helmet included'], btn: 'Details & Booking' },
        { name: 'Quad', cat: 'Adventure', price: '250 DH', unit: '/h', desc: 'Drive freely on the rugged Atlas mountain tracks.', badge: 'Hot', badgeClass: 'red', feats: ['Solo / Tandem', 'Helmet provided', 'Full freedom'], btn: 'Details & Booking' },
        { name: 'Accommodation', cat: 'Stay', price: '400 DH', unit: '/night', desc: 'Traditional furnished house with shower, kitchen and mountain view.', feats: ['Shower', 'Kitchen', 'Atlas view'], btn: 'Details & Booking' }
      ]
    },
    why: {
      mini: 'WHY CHOOSE US',
      title: 'Why <em>Atlas Vert</em>?',
      items: [
        { icon: '🗺', title: 'Local Guides', desc: 'Experts who know every trail, waterfall and secret of the Atlas mountains.' },
        { icon: '🛡', title: 'Full Safety', desc: 'Certified equipment, trained guides and rigorous safety protocols for all activities.' },
        { icon: '🌿', title: 'Authenticity', desc: 'Discover real Amazigh culture, local cuisine and preserved nature of deep Morocco.' }
      ]
    },
    testi: {
      mini: 'TESTIMONIALS',
      title: 'They <em>lived the adventure</em>',
      items: [
        { stars: 5, text: '"تجربة الرافتينج على وادي أحنصال كانت مذهلة! المرشدون يعرفون المنطقة بشكل مثالي."', author: 'محمد العمراني', city: 'مراكش', tag: 'Rafting' },
        { stars: 5, text: '"التخييم تحت النجوم، الاستقبال الحار، لحظات لا تُنسى في قلب جبال الأطلس."', author: 'فاطمة الزهراء', city: 'فاس', tag: 'Camping' },
        { stars: 5, text: '"الصعود إلى قمة 1868م كان تحدياً رائعاً. المناظر الطبيعية خيالية!"', author: 'يوسف بنعلي', city: 'الدار البيضاء', tag: 'Hiking' }
      ]
    },
    cta: {
      title: 'Ready for your next adventure?',
      sub: 'Book now and discover the magic of the Moroccan Atlas mountains',
      wa: 'Book via WhatsApp',
      book: 'Book online'
    },
    footer: {
      desc: 'Discover the magic of the Atlas mountains through authentic adventures at 1,868m altitude in Morocco.',
      links: 'Quick links',
      info: 'Information',
      contact: 'Contact',
      copy: '© 2026 Atlas Vert — Morocco. All rights reserved.',
      linkItems: ['Home', 'Rafting', 'Camping', 'Hiking', 'MTB', 'Quad'],
      infoItems: ['Booking', 'Contact', 'Blog', 'Guide'],
      phone: '+212 635-491573',
      location: 'Morocco'
    },
    booking: {
      title: 'Book your Adventure',
      sub: 'Fill in the form — we confirm within 24 hours',
      selectAct: 'Choose your activity',
      pills: ['🚣 Rafting', '⛺ Camping', '🥾 Hiking', '🚵 MTB', '🏍 Quad', '🏠 Accommodation'],
      name: 'Full name', phone: 'Phone / WhatsApp',
      date: 'Preferred date', persons: 'Number of people',
      msg: 'Message (optional)',
      namePh: 'Your full name', phonePh: '+212...',
      msgPh: 'Questions or special requests...',
      activity: 'Activity', personsLabel: 'People', total: 'Estimated total',
      submit: 'Confirm booking',
      waSubmit: 'Book via WhatsApp',
      successTitle: 'Booking sent!',
      successMsg: 'We will contact you within 24 hours. Thank you for your trust — Atlas Vert 🌿'
    }
  },
  ar: {
    dir: 'rtl',
    nav: { home: 'الرئيسية', activities: 'الأنشطة', booking: 'الحجز', contact: 'اتصل بنا' },
    hero: {
      badge: 'سياحة الطبيعة والجبال — المغرب',
      title: 'اكتشف جبال الأطلس،<br><em>عش الأصالة</em>',
      sub: 'رحلات المشي والرافتينج والتخييم تحت النجوم — مغامرات أصيلة في قلب جبال المغرب على ارتفاع 1868 متراً.',
      btn1: 'احجز نشاطاً',
      btn2: 'اكتشف'
    },
    stats: { s1: 'الارتفاع', s2: 'الأنشطة', s3: 'مغامر', s4: 'متوسط التقييم' },
    acts: {
      mini: 'أنشطتنا',
      title: 'مغامراتنا <em>الحصرية</em>',
      items: [
        { name: 'الرافتينج', cat: 'مغامرة مائية', price: '400 درهم', unit: '/شخص', desc: 'انزلق على أمواج وادي أحنصال لمسافة 12 كم من الطبيعة البكر.', badge: 'الأكثر طلباً', badgeClass: 'gold', feats: ['2-3 ساعات', '12 كم', 'سهل'], btn: 'تفاصيل وحجز' },
        { name: 'التخييم', cat: 'إقامة طبيعية', price: '60 درهم', unit: '/ليلة', desc: 'خيام تقليدية تحت النجوم في قلب جبال الأطلس المغربية.', feats: ['ليلة+', 'نار المخيم', 'وجبات مشمولة'], btn: 'تفاصيل وحجز' },
        { name: 'المشي الجبلي', cat: 'جبال', price: '300 درهم', unit: '/مجموعة', desc: 'ارتقِ قمة 1868م واكتشف الشلالات المخفية في الأطلس.', badge: 'جديد', badgeClass: 'green', feats: ['3-10 ساعات', '668م تسلق', 'القمة'], btn: 'تفاصيل وحجز' },
        { name: 'الدراجة الجبلية', cat: 'ركوب الدراجات', price: '150 درهم', unit: '/يوم', desc: 'اجتز 25 كم من مسالك الأطلس مع مرشد محلي معتمد.', feats: ['5-6 ساعات', '25 كم', 'خوذة مشمولة'], btn: 'تفاصيل وحجز' },
        { name: 'الكواد', cat: 'مغامرة', price: '250 درهم', unit: '/ساعة', desc: 'قُد بحرية على المسالك الوعرة في جبال الأطلس المغربية.', badge: 'رائج', badgeClass: 'red', feats: ['منفرد / ثنائي', 'خوذة مُوفَّرة', 'حرية كاملة'], btn: 'تفاصيل وحجز' },
        { name: 'الإقامة', cat: 'سكن', price: '400 درهم', unit: '/ليلة', desc: 'منزل تقليدي مفروش بدوش ومطبخ وإطلالة على الجبال.', feats: ['دوش', 'مطبخ', 'إطلالة الأطلس'], btn: 'تفاصيل وحجز' }
      ]
    },
    why: {
      mini: 'لماذا تختارنا',
      title: 'لماذا <em>Atlas Vert</em>؟',
      items: [
        { icon: '🗺', title: 'مرشدون محليون', desc: 'خبراء يعرفون كل مسار وشلال وسر في جبال الأطلس المغربية.' },
        { icon: '🛡', title: 'سلامة تامة', desc: 'معدات معتمدة ومرشدون مدرَّبون وبروتوكولات أمان صارمة لجميع الأنشطة.' },
        { icon: '🌿', title: 'الأصالة', desc: 'اكتشف الثقافة الأمازيغية الحقيقية والمطبخ المحلي وطبيعة المغرب العميق.' }
      ]
    },
    testi: {
      mini: 'آراء الزوار',
      title: 'عاشوا <em>المغامرة</em>',
      items: [
        { stars: 5, text: '"تجربة الرافتينج على وادي أحنصال كانت مذهلة! المرشدون يعرفون المنطقة بشكل مثالي."', author: 'محمد العمراني', city: 'مراكش', tag: 'رافتينج' },
        { stars: 5, text: '"التخييم تحت النجوم، الاستقبال الحار، لحظات لا تُنسى في قلب جبال الأطلس."', author: 'فاطمة الزهراء', city: 'فاس', tag: 'تخييم' },
        { stars: 5, text: '"الصعود إلى قمة 1868م كان تحدياً رائعاً. المناظر الطبيعية خيالية!"', author: 'يوسف بنعلي', city: 'الدار البيضاء', tag: 'مشي جبلي' }
      ]
    },
    cta: {
      title: 'مستعد لمغامرتك القادمة؟',
      sub: 'احجز الآن واكتشف سحر جبال الأطلس المغربية الخلابة',
      wa: 'احجز عبر واتساب',
      book: 'احجز عبر الإنترنت'
    },
    footer: {
      desc: 'اكتشف سحر جبال الأطلس من خلال مغامرات أصيلة على ارتفاع 1868 متراً في المغرب.',
      links: 'روابط سريعة',
      info: 'معلومات',
      contact: 'اتصل بنا',
      copy: '© 2026 Atlas Vert — المغرب. جميع الحقوق محفوظة.',
      linkItems: ['الرئيسية', 'الرافتينج', 'التخييم', 'المشي الجبلي', 'الدراجة', 'الكواد'],
      infoItems: ['الحجز', 'اتصل بنا', 'المدونة', 'الدليل'],
      phone: '+212 635 491573',
      location: 'المغرب'
    },
    booking: {
      title: 'احجز مغامرتك',
      sub: 'أكمل النموذج وسنؤكد حجزك خلال 24 ساعة',
      selectAct: 'اختر نشاطك',
      pills: ['🚣 رافتينج', '⛺ تخييم', '🥾 مشي جبلي', '🚵 دراجة جبلية', '🏍 كواد', '🏠 إقامة'],
      name: 'الاسم الكامل', phone: 'الهاتف / واتساب',
      date: 'التاريخ المفضل', persons: 'عدد الأشخاص',
      msg: 'رسالة (اختياري)',
      namePh: 'اسمك الكامل', phonePh: '+212...',
      msgPh: 'أسئلتك أو طلباتك الخاصة...',
      activity: 'النشاط', personsLabel: 'الأشخاص', total: 'المجموع التقديري',
      submit: 'تأكيد الحجز',
      waSubmit: 'احجز عبر واتساب',
      successTitle: 'تم إرسال الحجز!',
      successMsg: 'سنتواصل معك خلال 24 ساعة. شكراً لثقتك — Atlas Vert 🌿'
    }
  }
};

// ===== STATE =====
let currentLang = 'fr';
let selectedActivity = { name: 'Rafting', price: 400 };
const PRICES = [400, 60, 300, 150, 250, 400];
const WA_NUMBER = '212635491573';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderAll('fr');
  setupMenu();
});

// ===== LANGUAGE =====
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  renderAll(lang);
}

function renderAll(lang) {
  const t = TRANSLATIONS[lang];
  document.documentElement.dir = t.dir;
  document.documentElement.lang = lang;
  renderNav(t);
  renderHero(t);
  renderStats(t);
  renderActivities(t);
  renderWhy(t);
  renderTestimonials(t);
  renderCTA(t);
  renderFooter(t);
  renderBooking(t);
}

// ===== NAV =====
function renderNav(t) {
  const el = id => document.getElementById(id);
  if (el('nav-home')) el('nav-home').textContent = t.nav.home;
  if (el('nav-activities')) el('nav-activities').textContent = t.nav.activities;
  if (el('nav-booking')) el('nav-booking').textContent = t.nav.booking;
  if (el('nav-contact')) el('nav-contact').textContent = t.nav.contact;
}

// ===== HERO =====
function renderHero(t) {
  const set = (id, v, html = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    html ? el.innerHTML = v : el.textContent = v;
  };
  set('hero-badge', t.hero.badge);
  set('hero-title', t.hero.title, true);
  set('hero-sub', t.hero.sub);
  set('hero-btn1', t.hero.btn1);
  set('hero-btn2', t.hero.btn2);
}

// ===== STATS =====
function renderStats(t) {
  ['s1','s2','s3','s4'].forEach(k => {
    const el = document.getElementById('stat-' + k);
    if (el) el.textContent = t.stats[k];
  });
}

// ===== ACTIVITIES =====
function renderActivities(t) {
  const grid = document.getElementById('acts-grid');
  if (!grid) return;
  const mini = document.getElementById('acts-mini');
  const title = document.getElementById('acts-title');
  if (mini) mini.textContent = t.acts.mini;
  if (title) title.innerHTML = t.acts.title;

  grid.innerHTML = t.acts.items.map((a, i) => `
    <div class="act-card">
      <div class="act-img c${i+1}">
        <div class="act-img-placeholder">${['🚣','⛺','🥾','🚵','🏍','🏠'][i]}</div>
        ${a.badge ? `<span class="act-badge ${a.badgeClass}">${a.badge}</span>` : ''}
      </div>
      <div class="act-body">
        <div class="act-category">${a.cat}</div>
        <div class="act-name">${a.name}</div>
        <div class="act-price">${a.price} <small>${a.unit}</small></div>
        <div class="act-desc">${a.desc}</div>
        <div class="act-features">
          ${a.feats.map(f => `<span class="act-feat">◆ ${f}</span>`).join('')}
        </div>
        <div class="act-btns">
          <a href="pages/booking.html" class="btn-detail">${a.btn}</a>
          <a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Bonjour, je souhaite réserver: ' + a.name)}" class="btn-wa" target="_blank">💬</a>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== WHY US =====
function renderWhy(t) {
  const mini = document.getElementById('why-mini');
  const title = document.getElementById('why-title');
  const grid = document.getElementById('why-grid');
  if (mini) mini.textContent = t.why.mini;
  if (title) title.innerHTML = t.why.title;
  if (!grid) return;
  grid.innerHTML = t.why.items.map(w => `
    <div class="why-item">
      <div class="why-icon">${w.icon}</div>
      <div class="why-title">${w.title}</div>
      <div class="why-desc">${w.desc}</div>
    </div>
  `).join('');
}

// ===== TESTIMONIALS =====
function renderTestimonials(t) {
  const mini = document.getElementById('testi-mini');
  const title = document.getElementById('testi-title');
  const grid = document.getElementById('testi-grid');
  if (mini) mini.textContent = t.testi.mini;
  if (title) title.innerHTML = t.testi.title;
  if (!grid) return;
  grid.innerHTML = t.testi.items.map(item => `
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(item.stars)}</div>
      <div class="testi-text">${item.text}</div>
      <div class="testi-author">${item.author} • ${item.city}</div>
      <div class="testi-meta">
        <span class="testi-tag">${item.tag}</span>
      </div>
    </div>
  `).join('');
}

// ===== CTA =====
function renderCTA(t) {
  const set = id => v => { const e = document.getElementById(id); if(e) e.textContent = v; };
  set('cta-title')(t.cta.title);
  set('cta-sub')(t.cta.sub);
  set('cta-wa')(t.cta.wa);
  set('cta-book')(t.cta.book);
}

// ===== FOOTER =====
function renderFooter(t) {
  const set = (id, v, html = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    html ? el.innerHTML = v : el.textContent = v;
  };
  set('footer-desc', t.footer.desc);
  set('footer-links-title', t.footer.links);
  set('footer-info-title', t.footer.info);
  set('footer-contact-title', t.footer.contact);
  set('footer-copy', t.footer.copy);
  const linksList = document.getElementById('footer-links-list');
  if (linksList) linksList.innerHTML = t.footer.linkItems.map(l => `<li><a href="#">${l}</a></li>`).join('');
  const infoList = document.getElementById('footer-info-list');
  if (infoList) infoList.innerHTML = t.footer.infoItems.map(l => `<li><a href="#">${l}</a></li>`).join('');
}

// ===== BOOKING =====
function renderBooking(t) {
  const set = (id, v) => { const e = document.getElementById(id); if(e) e.textContent = v; };
  set('bk-title', t.booking.title);
  set('bk-sub', t.booking.sub);
  set('bk-act-label', t.booking.selectAct);
  set('lbl-name', t.booking.name);
  set('lbl-phone', t.booking.phone);
  set('lbl-date', t.booking.date);
  set('lbl-persons', t.booking.persons);
  set('lbl-msg', t.booking.msg);
  set('lbl-activity', t.booking.activity);
  set('lbl-persons2', t.booking.personsLabel);
  set('lbl-total', t.booking.total);
  set('btn-submit', t.booking.submit);
  set('btn-wa-submit', t.booking.waSubmit);
  const inp = id => document.getElementById(id);
  if (inp('inp-name')) inp('inp-name').placeholder = t.booking.namePh;
  if (inp('inp-phone')) inp('inp-phone').placeholder = t.booking.phonePh;
  if (inp('inp-msg')) inp('inp-msg').placeholder = t.booking.msgPh;
  const pillsCont = document.getElementById('bk-pills');
  if (pillsCont) {
    pillsCont.innerHTML = t.booking.pills.map((p, i) => `
      <div class="act-pill ${i===0?'selected':''}" onclick="selectActivity(this, ${PRICES[i]})" data-price="${PRICES[i]}">${p}</div>
    `).join('');
  }
  updatePriceDisplay();
}

// ===== ACTIVITY SELECTION =====
function selectActivity(el, price) {
  document.querySelectorAll('.act-pill').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  selectedActivity.price = price;
  selectedActivity.name = el.textContent.trim();
  const label = document.getElementById('ps-act-name');
  if (label) label.textContent = el.textContent.trim();
  updatePriceDisplay();
}

function updatePriceDisplay() {
  const pers = parseInt(document.getElementById('inp-persons')?.value) || 1;
  const total = selectedActivity.price * pers;
  const el = document.getElementById('ps-total');
  if (el) el.textContent = total.toLocaleString() + ' DH';
  const persEl = document.getElementById('ps-persons');
  if (persEl) persEl.textContent = pers;
}

// ===== BOOKING SUBMIT =====
function submitBooking() {
  const name = document.getElementById('inp-name')?.value.trim();
  if (!name) { document.getElementById('inp-name')?.focus(); return; }
  const box = document.getElementById('success-box');
  const t = TRANSLATIONS[currentLang].booking;
  const titleEl = document.getElementById('success-title');
  const msgEl = document.getElementById('success-msg');
  if (titleEl) titleEl.textContent = t.successTitle;
  if (msgEl) msgEl.textContent = t.successMsg;
  if (box) box.classList.add('show');
  document.getElementById('inp-name').value = '';
  document.getElementById('inp-phone').value = '';
  document.getElementById('inp-msg').value = '';
}

function bookViaWA() {
  const name = document.getElementById('inp-name')?.value.trim() || '';
  const date = document.getElementById('inp-date')?.value || '';
  const persons = document.getElementById('inp-persons')?.value || '1';
  const msg = `Bonjour Atlas Vert, je voudrais réserver:\n- Activité: ${selectedActivity.name}\n- Nom: ${name}\n- Date: ${date}\n- Personnes: ${persons}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== MENU TOGGLE =====
function setupMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
}

// ===== SCROLL: back to top =====
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-top');
  if (btn) btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});
