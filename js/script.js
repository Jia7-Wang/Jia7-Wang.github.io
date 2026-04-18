function renderResearchGrid(researchData) {
  const grid = document.getElementById('researchGrid');
  grid.innerHTML = '';
  researchData.forEach(item => {
    const tagsHtml = item.tags.map(tag => `<span class="research-tag">${tag}</span>`).join('');
    grid.innerHTML += `
      <div class="research-card">
        <div class="research-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="research-list-inline">${tagsHtml}</div>
      </div>
    `;
  });
}

function renderTeacherGrid(teacherData) {
  const grid = document.getElementById('teacherGrid');
  grid.innerHTML = '';
  teacherData.forEach(item => {
    grid.innerHTML += `
      <div class="team-card-teacher">
        <div class="team-avatar-teacher">${item.avatar}</div>
        <div class="team-info-teacher">
          <h4>${item.name}</h4>
          <p class="role">${item.role}</p>
          <p class="desc">${item.desc}</p>
          <p class="email">📧 ${item.email}</p>
        </div>
      </div>
    `;
  });
}

function renderStudentGrid(studentData) {
  const grid = document.getElementById('studentGrid');
  grid.innerHTML = '';
  studentData.forEach(item => {
    grid.innerHTML += `
      <div class="team-card">
        <div class="team-avatar">${item.avatar}</div>
        <div class="team-info">
          <h4>${item.name}</h4>
          <p class="role">${item.role}</p>
          <p class="desc">${item.desc}</p>
          <p class="email">📧 ${item.email}</p>
        </div>
      </div>
    `;
  });
}

function renderUndergradGrid(undergradData) {
  const grid = document.getElementById('undergradGrid');
  grid.innerHTML = '';
  undergradData.forEach(item => {
    grid.innerHTML += `
      <div class="team-card">
        <div class="team-avatar">${item.avatar}</div>
        <div class="team-info">
          <h4>${item.name}</h4>
          <p class="role">${item.role}</p>
          <p class="desc">${item.desc}</p>
          <p class="email">📧 ${item.email}</p>
        </div>
      </div>
    `;
  });
}

function renderPaperList(paperData) {
  const list = document.getElementById('paperList');
  list.innerHTML = '';
  paperData.forEach(item => {
    const badgesHtml = item.badges.map(badge =>
      `<span class="paper-badge ${badge.highlight ? 'highlight' : ''}">${badge.text}</span>`
    ).join('');
    list.innerHTML += `
      <div class="paper-item">
        <div class="paper-year">
          <div class="year">${item.year}</div>
          <div class="venue">${item.venue}</div>
        </div>
        <div class="paper-content">
          <h4>${item.title}</h4>
          <p class="authors">${item.authors}</p>
          <div class="paper-meta">${badgesHtml}</div>
        </div>
      </div>
    `;
  });
}

function renderCompetitionGrid(competitionData) {
  const grid = document.getElementById('competitionGrid');
  grid.innerHTML = '';
  competitionData.forEach(item => {
    const medalIcon = item.type === 'gold' ? '🏆' : item.type === 'silver' ? '🥈' : '🥉';
    grid.innerHTML += `
      <div class="competition-card ${item.type}">
        <div class="medal">${medalIcon}</div>
        <h4>${item.title}</h4>
        <p class="award-level">${item.award}</p>
        <p class="competition-desc">${item.desc}</p>
      </div>
    `;
  });
}

function renderDemoGrid(demoData) {
  const grid = document.getElementById('demoGrid');
  grid.innerHTML = '';
  demoData.forEach(item => {
    grid.innerHTML += `
      <div class="demo-card">
        <div class="demo-preview">
          <div class="play-btn"></div>
        </div>
        <div class="demo-info">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <span class="demo-tag">${item.tag}</span>
        </div>
      </div>
    `;
  });
}

function renderContactGrid(contactData) {
  const grid = document.getElementById('contactGrid');
  grid.innerHTML = '';
  contactData.forEach(item => {
    grid.innerHTML += `
      <div class="contact-card">
        <div class="contact-icon">${item.icon}</div>
        <h4>${item.title}</h4>
        <p>${item.content}</p>
      </div>
    `;
  });
}

function renderFooterLinks(footerLinkData) {
  const links = document.getElementById('footerLinks');
  links.innerHTML = '';
  footerLinkData.forEach(item => {
    links.innerHTML += `<a href="${item.href}">${item.text}</a>`;
  });
}

window.switchTab = function(tabId) {
  document.querySelectorAll('.achievement-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
};

window.toggleMobileMenu = function() {
  const menu = document.getElementById('navMobile');
  menu.classList.toggle('open');
};

window.closeMobileMenu = function() {
  document.getElementById('navMobile').classList.remove('open');
};

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

window.onload = function () {
  Promise.all([
    fetch('data/research.json').then(r => r.json()),
    fetch('data/teachers.json').then(r => r.json()),
    fetch('data/students.json').then(r => r.json()),
    fetch('data/undergrads.json').then(r => r.json()),
    fetch('data/papers.json').then(r => r.json()),
    fetch('data/competitions.json').then(r => r.json()),
    fetch('data/demos.json').then(r => r.json()),
    fetch('data/contact.json').then(r => r.json()),
    fetch('data/footer-links.json').then(r => r.json()),
  ]).then(([research, teachers, students, undergrads, papers, competitions, demos, contact, footerLinks]) => {
    renderResearchGrid(research);
    renderTeacherGrid(teachers);
    renderStudentGrid(students);
    renderUndergradGrid(undergrads);
    renderPaperList(papers);
    renderCompetitionGrid(competitions);
    renderDemoGrid(demos);
    renderContactGrid(contact);
    renderFooterLinks(footerLinks);
  });
};
