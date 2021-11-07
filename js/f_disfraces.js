function traerInformacionCostume() {
    $.ajax({
        url: "http://localhost:8080/api/Costume/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestasCostumes(respuesta);
        }
    });
}

function pintarRespuestasCostumes(respuesta) {
    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<td>" + "Nombre" + "</td>" + "<td>" + "Marca" + "</td>" + "<td>" + "Modelo" + "</td>" + "<td>" + "Descripción" + "</td>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].year + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionCostume() {
    let var2 = {
        name: $("#idName").val(),
        brand: $("#idBrand").val(),
        year: $("#idYear").val(),
        description: $("#idDescripcion").val()
    };
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        datatype: 'JSON',
        data: JSON.stringify(var2),
        url: "http://localhost:8080/api/Costume/save",

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