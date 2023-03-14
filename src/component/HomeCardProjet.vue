<script setup>

defineProps({
    image: { String },
    tags: { Array, default: ["ui", "ux"] },
    nom: { String, default: "qantic" },
    id: String
})
</script>

<template>
    <RouterLink :to="'/project/' + id"
        class="h-[28rem]   flex flex-col items-center justify-center relative w-full overflow-hidden bg-fixed bg-center"
        :style="{ backgroundImage: `url(${image})` }">
        <div class="z-10 bg-black bg-opacity-70 flex flex-col items-center justify-center relative w-full h-full gap-10">
            <div class="marquee">
                <h3 class="text-9xl uppercase flex gap-24">{{ nom }}</h3>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
                <span aria-hidden class="text-9xl ml-20 uppercase">{{ nom }}</span>
            </div>
            <div class="flex gap-4">
                <p v-for="tag in tags" class="px-4 py-2 border border-white rounded-full leading-none uppercase">{{ tag }}
                </p>
            </div>
        </div>
    </RouterLink>
</template>
<style scoped>
.wrapper {
    max-width: 100%;
    overflow: hidden;
}

.marquee {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: marquee 60s linear infinite;
}

.marquee h3,
.marquee span {
    display: inline-block;
}

@keyframes marquee {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-40%, 0, 0);
    }
}
</style>