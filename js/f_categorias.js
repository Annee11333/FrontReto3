function traerInformacionCategory() {
    $.ajax({
        url: "http://localhost:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestasCategory(respuesta);
        }
    });
}

function pintarRespuestasCategory(respuesta) {
    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<td>" + "Nombre" + "</td>" + "<td>" + "Descripción" + "</td>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#categoria").html(myTable);
}

function guardarInformacionCategory() {
    let var2 = {
        name: $("#idName").val(),
        description: $("#idDescripcion").val()
    };
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        datatype: 'JSON',
        data: JSON.stringify(var2),
        url: "http://localhost:8080/api/Category/save",

        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}