<template>
    <div class="space-y-8">
        <div class="max-w-xl mx-auto relative overflow-hidden">
            <div class="relative isolate mx-5 my-5">
                <h6 class="text-2xl font-medium text-slate-500">" People who loves to eat are always Best People <p
                        class="text-orange-500 text-right">Julia Child "</p>
                </h6>
            </div>
        </div>
        <div class="max-w-7xl mx-auto space-y-5">
            <div class="">
                <div>
                    <img src="./assets/banner.png" alt="">
                </div>
            </div>
            <div class="flex justify-between gap-2 items-center">
                <div>
                    <h6 class="font-bold text-orange-500">Categorias</h6>
                </div>
                <div>
                    <input type="search" class="text-sm px-4 border-0 w-full rounded-3xl bg-slate-200"
                        placeholder="Search by name">
                </div>
            </div>
            <div class="">
                <div class="h-40 lg:h-auto overflow-auto">
                    <button v-for="item in categories" type="button" @click="filterCategory(item.strCategory)"
                        class="text-slate-500 bg-slate-200 hover:bg-slate-400 transition duration-200 ease-in font-normal rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center me-4 mb-2">
                        <img :src="item.strCategoryThumb" class="w-full h-6 me-2" alt="">
                        {{ item.strCategory }}
                    </button>
                </div>
            </div>
            <div>
                <h6 class="font-bold text-orange-500">Recetas</h6>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10">
                <div v-for="(item, index) in products" :key="index"
                    class="bg-white border border-slate-50 rounded-lg shadow-lg shadow-slate-100 transition duration-200 ease-in hover:scale-105">
                    <RouterLink :to="'/producto/' + item.idMeal" href="#" class="block overflow-hidden rounded-t-lg">
                        <img class="h-60 w-full object-cover" :src="item.strMealThumb" alt="" />
                    </RouterLink>
                    <div class="p-4 space-y-2">
                        <div class="flex justify-between">
                            <div class="text-orange-500 font-bold">{{ item.strMeal }}</div>
                            <div>
                                <img src="./assets/heart-outline.png" class="h-6" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between text-slate-500 font-medium">
                            <div class="">Categoria: {{ item.strCategory }}</div>
                            <span class="flex gap-2">
                                <ClockIcon class="h-6" />10 - 20
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { ClockIcon } from "@heroicons/vue/24/outline"
import desserts from "../src/assets/desserts.png"
import drinks from "../src/assets/drinks.png"
import fastfood from "../src/assets/fastfood.png"
import breakfast from "../src/assets/breakfast.png"
import lunch from "../src/assets/lunch.png"
import axios from "axios"

const products = ref([]), categories = ref([])

const filterCategory = (value) => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + value).then((response) => {
        products.value = response.data.meals
    })
}

const categoriesFunc = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((response) => {
        categories.value = response.data.categories
    })
}

const productsFunc = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=k").then((response) => {
        products.value = response.data.meals
    })
}
productsFunc()
categoriesFunc()
</script>