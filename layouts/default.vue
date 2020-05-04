<template>
  <div>
    <nav class="fixed-bottom navbar-expand navbar-light bg-light">
      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
              Catalogue
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/orders">
              Orders
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" class="nav-link" to="/profile">
              Profile
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 5px;
}

</style>
