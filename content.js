function replaceTextInNode(node) {
  if (node.nodeType === 3) { // Text node
    node.nodeValue = node.nodeValue.replace(/amazon.com/1/gi, 'amazon.com/2');
  } else {
    node.childNodes.forEach(replaceTextInNode);
  }
}
replaceTextInNode(document.body);
