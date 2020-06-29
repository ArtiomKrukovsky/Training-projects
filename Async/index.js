const delay = ms => {
    return new Promise((resolve) => setTimeout(() => resolve(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';


/*function featchTodos(){
    console.log('Fetch todo started...')
    return delay(2000)
    .then(() =>{
       return fetch(url);
    })
    .then(response => 
        response.json()
    );
}

featchTodos()
    .then(json => {
        console.log('Data:', json);
    })
    .catch(err =>{
        console.error('Error:', json);
    })

/*async function fetchTodosAsync(){
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data:', data);
}

fetchTodosAsync() ; */

const sleep = ms => {
    return new Promise((resolve) =>{
        setTimeout(()=> resolve(), ms);
    })
}

async function fetchAsync(){
    await sleep(2000);
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
}

fetchAsync();