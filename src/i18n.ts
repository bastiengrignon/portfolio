import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import translations from "./translations/translation"

i18n.use(initReactI18next)
    .init({
        resources: translations,
        defaultNS: "common",
        lng: localStorage.getItem("lng") || "fr",
        whitelist: ["en", "fr"],
        keySeparator: ".",
        interpolation: {
            escapeValue: false
        }
    })
    .then()

i18n.on("languageChanged", ((lng: string) => localStorage.setItem("lng", lng)))

export default i18n