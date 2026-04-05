data = new Promise((resolve,reject)=>{resolve (50)});

data.then((name)=>{return name*2}).then((names)=>names+10).then((mames)=>console.log (mames));