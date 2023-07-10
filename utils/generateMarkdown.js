// Generate Titles with or without a license
function generateTitleLicense(data, license) {
  return `# ${data} [![License: ${license.title}](${license.badge})](${license.link})
  `;
}
function generateTitle(data) {
  return `# ${data}
  `;
}

//Generate sub headers with or without a Table of Contents link
function generateH2(data) {
  return `## ${data}
  `;
}
function generateLinkedH2(data) {
  let link = data.replace(/\s+/g, '-');
  return `## <div id="${link}">${data}</div>
  `;
}

//Generate genral text
function generateText(data) {
  return `${data}  
  `;
}
//Generate a Linked List for use in a Table of Contents
function generateLinkedListItem(data) {
  let link = '#' + data.replace(/\s+/g, '-');
  return generateLink(data, link);
}
//Generate a Link
function generateLink(headline, link) {
  return `[${headline}](${link})  
  `;
}
//Generate a citation
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