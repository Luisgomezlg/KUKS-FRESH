<template>
    <div class="space-y-8 mt-24 mb-44 xl:my-24">
        <div class="max-w-screen-xl mx-auto relative overflow-hidden">
            <div class="relative isolate grid grid-cols-1 sm:grid-cols-2 gap-4 mx-5 my-5">
                <div>
                    <img :src="product.strMealThumb" class="w-full rounded-2xl contrast-125 shadow-md" alt="">
                </div>
                <div class="flex justify-center">
                    <div class="space-y-5">
                        <h6 class="text-4xl font-medium text-slate-600">{{ product.strMeal }}</h6>
                        <p class="text-2xl font-medium text-slate-600">Precio: $ {{ precio }}</p>
                        <button @click="comprar"
                            class="border px-5 py-2 rounded-lg transition duration-150 ease-in border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import axios from "axios"
import router from "./router";
import Swal from 'sweetalert2'

const product = ref([])
const precio = Math.floor(Math.random() * (5000 - 500)) * 50;
const param = router.currentRoute.value.params.id

const categoriesFunc = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + param).then((response) => {
        product.value = response.data.meals[0]

    })
}
const comprar = () => {
    Swal.fire({
        title: "Muy bien",
        text: "Producto comprado",
        icon: "success"
    });
}
categoriesFunc()
</script>