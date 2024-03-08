<template>
    <main class="login-page">
        <h1>
        Login Page 
        <!-- child component -->
        <section class="login-page__form-section">
            <FormComponent 
                v-bind:buttonTextContent="'Valider'" 
                :formInputs="FORM_INPUTS"
                :onFormSubmit="onFormSubmit"
            />
        </section>
        </h1>
    </main>
  
</template>

<script setup>
 
import { useRouter } from 'vue-router';
import FormComponent from "../components/FormComponent.vue";
import { ref, onMounted,  reactive } from "vue";

const router = useRouter();


// CONSTANTS
const FORM_INPUTS = [

    {
        name: 'email',
        id: 'email',
        placeholder: 'Email',
        type: 'email'
    },
    {
        name: 'password',
        id: 'password',
        placeholder: 'Password',
        type: 'password'
    }

]

// chaque fois qu'on tape dquelques choses dans ces champs, les valeurs seront automatiquement mis à jour.
const loginData = reactive({
    email: '',
    password: '',
})


// FUNCTIONS
const onFormSubmit = (data) => {
    console.log('🔴 into on form submit') // lorsque la fonction est appelée, elle affiche un msg dans la console pour indiquer qu'elle a été appelée.
    loginData.email = data.email
    loginData.password = data.password
    console.log('loginData', loginData)
    // elle vérifie si les valeurs entrées correspondent à ces valeurs là...
    if (loginData.email === 'email_utilisateur' && loginData.password === 'mot_de_passe_utilisateur') {
        // Redirection vers la page de menu
        router.push({ name: 'menu' });
    } else {
        // Afficher un message d'erreur si l'authentification échoue
        console.error('Adresse e-mail ou mot de passe incorrect.');
    }

}


// hook de cycle de vie pour afficher un message dans la console lorsque LoginPage est monté dans le DOM avec succés.
onMounted(() => {
    console.log('🟠 Login Page has mounted')
})

</script>

<style scoped lang="scss">

.login-page {

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__form-section {
        margin-top: 10px;
        display: flex;
       
    }


}

  

</style> 