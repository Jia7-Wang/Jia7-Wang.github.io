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

const DATA = {
  research: [
    { icon: "🌱", title: "农业知识图谱与认知推理", desc: "构建大规模农业领域知识图谱，研究基于神经符号融合的认知推理方法，实现农业专家系统的智能化升级。", tags: ["知识图谱", "神经符号推理", "专家系统"] },
    { icon: "🚁", title: "农业遥感与多模态感知", desc: "研发无人机与卫星遥感智能分析技术，融合视觉、光谱、时序等多模态数据，实现精准农业监测与决策。", tags: ["遥感图像", "多模态融合", "目标检测"] },
    { icon: "🤖", title: "农业机器人自主作业", desc: "开发面向果园、温室、大田场景的农业机器人系统，研究环境感知、路径规划与智能作业控制算法。", tags: ["自主导航", "机械臂控制", "边缘计算"] },
    { icon: "📊", title: "农业大数据智能分析", desc: "构建农业大数据平台，研究时序预测、因果推断与决策优化方法，支撑农业生产全链条智能化管理。", tags: ["时序预测", "因果推断", "决策优化"] },
    { icon: "🧬", title: "作物表型组学与智能育种", desc: "高通量作物表型获取与分析技术，结合基因组数据，加速智能育种进程，提升新品种选育效率。", tags: ["表型分析", "基因型-表型关联", "全基因组选择"] },
    { icon: "🌾", title: "智慧农业系统与平台", desc: "研发集感知、认知、决策、执行于一体的智慧农业操作系统，推动农业数字化转型升级。", tags: ["数字孪生", "边缘云平台", "智能决策"] }
  ],
  teachers: [
    { avatar: "👤", name: "胡志伟 副教授", role: "网络工程系主任，山西省后稷实验室固定成员，中国计算机学会会员，爱丁堡大学、卡迪夫大学访问学者", desc: "研究方向为智能育种、知识表示与推理。以第一作者身份在KDD、IJCAI、EMNLP、 CIKM、Neurocomputing、International Journal of Agricultural and Biological Engineering、Computers and Electronics in Agriculture、农业工程学报等CCF A/B类顶级会议及SCI期刊发表10余篇论文。主导研发了后稷农业大模型、稷丰多模态农业大模型，长期担任国际会议NeurIPS、ACL、KDD、AAAI、IJCAI、EMNLP等审稿人。", email: "<a href=\"mailto:zhiweihu@whu.edu.cn\">zhiweihu@whu.edu.cn</a>"},
  ],
  students: [
    { avatar: "👨‍🎓", name: "杨森杰", role: "硕士生 (2025级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。", email: "zxzhao@agrimind.edu.cn" },
    { avatar: "👨‍🎓", name: "李小宇", role: "硕士生 (2025级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。", email: "zxzhao@agrimind.edu.cn" },
    { avatar: "👨‍🎓", name: "任子奇", role: "硕士生 (2025级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。", email: "zxzhao@agrimind.edu.cn" },
    { avatar: '<img src="img/王家琦.jpg">', name: "王家琦", role: "硕士生 (2026级)", desc: "研究方向：农业知识图谱构建与推理。", email: "hrchen@agrimind.edu.cn" },
    { avatar: "👨‍🎓", name: "李中原", role: "硕士生 (2026级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。", email: "zxzhao@agrimind.edu.cn" },
    { avatar: "👩‍🎓", name: "吕乾甲", role: "硕士生 (2026级)", desc: "研究方向：作物表型高通量分析。开发小麦穗数智能计数系统。", email: "xwsun@agrimind.edu.cn" },
    { avatar: "👩‍🎓", name: "刘丹", role: "硕士生 (2026级)", desc: "研究方向：农业遥感图像智能解译。获CVPR农业遥感挑战赛冠军。", email: "ytliu@agrimind.edu.cn" },
    { avatar: "👨‍🎓", name: "郝志超", role: "硕士生 (2026级)", desc: "研究方向：农业机器人视觉导航。主导开发果园巡检机器人系统。", email: "zxzhao@agrimind.edu.cn" },
  ],
  undergrads: [
      { avatar: "🎓", name: "王景源", role: "大一 / 计算机科学", desc: "参与农业病虫害识别APP开发", email: "kwzhou@agrimind.edu.cn" },
  ],
  papers: [
    { year: "2024", venue: "TKDE", title: "AgriKG: A Large-Scale Knowledge Graph for Smart Agriculture with Multi-Modal Entity Alignment", authors: "Mingyuan Zhang*, Haoran Chen, Sihua Li, et al.", badges: [{ text: "CCF-A", highlight: true }, { text: "知识图谱", highlight: false }, { text: "多模态对齐", highlight: false }] },
    { year: "2024", venue: "CVPR", title: "Panoptic Part Segmentation for Crop Organs via Hierarchical Vision Transformers", authors: "Yutong Liu, Jianguo Wang, Mingyuan Zhang*, et al.", badges: [{ text: "CCF-A", highlight: true }, { text: "计算机视觉", highlight: false }] },
    { year: "2023", venue: "KDD", title: "Causal Inference for Agricultural Yield Prediction with Multi-Source Heterogeneous Data", authors: "Haoran Chen, Mingyuan Zhang, Sihua Li, et al.", badges: [{ text: "CCF-A", highlight: true }, { text: "因果推断", highlight: false }, { text: "产量预测", highlight: false }] }
  ],
  competitions: [
    { type: "gold", title: "CVPR 2024 农业遥感图像解译挑战赛", award: "全国一等奖 (金奖)", desc: "提出分层视觉Transformer架构，在作物器官分割任务中取得精度第一的成绩。" },
    { type: "silver", title: "中国智能农业装备创新大赛", award: "全国二等奖 (银奖)", desc: "研发果园巡检机器人导航系统，获农业农村部颁发的创新奖项。" },
    { type: "bronze", title: "国际大数据竞赛 (农业赛道)", award: "全球三等奖 (铜奖)", desc: "基于多模态数据的小麦产量预测模型，误差率低于5%。" }
  ],
  demos: [
    { title: "农业知识图谱可视化系统", desc: "支持农业实体检索、关系推理、知识问答的一站式可视化平台，覆盖10万+农业实体。", tag: "知识图谱" },
    { title: "作物表型高通量分析工具", desc: "基于计算机视觉的小麦、玉米表型参数自动提取系统，准确率达95%以上。", tag: "计算机视觉" },
    { title: "智慧果园巡检机器人", desc: "集成多传感器的自主导航机器人，实现病虫害识别、果实计数、生长状态监测。", tag: "农业机器人" }
  ],
  contact: [
    { icon: "📍", title: "实验室地址", content: "北京市海淀区中关村南大街5号 农业科技大厦12层" },
    { icon: "👤", title: "联系人", content: "胡志伟 副教授" },
    { icon: "📧", title: "电子邮箱", content: '<a href="mailto:contact@agrimind.edu.cn">contact@agrimind.edu.cn</a>' }
  ],
  footerLinks: [
    { text: "首页", href: "#home" },
    { text: "研究方向", href: "#research" },
    { text: "团队成员", href: "#team" },
    { text: "研究成果", href: "#achievements" },
    { text: "联系方式", href: "#contact" },
    { text: "隐私政策", href: "#privacy" }
  ]
};

window.onload = function () {
  renderResearchGrid(DATA.research);
  renderTeacherGrid(DATA.teachers);
  renderStudentGrid(DATA.students);
  renderUndergradGrid(DATA.undergrads);
  renderPaperList(DATA.papers);
  renderCompetitionGrid(DATA.competitions);
  renderDemoGrid(DATA.demos);
  renderContactGrid(DATA.contact);
  renderFooterLinks(DATA.footerLinks);
};
