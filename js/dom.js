// console.log(window.document);

var aaa = window.document;
console.log(aaa.URL);                   //file:///home/nawan44/Documents/github/Basic/Javascript---Basic/html/dom.html
console.log(aaa.lastModified);          //09/13/2020 06:03:43
console.log(aaa.contentType);          //text/html
console.log(aaa.title);                 //dom

//Node Object
console.log(document.nodeName);         //document 
console.log(document.nodeType);;        //9
console.log(document.childNodes);       //NodeList(2)
console.log(document.childNodes.length);//2

var baa  = document.childNodes[0];
console.log(baa.nodeName);              //html
console.log(baa.nodeType);              //10
console.log(baa.childNodes);            //NodeList []
console.log(baa.childNodes.length);     //0
console.log("=========================");
var caa  = document.childNodes[0];
console.log(caa.nodeName);              //html
console.log(caa.nodeType);              //10
console.log(caa.childNodes);            //NodeList []
console.log(caa.childNodes.length);     //#document
console.log("=========================");
var daa  = document.firstChild;
console.log(daa.nodeName);              //html
console.log(daa.nodeType);              //10
console.log(daa.childNodes);            //NodeList []
console.log(daa.childNodes.length);     //#document 
console.log("=========================");
var eaa  = document.lastChild;
console.log(eaa.nodeName);              //html
console.log(eaa.nodeType);              //1
console.log(eaa.childNodes);            //NodeList [head]
console.log(eaa.childNodes.length);     //#document  

console.log("#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*");
var headNode1 = document.childNodes[1].childNodes[0];
var titleNode1 = headNode1.childNodes[3];
titleNode1.textContent = "Title has changed"

console.log("?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#?#")
var jaa = document.createElement("p");
console.log(jaa.nodeName);      //p
console.log(jaa.nodeType);      //1
console.log(jaa.nodeValue);     //null

var kaa = document.createTextNode("a New Pharagarph")
console.log(kaa.nodeName);     //#text
console.log(kaa.nodeType);     //3
console.log(kaa.nodeValue);    //a New Pharagarph

//Method Node.appendChild()
var newLNode = document.createElement("L");
var newTNode = document.createTextNode("New Text");
newLNode.appendChild(newTNode);
bodyNode.appendChild(newLNode);





