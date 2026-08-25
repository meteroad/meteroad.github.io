const rows = document.querySelector("#project-rows");
const searchInput = document.querySelector("#project-search");
const areaFilter = document.querySelector("#area-filter");
const projectCount = document.querySelector("#project-count");

let projects = [];

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createProjectRow(project) {
  const row = document.createElement("tr");

  const projectCell = document.createElement("td");
  const name = createTextElement("span", "project-name", project.name);
  const description = createTextElement("span", "project-description", project.description);
  projectCell.append(name, description);

  const areaCell = document.createElement("td");
  const tagList = document.createElement("div");
  tagList.className = "tag-list";
  project.areas.forEach((area) => tagList.append(createTextElement("span", "tag", area)));
  areaCell.append(tagList);

  const linksCell = document.createElement("td");
  const linkList = document.createElement("div");
  linkList.className = "link-list";
  project.links.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.label;
    link.target = "_blank";
    link.rel = "noreferrer";
    linkList.append(link);
  });
  linksCell.append(linkList);

  row.append(
    projectCell,
    areaCell,
    linksCell,
    createTextElement("td", "", project.license),
    createTextElement("td", "", project.lastVerified)
  );
  return row;
}

function renderProjects() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedArea = areaFilter.value;
  const filtered = projects.filter((project) => {
    const matchesArea = selectedArea === "all" || project.areas.includes(selectedArea);
    const searchable = [project.name, project.description, ...project.areas].join(" ").toLowerCase();
    return matchesArea && searchable.includes(query);
  });

  rows.replaceChildren();
  if (filtered.length === 0) {
    const row = document.createElement("tr");
    const cell = createTextElement("td", "empty", "No verified projects match this filter.");
    cell.colSpan = 5;
    row.append(cell);
    rows.append(row);
  } else {
    filtered.forEach((project) => rows.append(createProjectRow(project)));
  }

  projectCount.textContent = `${filtered.length} of ${projects.length} verified ${projects.length === 1 ? "project" : "projects"}`;
}

fetch("data/projects.json")
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((data) => {
    projects = data.projects;
    const areas = [...new Set(projects.flatMap((project) => project.areas))].sort();
    areas.forEach((area) => {
      const option = document.createElement("option");
      option.value = area;
      option.textContent = area;
      areaFilter.append(option);
    });
    renderProjects();
  })
  .catch(() => {
    rows.replaceChildren();
    const row = document.createElement("tr");
    const cell = createTextElement("td", "empty", "The project index could not be loaded.");
    cell.colSpan = 5;
    row.append(cell);
    rows.append(row);
    projectCount.textContent = "";
  });

searchInput.addEventListener("input", renderProjects);
areaFilter.addEventListener("change", renderProjects);
