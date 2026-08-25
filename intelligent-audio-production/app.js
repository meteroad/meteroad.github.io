const translations = {
  en: {
    "meta.title": "Intelligent Audio Production | Xinlu Liu",
    "meta.description": "A structured index of open resources and recent research for intelligent audio effects, mixing, mastering, and evaluation.",
    "nav.label": "Primary navigation",
    "nav.scope": "Scope",
    "nav.projects": "Projects",
    "nav.papers": "Papers",
    "nav.roadmap": "Roadmap",
    "intro.eyebrow": "Open research index",
    "intro.title": "Intelligent Audio Production",
    "intro.lead": "A structured index of open-source projects, models, datasets, and recent research for intelligent audio effects and music production.",
    "intro.scopeLabel": "Current scope",
    "intro.imageAlt": "A waveform illustrating intelligent audio production",
    "scope.title": "Field map",
    "scope.description": "The index follows production tasks rather than publication year. Each area collects implementations, pretrained models, datasets, and evaluation resources where available.",
    "scope.audioEffects": "Modeling, estimation, control, and transfer of EQ, dynamics, distortion, reverberation, and other processors.",
    "scope.representation": "Embeddings and descriptors that capture effect transformations, production style, and perceptual attributes.",
    "scope.mixing": "Automatic, reference-guided, and controllable systems for balancing and processing multitrack music.",
    "scope.mastering": "Systems for loudness, dynamics, tonal balance, reference matching, and final-stage production.",
    "scope.evaluation": "Benchmarks, listening-test protocols, production metrics, and reproducibility tools.",
    "scope.spatialAudio": "Spatial mixing, positioning, rendering, and immersive production will be incorporated as the index expands.",
    "projects.title": "Project index",
    "projects.description": "Entries distinguish source availability, checkpoints, licenses, and reproducibility. Projects are added after their public resources have been checked.",
    "projects.searchPlaceholder": "Project or task",
    "projects.areaFilter": "Filter projects by area",
    "projects.columnProject": "Project",
    "projects.columnArea": "Area",
    "projects.columnAvailable": "Available",
    "projects.columnLicense": "License",
    "projects.columnVerified": "Verified",
    "projects.loading": "Loading verified projects...",
    "projects.empty": "No verified projects match this filter.",
    "projects.loadError": "The project index could not be loaded.",
    "projects.mixbench": "A reproducible evaluation framework for automatic music mixing. The repository link will be added when the project is publicly available.",
    "papers.title": "Recent papers",
    "papers.description": "Recent work is discovered from public scholarly metadata, screened for direct relevance, and added through a validated update.",
    "papers.agentLabel": "AI paper scout",
    "papers.agentDescription": "A scheduled workflow checks new papers weekly. Candidate metadata is validated before a website update is proposed.",
    "papers.searchPlaceholder": "Title, author, or topic",
    "papers.areaFilter": "Filter papers by area",
    "papers.loading": "Loading papers...",
    "papers.empty": "No papers match this filter.",
    "papers.loadError": "The paper index could not be loaded.",
    "papers.automated": "Agent-curated",
    "controls.search": "Search",
    "controls.area": "Area",
    "controls.allAreas": "All areas",
    "common.inDevelopment": "In development",
    "common.now": "Now",
    "common.next": "Next",
    "common.later": "Later",
    "roadmap.title": "Roadmap",
    "roadmap.description": "This first version establishes the scope and data structure. The catalogue grows through direct verification rather than unreviewed bulk collection.",
    "roadmap.nowTitle": "Build the verified landscape",
    "roadmap.nowText": "Audio effects, representations, mixing, mastering, datasets, and evaluation.",
    "roadmap.nextTitle": "Add reproducibility details",
    "roadmap.nextText": "Environment, inference path, checkpoints, datasets, and known limitations.",
    "roadmap.laterTitle": "Expand the production space",
    "roadmap.laterText": "Spatial audio and other production-oriented tasks.",
    "footer.maintained": "Maintained by",
    "footer.note": "A living resource for the audio research community.",
    "area.audio-effects": "Audio effects",
    "area.representation": "Representation",
    "area.mixing": "Mixing",
    "area.mastering": "Mastering",
    "area.evaluation": "Evaluation",
    "area.spatial-audio": "Spatial audio",
    "link.paper": "Paper",
    "link.project": "Project",
    "link.source": "Source",
    "link.checkpoint": "Checkpoint",
    "link.doi": "DOI"
  },
  zh: {
    "meta.title": "智能音频制作 | 刘鑫璐",
    "meta.description": "面向智能音效、混音、母带与评测的开放资源及近期研究索引。",
    "nav.label": "主导航",
    "nav.scope": "领域",
    "nav.projects": "项目",
    "nav.papers": "论文",
    "nav.roadmap": "路线图",
    "intro.eyebrow": "开放研究索引",
    "intro.title": "智能音频制作",
    "intro.lead": "汇总智能音效与音乐制作领域的开源项目、模型、数据集、评测资源及近期研究。",
    "intro.scopeLabel": "当前范围",
    "intro.imageAlt": "用于说明智能音频制作的音频波形",
    "scope.title": "领域地图",
    "scope.description": "索引按照制作任务而非发表年份组织；每个方向将收录可用的实现、预训练模型、数据集与评测资源。",
    "scope.audioEffects": "均衡、动态、失真、混响及其他处理器的建模、估计、控制与迁移。",
    "scope.representation": "描述音效变化、制作风格与感知属性的嵌入及特征。",
    "scope.mixing": "面向多轨音乐平衡与处理的自动混音、参考引导和可控混音系统。",
    "scope.mastering": "响度、动态、音色平衡、参考匹配与终端制作系统。",
    "scope.evaluation": "基准、听音实验流程、制作指标与可复现工具。",
    "scope.spatialAudio": "后续将逐步加入空间混音、声像定位、渲染与沉浸式制作。",
    "projects.title": "项目索引",
    "projects.description": "条目分别记录源码、权重、许可证与可复现情况；只有公开资源经过核验后才会加入。",
    "projects.searchPlaceholder": "搜索项目或任务",
    "projects.areaFilter": "按领域筛选项目",
    "projects.columnProject": "项目",
    "projects.columnArea": "领域",
    "projects.columnAvailable": "可用资源",
    "projects.columnLicense": "许可证",
    "projects.columnVerified": "核验时间",
    "projects.loading": "正在加载已核验项目……",
    "projects.empty": "没有符合当前筛选条件的项目。",
    "projects.loadError": "项目索引加载失败。",
    "projects.mixbench": "面向自动音乐混音的可复现评测框架；项目公开后将在此补充仓库链接。",
    "papers.title": "近期论文",
    "papers.description": "系统从公开学术元数据中发现近期工作，经相关性筛选和数据校验后加入索引。",
    "papers.agentLabel": "AI 论文巡检 Agent",
    "papers.agentDescription": "定时工作流每周检查新论文，并在提出网站更新前核验候选论文的元数据。",
    "papers.searchPlaceholder": "搜索标题、作者或主题",
    "papers.areaFilter": "按领域筛选论文",
    "papers.loading": "正在加载论文……",
    "papers.empty": "没有符合当前筛选条件的论文。",
    "papers.loadError": "论文索引加载失败。",
    "papers.automated": "Agent 筛选",
    "controls.search": "搜索",
    "controls.area": "领域",
    "controls.allAreas": "全部领域",
    "common.inDevelopment": "开发中",
    "common.now": "当前",
    "common.next": "下一步",
    "common.later": "后续",
    "roadmap.title": "路线图",
    "roadmap.description": "当前版本先建立范围与数据结构；索引将通过逐项核验扩展，不做未经审查的批量收录。",
    "roadmap.nowTitle": "建立已核验的领域索引",
    "roadmap.nowText": "覆盖音效、表征、混音、母带、数据集与评测。",
    "roadmap.nextTitle": "补充可复现信息",
    "roadmap.nextText": "记录环境、推理路径、权重、数据集和已知限制。",
    "roadmap.laterTitle": "扩展制作任务范围",
    "roadmap.laterText": "逐步纳入空间音频及其他面向制作的任务。",
    "footer.maintained": "维护者：",
    "footer.note": "持续更新的音频研究社区资源。",
    "area.audio-effects": "音频效果",
    "area.representation": "表征学习",
    "area.mixing": "混音",
    "area.mastering": "母带",
    "area.evaluation": "评测",
    "area.spatial-audio": "空间音频",
    "link.paper": "论文",
    "link.project": "项目主页",
    "link.source": "源码",
    "link.checkpoint": "模型权重",
    "link.doi": "DOI"
  }
};

