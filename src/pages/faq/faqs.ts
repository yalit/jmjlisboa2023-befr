import links, { CESTQUOI_PAGE } from "../../lib/data/links";

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
        answer: `Le Jour de la Terre, le 22 avril 2022, a été publiée la lettre d'engagement accessible via le lien <a href="https://www.lisboa2023.org/pt/artigo/juntos-por-uma-jornada-mundial-da-juventude-mais-sustentavel">lisboa2023.org/pt/artigo/juntos-por-uma- more- journée-mondiale-de-la-jeunesse-durable</a>`,
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
        answer: `Les JMJ ont deux symboles qui accompagnent les pèlerins : la croix du pèlerin et l'icône de Notre-Dame Salus Populi Romani. Dans les mois qui précèdent chaque JMJ, les symboles partent en pèlerinage pour proclamer l'Evangile et accompagner les jeunes, de manière particulière, dans les réalités dans lesquelles ils vivent. Pour plus d’informations, visitez <a href="https://www.lisboa2023.org/en/about/the-symbols-of-wyd">lisboa2023.org/en/about/the-symbols-of-wyd</a>`,
        tags: ['general']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
    {
        question: "",
        answer: ``,
        tags: ['c4y']
    },
]

export function getFaqs(id: TagId): FAQ[] {
    return faqs.filter(faq => faq.tags.includes(id))
}