let ans = document.querySelector('.preAns');
ans.innerText = "";

/// for cut 
document.querySelector('.c').addEventListener('click',()=>{
    ans.innerText = "";
})

// FOR del
document.querySelector('.del').addEventListener('click',()=>{
    if(ans.innerText === "ERROR!" || ans.innerText === 'NaN' || ans.innerText === 'Infinity')ans.innerText = "";
    let final = ans.innerText;
    ans.innerText = final.substring(0,final.length-1);
})

// FOR Equal 
document.querySelector('.equal').addEventListener('click', ()=>{
    try{
        if(eval(ans.innerText) === undefined)throw new Error("ERROR!");
        if(eval(ans.innerText) === NaN) throw new Error("ERROR!");
        ans.innerText = `${eval(ans.innerText)}`;
    }
    catch(error){
        ans.innerText = "ERROR!";
    }
    
})

//FOR %
document.querySelector('.percentage').addEventListener('click',()=>{
    try{
        let final = eval(ans.innerText);
        if(final === NaN || final === undefined || ans.innerText === 'Infinity')throw new Error('ERROR!');
        ans.innerText = `${final/100}`;
    }
    catch(error){
        ans.innerText = "ERROR!";
    }
})

//FOr x 
document.querySelector('.multi').addEventListener('click',()=>{
    if(ans.innerText === "ERROR!" || ans.innerText === 'NaN' || ans.innerText === 'Infinity')ans.innerText = "";
    ans.innerText += '*';
})

// FOR /
document.querySelector('.division').addEventListener('click',()=>{
    if(ans.innerText === "ERROR!" || ans.innerText === 'NaN' || ans.innerText === 'Infinity')ans.innerText = "";
    ans.innerText += '/';
})

//// FOR all common number and + - 
let button =Array.from(document.querySelectorAll('.no'));
button.forEach(e=>{
    e.addEventListener('click',element=>{
       if(ans.innerText === "ERROR!" || ans.innerText === 'NaN' || ans.innerText === 'Infinity')ans.innerText = "";
        ans.innerText += e.innerText;
    })
})