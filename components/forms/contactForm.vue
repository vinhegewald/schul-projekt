<script setup lang="ts">
import { ref } from 'vue';

interface FormData {
  anrede: 'Frau' | 'Herr' | 'Keine Angabe' | '';
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  kommentar: string;
  datenschutz: boolean;
}

const formData = ref<FormData>({
  anrede: '',
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
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
    telefon: '', kommentar: '', datenschutz: false,
  };
};

const salutationOptions = ['Frau', 'Herr', 'Keine Angabe'];
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4" style="background-color: #C8C4BE;">
    <div class="p-8 rounded" style="width:500px; height: 600px; background-color: #DEDAD5; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
      <!--Anrede-->
      <div class="mb-10" style="margin-left: 50px; margin-right: 50px;">
        <label class="block text-gray-800 text-base mb-2">
          <br>
          </br>
          Anrede <span class="text-red-800">*</span>
        </label>
        <br>
        </br>

        <div class="relative">
          <select
              v-model="formData.anrede"
              required class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-1000"
              style="width:400px; background-color: #E8E4DF; border: none; outline: none;"
          >
            <!--<option value="">Bitte auswählen</option>-->
            <option v-for="opt in salutationOptions" :key="opt" :value="opt">{{opt}}</option>
          </select>

        </div>
      </div>
      <!--Vorname-->
      <div class="mb-10" style="margin-left: 50px; margin-right: 50px;">
        <label class="block text-gray-800 text-base mb-2">
          <br>
          </br>
          Vorname <span class="text-red-800">*</span>
        </label>
        <br>
        </br>
        <div class="relative">
          <input
              v-model="formData.vorname"
              type="text"
              required class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-800"
              style="width: 400px; background-color: #E8E4DF; border: none; outline: none;">
          </input>
        </div>
      </div>
      <!--Nachname-->
      <div class="mb-10" style="margin-left: 50px; margin-right: 50px;">
        <label class="block text-gray-800 text-base mb-2">
          <br>
          </br>
          Nachname <span class="text-red-800">*</span>
        </label>
        <br>
        </br>
        <div class="relative">
          <input
              v-model="formData.nachname"
              type="text"
              required class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-800"
              style="width: 400px; background-color: #E8E4DF; border: none; outline: none;">
          </input>
        </div>
      </div>
      <!--E-Mail-->
      <div class="mb-10" style="margin-left: 50px; margin-right: 50px;">
        <label class="block text-gray-800 text-base mb-2">
          <br>
          </br>
          E-Mail <span class="text-red-800">*</span>
        </label>
        <br>
        </br>
        <div class="relative">
          <input
              v-model="formData.email"
              type="email"
              required class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-800"
              style="width: 400px; background-color: #E8E4DF; border: none; outline: none;">
          </input>
        </div>
      </div>
      <!--Telefon (optional)-->
      <div class="mb-10" style="margin-left: 50px; margin-right: 50px;">
        <label class="block text-gray-800 text-base mb-2">
          <br>
          </br>
          Telefon <span class="text-gray-800 text-sm">(optional)</span>
        </label>
        <br>
        </br>
        <div class="relative">
          <input
              v-model="formData.telefon"
              type="tel"
              required class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-800"
              style="width: 400px; background-color: #E8E4DF; border: none; outline: none;">

          </input>
        </div>
      </div>
      <!--Kommentar-->
      <div class="mb-20" style="margin-left: 50px; margin-right: 50px;">
        <label class="block text-gray-800 text-base mb-2">
          <br>
          </br>
          Kommentar <span class="text-red-800">*</span>
        </label>
        <br>
        </br>
        <div class="relative">
          <textarea
              v-model="formData.kommentar"
              required
              rows="5"
              class="px-4 py-3 rounded appearance-none cursor-pointer text-gray-800"
              style="width: 400px; background-color: #E8E4DF; border: none; outline: none;">
          </textarea>
        </div>
      </div>
      <!--Datenschutz-->
      <div class="flex items-center justify-between gap-4" style="margin-left: 50px; margin-right: 50px;">
        <div class="flex items-start-gap-2">
          <br>
          </br>
          <input
              v-model="formData.datenschutz"
              type="checkbox"
              id="datenschutz"
              required class="mt-1 h-4 w-4 cursor-pointer"
              style="accent-color: #8B8589;">
          </input>
          <label for="datenschutz" class="text-sm text-gray-800 cursor-pointer leading-tight">
            Ich habe die
            <a href="#" class="text-blue-800 hover:underline">Datenschutzbestimmungen</a>
            gelesen
          </label>
        </div>
        <br>
        </br>
        <div class="relative">
        </div>
      </div>
      <!--Button-->
      <div class="text-left" style="margin-left: 400px;">

        <button @click="handleSubmit" type="submit" class="w-full sm:w-auto bg-white border-10 border-stone-800 text-stone-8000 font-medium px-16 py-12 rounded-lg transition duration-800 shadow-sm hover:shadow-md hover:bg-stone-500 active:bg-stone-1000 flex-shrink-0"
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
  box-shadow: 0 0 0 2px rgba(139, 133, 128, 0.3);
}

/* Checkbox styling for better cross-browser support */
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