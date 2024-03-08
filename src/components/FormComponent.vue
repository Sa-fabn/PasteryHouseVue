<template>
    <form class="form-component" @submit.prevent="onSubmit">
        <section>
            <InputComponent 
                v-for="(input, index) of formInputs"
                :key="index"
                :data="input"
                @input-change="onInputChange"
            />
        </section>
        <button>{{ buttonTextContent }}</button>
    </form>
</template>

<script setup>
import { ref, onMounted, reactive, defineProps, defineEmits } from "vue";
import InputComponent from "./InputComponent.vue";

const props = defineProps({
    buttonTextContent: String,
    formInputs: Array,
    onFormSubmit: Function
});

const formData = reactive({});
const onInputChange = (data) => {
    formData[data.name] = data.value;
};

const onSubmit = () => {
    props.onFormSubmit(formData);
};

onMounted(() => {
    console.log(' 🔵 form component has mounted');
});
</script>


<style scoped lang="scss">

.form-component {
    display: flex;
    flex-direction: column;

    .form-input {

        background-color: lightgoldenrodyellow;


    } 

    button {
        margin: 10px 0;
    }

}

</style>

