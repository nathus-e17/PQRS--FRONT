<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Asunto</th>
            <th>Fecha</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in Peticiones" :key="i._id">
            <td>{{ i.nombre }}</td>
            <td>{{ i.tipo }}</td>
            <td>{{ i.asunto }}</td>
            <td>{{ i.fecha.slice(0,10) }}</td>
            <td>
              <router-link
                :to="{ name: 'editar', params: { id: i._id } }"
                class="btn btn-success"
                >Editar
              </router-link>
              <button
                @click.prevent="eliminarPeticion(i._id)"
                class="btn btn-danger"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Peticiones: [],
    };
  },
  created() {
    let apiURL = "https://pqrs-backend.herokuapp.com/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Peticiones = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    eliminarPeticion(id) {
      let apiURL = `https://pqrs-backend.herokuapp.com/api/borrar/${id}`;
      let indexOfArrayItem = this.Peticiones.findIndex((i) => i._id === id);

      if (window.confirm("Quieres eliminar esta petición?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Peticiones.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
