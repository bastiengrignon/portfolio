import React from "react"
import translations from "../../translations/translation"
import i18n from "i18next"

const languageSwitchFr = "Changer pour le français"
const languageSwitchEn = "Switch to english"

interface LanguageSelectorProps {
    className?: string
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({className}) => (
    <div className={`space-x-1.5 ${className}`}>
        {Object.keys(translations).map(lng => (
            <img src={process.env.PUBLIC_URL + `/img/flag/${lng}.jpg`} key={lng}
                alt={lng + " flag"} title={lng == "fr" ? languageSwitchFr : languageSwitchEn}
                className="inline-flex m-2 w-6 h-6 rounded-full cursor-pointer"
                onClick={() => i18n.changeLanguage(lng)}/>
        ))}
    </div>
)

export default LanguageSelector