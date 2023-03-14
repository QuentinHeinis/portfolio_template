<script setup>
import { collection, getDocs, getFirestore, query, where } from '@firebase/firestore';
import { onMounted, ref } from 'vue';
import HomeCardProjet from '@/component/HomeCardProjet.vue'
import HomeCardLogo from '@/component/HomeCardLogo.vue'
import { getDownloadURL, getStorage, ref as fref } from '@firebase/storage';



let data = ref([])
let logos = ref([])
onMounted(async () => {
  const firestore = getFirestore()
  let q = query(collection(firestore, "projets"), where("IsHomepage", "==", true))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.value.push({ id: doc.id, ...doc.data() })
  });
  for (let i = 0; i < data.value.length; i++) {
    const storage = getStorage();
    const spaceRef = fref(storage, data.value[i].imagePres);
    await getDownloadURL(spaceRef)
      .then((url) => {
        data.value[i].imagePres = url;
      })
  }
  q = query(collection(firestore, "logos"), where("IsHomepage", "==", true))
  const querySnapshotL = await getDocs(q);
  querySnapshotL.forEach((doc) => {
    logos.value.push({ id: doc.id, ...doc.data() })
  });
  for (let i = 0; i < logos.value.length; i++) {
    const storage = getStorage();
    const spaceRef = fref(storage, logos.value[i].image);
    await getDownloadURL(spaceRef)
      .then((url) => {
        logos.value[i].image = url;
      })
  }
  console.log(logos.value)
})
</script>

<template>
  <div class="border-b pb-10 mb-10 relative">
    <span class="absolute top-1/3 left-2/3 h-32 w-32 bg-white bg-opacity-30 backdrop-blur-md z-10 border-2 rounded-full "
      data-aos="zoom-in-left" data-aos-delay="600" data-aos-duration="2000"></span>
    <span class="absolute top-2/3 left-1/3 h-24 w-24 bg-white bg-opacity-30 backdrop-blur-md z-10 border-2 rounded-full"
      data-aos="zoom-in-left" data-aos-delay="600" data-aos-duration="2000"></span>
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
  <div class="border-b pb-10 mb-10 relative w-full overflow-hidden">
    <div class="flex uppercase gap-20" data-aos="fade-right" data-aos-duration="1500">
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
    <span class="absolute top-1/4 left-2/3 h-32 w-32 bg-white bg-opacity-30 backdrop-blur-md z-10 border-2 rounded-full "
      data-aos="zoom-in-left" data-aos-delay="150" data-aos-duration="1500"></span>
    <span class="absolute top-2/3 left-[40%] h-24 w-24 bg-white bg-opacity-30 backdrop-blur-md z-10 border-2 rounded-full"
      data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1500"></span>
    <h2 class="text-[12rem] uppercase leading-none text-end flex flex-col" data-aos="fade-left" data-aos-duration="1500">
      Selected <span>Projects</span>
    </h2>
  </div>
  <div class="flex flex-col gap-6 mb-6">
    <HomeCardProjet v-for="projet in data" :nom="projet.nom" :tags="projet.tags" :image="projet.imagePres"
      :id="projet.id" />
    <HomeCardProjet v-for="projet in data" :nom="projet.nom" :tags="projet.tags" :image="projet.imagePres"
      :id="projet.id" />
  </div>
  <div class="pb-10 mb-10 relative">
    <span
      class="absolute top-1/4 left-1/3 h-28 w-28 bg-white bg-opacity-30 backdrop-blur-md z-10 border-2 rounded-full "></span>
    <span
      class="absolute top-3/4 left-[40%] h-24 w-24 bg-white bg-opacity-30 backdrop-blur-md z-10 border-2 rounded-full"></span>
    <h2 class="text-[12rem] uppercase leading-none flex flex-col">
      Selected <span>Logos</span>
    </h2>
    <div class="flex flex-col items-end w-4/5 mx-auto -mt-20">
      <div class="w-1/2 ">
        <p>IN ADDITION TO THE CONSTRUCTED PROJECTS I EXECUTE, I ALSO PRODUCE OTHER DESIGNS USING ADOBE
          ILLUSTRATOR TO SHOWCASE THE IDEAS AND CONCEPTS OF A BUSINESS, INDIVIDUAL, OR AS AN EXTENSION OF PROJECTS.</p>
        <div class="flex">
          <img src="/Flower.png" alt="">
          <img src="/sun.png" alt="">
        </div>
      </div>

    </div>
  </div>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-4/5 mx-auto gap-10 pb-6 border-b ">
    <HomeCardLogo v-for="logo in logos" :num="logo.numero" :image="logo.image" :smallDesc="logo.smallDesc" :id="logo.id" :largeDesc="logo.largeDesc"/>
    <HomeCardLogo v-for="logo in logos" :num="logo.numero" :image="logo.image" :smallDesc="logo.smallDesc" :id="logo.id" :largeDesc="logo.largeDesc"/>
  </div>
</template>