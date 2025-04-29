/*
BIOS
Basic bios for VirtualMe.
Copyrigtht @ Omicron

This is an overview of how your Javascript Operating system should look like.
*/
terminal.log('Welcome to ','strong','red','regular','15px')
terminal.log('VirtualMe version1.00','strong','yellow','monospace','20px')
terminal.space()
terminal.log('VirtualMe version1.00','strong','yellow','monospace','80px')
terminal.space()
terminal.log('#############################','a','white','monospace','15px')
terminal.space()
terminal.log('All rights reserved.','strong','blue','regular','15px')
terminal.space()
terminal.log('Start your javascript OS by typing the path to your OS eg.','strong','green','regular','15px')
terminal.space()
terminal.log('OS C:MyFiles/MyOS','strong','green','monospace','15px')
terminal.pushCursor();
type()
terminal.onKey(onReceive);
function onReceive(a){
if(a.key=='Enter'){
if(terminal.text()==''){
terminal.space()
terminal.log('No path was specified','strong','red','monospace','15px')
terminal.pushCursor();
type()
}else{
path = terminal.text();
terminal.space();
var dir = path.replace('OS ','');
terminal.log('Starting OS @ '+dir,'strong','green','monospace','15px')
window.location.href='?os='+encodeURIComponent(dir);
}
}
}
var anchor = location.href.match(/(#|\bos=)([\w%]+)/i);
var pathos = decodeURIComponent(anchor[2]);
if(pathos){
terminal.clear();
terminal.log('VirtualMe version1.00','strong','yellow','monospace','20px')
terminal.space();
terminal.log('Booting from: '+pathos,'strong','green','monospace','15px')
terminal.pushCursor();
setTimeout(function (){
terminal.space();
terminal.log('Warning:','a','red','monospace','15px')
terminal.log('Make sure the directory path to your OS is accurate.The start.js file will be loaded always in the folder specified.','a','yellow','regular','15px')
terminal.pushCursor();
},1000);
setTimeout(function (){
terminal.space();
terminal.log('Do you want to boot now? [Y/n]','a','red','monospace','15px')
terminal.pushCursor();
terminal.onKey(onReceive)
},2000);
terminal.onKey()
function onReceive(a){
if(a.key.toLowerCase()=='y'){
terminal.space();
terminal.log('Booting...','a','yellow','monospace','15px')
terminal.clear();
terminal.pushCursor();
terminal.cursorText('Booting...')
loadOS(pathos+'/start.js')
}else{
terminal.space();
terminal.log('Process stopped by User.','a','yellow','monospace','15px')
terminal.cursorText('#_')
terminal.pushCursor();
}
}

}
function onLoadSuccess(){
terminal.space();
terminal.log('Boot successful...','a','yellow','monospace','15px')
terminal.pushCursor();
setTimeout(Start,2000);
}
function onLoadError(){
terminal.space();
terminal.log('Serious error while booting.please check if the dir you specified is accurate. eg. demoOS/LinuxMe. Avoid: demoOs/LinuxMe/start.js . And also check if the start.js file is available.','a','red','monospace','15px')
terminal.cursorText('#_')
terminal.pushCursor();
}
function onReceive2(){
alert('2')
}
