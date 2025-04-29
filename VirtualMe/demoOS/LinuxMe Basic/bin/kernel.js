function help(){
terminal.space()
terminal.log("Type -help to see this list",'text','green','regular','15px')
terminal.space()
terminal.log("Type -home to see this 'welcome' home",'text','green','regular','15px')
terminal.space()
terminal.log("Type -restart to reboot",'text','green','regular','15px')
terminal.space()
terminal.log("Type -time to get your  current time",'text','green','regular','15px')
terminal.space()
terminal.log("Type -user to get your user agent",'text','green','regular','15px')
terminal.space()
terminal.log("Type -clear to clear the terminal",'text','green','regular','15px')
terminal.space()
terminal.log("Type -launch [APP] to launch the specified application",'text','green','regular','15px')
terminal.pushCursor()
terminal.type()
}
function errormessage(){
terminal.space()
terminal.log('_'+saved+' is not a LinuxMe command or option.','text','red','monospace','15px')
terminal.pushCursor()
terminal.type() 
}
function echo(){
saved = terminal.getText();
terminal.space()
terminal.log('[','text','red','monospace','15px')
terminal.log('root','text','blue','monospace','15px')
terminal.log('@','text','white','monospace','15px')
terminal.log('LinuxMe','text','yellow','monospace','15px')
terminal.log(']','text','red','monospace','15px')
terminal.log('=','text','red','monospace','15px')
terminal.log(saved,'text','white','monospace','15px')
}
function restart(){window.location.reload()}
function time(){
terminal.space();
terminal.log(new Date(),'text','blue','monospace','15px')
terminal.pushCursor();
terminal.type();
}
function user(){
terminal.space();
terminal.log(navigator.userAgent,'text','blue','monospace','15px')
terminal.pushCursor();
terminal.type();
}
function home(){
terminal.clear()
terminal.log('Welcome to Linux Me.','strong','yellow','monospace','15px')
terminal.pushCursor();
terminal.space();
terminal.log('Linux','strong','green','monospace','45px')
terminal.log('Me','strong','red','monospace','45px')
terminal.space();
terminal.log('######################','code','white','monospace','12px')
terminal.pushCursor();
terminal.space();
terminal.log('First ever release!','a','red','regular','15px')
terminal.space();
terminal.log('Type help for basic commands.','a','green','regular','15px')
terminal.pushCursor();
terminal.type();
}
function launch(){
terminal.space();
terminal.log('Launching '+saved.replace('launch',''),'text','blue','monospace','15px')
terminal.pushCursor();
terminal.type();
}
function clear(){
terminal.clear();
terminal.type()
}