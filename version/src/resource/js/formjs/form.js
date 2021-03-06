(function(){
    let hintText={user_email:{hint:"⚠️邮箱是您登录的唯一账号，请谨慎填写",right:"√邮箱格式正确",wrong:"×邮箱格式有误，请重新输入"},
                  user_name:{hint:"️⚠️请输入3-12个字符的用户名（包括字母/数字/下划线）",right:"√用户名格式正确",wrong:"×用户名格式有误，请重新输入"},
                  phone:{hint:"⚠️请输入11位电话号码",right:"√电话号码输入正确",wrong:"×电话号码输入有误，请重新输入"},
                  id_card:{hint:"⚠️请输入18位身份证号码",right:"√身份证号码输入正确",wrong:"×身份证号码输入有误，请重新输入"},
                  password:{hint:"⚠️请输入6位以上密码",right:"√密码格式正确",wrong:"×请输入符合格式的密码"},
                  repassword:{hint:"⚠️请再次输入密码",right:"√再次输入密码正确",wrong:"×两次输入不一致或密码格式不正确，请重新输入或密码格式不正确"}};
    let regEvent=function(node, event, func){
        if (node.addEventListener)
            node.addEventListener(event, func);
        else if (node.attachEvent)
            node.attachEvent("on" + event, func);
        else
            node["on" + event] = func;
    };
    function regValue(id,i){
        let match=false,
        input=document.getElementById(id),
        value=input.value;
        switch (id){
            case "user_name":
            case "login_user_name":
            case "info_user_name":
                match=/^[a-zA-Z0-9_]{4,16}$/.test(value.replace(/[\u0391-\uFFE5]/g,"nn"));
                id="user_name";
                break;
            case "password":
            case "login_password":
            case "info_password":
                match=/^\S{6,16}$/.test(value);
                id="password";
                break;
            case "repassword":
                match=document.getElementById("password").value==value && value !="" && value !=null && (/^\S{6,16}$/.test(value));
                break;
            case "info_repassword":
                match=document.getElementById("info_password").value==value && value !="" && value !=null && (/^\S{6,16}$/.test(value));
                id="repassword";
                break;
            case "user_email":
            case "forget_user_email":
            case "info_user_email":
                match=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/.test(value);
                id="user_email";
                break;
            case "phone":
            case "info_phone":
            case "send_to_phone":
            case "send_from_phone":
                match=/^((\(\d{2,3}\))|(\d{3}\-))?1[3,8,5]{1}\d{9}$/.test(value);
                id="phone";
                break;
            case "id_card":
                match=/^\S{18}$/.test(value);
                break;
            default:
                break;
        }
        if(match) {
            index=0;
            input.className="right input";
            hint[i].className="hint hint_right";
            hint[i].innerHTML=hintText[id].right;
        }else{
            input.className="wrong input";
            hint[i].className="hint hint_wrong";
            hint[i].innerHTML=hintText[id].wrong;
            index=1;
        }
    };
    let inputs=document.getElementsByClassName("input"),
    id,
    hint=document.getElementsByClassName("hint"),
    index=0;
    for(let j=0;j<inputs.length;j++){
        (function(i){
            regEvent(inputs[i],"focus",function(){
                hint[i].style.visibility="visible";
                id=inputs[i].id;
            });
            regEvent(inputs[i],"blur",function(){
               regValue(id,i);
            });
        })(j)
    }
    regEvent(document.getElementById("submit"),"click",function(e){
        if(index!==0){
            alert(index);
            e.preventDefault();
            alert("您的输入有误，请检查并重新输入！");
            return false;
        }  
    });  
    regEvent(document.getElementById("button"),"click",function(e){
        if(index!==0){
            e.preventDefault();
            alert("您的输入有误，请检查并重新输入！");
            return false;
        }  
    });  
})();