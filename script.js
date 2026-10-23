
async function cargarArchivo(id, archivo) {
    const respuesta = await fetch(archivo);
    const contenido = await respuesta.text();

    document.getElementById(id).innerHTML = contenido;
}

async function iniciarPagina() {
    try {
        await cargarArchivo("header", "header.html");
        await cargarArchivo("footer", "footer.html");
    } catch (error) {
        console.error("Error al cargar el encabezado o el pie de página:", error);
    }
}

iniciarPagina();
