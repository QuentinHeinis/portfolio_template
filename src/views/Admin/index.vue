<script setup>
import login from '@/component/admin/login.vue'
import tableContent from '@/component/admin/tableContent.vue'
import { user } from '../../firebase';
</script>

<template>
    <login v-if="!user" />
    <tableContent v-else />
</template>