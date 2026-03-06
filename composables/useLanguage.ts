import { ref } from "vue";

const currentLang = ref<"de" | "en">("de");

export function useLanguage() {
    const init = () => {
        try {
            const saved = localStorage.getItem("language");
            if (saved === "de" || saved === "en") {
                currentLang.value = saved;
            }
        } catch (e) {
            console.warn("Could not read language from localStorage", e);
        }
    };

    const setLanguage = (lang: "de" | "en") => {
        currentLang.value = lang;
        try {
            localStorage.setItem("language", lang);
        } catch (e) {
            console.warn("Could not save language to localStorage", e);
        }
    };

    return { currentLang, setLanguage, init };
}