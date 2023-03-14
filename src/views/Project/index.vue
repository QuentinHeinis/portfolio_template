<script setup>
import { collection, getDocs, getFirestore, query } from '@firebase/firestore';
import { getDownloadURL, getStorage, ref as fref } from '@firebase/storage';
import { onMounted, ref } from 'vue';
let data = ref([])
onMounted(async () => {
    const firestore = getFirestore()
    let q = query(collection(firestore, "projets"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        data.value.push({ id: doc.id, ...doc.data() })
    });
    for (let i = 0; i < data.value.length; i++) {
        const storage = getStorage();
        const spaceRef = fref(storage, data.value[i].images[0]);
        await getDownloadURL(spaceRef)
            .then((url) => {
                data.value[i].images[0] = url;
            })
    }
    console.log(data.value)
})
</script>
<template>
    <div class="border-b">
        <h1 class="uppercase text-9xl w-1/2 ml-auto text-end">All my projects</h1>
        <div class="flex items-center -mt-10">
            <img src="/Flower.svg" alt="" class="object-contain h-14">
            <img src="/sun.svg" alt="" class="object-contain h-14">
        </div>
        <div v-for="projet in data" class="w-full h-[28rem] border-t mt-10 flex justify-between gap-9 py-8">
            <RouterLink :to="'/project/' + projet.id" class="flex flex-col w-1/2 justify-end gap-4 ">
                <div class="flex gap-2 ">
                    <p v-for="tag in projet.tags" class="px-2 py-[2px] uppercase text-lg border rounded-full">{{ tag }}</p>
                </div>
                <h2 class="text-7xl uppercase">{{ projet.nom }}</h2>
            </RouterLink>
            <RouterLink :to="'/project/' + projet.id" class="w-2/5">
                <img :src="projet.images[0]" alt="" class="object-cover w-full h-full">
            </RouterLink>
        </div>
    </div>
</template>