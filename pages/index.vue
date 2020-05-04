<template>
  <div class="container-fluid">
    <h6>
      Выберите, что нужно сделать
    </h6>

    <section v-for="(items,title) in categories">
      <h5>{{title}}</h5>
      <div class="job-line row flex-row flex-nowrap" >
        <div v-for="(item,i) in items" class="job-item col-5">
          <h4>{{item.title}}</h4>
          <span>{{item.price}}p.</span>
        </div>
      </div>
    </section>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet aut blanditiis cum, dicta, ducimus eligendi est excepturi fuga harum ipsa iure libero minus modi nemo non perferendis perspiciatis quisquam totam. Alias assumenda distinctio dolorum ducimus ea eos exercitationem explicabo, in magnam molestias necessitatibus non nostrum optio perferendis possimus, praesentium quas, quod tempora ullam veritatis! Ab alias at cum cupiditate excepturi iusto optio quas reiciendis, saepe sapiente soluta tenetur.
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
          {
            "Покупки домой": [
              {"title": "Продукты по списку или под рецепт","description": "Позвольте Дела Вне Дома заняться регулярными покупками. Мы закупим продукты на неделю, доставим необходимые продукты под ваш рецепт или доставим все необходимое для вечеринки.\\nДела Вне Дома доставляют как из локальных магазинов, так и из крупных торговых центров.\\n\\nУкажите в комментариях к заказу, какие продукты нужно вам доставить","price":200  },
              {"title": "Набор продуктов №1","description": "В случае, когда требуется оперативно подготовиться к визиту гостей или не хочется заморачиваться с составлением списков\n\nБакалея (при нажатии – открывается описание поверх страницы)\nСахар Русский песок ГОСТ 3222-2015, 1кг 1 шт\nМука пшеничная Super хлебопекарная высшего сорта 2кг 1 шт\nМасло Super Оливковое Extra Virgin 0,5л 1 шт\nГречка Super ядрица в варочных пакетах 5*80г 1 шт\nРис Мистраль Кубань круглозерный 900г 1 шт\nМакаронные изделия Шебекинские Спирали 450г 1 шт\nГорошек Bonduelle зеленый нежный 200г 1 шт\nКукуруза Bonduelle сладкая 150г 2 шт\nФасоль Heinz в томатном соусе 415 г 1 шт","price": 300 },
              {"title": "Набор продуктов №2","description": "Свежее\nМякоть бедра Мираторг Black Angus охлажденная в вакуумной упаковке 800 г 1 шт\nХлеб Harry's American Sandwich Сандвичный пшеничный 470г 1 шт\nМолоко Parmalat ультрапастеризованное 3.5% 1л 1 шт\nКефир Домик в деревне 3.2% 1 кг 1 шт\nСметана Простоквашино 15% 315 г 1 шт\nТворог Простоквашино 5% 220 г 1 шт\nБиойогурт Danone Активиа натуральная 3.5% 150 г 4 шт\nМасло Экомилк сливочное 82.5% 180 г 1 шт\nМайонез Слобода Оливковый 67% 230мл 1 шт\nСыр Valio Голландский полутвердый 45% нарезка 120г 1 шт\",300 руб","price":  300}
            ],
            "Доставка цветов": [
              {"title": "Розы домой","description": "Если потребовалось украсить дом или собрать букет на мероприятие, Дела Вне Дома оперативно доставят цветы","price": 300 },
              {"title": "Тюльпаны домой","description": "Если потребовалось украсить дом или собрать букет на мероприятие, Дела Вне Дома оперативно доставят цветы","price":300 },
              {"title": "Розы домой","description": "Если потребовалось украсить дом или собрать букет на мероприятие, Дела Вне Дома оперативно доставят цветы","price": 300 }

            ],
            "Утилизация мусора": [
              {"title": "Вынос ежедневного мусора","description": "Наш помощник заберет ежедневный мусор от вашей двери или с лестничной клетки, достаточно просто сообщить как попасть в подъезд и мусор будет вынесен","price": 150 },
              {"title": "Вынос ежедневного мусора","description": "Наш помощник заберет ежедневный мусор от вашей двери или с лестничной клетки, достаточно просто сообщить как попасть в подъезд и мусор будет вынесен","price": 150 }
            ],
            "Уход за животным": [
              {"title": "Погулять с собакой","description": "Мы с огромным удовольствием выведем на прогулку вашу собаку","price": 150 },
              {"title": "Погулять с собакой","description": "Мы с огромным удовольствием выведем на прогулку вашу собаку","price": 150 },
              {"title": "Погулять с собакой","description": "Мы с огромным удовольствием выведем на прогулку вашу собаку","price": 150 },
              {"title": "Погулять с собакой","description": "Мы с огромным удовольствием выведем на прогулку вашу собаку","price": 150 }
            ]
          },
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
    color: white;
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
