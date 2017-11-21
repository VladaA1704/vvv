
const setResult = result=>document.getElementById('result').innerHTML=`Результат:${result}`;

const addition=(a,b)=>{
    result=parseInt(a) + parseInt(b);
    setResult(`${a}+${b}=${result}`);
};

const subtraction=(a,b)=>{
    result=parseInt(a) - parseInt(b);
    setResult(`${a}-${b}=${result}`);
};
const multiplication=(a,b)=>{
    result=parseInt(a) * parseInt(b);
    setResult(`${a}*${b}=${result}`);
};
const division=(a,b)=>{
    result=parseInt(a) / parseInt(b);
    setResult(`${a}/${b}=${result}`);
};