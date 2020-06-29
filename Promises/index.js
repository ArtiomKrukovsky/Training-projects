(function(){
"use strict"
    console.log('Request data...');

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Preparing data...');
            const requestData = {
                data: 'Some data',
                status: '200' 
            };
            resolve(requestData);
        }, 2000)
    });

    promise.then((data)=>{
       return new Promise((resolve, reject) => {
        setTimeout(() =>{
            data.recivedType = true;
            resolve(data)
        }, 2000);
       }) 
    }).then((recivedData) => {
        recivedData.modified = true;
        return recivedData;
    }).then(recivedData => {
        console.log('Modified', recivedData)
    }).catch((err) =>{
        console.log('Error', err);
    });
})();