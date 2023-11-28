const URL = "https://randomuser.me"

function inviaRichiesta(method, url, parameters={}) {
    let contentType;
    if(method.toUpperCase()=="GET")
        contentType="application/x-www-form-urlencoded;charset=utf-8";
    else{
        contentType = "application/json; charset=utf-8"
        parameters = JSON.stringify(parameters);
    }
    let ajaxOptions={
        url: URL + url,
        type: method,
        data: parameters,
        contentType: contentType,
        dataType: "json", // default
        timeout : 5000,
    }
    return $.ajax(ajaxOptions) // ritorna una promise
}

function errore (jqXHR, test_status, str_error) {
    if(jqXHR.status==0)
        alert("connection refused or server timeout");
    else if (jqXHR.status == 200)
        alert("Errore Formattazione dati\n" + jqXHR.responseText);
    else
        alert("Server Error: "+jqXHR.status+ " - " +jqXHR.responseText);
}