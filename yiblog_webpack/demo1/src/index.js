
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    var msg = _.join(['Hello', 'webpack']);
    msg+="<br/>";
    msg += _.join("以往的js使用方法"," ");
    element.innerHTML = msg;

    return element;
}
  
document.body.appendChild(component());