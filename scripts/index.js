const listaloggedout = document.querySelectorAll(".logged-out");
const listaloggedin = document.querySelectorAll(".logged-in");
const datosdelacuenta = document.querySelector(".datosdelacuenta");

const configuraMenu = (user) => {
    if (user) {
        db.collection("usuarios")
            .doc(user.uid)
            .get()
            .then((doc) => {
                const html = `
                <p>Nombre: ${doc.data().nombre}</p>
                <p>Correo: ${user.email}</p>
                <p>Teléfono: ${doc.data().telefono}</p>
                <p>Dirección: ${doc.data().direccion}</p>
            `;
                datosdelacuenta.innerHTML = html;
            });

        listaloggedin.forEach((item) => (item.style.display = "block"));
        listaloggedout.forEach((item) => (item.style.display = "none"));
    } else {
        datosdelacuenta.innerHTML = "";
        listaloggedin.forEach((item) => (item.style.display = "none"));
        listaloggedout.forEach((item) => (item.style.display = "block"));
    }
};

const listadeplatillos = document.getElementById("listadeplatillos");

const obtienePlatillos = (data) => {
    if (data.length) {
        let html = "";

        data.forEach((doc) => {
            const platillo = doc.data();
            console.log(platillo);
            const columna = `

      <div class="card " style="width: 18rem  ; margin-right:50px; top:50px;">
  <img class="card-img-top" src="img/${platillo.imagen}" alt="${platillo.nombre}">
  <div class="card-body">
    <h5 class="card-title">${platillo.nombre}</h5>
    <p class="card-text">${platillo.info}</p>
    <p class="text-danger">$${platillo.precio}.00 pesos</p>
    <a href="#" class="btn btn-primary">Pagar Ahora</a>
  </div>
</div>
      
      

                
            `;

            html += columna;
        });

        listadeplatillos.innerHTML = html;
    } else {
        listadeplatillos.innerHTML =
            '<h1 class="text-center">Debes de Ingresar para ver los Paquetes de Vacaciones..</h1>';
    }

    
};
