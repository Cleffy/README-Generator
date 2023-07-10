// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Creates a Title Header
function generateH1(data) {
  return `# ${data}
  `;
}
function generateH2(data) {
  return `## ${data}
  `;
}
function generateLinkedH2(data) {
  let link = data.replace(/\s+/g, '-');
  return `## <div id="${link}">${data}</div>
  `;
}
function generateText(data) {
  return `${data}
  `;
}
function generateLinkedListItem(data) {
  let link = '#' + data.replace(/\s+/g, '-');
  return `[${data}](${link})  
  `
}

module.exports = { generateH1, generateH2, generateLinkedH2, generateText, generateLinkedListItem};