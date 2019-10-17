//var txtFile = new XMLHttpRequest();
//txtFile.open("GET", "‎⁨/Users/Fridge/Desktop/Site/NewResumeSite/LoremIpsum.txt", true);
//txtFile.onreadystatechange = function() {
//  if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
//    if (txtFile.status === 200) {  // Makes sure it's found the file.
//      allText = txtFile.responseText;
//      lines = txtFile.responseText.split("\n"); // Will separate each line into an array
//    }
//  }
//}
txtFile.send(null);

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    // Display file content
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.innerHTML = contents;
}

document.getElementById('file-input').addEventListener('change', readSingleFile, false);
