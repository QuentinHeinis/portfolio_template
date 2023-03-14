<template>
    <header class="text-white py-3 border-b mx-3 px-3 flex justify-between">
        <RouterLink to="/" class="hover__effect relative z-10">eden</RouterLink>
        <div class="flex gap-4 uppercase">
            <RouterLink to="/Project" class="hover__effect relative z-10">All Projects</RouterLink>
            <RouterLink to="/Logos" class="hover__effect relative z-10">All Logos</RouterLink>
        </div>
    </header>
</template>
<style>
/* .hover__effect:hover::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 45%;
    height: 2px;
    width: 12px;
    background: white;
    border-radius: 20%;

} */

.hover__effect::after {
    content: "";
    position: absolute;
    background: white;
    display: block;
    width: 100%;
    left: 0;
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

a.router-link-exact-active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>