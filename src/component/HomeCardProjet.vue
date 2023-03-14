<script setup>

defineProps({
    image: { String },
    tags: { Array, default: ["ui", "ux"] },
    nom: { String, default: "qantic" },
    id: String
})
</script>

<template>
    <RouterLink :to="'/projet/'+id" class="h-[28rem]   flex flex-col items-center justify-center relative w-full overflow-hidden bg-fixed bg-center"
        :style="{ backgroundImage: `url(${image})` }">
        <div class="z-10 bg-black bg-opacity-70 flex flex-col items-center justify-center relative w-full h-full gap-10">
            <h3 class="text-9xl uppercase flex gap-24">{{ nom }}<span aria-hidden>{{ nom }}</span><span aria-hidden>{{
                nom
            }}</span></h3>
            <div class="flex gap-4">
                <p v-for="tag in tags" class="px-4 py-2 border border-white rounded-full leading-none uppercase">{{ tag }}
                </p>
            </div>
        </div>
    </RouterLink>
</template>
<style scoped></style>