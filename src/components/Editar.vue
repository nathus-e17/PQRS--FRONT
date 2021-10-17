<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Editar {{ peticion.tipo}} de {{peticion.nombre}}</h3>
      <br>
      <h4>Realizado el dia {{peticion.fecha.slice(0,10)}}</h4>
      <br>
      <br>

      <br>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Tipo de petición</label>
          
          <select name="" id="" v-model="peticion.tipo">
            <option value="Peticion" >Petición</option>
            <option value="Queja" >Queja</option>
            <option value="Reclamo" >Reclamo</option>
            <option value="Sugerencia" >Sugerencia</option>
          </select>
        </div>

        <div class="form-group">
          <label>Asunto</label>
          <input
            type="text"
            class="form-control"
            v-model="peticion.asunto"
            required
          />
        </div>

        

        <div class="form-group">
          <button class="btn btn-danger btn-block">Editar</button>
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
      peticion: {},
    };
  },
  created() {
    let apiURL = `https://pqrs-backend.herokuapp.com/api/editar/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.peticion = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `https://pqrs-backend.herokuapp.com/api/actualizar/${this.$route.params.id}`;

      axios
        .put(apiURL, this.peticion)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
