// function replaceTextInNode(node) {
//   if (node.nodeType === 3) { // Text node
//     node.nodeValue = node.nodeValue.replace(/amazon.com/1/gi, 'amazon.com/2');
//   } else {
//     node.childNodes.forEach(replaceTextInNode);
//   }
// }

// replaceTextInNode(document.body);

let originalUrl = document.URL; //store product link into originalUrl variable

function changeUrl(url){//url argument represents product link
  if (url.indexOf("https://www.amazon.com") > -1){ //checks to see if user is browsing a product on Amazon's website
    let tag = "tag=apricot07-20";
    let myNewUrl = url + tag;//adds Apricot storefront tag to product URL, adding it to our storefront
    chrome.tabs.update(undefined, { url: myNewUrl });//updating the url in the browser
  }
}

changeUrl(originalUrl);