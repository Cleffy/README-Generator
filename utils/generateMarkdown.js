// Creates a Title Header
function generateTitleLicense(data, license) {
  return `# ${data} [![License: ${license.title}](${license.badge})](${license.link})
  `;
}
function generateTitle(data) {
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
function generateLink(data) {
  return `[${data}](https://github.com/${data}/)  
  `;
}

module.exports = { generateTitle, generateTitleLicense, generateH2, generateLinkedH2, generateText, generateLinkedListItem, generateLink};