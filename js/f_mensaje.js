function traerInformacionMensaje() {
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestasMensajes(respuesta);
        }
    });
}

function pintarRespuestasMensajes(respuesta) {
    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<td>" + "Mensaje" + "</td>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#tabla_detalles").html(myTable);
}

function guardarInformacionMensajes() {
    let var2 = {
        messageText: $("#idText").val(),
    };
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        datatype: 'JSON',
        data: JSON.stringify(var2),
        url: "http://localhost:8080/api/Message/save",

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