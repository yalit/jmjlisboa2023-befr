import links, { ASSOMPTION, ASSOMPTIONSOEUR, CESTQUOI_PAGE, CHEMINNEUF, EMMANUEL, FONDACIO, MARIEJEUNESSE, REGISTER, SERVITEURSDUSEIGNEUR, TIBERIADE } from "./links";

export interface FAQ {
    question: string,
    answer: string,
    tags: TagId[]
}

export const tagIDs = ['general', 'c4y', 'logistique', 'money'] as const;
export type TagId = typeof tagIDs[number];

export type Tags = {
    [key in TagId]: string;
}

export const tags: Tags = {
    general: 'JMJ - Général',
    c4y: 'Route Church4You',
    logistique: 'Logistique',
    money: 'Financement'
}

const faqs: FAQ[] = [
    {
        question: "Qu'est-ce que les JMJ?",
        answer: `Les Journées Mondiales de la Jeunesse (JMJ) sont une rencontre de jeunes du monde entier avec le Pape. C'est à la fois un pèlerinage, une fête de la jeunesse, une expression de l'Église universelle et un moment fort pour l'évangélisation du monde des jeunes. <a href="${links[CESTQUOI_PAGE]}">Retrouve plus d'explications ici</a>`,
        tags: ['general']
    },
    {
        question: "Quel est l'impact écologique d'un tel rassemblement?",
        answer: `Les organisateurs mettent un point d’honneur à respecter l’environnement. Les JMJ Lisbonne 2023 seront encore plus durables si chacun des pèlerins, jusqu’au dernier à s'y inscrire, contribue à ce but. Nous avons besoin de tous et toutes nous mobiliser afin d'atteindre l'empreinte environnementale la plus faible possible. Vous pourrez retrouver la lettre d’engagement des organisateurs, publiée le 22 avril 2022, jour de la Terre: <a href="https://www.lisboa2023.org/fr/engagement-durabilite" target="_blank">https://www.lisboa2023.org/fr/engagement-durabilite</a>`,
        tags: ['general']
    },
    {
        question: "Où se dérouleront les JMJ en 2023?",
        answer: `À Lisbonne`,
        tags: ['general']
    },
    {
        question: "Quel est le thème des JMJ 2023?",
        answer: `« Marie se leva et partit en hâte » Lc 1,39. <a href="${links[CESTQUOI_PAGE]}">Retrouve plus d'informations ici</a>`,
        tags: ['general']
    },
    {
        question: "Quels sont les symboles des JMJ?",
        answer: `Les JMJ ont deux symboles qui accompagnent les pèlerins : la croix du pèlerin et l'icône de Notre-Dame Salus Populi Romani. Dans les mois qui précèdent chaque JMJ, les symboles partent en pèlerinage pour proclamer l'Evangile et accompagner les jeunes, de manière particulière, dans les réalités dans lesquelles ils vivent. Pour plus d'informations, visitez <a href="https://www.lisboa2023.org/en/about/the-symbols-of-wyd" target="_blank">lisboa2023.org/en/about/the-symbols-of-wyd</a>`,
        tags: ['general']
    },
    {
        question: "Quelles sont les formules proposées ?",
        answer: `Church4you te propose une formule “All in”, qui comprend une semaine au festival “Welcome to paradise” à Portimão suivi de la semaine JMJ. Si tu ne souhaites participer qu’aux JMJ, tu peux choisir la formule express. Ces deux formules comprennent les transports, les logements, les repas, ainsi que tous les frais logistiques et administratifs. Si tu souhaites nous rejoindre à Lisbonne par tes propres moyens, nous proposons la formule Express “sans transport”.`,
        tags: ['c4y']
    },
    {
        question: "Quels sont les dates du voyage?",
        answer: `La route Church4you organise 2 départs pour les JMJ. <br />Le 24 juillet pour la formule All In, le 29 juillet pour la formule Express. <br />Les deux groupes reviendront en Belgique le 8 août. Ceux qui souhaitent nous rejoindre par leurs propres moyens doivent arriver à Lisbonne le 31 juillet avant 18h, et pourront repartir dès la fin des JMJ le 6 août.`,
        tags: ['c4y']
    },
    {
        question: "Qui organise la route Church4you?",
        answer: `Cette route est organisée par les équipes des Pastorales des Jeunes des diocèses francophones de Belgique et des communautés religieuses. <br />Voici la liste des communautés qui ont déjà choisi de partir avec nous: <br /><a href="${links[CHEMINNEUF]}" target="_blank">Communauté du Chemin Neuf</a>, <a href="${links[EMMANUEL]}" target="_blank">Emmanuel Belgique</a>, <a href="${links[TIBERIADE]}" target="_blank">la Fraternité de Tibériade</a>, <a href="${links[ASSOMPTION]}" target="_blank">les Assomptionnistes</a>, <a href="${links[ASSOMPTIONSOEUR]}" target="_blank">les religieuses de l'Assomption</a>, <a href="${links[FONDACIO]}" target="_blank">Fondacio</a>, <a href="${links[SERVITEURSDUSEIGNEUR]}" target="_blank">les Serviteurs de l'Amour et les Chercheurs De Dieu</a> et <a href="${links[MARIEJEUNESSE]}" target="_blank">la Famille Marie-Jeunesse</a>.`,
        tags: ['c4y']
    },
    {
        question: "Qui peut s'inscrire à la route Church4you?",
        answer: `La route Church4you est destinée principalement aux jeunes entre 18 et 30 ans.`,
        tags: ['c4y']
    },
    {
        question: "Je suis mineur(e), puis-je partir aux JMJ?",
        answer: `Si tu as 16 ans le jour du départ (24 juillet pour la formule all in, 29 juillet pour la formule express), tu peux prendre part à la route Church4you à condition de faire partie d'un groupe et d'être accompagné(e) d'un(e) adulte.`,
        tags: ['c4y']
    },
    {
        question: "J'ai plus de 30 ans, comment puis-je participer aux JMJ? ",
        answer: `Tu peux te joindre à la route Church4you en tant qu'animateur/trice d'un groupe de jeunes. Contacte ta pastorale des jeunes pour savoir où tu peux te rendre utile ! Il est possible également de participer aux JMJ comme volontaire.<br /><a href="https://register.wyd-reg.org/vol/wizard?lang=fr" target="_blank">Tu peux déposer une demande d'inscription ici</a>`,
        tags: ['c4y']
    },
    {
        question: "Je souhaite vous rejoindre par mes propres moyens sur place, est-ce possible?",
        answer: `C’est possible sous certaines conditions avec l’option Express, sans transport. <br />
        En choisissant cette option, tu t’engages à rejoindre la délégation C4Y le 31/07 fin d’après-midi (non négociable) à Lisbonne, au lieu qui sera communiqué. Tu pourras repartir par tes propres moyens à partir du 6 août (après la messe finale). Si tu es mineur (âgé de 16 ou 17 ans révolu le jour du départ), tu devras voyager avec le responsable légal de ton groupe pendant tout le séjour. Attention, tu ne pourras pas utiliser les cars de C4Y sur place pour rejoindre les lieux de logement; tu devras donc te déplacer uniquement en transport en commun.`,
        tags: ['c4y']
    },
    {
        question: "Je souhaite partir avec vous, mais je n'ai pas de groupe, est-ce grave?",
        answer: `Pas du tout ! Lors de ton inscription, tu pourras sélectionner “pas de groupe” dans le menu déroulant. Nous nous chargerons de te mettre en lien avec d'autres jeunes afin que tu ne sois pas seul(e) sur place.`,
        tags: ['c4y']
    },
    {
        question: "Où puis-je m'inscrire?",
        answer: `Tu peux t'inscrire <a href="${links[REGISTER]}" target="_blank">via ce formulaire</a>`,
        tags: ['c4y']
    },
    {
        question: "Quelle est la date limite d'inscription?",
        answer: `Le 10 juin. <br />Mais attention, à partir du 10 mai, le prix augmente pour les deux formules : il passe de 850€ à 950€ pour la formule All in, et de 450€ à 550€ pour la formule Express.`,
        tags: ['c4y']
    },
    {
        question: "Je me suis inscrit(e), mais je n'ai pas terminé de compléter mon profil. Comment puis-je faire?",
        answer: `Tu peux compléter ton profil personnel ici :  <a href="https://registration-wyd2023.chemin-neuf.org/fr/login/" target="_blank">https://registration-wyd2023.chemin-neuf.org/fr/login/</a>.`,
        tags: ['c4y']
    },
    {
        question: "Lisbonne est-elle une ville sûre?",
        answer: `Selon l'étude "Quality of Living 2019" du cabinet de conseil Mercer, Lisbonne est la 31ème ville la plus sûre au monde, ayant gagné 12 places dans ce classement depuis 2005. C'est aussi la capitale européenne la plus ensoleillée !`,
        tags: ['logistique']
    },
    {
        question: "Quelle est la monnaie à Lisbonne?",
        answer: `Lisbonne est la capitale du Portugal, qui fait partie de l'Union Européenne. La devise en vigueur est l'euro !`,
        tags: ['logistique']
    },
    {
        question: "Où auront lieu les grands rassemblements de la semaine JMJ?",
        answer: `Les événements centraux auront lieu au Parque Tejo. Toutes les informations disponibles sur les événements centraux peuvent être trouvées <a href="https://www.lisboa2023.org/fr/evenements-centraux" target="_blank">ici</a>.`,
        tags: ['logistique']
    },
    {
        question: "Quel est le programme de la semaine JMJ?",
        answer: `Le programme officiel est toujours en cours d'élaboration. Tu peux suivre son évolution et voir l'état actuel du programme en cliquant ici : <a href="https://www.lisboa2023.org/fr/programme" target="_blank">https://www.lisboa2023.org/fr/programme</a>`,
        tags: ['logistique']
    },
    {
        question: "Où serons-nous logés?",
        answer: `À Portimão et à Lisbonne, il est prévu que notre délégation soit logée dans des espaces collectifs, comme des écoles. Lors de la veillée finale, c'est à la belle étoile que l'on dormira tous ensemble. Vous aurez donc besoin tout au long des JMJ de votre propre matelas et de votre sac de couchage.`,
        tags: ['logistique']
    },
    {
        question: "Puis-je participer aux JMJ si je présente un handicap moteur/sensoriel/intellectuel?",
        answer: `Tout le monde est le bienvenu aux JMJ de Lisbonne 2023, et l’organisation travaille en détail sur les aspects logistiques de l’accueil des personnes en situation de handicap. Pour la route Church4You, nous ne pourrons malheureusement pas accueillir les pèlerins présentant un lourd handicap moteur car nos cars ne sont pas adaptés. Pour les demandes spécifiques, tu peux nous contacter par mail sur <a href="mailto:jmjbelgique@gmail.com">jmjbelgique@gmail.com</a>, et <a href="mailto:jmj4all@lisboa2023.org">jmj4all@lisboa2023.org</a> pour contacter directement l’organisation au Portugal.`,
        tags: ['logistique']
    },
    {
        question: "Je ne parle pas portugais, comment vais-je pouvoir participer aux activités?",
        answer: `Il est prévu que les grands événements soient traduits en plusieurs langues, comme le français, l’anglais, ou la Langue des Signes internationale !`,
        tags: ['logistique']
    },
    {
        question: "Comment allons-nous nous déplacer sur place?",
        answer: `Tous les transports en commun seront accessibles gratuitement pendant la durée des JMJ. Les pèlerins inscrits à la formule “All in” et "Express avec transport" pourront quant à eux bénéficier, dans la mesure du possible, des cars de la délégation afin de rejoindre les lieux de logement.`,
        tags: ['logistique']
    },
    {
        question: "Quel bagage prendre? ",
        answer: `Aux JMJ, ton meilleur allié sera le sac-à-dos de randonnée ! Il te permettra de te déplacer facilement avec tes affaires entre les différents lieux de logement. Il sera très compliqué de te déplacer avec une valise, nous te demandons donc de ne pas utiliser ce type de bagage. Pense également à prévoir un petit sac à dos pour le car et les journées d'activités ! `,
        tags: ['logistique']
    },
    {
        question: "Combien coûtent les JMJ?",
        answer: `La semaine des JMJ seule coûte 245€, à cela doivent s'ajouter les frais de logistique et de transport. <br />
        Voici les tarifs des formules de la route Church4you: <br />
        - 850€ pour la formule All in (950€ à partir du 10 mai) <br />
        - 450€ pour la formule Express (550€ à partir du 10 mai) <br />
        - 350€ pour la formule Express sans transport`,
        tags: ['money']
    },
    {
        question: "Comment puis-je payer mon inscription?",
        answer: `Tu peux payer ton inscription directement sur ton profil utilisateur, juste ici : <a href="https://registration-wyd2023.chemin-neuf.org/fr/login/" target="_blank">https://registration-wyd2023.chemin-neuf.org/fr/login/</a>. <br />Le système est sécurisé et te permet de payer avec ta carte bancaire ou ta carte de crédit.`,
        tags: ['money']
    },
    {
        question: "Puis-je effectuer un virement?",
        answer: `Afin d'assurer la sécurité lors du transfert d'argent, nous avons mis en place un système de paiement en ligne. Si toutefois tu n'es pas en mesure de payer par carte de crédit/bancaire, tu peux envoyer un mail à l'adresse <a href="mailto:jmjbelgique@gmail.com">jmjbelgique@gmail.com</a> et nous tâcherons de trouver ensemble une solution.`,
        tags: ['money']
    },
    {
        question: "Je ne saurais pas verser la totalité du forfait d'un coup, est-ce possible d'échelonner mon paiement?",
        answer: `Si tu t'inscris avant le 10 mai à la formule All in, tu as la possibilité de payer en deux fois: 550€ à payer avant le 10 avril, puis 300 avant le 10 juin.`,
        tags: ['money']
    },
    {
        question: "Je souhaite vraiment participer, mais j'aurais besoin d'un coup de pouce financier, que puis-je faire?",
        answer: `Tu peux retrouver des idées pour t'aider à financer tes JMJ ici : <a href="https://church4you.be/bruxelles/news/des-idees-pour-financer-les-jmj/" target="_blank">https://church4you.be/bruxelles/news/des-idees-pour-financer-les-jmj/</a><br /> 
        L'argent ne doit pas être un frein. Si tu es en difficulté, tu peux adresser une demande de soutien: <br />
        En premier lieu : au responsable de ton groupe et/ou pastorale des jeunes de ton diocèse.<br />
        En second lieu à Church4You : <a href="mailto:jmjbelgique@gmail.com?subject=Demande de bourse">jmjbelgique@gmail.com</a> (objet du mail: demande de bourse)<br />
        Toutes les demandes seront étudiées avec grande bienveillance afin de ne laisser personne au bord de la route.
        `,
        tags: ['money']
    },
    {
        question: "Je voudrais vendre des goodies pour m’aider à financer mon voyage, comment puis-je faire?",
        answer: `Tu peux contacter ta pastorale des jeunes, ou ton groupe local, pour te procurer des bics et des bougies “jmj.be” à revendre.`,
        tags: ['money']
    }
]

export function getFaqsForTag(id: TagId): FAQ[] {
    return faqs.filter(faq => faq.tags.includes(id))
}