const f=(n,...t)=>n.replace(/{([0-9]+)}/g,function(r,e){return typeof t[e]>"u"?r:t[e]});export{f};
