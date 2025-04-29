function myLinux(){
terminal.loadScript('demoOS/LinuxMe Basic/bin/kernel.js',error,success)
function success(){};
function error(e){
terminal.log('Kernel file missing.','text','red','monospace','15px')
};
terminal.loadScript('demoOS/LinuxMe Basic/sys/sys2.js',error,success)
function success(){};
function error(e){
terminal.log('System file missing.','text','red','monospace','15px')
};
terminal.clear()
var intro = `                   
                     ___       ___      ________
          /\        / \ \     / / \    / ______ \
         /  |       | |\ \   / /| |    | |     \/
        /  /        | | \ \ / / | |    | | 
       /  /         | |  \_/ /  | |    | |_____/\
      /  /          | |   \_/   | |    | ______ |
     /  /           | |         | |    | |     \/
    /  /       _    | |         | |    | |
    \  \______/ \   | |         | |    | |_____/\
     \__________/   \_/         \_/    \________/
`

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

