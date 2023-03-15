<script setup>
import { onMounted, ref } from 'vue';

var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerDiv = ref()
onMounted(() => {
    headerDiv.value = document.querySelector("header");
})

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    /* if scrolling down, let it scroll out of view as normal */
    if (prevScrollpos <= currentScrollPos) {
        headerDiv.value.classList.remove("fixedToTop");
        headerDiv.value.style.top = "-7.2rem";
    }
    /* otherwise if we're scrolling up, fix the nav to the top */
    else {
        headerDiv.value.classList.add("fixedToTop");
        headerDiv.value.style.top = "0";
    }
    if (currentScrollPos < 10) {
        headerDiv.value.classList.remove("fixedToTop");
    }

    prevScrollpos = currentScrollPos;
}
</script>
<template>
    <header class="text-white py-3 border-b mx-3 px-3 flex justify-between items-center ">
        <RouterLink to="/" class="hover__effect relative z-10">eden</RouterLink>
        <div class="flex gap-4 uppercase text-xs md:text-base items-center">
            <RouterLink to="/Project" class="hover__effect relative z-10">All Projects</RouterLink>
            <RouterLink to="/Logos" class="hover__effect relative z-10">All Logos</RouterLink>
        </div>
    </header>
</template>
<style>
header {
    transition: all 0.3s ease-in-out;
    z-index: 100;
}

header.fixedToTop {
    position: fixed;
    background: #272727;
    top: 0;
    left: 0;
    right: 0;
}

.hover__effect::after {
    content: "";
    position: absolute;
    background: white;
    display: block;
    left: 0;
    width: 100%;
    border-radius: 0.5rem;
    height: 2px;
    z-index: -1;
    transition: transform .7s ease;
    /* Initial state */
    transform: scaleX(0);
    transform-origin: bottom right;
}

.hover__effect:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>