const state = {
  language: getInitialLanguage(),
  projects: [],
  papers: []
};

const elements = {
  projectRows: document.querySelector("#project-rows"),
  projectSearch: document.querySelector("#project-search"),
  projectArea: document.querySelector("#project-area-filter"),
  projectCount: document.querySelector("#project-count"),
  paperList: document.querySelector("#paper-list"),
  paperSearch: document.querySelector("#paper-search"),
  paperArea: document.querySelector("#paper-area-filter"),
  paperCount: document.querySelector("#paper-count")
};

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem("iap-language");
    if (saved === "en" || saved === "zh") return saved;
  } catch (_) {
    // Storage can be unavailable in strict privacy modes.
  }
  return navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function t(key) {
  return translations[state.language][key] ?? translations.en[key] ?? key;
}

function localized(value) {
  if (typeof value === "string") return value;
  return value?.[state.language] ?? value?.en ?? "";
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createLinkList(links) {
  const list = document.createElement("div");
  list.className = "link-list";
  links.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = t(`link.${item.label}`);
    link.target = "_blank";
    link.rel = "noreferrer";
    list.append(link);
  });
  return list;
}

function createTagList(areas) {
  const list = document.createElement("div");
  list.className = "tag-list";
  areas.forEach((area) => list.append(createTextElement("span", "tag", t(`area.${area}`))));
  return list;
}

