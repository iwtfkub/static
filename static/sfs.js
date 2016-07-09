!function(o) {
o.onload = function() {
    var head=document.getElementsByTagName("head")[0],body=document.getElementsByTagName("body")[0],style=document.createElement("style");
    var w=document.createElement("div"),f=document.createElement("form"),i=document.createElement("span"),ii=document.createElement("input"),b=document.createElement("span"),bi=document.createElement("input");
    var tips="舒服搜，网罗热门游戏";

    style.innerText="body,form,input{margin:0;padding:0;}.sf-wrap{position:fixed;z-index:1;bottom:0;}"+
    ".sf-form-input{border:1px solid #b6b6b6;position:relative;display:inline-block;vertical-align:top;border-right:0;}"+
    ".sf-form-input input{width:230px;height:16px;padding:9px 7px;font:16px arial;color:#999999;border:0;vertical-align:top;outline:none;}"+
    ".sf-form-button{width:102px;height:34px;border:1px solid #38f;border-bottom:1px solid #2e7ae5;background-color:#38f;display:inline-block;vertical-align:top;}"+
    ".sf-form-button input{cursor:pointer;width:102px;height:34px;line-height:34px;border:0;background-color:#38f;font-size:16px;color:white;}";

    w.className="sf-wrap";
    f.className="sf-form",f.name="f",f.target="_blank",f.action="http://www.shufusou.com/s";
    i.className="sf-form-input",ii.value=tips,ii.type="text",ii.name="q",ii.maxLength="100",ii.autocomplete="off";
    ii.onblur=function(){ii.value=ii.value==tips||ii.value==""?tips:ii.value;ii.style.color="#999999";i.style.borderColor="#b6b6b6";};
    ii.onfocus=function(){ii.value=ii.value==tips?"":ii.value;ii.style.color="#333333";i.style.borderColor="#4791ff";};
    b.className="sf-form-button",bi.value="舒服一下",bi.type="submit";
    i.appendChild(ii),b.appendChild(bi),f.appendChild(i),f.appendChild(b),w.appendChild(f),head.appendChild(style),body.appendChild(w);
}
}(window);
