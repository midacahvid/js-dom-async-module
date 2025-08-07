
function callback(text){
    console.log(text);   
}

function fetchDataWithCallback(callback){
    setTimeout(() =>{
        try {
            let error = true;
            if (error) {
                throw new Error('Error: Fetch failed');
            }
            callback('Data fetched');
        } catch (error) {
            console.error(error.message);
        }
    }, 2000)
}

fetchDataWithCallback(callback);