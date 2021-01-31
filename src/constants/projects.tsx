import React, {ReactNode} from "react"
import Tag from "../components/Tag"

export interface ProjectsProps {
    name: string
    description: string | ReactNode
    img: string
}

const projectFolder = `${process.env.PUBLIC_URL}/img/project`

const projects: ProjectsProps[] = [
    {
        name: "Aéroglisseur",
        description: (
            <div className="flex flex-col h-full justify-between">
                <div>
                    <p>
                        {"Réalisation d'un aéroglisseur DIY en modélisme, en utilisant du" +
                        " polystyrène, plusieurs moteurs de drone ou de voiture, utilisation d'ESC" +
                        " (Electronic Speed Controller) ceux-ci vont permettre de transformer les" +
                        " commandes en variation de vitesse pour les moteurs."}
                    </p>
                    <p>
                        {"3 moteurs sont nécessaires, le premier va permettre de faire lever" +
                        " l'aéroglisseur pour avoir moins de frottements avec le sol, le deuxième" +
                        " sert à faire avancer ou reculer et enfin le dernier, un servo-moteur va" +
                        " permettre de gérer la direction du véhicule grâce aux gouvernails situés à" +
                        " l'arrière."}
                    </p>
                    <p className="mt-5">
                        Et enfin pour contrôler le tout, j&apos;utilise un télécommande <span
                            className="font-semibold">2.4GHz</span> avec un récepteur pour commander
                        le tout à distance.
                    </p>
                </div>
                <div className="font-semibold">
                    Technologies :
                    {
                        ["Électronique"].map((value, i) => (
                            <Tag key={i} text={value}/>
                        ))
                    }
                </div>
            </div>
        ),
        img: `${projectFolder}/hovercraft.png`
    },
    {
        name: "Arduino horloge connectée",
        description: (
            <div className="flex flex-col justify-between h-full">
                <div>
                    Création d&apos;une horloge connectée avec des composants Arduino, ce réveil
                    permet
                    :
                    <ul className="list-disc list-inside">
                        <li>D&apos;afficher l&apos;heure (heureusement!)</li>
                        <li>De contrôler une lumière en branchant une prise 220V</li>
                        <li>De paramétrer des alarmes (durée, répétition, son à jouer)</li>
                        <li>De récupérer la température et l&apos;humidité ambiante</li>
                    </ul>
                    <p className="mt-5">
                        Tout cela est piloté par une carte NodeMCU connectée en WiFi, un écran 7
                        segments, un relai 220V, une RTC (Real Time Clock), un haut-parleur ainsi
                        qu&apos;un module MP3 pour jouer des sons lors de l&apos;alarme.
                    </p>
                    <p>
                        La configuration ainsi que la récupération des données peut-être effectué à
                        travers une API avec des endpoints définis.
                    </p>
                </div>
                <div className="font-semibold">
                    Technologies :
                    {
                        ["c/c++", "électronique", "Arduino"].map((value, i) => (
                            <Tag key={i} text={value}/>
                        ))
                    }
                </div>
            </div>
        ),
        img: `${projectFolder}/clock.png`
    },
    {
        name: "Détection de niveau de matière",
        description: (
            <div className="flex flex-col h-full justify-between">
                <div>
                    <p>
                        Lors de mon stage de fin d&apos;étude de DUT, j&apos;ai réalisé un système
                        de
                        détection du niveau de remplissage de matière en vrac. C&apos;est un système
                        embarqué conçu pour être disposé à l&apos;endroit voulu pour pouvoir
                        détecter le
                        niveau de matière, ce dispositif utilise un capteur à ultrasons assez précis
                        pour effectuer une mesure de distance, cette distance est ensuite envoyée en
                        utilisant le réseau LoRa (réseau utilisé pour l&apos;<span
                            className="font-semibold">IoT</span>)
                    </p>
                    <div className="mt-8">
                        <p className="my-2">
                            J&apos;ai aussi développé une IHM avec Qt Creator pour pouvoir
                            communiquer
                            en série avec le système et afficher les différentes informations utiles
                            :
                        </p>
                        <img src={`${projectFolder}/ihm_pc.png`}
                            alt={`${projectFolder}/ihm_pc.png`}/>
                    </div>
                </div>
                <div className="font-semibold">
                    Technologies :
                    {
                        ["c/c++", "Qt", "Électronique", "LoRa"].map((value, i) => (
                            <Tag key={i} text={value}/>
                        ))
                    }
                </div>
            </div>
        ),
        img: `${projectFolder}/case_pcb.png`
    },
    {
        name: "Festival indigo",
        description: (
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p>
                        Création d&apos;un site web pour un festival. Le festival Indigo est un
                        festival
                        de
                        projections de films en plein air (courts-métrages). Ceux-ci participent à
                        un
                        concours pour être récompensés à la fin. Il se déroule à Mazé et est
                        organisé
                        par
                        l&apos;association Mazette.
                    </p>
                    <a href="https://festival-indigo.herokuapp.com" target={"_blank"}
                        rel={"noopener noreferrer"} className="underline text-pink-600">
                        Festival
                        <i className="fas fa-external-link-alt ml-2"/>
                    </a>
                </div>
                <div className="font-semibold">
                    Technologies :
                    {
                        ["React", "Typescript", "TailwindCSS", "Heroku"].map((value, i) => (
                            <Tag key={i} text={value}/>
                        ))
                    }
                </div>
            </div>
        ),
        img: `${projectFolder}/festival_indigo.png`
    },
    {
        name: "Ce site web",
        description: (
            <div className="flex flex-col justify-between h-full">
                <div>
                    <p>
                        Site web développé en <a href="https://fr.reactjs.org" target={"_blank"}
                            rel={"noopener noreferrer"}
                            className="underline text-pink-600">React</a> avec <a
                            href="https://www.typescriptlang.org" target={"_blank"}
                            rel={"noopener noreferrer"}
                            className="underline text-pink-600">Typescript</a> et en
                        utilisant la librairie <a href="https://tailwindcss.com" target={"_blank"}
                            rel={"noopener noreferrer"}
                            className="underline text-pink-600">TailwindCSS</a>.
                    </p>
                    J&apos;ai développé ce site pour avoir un CV en ligne permettant à tout
                    employeur potentiel de voir rapidement mon cursus ainsi que les différents
                    projets que j&apos;ai pû réalisé tout au long de ma scolarité ou en parallèle.
                </div>
                <div className="font-semibold text-left">
                    Technologies :
                    {
                        ["React", "Typescript", "TailwindCSS", "ESLint", "GitHub pages", "Heroku", "i18n"].map((value, i) => (
                            <Tag key={i} text={value}/>
                        ))
                    }
                </div>
            </div>
        ),
        img: `${projectFolder}/portfolio.png`
    }
]

export default projects