function doGet(){
  let html = HtmlService.createTemplateFromFile('index');
  html.count = getCount();
  return html.evaluate();
}

function getCount(){
  // let ss = SpreadsheetApp.getActiveSpreadsheet();
  let ss = SpreadsheetApp.openById("18vGodbpn7eU5kvAJOt30x85qkamp3KgVOJLYx6n4brE");
  let sh = ss.getSheetByName('Sign Up');
  let data = sh.getDataRange().getValues();
  return data.length - 1;
 
}


function addRow(name){
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('Sign Up');
  let lastRow = sh.getLastRow();
  sh.getRange(lastRow+1,1).setValue(name);

}

function main(){
addRow("SBR");

}