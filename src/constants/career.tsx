import React, {ReactNode} from "react"

export interface CareerProps {
    date: string
    title: string
    description: string | ReactNode
}

const career: CareerProps[] = [
    {
        date: "2018 - Now",
        title: "Alternant Ingénieur logiciel 5G chez Nokia",
        description: (
            <div>
                Dans le cadre de ma formation à l&apos;ISEP, je travaille pour Nokia sur le
                développement logiciel de la 5G
            </div>
        )
    },
    {
        date: "2018",
        title: "Stage en Bureau d'étude électronique InES",
        description: (
            <div>
                Stage de 12 semaines dans le cadre de l&apos;IUT prolongé par un CDD pour l&apos;été
                en conception et développement informatique
            </div>
        )
    },
    {
        date: "2016 - 2018",
        title: "IUT GEII Angers",
        description: (
            <div>
                Obtention du DUT GEII en spécialité informatique
            </div>
        )
    },
    {
        date: "2016 - 2018",
        title: "Entraineur de Tennis",
        description: (
            <div>
                En parallèle de ma formation de DUT, j&apos;ai eu l&apos;occasion d&apos;entrainer des jeunes
                de 8 à 14 ans à la pratique du Tennis dans mon club TCA (Tennis Club Authion)
            </div>
        )
    },
    {
        date: "2014 - 2016",
        title: "Lycée Chevrollier Angers",
        description: (
            <div>
                Obtention du bac STI2D option SIN (Système d&apos;Information et Numérique), mention
                bien
            </div>
        )
    }
]
export default career