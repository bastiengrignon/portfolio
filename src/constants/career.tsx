import React, {ReactNode} from "react"
import Tag from "../components/Tag"

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
            <div className="flex flex-col mr-10">
                <div className="inline-flex items-center text-justify justify-between">
                    <div>
                        <p>
                            Je suis actuellement en école d&apos;ingénieur en alternance à
                            l&apos;ISEP dans le cursus <span className="font-bold">Ingénieur logiciel</span>.
                            J&apos;ai pu réaliser différents projets pendant ces 3 années. En
                            informatique et électronique, j&apos;ai pu effectuer des projets de site
                            Web avec des technologies de bases (html/css/js/php) mais aussi en
                            utilisant <span className="font-bold">React</span> aussi bien en
                            <span className="italic"> Javascript</span> qu&apos;en <span
                                className="italic">TypeScript</span>.
                        </p>
                        <div className="mt-5">
                            <p className="font-bold">Technologies étudiées :</p>
                            {
                                ["c/c++", "Java", "Spring", "html / css / js / php / mysql", "React", "aws", "git", "bash", "Typescript"].map((value, i) => (
                                    <Tag key={i} text={value} className="mx-2"/>
                                ))
                            }
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/img/isep.jpg"} alt="Logo ISEP"
                        className="w-32 ml-5"/>
                </div>
                <div className="inline-flex items-center text-justify justify-between">
                    <div>
                        <p className="mt-10">
                            Je travaille chez Nokia en tant qu&apos;ingénieur logiciel sur le
                            développement de la <span className="font-bold">5G</span>. Mon travail
                            au sein de l&apos;équipe consiste à développer et implémenter de
                            nouvelles
                            fonctionnalités. Une de ces fonctionnalités pour lequel j&apos;ai pu
                            aidé
                            est l&apos;attache d&apos;un mobile à une antenne.
                        </p>
                        <div className="mt-5">
                            <p className="font-bold">Technologies étudiées :</p>
                            {
                                ["c/c++", "bash", "git", "gerrit"].map((value, i) => (
                                    <Tag key={i} text={value} className="mx-2"/>
                                ))
                            }
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/img/nokia.jpg"} alt="Logo Nokia"
                        className="w-32 ml-5"/>
                </div>
            </div>
        )
    },
    {
        date: "2018",
        title: "Stage en Bureau d'étude électronique InES",
        description: (
            <div className="inline-flex items-center text-justify justify-between mr-10">
                <div>
                    <p>
                        Stage de 12 semaines dans le cadre de l&apos;IUT prolongé par un CDD pour
                        l&apos;été
                        en conception et développement informatique
                    </p>
                    <p>
                        Durant ce stage j&apos;ai approfondi mes connaissances en développement
                        C/C++,
                        mais j&apos;ai aussi pu travailler sur un projet du début à la fin,
                        c&apos;est à
                        dire que j&apos;ai créer moi-même la carte électronique, j&apos;ai choisi
                        les
                        composants et eu l&apos;occasion de souder moi-même tous les composants sur
                        cette carte. Ce stage a été très formateur
                    </p>
                    <div className="mt-5">
                        <p className="font-bold">Technologies étudiées :</p>
                        {
                            ["c/c++", "électronique", "LoRa", "Capteur à Ultrasons"].map((value, i) => (
                                <Tag key={i} text={value} className="mx-2"/>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + "/img/ines.png"} alt="Logo InEs"
                        className="w-56 ml-5 my-2"/>
                    <img src={process.env.PUBLIC_URL + "/img/sensor_case.jpg"} alt="Sensor Case"
                        className="w-56 ml-5"/>
                </div>
            </div>
        )
    },
    {
        date: "2016 - 2018",
        title: "IUT GEII Angers",
        description: (
            <div className="inline-flex items-center text-justify justify-between mr-10">
                <div>
                    <p>
                        Au termes de mes deux années de DUT à Angers, j&apos;ai obtenu mon DUT Génie
                        Électrique et Informatique Industrielle en spécialité informatique
                    </p>
                    <p>
                        Tout au long de ce parcours, j&apos;ai pu apprendre beaucoup de choses dans
                        les domaines de l&apos;informatique ainsi que de l&apos;électronique
                    </p>
                    <div className="mt-5">
                        <p className="font-bold">Technologies étudiées :</p>
                        {
                            ["html", "css", "js", "c/c++", "php", "mysql", "java"].map((value, i) => (
                                <Tag key={i} text={value} className="text-red-900"/>
                            ))
                        }
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + "/img/iut-angers.jpg"} alt="Logo IUT Angers"
                    className="w-48 ml-5"/>
            </div>
        )
    },
    {
        date: "2016 - 2018",
        title: "Entraineur de Tennis",
        description: (
            <div className="inline-flex items-center text-justify mr-10">
                <div>
                    <p className="pb-4">{"Durant mon année de Terminale, en parallèle des cours" +
                    " j'ai passé une formation d'initiateur de Tennis. Celle-ci m'a permis" +
                    " donner des cours de Tennis en tant que bénévole, permettant d'aider mon" +
                    " club ainsi que mon entraineur à faire des cours avec plus de jeunes."}
                    </p>
                    <p>{
                        "J'ai donc eu l'occasion d'entrainer des jeunes et d'aider mon entraineur lors" +
                        " d'évènements organisés par le club (des tournois par exemple). Ces jeunes avaient" +
                        " entre 8 et 15 ans au TCA (Tennis Club Authion)"}
                    </p>
                </div>
                <img src={process.env.PUBLIC_URL + "/img/tennis.jpg"} alt="Tennis Club TCA"
                    className="ml-5"/>
            </div>
        )
    },
    {
        date: "2014 - 2016",
        title: "Lycée Chevrollier Angers",
        description: (
            <div className="inline-flex items-center justify-between mr-10">
                <p>
                    Obtention du bac STI2D option SIN (Système d&apos;Information et Numérique),
                    mention bien
                </p>
                <img src={process.env.PUBLIC_URL + "/img/chevrollier.jpg"} alt="Lycee Chevrollier"
                    className="w-32 h-32 ml-10"/>
            </div>
        )
    }
]
export default career