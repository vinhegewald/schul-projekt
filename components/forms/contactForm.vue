<script setup lang="ts">
import { ref } from 'vue';

interface FormData {
  anrede: 'Frau' | 'Herr' | 'Keine Angabe' | '';
  vorname: string;
  nachname: string;
  email: string;
  kommentar: string;
  datenschutz: boolean;
}

const formData = ref<FormData>({
  anrede: '',
  vorname: '',
  nachname: '',
  email: '',
  kommentar: '',
  datenschutz: false,
});

const handleSubmit = () => {
  if (!formData.value.anrede || !formData.value.vorname || !formData.value.nachname || !formData.value.email || !formData.value.kommentar) {
    alert('Bitte füllen Sie alle erforderlichen Felder aus.');
    return;
  }
  if(!formData.value.email.includes('@')){
    alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    return;
  }
  if (!formData.value.datenschutz) {
    alert('Bitte stimmen Sie den Datenschutzbestimmungen zu.');
    return;
  }
  console.log('Formulardaten:', formData.value);
  resetForm();
  alert('Formular erfolgreich gesendet!');
};

const resetForm = () => {
  formData.value = {
    anrede: '', vorname: '', nachname: '', email: '',
    kommentar: '', datenschutz: false,
  };
};

const salutationOptions = ['Frau', 'Herr', 'Keine Angabe'];
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4" style="background-color: #C8C4BE;">
    <div class="p-4 sm:p-6 md:p-8 rounded max-w-lg w-full bg-[#DEDAD5] shadow-lg mx-auto">
      <!--Anrede-->
      <div class="mb-6 sm:mb-8 md:md-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">

          Anrede <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <select
              v-model="formData.anrede"
              required class="px-4 py-3 rounded  text-gray-800 w-full bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589]"
          >
            <!--<option value="">Bitte auswählen</option>-->
            <option v-for="opt in salutationOptions" :key="opt" :value="opt">{{opt}}</option>
          </select>

        </div>
      </div>
      <!--Vorname-->
      <div class="mb-6 sm:mb-8 md:md-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">

          Vorname <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <input
              v-model="formData.vorname"
              type="text"
              required class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-800 w-full bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589]"
          >

        </div>
      </div>
      <!--Nachname-->
      <div class="mb-6 sm:mb-8 md:mb-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">

          Nachname <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <input
              v-model="formData.nachname"
              type="text"
              required class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-800 w-full bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589]"
          >

        </div>
      </div>
      <!--E-Mail-->
      <div class="mb-6 sm:mb-8 md:mb-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">

          E-Mail <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <input
              v-model="formData.email"
              type="email"
              required class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-800 w-full bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589]"
          >

        </div>
      </div>
      <!--Kommentar-->
      <div class="mb-6 sm:mb-8 md:mb-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">

          Kommentar <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <textarea
              v-model="formData.kommentar"
              required
              rows="3"
              class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-800 w-full max-w-md bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589] resize-none"
          >
          </textarea>
        </div>
      </div>
      <!--Datenschutz-->
      <div class="flex flex-col items-start gap-3 mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-6">
        <div class="flex items-start space-x-4">
          <input
              v-model="formData.datenschutz"
              type="checkbox"
              id="datenschutz"
              required class="h-4 w-4 cursor-pointer"
              style="accent-color: #8B8589;">
          <label for="datenschutz" class="text-sm text-gray-800 cursor-pointer leading-tight">
            Ich habe die
            <a href="#" class="text-blue-800 hover:underline">Datenschutzbestimmungen</a>
            gelesen
          </label>
        </div>
      </div>
      <!--Button-->
      <div class="text-center sm:text-right mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <button @click="handleSubmit" type="submit" class="w-full sm:w-auto bg-white border border-stone-800 text-stone-8000 font-medium px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-3 rounded-lg transition duration-300 shadow-sm hover:shadow-md hover:bg-stone-100 active:bg-stone-200"
        >
          Senden
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Remove default select arrow in IE */
select::-ms-expand {
  display: none;
}

/* Focus states */
input:focus, select:focus, textarea:focus {
  box-shadow: 0 0 0 2px rgba(139, 133, 137, 0.3);
}

Checkbox styling for better cross-browser support
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #9CA3AF;
  border-radius: 16px;
  background-color: #E8E4DF;
  position: relative;
  flex-shrink: 0;
}



input[type="checkbox"]:checked {
  background-color: #8B8580;
  border-color: #8B8580;
}

input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
