<template>
    <Disclosure as="nav" class="bg-slate-50" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex justify-center w-32 items-center">
            <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-orange-500 text-2xl font-semibold whitespace-nowrap">KUKS FRESH</span>
            </RouterLink>
          </div>
          <div class="hidden sm:block sm:mx-auto">
            <div class="flex space-x-4">
              <a v-for="(item, index) in navigation" @click="selectItem(index)" :key="item.name" :href="item.href"
              :class="['inline-flex text-orange-500 items-center justify-center p-4 transition duration-200 ease-in rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group', { 'text-orange-500 border-orange-500 border-b-4': selectedIndex === index }]"
              :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="absolute w-32 hidden sm:flex inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Abrir</span>
                <img class="h-8 w-8 rounded-full" src="../assets/user.png" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Perfil</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Pedidos</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Salir</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="(item, index) in navigation" @click="selectItem(index)" :key="item.name" as="a" :href="item.href" 
        :class="[item.current ? '' : '', 'block rounded-md px-3 py-2 text-base font-medium', { 'bg-gray-900 text-orange-500 border-orange-500 border-b-4': selectedIndex === index }]"
         :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Nosotros', href: '#', current: false },
  { name: 'Videos', href: '#', current: false },
]

const selectedIndex = ref(0);

const selectItem = (index) => {
    selectedIndex.value = index;
}
</script>
