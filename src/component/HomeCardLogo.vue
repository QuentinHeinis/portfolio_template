<script setup>

defineProps({
    image: String,
    num: String,
    smallDesc: String,
    largeDesc: String,
    id: String
})
</script>

<template>
    <div class="flex flex-col max-w-sm">
        <div class="text-white border-l-2 h-60 gap-12 flex justify-between">
            <div class="flex flex-col justify-between pl-4 ">
                <p class="text-2xl">{{ num }}</p>
                <div class="h-32">
                    <img :src="image" alt="" class="h-full w-full object-contain">
                </div>
            </div>
            <div class="w-1/2">
                <p class="text-end">{{ smallDesc }}</p>
            </div>
        </div>
        <div class="max-w-lg">{{ largeDesc }}</div>
    </div>
</template>