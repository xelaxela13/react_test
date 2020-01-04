function Get(url) {
    let response = {};
    fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                response = {success: true, result: result}
            },
            (error) => {
                response = {success: false, result: error}
            }
        );
    console.log(response)
    return response
}

export default Get;