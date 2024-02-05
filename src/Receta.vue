<template>
    <div class="space-y-8 mt-24 mb-44 xl:my-24">
        <div class="max-w-screen-xl mx-auto relative overflow-hidden">
            <div class="relative isolate grid grid-cols-1 sm:grid-cols-2 gap-4 mx-5 my-5">
                <div>
                    <img :src="receta.strMealThumb" class="w-full rounded-2xl contrast-125 shadow-md" alt="">
                </div>
                <div class="">
                    <div class="space-y-5">
                        <h6 class="text-4xl font-medium text-slate-600">Receta: {{ receta.strMeal }}</h6>
                        <h6 class="text-2xl font-medium text-slate-600">Categoría: {{ receta.strCategory }}</h6>

                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button type="button"
                                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-t-xl  gap-3"
                                    data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                                    aria-controls="accordion-collapse-body-1">
                                    <span>Instrucciones</span>
                                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" class="hidden"
                                aria-labelledby="accordion-collapse-heading-1">
                                <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                                        {{ receta.strInstructions }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>

                            <a :href="receta.strYoutube" target="_blank"
                                class="border px-5 py-2 rounded-lg transition duration-150 ease-in border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">Ver
                                receta en youtube</a>
                        </div>
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

import { onMounted } from 'vue'
import {
    initAccordions,
    initCarousels,
    initCollapses,
    initDials,
    initDismisses,
    initDrawers,
    initDropdowns,
    initModals,
    initPopovers,
    initTabs,
    initTooltips
} from 'flowbite'

onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})

const receta = ref([])
const param = router.currentRoute.value.params.id

const categoriesFunc = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + param).then((response) => {
        receta.value = response.data.meals[0]

    })
}

categoriesFunc()
</script>