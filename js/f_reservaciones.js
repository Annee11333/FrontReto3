function traerInformacionReservation() {
    $.ajax({
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestasReservation(respuesta);
        }
    });
}

function pintarRespuestasReservation(respuesta) {
    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<td>" + "Fecha Prestamo" + "</td>" + "<td>" + "Fecha Devolución" + "</td>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#reservaciones").html(myTable);
}

function guardarInformacionReservation() {
    let var2 = {
        startDate: $("#idPrestamo").val(),
        devolutionDate: $("#idDevolucion").val()
    };
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        datatype: 'JSON',
        data: JSON.stringify(var2),
        url: "http://localhost:8080/api/Reservation/save",

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