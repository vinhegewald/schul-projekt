<script setup lang="ts">
import { computed, ref } from 'vue';
import { useSiteContent } from '@/composables/useSiteContent';

type SalutationValue = 'ms' | 'mr' | 'none' | '';

interface FormData {
  salutation: SalutationValue;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comment: string;
  privacy: boolean;
}

const { content } = useSiteContent();

const formData = ref<FormData>({
  salutation: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  comment: '',
  privacy: false,
});

const salutationOptions = computed(() => [
  { value: 'ms' as const, label: content.value.contactForm.salutations.ms },
  { value: 'mr' as const, label: content.value.contactForm.salutations.mr },
  { value: 'none' as const, label: content.value.contactForm.salutations.none },
]);

const resetForm = () => {
  formData.value = {
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comment: '',
    privacy: false,
  };
};

const isEmailValid = (email: string) => {
  return email.includes('@');
};

const handleSubmit = () => {
  if (
    !formData.value.salutation
    || !formData.value.firstName
    || !formData.value.lastName
    || !formData.value.email
    || !formData.value.comment
  ) {
    alert(content.value.contactForm.alerts.required);
    return;
  }

  if (!isEmailValid(formData.value.email)) {
    alert(content.value.contactForm.alerts.invalidEmail);
    return;
  }

  if (!formData.value.privacy) {
    alert(content.value.contactForm.alerts.privacy);
    return;
  }

  console.log(content.value.contactForm.logLabel, formData.value);
  resetForm();
  alert(content.value.contactForm.alerts.success);
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4" style="background-color: #C8C4BE;">
    <form class="p-4 sm:p-6 md:p-8 rounded max-w-lg w-full bg-[#DEDAD5] shadow-lg mx-auto" @submit.prevent="handleSubmit">
      <div class="mb-6 sm:mb-8 md:md-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">
          {{ content.contactForm.salutation }} <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <select
            v-model="formData.salutation"
            required
            class="px-4 py-3 rounded text-gray-800 w-full bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589]"
          >
            <option value="" disabled>{{ content.contactForm.selectPlaceholder }}</option>
            <option v-for="opt in salutationOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
          </select>
        </div>
      </div>

      <div class="mb-6 sm:mb-8 md:md-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">
          {{ content.contactForm.firstName }} <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <input
            v-model="formData.firstName"
            type="text"
            required
            class="px-4 py-3 rounded appearance-none text-gray-800 w-full bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589]"
          >
        </div>
      </div>

      <div class="mb-6 sm:mb-8 md:mb-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">
          {{ content.contactForm.lastName }} <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <input
            v-model="formData.lastName"
            type="text"
            required
            class="px-4 py-3 rounded appearance-none text-gray-800 w-full bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589]"
          >
        </div>
      </div>

      <div class="mb-6 sm:mb-8 md:mb-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">
          {{ content.contactForm.email }} <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <input
            v-model="formData.email"
            type="email"
            required
            class="px-4 py-3 rounded appearance-none text-gray-800 w-full bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589]"
          >
        </div>
      </div>

      <div class="mb-6 sm:mb-8 md:mb-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">
          {{ content.contactForm.phone }}
          <span class="text-gray-800 text-sm">{{ content.contactForm.optional }}</span>
        </label>

        <div class="relative">
          <input
            v-model="formData.phone"
            type="tel"
            class="px-4 py-3 rounded appearance-none text-gray-800 w-full bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589]"
          >
        </div>
      </div>

      <div class="mb-6 sm:mb-8 md:mb-10 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <label class="block text-gray-800 text-sm sm:text-base mb-2">
          {{ content.contactForm.comment }} <span class="text-red-800">*</span>
        </label>

        <div class="relative">
          <textarea
            v-model="formData.comment"
            required
            rows="3"
            class="px-4 py-3 rounded appearance-none text-gray-800 w-full max-w-md bg-[#E8E4DF] border-none outline-none focus:ring-2 focus:ring-[#8B8589] resize-none"
          >
          </textarea>
        </div>
      </div>

      <div class="flex flex-col items-start gap-3 mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-6">
        <div class="flex items-start gap-3">
          <input
            id="datenschutz"
            v-model="formData.privacy"
            type="checkbox"
            required
            class="mt-1 h-4 w-4 cursor-pointer"
          >
          <label for="datenschutz" class="text-sm text-gray-800 cursor-pointer leading-tight">
            <span>{{ content.contactForm.privacyPrefix }} </span>
            <NuxtLink to="/datenschutz" class="text-blue-800 hover:underline">
              {{ content.contactForm.privacyLink }}
            </NuxtLink>
            <span v-if="content.contactForm.privacySuffix"> {{ content.contactForm.privacySuffix }}</span>
          </label>
        </div>
      </div>

      <div class="text-center sm:text-right mx-4 sm:mx-6 md:mx-8 lg:mx-12">
        <button type="submit" class="w-full sm:w-auto bg-white border border-stone-800 text-stone-800 font-medium px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-3 rounded-lg transition duration-300 shadow-sm hover:shadow-md hover:bg-stone-100 active:bg-stone-200"
        >
          {{ content.contactForm.submit }}
        </button>
      </div>
    </form>
  </div>
</template>


<style scoped>
select::-ms-expand {
  display: none;
}

input:focus, select:focus, textarea:focus {
  box-shadow: 0 0 0 2px rgba(139, 133, 137, 0.3);
}

/* Checkbox styling for better cross-browser support */
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #9CA3AF;
  border-radius: 4px;
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
