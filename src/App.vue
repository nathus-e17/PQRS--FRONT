<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="
        navbar navbar-dark
        bg-primary
        justify-content-between
        flex-nowrap flex-row
      "
    >
      <div class="container">
        <a class="navbar-brand float-left" href="/"
          ><img src="./assets/logo.png" alt="" width="60" />PQRS System</a
        >
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-5 active" to="/"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-5" to="/agregar"
              >Agregar PQRS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-5" to="/view"
              >Sumario</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-5" to="/about"
              >Sobre nosotros</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>

    <footer>
      <p>Copyright © || PQRS System 2021</p>
    </footer>
  </div>
</template>

<style  scoped>
img {
  margin-right: 20px;
}

footer {
  position: fixed;
  height: 100px;
  bottom: 0;
  width: 100%;
  background: #ccc;
  display: flex;

  justify-content: center;
  align-items: center;
}

p {
  margin-top: 50px;
}
</style>