function populateAreaFilter(select, items) {
  const selected = select.value || "all";
  const areas = [...new Set(items.flatMap((item) => item.areas))].sort((a, b) => t(`area.${a}`).localeCompare(t(`area.${b}`), state.language));
  select.replaceChildren();
  const all = document.createElement("option");
  all.value = "all";
  all.textContent = t("controls.allAreas");
  select.append(all);
  areas.forEach((area) => {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = t(`area.${area}`);
    select.append(option);
  });
  select.value = areas.includes(selected) ? selected : "all";
}

function createProjectRow(project) {
  const row = document.createElement("tr");
  const projectCell = document.createElement("td");
  projectCell.append(
    createTextElement("span", "project-name", project.name),
    createTextElement("span", "project-description", localized(project.description))
  );

  const areaCell = document.createElement("td");
  areaCell.append(createTagList(project.areas));
  const linksCell = document.createElement("td");
  linksCell.append(createLinkList(project.links));

  row.append(
    projectCell,
    areaCell,
    linksCell,
    createTextElement("td", "", localized(project.license)),
    createTextElement("td", "", project.lastVerified)
  );
  return row;
}

function renderProjects() {
  const query = elements.projectSearch.value.trim().toLocaleLowerCase(state.language);
  const selectedArea = elements.projectArea.value;
  const filtered = state.projects.filter((project) => {
    const matchesArea = selectedArea === "all" || project.areas.includes(selectedArea);
    const searchable = [project.name, project.description.en, project.description.zh, ...project.areas.map((area) => t(`area.${area}`))]
      .join(" ")
      .toLocaleLowerCase(state.language);
    return matchesArea && searchable.includes(query);
  });

  elements.projectRows.replaceChildren();
  if (filtered.length === 0) {
    const row = document.createElement("tr");
    const cell = createTextElement("td", "empty", t("projects.empty"));
    cell.colSpan = 5;
    row.append(cell);
    elements.projectRows.append(row);
  } else {
    filtered.forEach((project) => elements.projectRows.append(createProjectRow(project)));
  }

  elements.projectCount.textContent = state.language === "zh"
    ? `显示 ${filtered.length} / ${state.projects.length} 个已核验项目`
    : `${filtered.length} of ${state.projects.length} verified ${state.projects.length === 1 ? "project" : "projects"}`;
}

