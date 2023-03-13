
<script setup>
import { collection, getDocs, getFirestore, query, where } from '@firebase/firestore';
import { onMounted, ref } from 'vue';
import Homecards from '@/component/HomeCards.vue'
import { getDownloadURL, getStorage, ref as fref } from '@firebase/storage';



let data = ref([])
onMounted(async () => {
  const firestore = getFirestore()
  let q = query(collection(firestore, "projets"), where("IsHomepage", "==", true))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.value.push({ id: doc.id, ...doc.data() })
  });
  for (let i = 0; i < data.value.length; i++) {
    const storage = getStorage();
    for (let j = 0; j < data.value[i].images.length; j++) {
      const spaceRef = fref(storage, data.value[i].images[j]);
      await getDownloadURL(spaceRef)
        .then((url) => {
          data.value[i].images[j] = url;
        })
    }
  }
})
</script>

<template>
  <div class="border-b pb-10 mb-10">
    <h1 class="flex flex-col text-9xl uppercase font-semibold">
      <span class="flex" data-aos="zoom-in-left" data-aos-duration="2000">Web design</span>
      <span class="flex items-center -mt-10" data-aos="zoom-in-left" data-aos-delay="150" data-aos-duration="2000">Graphic
        d<img src="/ball.png" class="-mx-12 h-56" />sign</span>
      <span class="flex items-center -mt-10" data-aos="zoom-in-left" data-aos-delay="300" data-aos-duration="2000">Log
        <img src="/QanticLogo.png" class="h-28" />s</span>
      <span class="flex" data-aos="zoom-in-left" data-aos-delay="450" data-aos-duration="2000">Product</span>
    </h1>
    <div class="flex" data-aos="zoom-in-left" data-aos-delay="600" data-aos-duration="2000">
      <div class="flex uppercase gap-20">
        <div class="flex flex-col">
          <p>French graphic designer</p>
          <p>Based in France</p>
          <p>Montbéliard</p>
        </div>
        <div class="flex flex-col">
          <p>19 years old designer still</p>
          <p>studying for a diploma</p>
          <p>hoping to do a master in visuel</p>
          <p>and branding identity</p>
        </div>
        <div class="flex flex-col">
          <p>Experienced in adobe</p>
          <p>photoshop, illustrator,</p>
          <p>indesign, audition, XD, premiere,</p>
          <p>figma</p>
        </div>
      </div>
      <div class="text-9xl -mt-8 uppercase font-semibold">
        Design
      </div>
    </div>
  </div>
  <div>
    <div class="flex uppercase gap-20">
      <div class="flex flex-col">
        <p>You can also see my other</p>
        <p>project in the "projects" tab</p>
        <p class="mt-2">my other creation can be</p>
        <p>found all around the website</p>
        <p>make sure to look at it !</p>
        <div class="flex items-center">
          <img src="/Flower.png" alt="">
          <img src="/Flower.png" alt="" class="h-1/2">
        </div>
      </div>
      <div class="flex flex-col">
        <p>the projects present in this</p>
        <p>section are from 2022 & 2023</p>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4">
    <Homecards v-for="projet in data" :nom="projet.nom" :tags="projet.tags" :image="projet.images[0]" :id="projet.id" />
    <Homecards v-for="projet in data" :nom="projet.nom" :tags="projet.tags" :image="projet.images[0]" :id="projet.id" />
  </div>
</template>