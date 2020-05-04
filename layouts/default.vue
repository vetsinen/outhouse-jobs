<template>
  <div>
    <nav class="row flex-row flex-nowrap fixed-bottom"
         style="font-size:3em; background-color: white; margin: 15px 5px">
      <nuxt-link active-class="active" class="nav-link col" to="/" title="Catalogue">
        &#127911;
      </nuxt-link>
      <nuxt-link active-class="active col-4" class="nav-link col" to="/orders" title="Orders">
        &#9874;
      </nuxt-link>
      <nuxt-link active-class="active" class="nav-link col" to="/profile" title="Profile">
        &#128084;
      </nuxt-link>
    </nav>

    <nuxt/>
  </div>
</template>

<script>
  // <nuxt-link active-class="active" class="nav-link" to="/profile">
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 10px;
  }

</style>
