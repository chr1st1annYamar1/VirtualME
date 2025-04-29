/*

#########################################

WELCOME TO LINUX ME
                     ___       ___      ________
          /\        / \ \     / / \    / ______ \
         /  |       | |\ \   / /| |    | |     \/
        /  /        | | \ \ / / | |    | |
       /  /         | |  \_/ /  | |    | |_____/\
      /  /          | |   \_/   | |    | ______  |
     /  /           | |         | |    | |     \/
    /  /       _    | |         | |    | |
    \  \______/ \   | |         | |    | |_____/\
     \__________/   \_/         \_/    \________/

#########################################

Coded by: christiannyamari58@gmail.com

This is an example template of creating your javascript OS.

You can improve this code and add more applications to it and share it Github. Thanks in advance.
*/
function Start(){
terminal.clear();
terminal.onKey()
terminal.log('Welcome to Linux Me.','a','yellow','monospace','15px')
terminal.pushCursor();
OnStart();
}

function OnStart(){
setTimeout(function (){
terminal.space();
terminal.log('Copyright @ Omicron2024','strong','red','monospace','15px')
terminal.pushCursor();
},2000)
setTimeout(function (){
terminal.space();
terminal.log('Loading files...','strong','yellow','regular','15px')
terminal.pushCursor();
},4000)
setTimeout(function (){
terminal.space();
terminal.log('Reading files...','strong','yellow','monospace','15px')
terminal.pushCursor();
},8000)
setTimeout(function (){
setTimeout(launchOS,1000)
},10000)
}

function launchOS(){
terminal.loadScript('demoOS/LinuxMe Basic/sys/sys.js',error,success)
function error(){
terminal.space()
terminal.log('Error: sys.js Missing or bad file!','strong','red','monospace','15px')
terminal.pushCursor()
}
function success(){
terminal.space();
terminal.log('Success. OS Started successfully!','strong','green','monospace','15px')
terminal.pushCursor();
myLinux()
}
}