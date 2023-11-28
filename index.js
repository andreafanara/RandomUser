window.onload = function () {
    let request = inviaRichiesta("get", "/api", {"results":10})
    //request = inviaRichiesta("get", "/api?results=100")
    request.fail(errore);
    request.done(function(data, test_status, jqXHR){
        //console.log(data);
        for(let i=0;i<data.results.length;i++)
        {
            console.log(data.results[i])
        }
    });
}

