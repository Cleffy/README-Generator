// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == null){
    return '';
  }
  else{
    return `[![License: ${license.title}](${license.badge})](${license.link})
    `;
  }
}

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
function generateLink(data) {
  return `[${data}](https://github.com/${data}/)
  `;
}

module.exports = { renderLicenseBadge, generateH1, generateH2, generateLinkedH2, generateText, generateLinkedListItem, generateLink};