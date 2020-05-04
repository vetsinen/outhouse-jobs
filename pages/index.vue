<template>
    <div class="container-fluid">
        <div v-if="isService === false">
            <p class="h1">
                Выберите категорию услуг
            </p>

            <!--      <div class="card col-5 text-white bg-primary mb-3" style="max-width: 18rem;">-->
            <!--        <div class="card-header"> </div>-->
            <!--        <div class="card-body">-->
            <!--          <h5 class="card-title" style="white-space: nowrap"></h5>-->
            <!--          <p class="card-text" style="white-space: nowrap" >Продукты от диетолога</p>-->
            <!--          <p class="card-text">-->
            <!--            500p.</p>-->
            <!--        </div>-->
            <!--      </div>-->

            <div v-for="catalog in catalogs" class="my-3">
                <p class="h2">{{catalog.name}}</p>
                <div class="job-line row flex-row flex-nowrap text-white">
                    <a v-for="service in catalog.services" class="job-item col-5 py-3 position-relative pointer"
                       :href="'/service/'+service.id">
                        <p class="h2">{{service.name}}</p>
                        <p></p>
                        <p class="position-absolute h4" style="bottom: 0; right: 0">{{service.price}}p.</p>
                    </a>
                </div>
            </div>
        </div>
        <div v-if="getService">
            <div v-if="isFull === false">
                <h1>{{getService.name}}</h1>
                <div class="card card-body">
                    <p>{{getService.description}}</p>

                    <div class="m-2 bg-light p-2" style="border-radius: 15px">
                        <table width="90%">
                            <tr>
                                <td>Стоимость услуги:</td>
                                <td align="right">{{getService.price}}</td>
                            </tr>
                        </table>
                    </div>
                    <p class="m-auto">
                        <a class="btn btn-primary" @click.prevent="selectService"><span
                                class="h4 text-white">Выбрать услугу</span></a>
                    </p>
                    <div class="my-2">
                        <p>
                            Дальше мы зададим несколько уточняющих вопросов. Ответы помогут понять, какие инструменты и материалы взять с собой. Работа будет сделана быстрее.</p>
                    </div>
                </div>
            </div>
            <div v-else>
                <h1>Заказ</h1>
                <div class="card card-body">
                    <h2 class="text-color">{{getService.name}}</h2>
                    <p>{{getService.description}}</p>
                    <div class="mx-2 my-3 bg-light p-2" style="border-radius: 15px">
                        <table width="90%">
                            <tr>
                                <td>Стоимость услуги:</td>
                                <td align="right">{{getService.price}}</td>
                            </tr>
                        </table>
                    </div>

                    <div class="my-3">
                        <form>
                            <label>Пожелания и уточнения</label>
                            <textarea rows="7" placeholder="Укажите ваши пожелания и предпочтения"></textarea>
                            <div class="row text-black-50">
                                <div class="cube text-color">+</div>
                                <span class="my-auto">Выберите файл в галерее и загрузите, если это требуется для заказа</span>
                            </div>
                            <p class="h4">Где и кому</p>
                            <label>Улица, дом, корпус</label>
                            <input type="text"/>
                            <label>Подъезд, этаж, квартира, офис</label>
                            <input type="text"/>
                            <label>Имя</label>
                            <input type="text"/>
                            <label>Email</label>
                            <input type="text"/>
                        </form>
                        <p class="m-auto">
                            <a class="btn btn-primary text-white">Оформить заказ</a>
                        </p>
                    </div>
                    <p>
                        Каждый испольнитель проходит нашу внутренюю проверку и нает свое дело. А ещё соблюдает чистоту и аккуратно выполняет свою работу</p>
                    <p>Стоимость услуги оплачивается на следующем шаге онлайн.</p>
                    <p>
                        В стоимость заказа не входит стоимость продуктов или товаров. Оплата происходит по чеку при получении.</p>
                    <p>Отправляя заказ, вы ринимаете условия <span class="btn-link pointer">Пользовательского соглашения</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="my-5 py-5">
            <p></p>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                isService: false,
                isFull: false,
                catalogs: [
                    {
                        name: 'Покупки домой',
                        services: [
                            {
                                id: 1,
                                name: 'Продукты по списку или под рецепт',
                                description: '"Позвольте Дела Вне Дома заняться регулярными покупками. Мы закупим продукты на неделю, доставим необходимые продукты под ваш рецепт или доставим все необходимое для вечеринки.\n' +
                                'Дела Вне Дома доставляют как из локальных магазинов, так и из крупных торговых центров.\n' +
                                'Укажите в комментариях к заказу, какие продукты нужно вам доставить."',
                                price: 200
                            },
                            {
                                id: 2,
                                name: 'Набор продуктов №1',
                                description: '"В случае, когда требуется оперативно подготовиться к визиту гостей или не хочется заморачиваться с составлением списков\n' +
                                '\n' +
                                'Бакалея (при нажатии – открывается описание поверх страницы)\n' +
                                'Сахар Русский песок ГОСТ 3222-2015, 1кг 1 шт\n' +
                                'Мука пшеничная Super хлебопекарная высшего сорта 2кг 1 шт\n' +
                                'Масло Super Оливковое Extra Virgin 0,5л 1 шт\n' +
                                'Гречка Super ядрица в варочных пакетах 5*80г 1 шт\n' +
                                'Рис Мистраль Кубань круглозерный 900г 1 шт\n' +
                                'Макаронные изделия Шебекинские Спирали 450г 1 шт\n' +
                                'Горошек Bonduelle зеленый нежный 200г 1 шт\n' +
                                'Кукуруза Bonduelle сладкая 150г 2 шт\n' +
                                'Фасоль Heinz в томатном соусе 415 г 1 шт"',
                                price: 300
                            },
                            {
                                id: 3,
                                name: 'Набор продуктов №2',
                                description: '"Свежее\n' +
                                'Мякоть бедра Мираторг Black Angus охлажденная в вакуумной упаковке 800 г 1 шт\n' +
                                'Хлеб Harry\'s American Sandwich Сандвичный пшеничный 470г 1 шт\n' +
                                'Молоко Parmalat ультрапастеризованное 3.5% 1л 1 шт\n' +
                                'Кефир Домик в деревне 3.2% 1 кг 1 шт\n' +
                                'Сметана Простоквашино 15% 315 г 1 шт\n' +
                                'Творог Простоквашино 5% 220 г 1 шт\n' +
                                'Биойогурт Danone Активиа натуральная 3.5% 150 г 4 шт\n' +
                                'Масло Экомилк сливочное 82.5% 180 г 1 шт\n' +
                                'Майонез Слобода Оливковый 67% 230мл 1 шт\n' +
                                'Сыр Valio Голландский полутвердый 45% нарезка 120г 1 шт"',
                                price: 300
                            },
                            {
                                id: 4,
                                name: 'Набор "Чистящие средства и хозяйственные товары" ',
                                description: '"Оперативно доставим чистящие средства для ежедневного ухода за домом или генеральной уборки\n' +
                                '\n' +
                                'Список средств:"',
                                price: 300
                            }
                        ]
                    },
                    {
                        name: 'Доставка цветов',
                        services: [
                            {
                                id: 5,
                                name: 'Розы домой',
                                description: 'Если потребовалось украсить дом или собрать букет на мероприятие, Дела Вне Дома оперативно доставят цветы.',
                                price: 300
                            },
                            {
                                id: 6,
                                name: 'Тюльпаны домой',
                                description: 'Если потребовалось украсить дом или собрать букет на мероприятие, Дела Вне Дома оперативно доставят цветы.',
                                price: 300
                            },
                            {
                                id: 7,
                                name: 'Гвоздики домой',
                                description: 'Если потребовалось украсить дом или собрать букет на мероприятие, Дела Вне Дома оперативно доставят цветы.',
                                price: 300
                            },
                            {
                                id: 8,
                                name: 'Купить и доставить другие цветы',
                                description: 'Если Вам требуется что-то особенное, что не укладывается в одну из опций, смело указывайте что вам требуется',
                                price: 300
                            }
                        ]
                    },
                    {
                        name: 'Утилизация мусора',
                        services: [
                            {
                                id: 9,
                                name: 'Вынос ежедневного мусора',
                                description: 'Наш помощник заберет ежедневный мусор от вашей двери или с лестничной клетки, достаточно просто сообщить как попасть в подъезд и мусор будет вынесен.',
                                price: 150
                            },
                            {
                                id: 10,
                                name: 'Вывоз хлама и объемного мусора',
                                description: '"Если у Вас накопилось много лишнего в квартире, будем рады оперативно утилизировать ваш мусор. \n' +
                                '\n' +
                                'Опишите в комментарии к заказу какие габариты мусора"',
                                price: 250
                            },
                        ]
                    },
                    {
                        name: 'Уход за животным',
                        services: [
                            {
                                id: 11,
                                name: 'Погулять с собакой',
                                description: 'Мы с огромным удовольствием выведем на прогулку вашу собаку.',
                                price: 150
                            },
                            {
                                id: 12,
                                name: 'Купить корм и товары для питомца',
                                description: '"Укажите что потребуется купить вашему питомцу.\n' +
                                '\n' +
                                'Составьте список покупок и напишите его в комментарии к заказу."',
                                price: 250
                            },
                        ]
                    }
                ]
            }
        },
        created() {
            if (typeof this.$route.params.id !== 'undefined') {
                this.isService = true;
            }
        },
        computed: {
            getService() {
                if (typeof this.$route.params.id !== 'undefined') {
                    let index = 0;
                    for (let i = 0; i < this.catalogs.length; i++) {
                        for (let j = 0; j < this.catalogs[i].services.length; j++) {
                            index++;
                            // console.log(this.$route.params.id)
                            if (index == this.$route.params.id) {
                                return this.catalogs[i].services[j];
                            }
                        }
                    }
                }
                return null;
            }
        },
        methods: {
            selectService() {
                this.isFull = true;
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
        background-color: #1F5BFF;
        border-radius: 10px;
        min-width: 250px;
        text-decoration: none !important;
        color: #fff !important;
    }

    .pointer {
        cursor: pointer;
    }

    .text-color {
        color: #1F5BFF;
    }

    .cube {
        width: 60px;
        height: 60px;
        font-size: 32px;
        text-align: center;
        border: 2px gray solid;
    }

    input, textarea {
        width: 100%;
    }

    label {
        font-weight: 600;
        margin-bottom: 0;
    }
</style>
