export const httpPostRequest = async (endpoint, method, data) => {
    fetch('http://127.0.0.1:3000/'+endpoint, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }).then((response) => {
        if (response.ok) {
            alert('Success!');
        }
    }).catch((err) => {
        console.error(err);
    });
}

export const httpGetRequest = (endpoint, method) => {
    //console.log(endpoint)
    return fetch('http://127.0.0.1:3000/'+endpoint, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


// export const httpGetRequest = (endpoint, method) => {
//     console.log(endpoint)
//     fetch('http://127.0.0.1:5000/'+endpoint, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(res=>res.json()).then(data=>{
//         console.log(data)
//     })
// }


