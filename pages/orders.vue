<template>
    <div class="about">
        <h1>Мои заказы</h1>
        <div v-for="order in orders" class="my-3">
            <div class="card">
                <div class="card-header bg-white h2 text-color">
                    {{order.category_name}}
                </div>
                <div class="card-body">
                    <p>{{order.service_name}}</p>
                    <table width="100%">
                        <tr>
                            <td>Дата и время выполнение</td>
                            <td align="right">{{order.date}}</td>
                        </tr>
                        <tr>
                            <td>Статус заказа</td>
                            <td align="right">{{order.status}}</td>
                        </tr>
                    </table>
                    <div class="m-2 bg-light p-2" style="border-radius: 15px">
                        <table width="90%">
                            <tr>
                                <td>Стоимость услуги:</td>
                                <td align="right">{{order.price}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data() {
            return {
                orders: [
                    {
                        category_name: 'Вынести мусор',
                        service_name: 'Вынесем мусор от двери и не побеспокоим Вас.',
                        date: '18.03.2020 17:00',
                        status: 'Назначен исполнитель',
                        price: '200'
                    }
                ]
            }
        }
    };
</script>
<style>
    .text-color {
        color: #1F5BFF;
    }

    div {
        margin: 0;
        padding: 0;
    }
</style>
