<template>
    <article>
        <label :for="data.id"></label>
        <input 
            v-if="data.type === 'text' || data.type === 'email' || data.type === 'password'"
            :placeholder="data.placeholder" 
            :name="data.name" 
            :id="data.id"
            :type="data.type"
            v-model="inputValue"
            @input="onInput"
        />
    </article>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
    data: Object
});

const inputValue = ref("");

onMounted(() => {
    console.log('🟠 [input-component] has mounted');
});

watch(inputValue, (val) => {
    console.log('val', val);
    emit('inputChange', {
        name: props.data.name,
        value: val
    });
});
</script>


<style scoped lang="scss">

</style>