document.addEventListener("DOMContentLoaded", function () {
  // Mostrar las personas cuando la página se cargue
  displayPeople();

  // Manejo del formulario de registro de persona
  document.getElementById("personForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Recoger los datos del formulario
    const person = {
      cedula: document.getElementById("id").value,
      primerNombre: document.getElementById("firstName").value,
      segundoNombre: document.getElementById("secondName").value,
      primerApellido: document.getElementById("firstLastName").value,
      segundoApellido: document.getElementById("secondLastName").value,
      sexo: document.getElementById("gender").value,
      edad: document.getElementById("age").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
    };

    // Obtener los datos almacenados en localStorage (si existen)
    let people = JSON.parse(localStorage.getItem("people")) || [];

    // Agregar la nueva persona
    people.push(person);

    // Guardar los datos actualizados en localStorage
    localStorage.setItem("people", JSON.stringify(people));

    // Limpiar el formulario
    document.getElementById("personForm").reset();

    // Mostrar los datos actualizados en la tabla
    displayPeople();
  });

  // Función para mostrar las personas en la tabla
  function displayPeople() {
    const people = JSON.parse(localStorage.getItem("people")) || [];
    const personList = document.getElementById("personList");
    personList.innerHTML = ""; // Limpiar la tabla antes de mostrar los nuevos datos

    people.forEach((person, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${person.cedula}</td>
        <td>${person.primerNombre}</td>
        <td>${person.segundoNombre}</td>
        <td>${person.primerApellido}</td>
        <td>${person.segundoApellido}</td>
        <td>${person.sexo}</td>
        <td>${person.edad}</td>
        <td>${person.phone}</td>
        <td>${person.email}</td>
        <td>
          <button onclick="editPerson(${index})">Editar</button>
          <button onclick="deletePerson(${index})">Eliminar</button>
        </td>
      `;
      personList.appendChild(row);
    });
  }

  // Eliminar una persona de la lista
  window.deletePerson = function (index) {
    let people = JSON.parse(localStorage.getItem("people"));
    people.splice(index, 1); // Eliminar la persona en el índice correspondiente
    localStorage.setItem("people", JSON.stringify(people)); // Guardar los cambios en localStorage
    displayPeople(); // Volver a mostrar los datos actualizados
  };

  // Editar los datos de una persona
  window.editPerson = function (index) {
    let people = JSON.parse(localStorage.getItem("people"));
    const person = people[index];

    // Rellenar el formulario con los datos de la persona
    document.getElementById("id").value = person.cedula;
    document.getElementById("firstName").value = person.primerNombre;
    document.getElementById("secondName").value = person.segundoNombre;
    document.getElementById("firstLastName").value = person.primerApellido;
    document.getElementById("secondLastName").value = person.segundoApellido;
    document.getElementById("gender").value = person.sexo;
    document.getElementById("age").value = person.edad;
    document.getElementById("phone").value = person.phone;
    document.getElementById("email").value = person.email;

    // Eliminar la persona del localStorage para reemplazarla después
    people.splice(index, 1);
    localStorage.setItem("people", JSON.stringify(people));

    // Mostrar los datos actualizados en la tabla
    displayPeople();
  };
});
