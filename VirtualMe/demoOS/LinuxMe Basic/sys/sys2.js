terminal.onKey(function(a){
if(a.key=='Enter'){
if(terminal.getText()=='help'){
echo()
help()
}else if(terminal.getText()=='restart'){
restart()
}else if(terminal.getText()=='time'){
echo()
time()
}else if(terminal.getText()=='user'){
echo()
user()
}else if(terminal.getText()=='home'){
echo()
home()
}else if(terminal.getText()=='clear'){
echo()
clear()
}else if(terminal.getText().indexOf('launch')>-1==true){
echo()
launch()
}else{
echo()
errormessage()
}
}else{
}
});