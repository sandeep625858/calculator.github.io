var str="";
function myfunc(ch){
    str+=ch;
    document.getElementById('box').innerHTML=str;
}
function clean(){
    str="";
    document.getElementById('box').innerHTML=str;
}
function back(){
    str=str.substring(0,str.length-1);
    document.getElementById('box').innerHTML=str;
}
function result()
{
    function evil(fn) {
        return new Function('return ' + fn)();
      }
      str=evil(str).toString();
      document.getElementById('box').innerHTML=str;
}