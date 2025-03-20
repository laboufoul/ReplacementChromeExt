// Get all the elements that you care about into an array
//let elements = Array.prototype.slice.call(document.querySelectorAll("p, h1, header"));
function replaceTextInNode(node) {
  if (node.nodeType === 3) { // Text node
    node.nodeValue = node.nodeValue.replace(/amazon.com/1/gi, 'amazon.com/2');
  } else {
    node.childNodes.forEach(replaceTextInNode);
  }
}
replaceTextInNode(document.body);

//amazon.com/1 to amazon.com/2; take static url followed by an id and switch it out; 