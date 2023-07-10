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
  return generateLink(data, link);
}
function generateLink(headline, link) {
  return `[${headline}](${link})  
  `;
}
function generateCitation(author, title, link, date){
  let cite = '';
  cite += author;
  if(author != '' && title != ''){
    cite += '. ';
  }
  if(title != ''){
    cite += '*' + title + '*';
  }
  if((author != '' || title != '') && date != ''){
    cite += ', ' + date;
  }
  if(link){
    cite += ' <' + link + '>';
  }
  cite += '<br>';
  return cite;
}
module.exports = { generateTitle, generateTitleLicense, generateH2, generateLinkedH2, generateText, generateLinkedListItem, generateLink, generateCitation };