function createPaperEntry(paper) {
  const article = document.createElement("article");
  article.className = "paper-entry";

  const heading = document.createElement("div");
  heading.className = "paper-heading";
  const title = createTextElement("h3", "", paper.title);
  const primaryLink = paper.links.find((link) => link.label === "paper") ?? paper.links[0];
  if (primaryLink) {
    const anchor = document.createElement("a");
    anchor.href = primaryLink.url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.textContent = paper.title;
    title.replaceChildren(anchor);
  }
  const metadata = createTextElement("p", "paper-meta", `${paper.venue} · ${paper.published}`);
  heading.append(title, metadata);

  const authors = createTextElement("p", "paper-authors", paper.authors.join(", "));
  const summary = createTextElement("p", "paper-summary", localized(paper.summary));
  const details = document.createElement("div");
  details.className = "paper-details";
  details.append(createTagList(paper.areas), createLinkList(paper.links));
  if (paper.curation === "agent") {
    details.append(createTextElement("span", "agent-badge", t("papers.automated")));
  }

  article.append(heading, authors, summary, details);
  return article;
}

function renderPapers() {
  const query = elements.paperSearch.value.trim().toLocaleLowerCase(state.language);
  const selectedArea = elements.paperArea.value;
  const filtered = state.papers.filter((paper) => {
    const matchesArea = selectedArea === "all" || paper.areas.includes(selectedArea);
    const searchable = [paper.title, paper.authors.join(" "), paper.summary.en, paper.summary.zh, ...paper.areas.map((area) => t(`area.${area}`))]
      .join(" ")
      .toLocaleLowerCase(state.language);
    return matchesArea && searchable.includes(query);
  });

  elements.paperList.replaceChildren();
  if (filtered.length === 0) {
    elements.paperList.append(createTextElement("p", "empty", t("papers.empty")));
  } else {
    filtered.forEach((paper) => elements.paperList.append(createPaperEntry(paper)));
  }
  elements.paperCount.textContent = state.language === "zh"
    ? `显示 ${filtered.length} / ${state.papers.length} 篇论文`
    : `${filtered.length} of ${state.papers.length} ${state.papers.length === 1 ? "paper" : "papers"}`;
}

function applyTranslations() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]').content = t("meta.description");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === state.language));
  });
  populateAreaFilter(elements.projectArea, state.projects);
  populateAreaFilter(elements.paperArea, state.papers);
  if (state.projects.length) renderProjects();
  if (state.papers.length) renderPapers();
}

function setLanguage(language) {
  state.language = language;
  try {
    localStorage.setItem("iap-language", language);
  } catch (_) {
    // The page still works when storage is unavailable.
  }
  applyTranslations();
}

async function loadData() {
  try {
    const [projectsResponse, papersResponse] = await Promise.all([
      fetch("data/projects.json"),
      fetch("data/papers.json")
    ]);
    if (!projectsResponse.ok || !papersResponse.ok) throw new Error("Data request failed");
    const [projectData, paperData] = await Promise.all([projectsResponse.json(), papersResponse.json()]);
    state.projects = projectData.projects;
    state.papers = paperData.papers;
    applyTranslations();
  } catch (_) {
    elements.projectRows.replaceChildren();
    const row = document.createElement("tr");
    const projectError = createTextElement("td", "empty", t("projects.loadError"));
    projectError.colSpan = 5;
    row.append(projectError);
    elements.projectRows.append(row);
    elements.paperList.replaceChildren(createTextElement("p", "empty", t("papers.loadError")));
    elements.projectCount.textContent = "";
    elements.paperCount.textContent = "";
  }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
elements.projectSearch.addEventListener("input", renderProjects);
elements.projectArea.addEventListener("change", renderProjects);
elements.paperSearch.addEventListener("input", renderPapers);
elements.paperArea.addEventListener("change", renderPapers);

applyTranslations();
loadData();
