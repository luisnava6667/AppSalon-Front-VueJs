<script setup>
import { formatCurrency } from '../helpers'
import {useAppointmentsStore} from '../stores/appointments'
const appointments = useAppointmentsStore()
defineProps({
    service: {
        type: Object
    }
})
</script>

<template>
    <div class="p-5 space-y-5 rounded-lg cursor-pointer " @click="appointments.onServiceSelected(service)"
    :class="appointments.isServiceSelected(service._id) ? 'text-white bg-blue-500' : 'bg-white'"
    >
        <p class="text-2xl font-light">{{service.name}}</p>
        <p class="text-4xl font-black "
        :class="appointments.isServiceSelected(service._id) ? 'text-white ' : ' text-blue-600'"
        >{{ formatCurrency(service.price)}}</p>
    </div>
</template>