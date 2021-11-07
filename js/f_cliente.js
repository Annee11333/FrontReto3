function traerInformacionCliente() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestasCliente(respuesta);
        }
    });
}

function pintarRespuestasCliente(respuesta) {
    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<td>" + "Nombre" + "</td>" + "<td>" + "Email" + "</td>" + "<td>" + "Contraseña" + "</td>" + "<td>" + "Edad" + "</td>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#tablaClientes").html(myTable);
}

function guardarInformacionClientes() {
    let var2 = {
        name: $("#idName").val(),
        email: $("#idEmail").val(),
        password: $("#idPassword").val(),
        age: $("#idAge").val()
    };
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        datatype: 'JSON',
        data: JSON.stringify(var2),
        url: "http://localhost:8080/api/Client/save",

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