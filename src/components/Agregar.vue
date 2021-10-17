<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Realizar proceso PQRS</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Escriba su nombre: </label>
          <input
            type="text"
            class="form-control"
            v-model="peticion.nombre"
            required
          />
        </div>
        <div class="form-group">
          <label>Tipo de petición: </label>
          
          <select name="" id="select" v-model="peticion.tipo">
            <option value="" >-- Select --</option>
            <option value="Peticion" >Petición</option>
            <option value="Queja" >Queja</option>
            <option value="Reclamo" >Reclamo</option>
            <option value="Sugerencia" >Sugerencia</option>
          </select>
        </div>

        <div class="form-group">
          <label>Asunto: </label>
          <input
            type="text"
            class="form-control"
            v-model="peticion.asunto"
            required
          />
        </div>

        <div class="form-group">
          <label>Fecha: </label>
          <input
            type="date"
            class="form-control"
            v-model="peticion.fecha"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      peticion: {
        nombre: "",
        tipo: "",
        asunto: "",
        fecha: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "https://pqrs-backend.herokuapp.com/api/agregar";

      axios
        .post(apiURL, this.peticion)
        .then(() => {
          console.log(this.peticion);

          this.$router.push("/view");
          this.peticion = {
            nombre: "",
            tipo: "",
            asunto: "",
            fecha: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#select{
  margin-left: 20px;
  width: 300px;
  text-align: center;
  padding: 10px;
}
</style>
