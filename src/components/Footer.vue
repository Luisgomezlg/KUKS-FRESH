<template>
    <footer class="bg-orange-50 rounded-lg shadow m-4 ">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{ currentYear }} <a href="https://github.com/luisgomezlg"
                    target="_blank" class="hover:underline">Kuks Fresh, by <span class="font-bold text-orange-500">luisgomezlg</span></a>. Todos los derechos reservados.
            </span>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentYear = ref(new Date().getFullYear());

const updateYear = () => {
    currentYear.value = new Date().getFullYear();
};

onMounted(() => {
    setInterval(updateYear, 1000);
});
</script>
