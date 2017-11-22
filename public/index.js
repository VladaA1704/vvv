

const setResult = result=>document.getElementById('result').innerHTML=`Результат:${result}`;

const addition=(a, b)=>{
  const promise = fetch(`http://localhost:3000/addition?a=${a}&b=${b}`);
 promise.then(res => {
  if (res.status !== 200) {  
   console.log(`Looks like there was a problem. Status Code: ${res.status}`);
   return;
  }
  res.json().then(({ result }) => setResult(`${a}+${b}=${result}`));
 }).catch(err => console.log(`Fetch error: ${err}`))
};


const subtraction=(a, b)=>{
  const promise = fetch(`http://localhost:3000/subtraction?a=${a}&b=${b}`);
 promise.then(res => {
  if (res.status !== 200) {
   console.log(`Looks like there was a problem. Status Code: ${res.status}`);
   return;
  }
  res.json().then(({ result }) => setResult(`${a}-${b}=${result}`));
 }).catch(err => console.log(`Fetch error: ${err}`))
};

const multiplication=(a, b)=>{
  const promise = fetch(`http://localhost:3000/multiplication?a=${a}&b=${b}`);
 promise.then(res => {
  if (res.status !== 200) {
   console.log(`Looks like there was a problem. Status Code: ${res.status}`);
   return;
  }
  res.json().then(({ result }) => setResult(`${a}*${b}=${result}`));
 }).catch(err => console.log(`Fetch error: ${err}`))
};

const division=(a, b)=>{
  const promise = fetch(`http://localhost:3000/division?a=${a}&b=${b}`);
 promise.then(res => {
  if (res.status !== 200) {
   console.log(`Looks like there was a problem. Status Code: ${res.status}`);
   return;
  }
  res.json().then(({ result }) => setResult(`${a}/${b}=${result}`));
 }).catch(err => console.log(`Fetch error: ${err}`))
};
