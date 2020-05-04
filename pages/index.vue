<template>
  <div class="container-fluid">
    <h3>
      Выберите, что нужно сделать
    </h3>

    <section v-for="category in categories">
      <h2>услуги</h2>
      <div class="job-line row flex-row flex-nowrap">
        <div v-for="item in items" class="job-item col-5">
          <p>{{item}}</p>
          <p>500p.</p>
        </div>
      </div>

    </section>


    <div class="job-line row flex-row flex-nowrap">
      <div class="job-item col-7">
        <p>Продукты от диетолога</p>
        <p>500p.</p>
      </div>

      <div class="job-item col">
        <p>Продукты от диетолога</p>
        <p>500p.</p>
      </div>

      <div class="job-item col">
        <p>Продукты от диетолога</p>
        <p>500p.</p>
      </div>
    </div>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate debitis exercitationem fuga hic laborum
      optio pariatur quisquam similique sit? Aliquid assumenda at dicta distinctio itaque labore, natus, optio porro qui
      recusandae sint soluta sunt? Ad, aliquam animi assumenda consequuntur corporis culpa delectus deleniti dolorum
      eligendi enim exercitationem expedita fuga fugit harum laboriosam modi mollitia necessitatibus nisi non odit
      pariatur praesentium provident quam quasi qui, quibusdam quisquam rem saepe sapiente tempore ullam ut velit
      voluptate. Animi asperiores aspernatur, assumenda commodi corporis culpa dignissimos dolore excepturi id ipsam
      iste labore laboriosam magni pariatur quia rem rerum sit! Eos ipsam nam placeat.
    </p>
  </div>
</template>

<script>

  export default {
    components: {},
    data() {
      return {
        value: 42,
        categories:
          [
            {"Покупки домой": {}},
            {"Доставка цветов":{}},
            {"Утилизация мусора": {}},
            {"Уход за животным": {}}
          ],
        items: ['Продукты от диетолога', 'Продукты от шеф-повара', 'Продукты от гастронома №4']
      }
    }
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .job-line {
    overflow-y: auto;
    /*-ms-overflow-style: none;*/
  }

  /*.job-line::-webkit-scrollbar {*/
  /*  display: none;*/
  /*}*/

  .job-item {
    word-break: normal;
    background-color: dodgerblue;
    border-radius: 10px;
  }


</style>
