export const BIO = {title: "Como foi o pedido?", id: "bio"};
export const LOCATION = {title: "Onde vai ser?", id: "location"};
export const CONFIRM_PRESENCE = {title: "Confirma a tua presença", id: "arrive"};
export const QUESTIONS ={title: "Tens mais perguntas?" , id:"places" };
export const ARRIVE = {title: "Como chegar?", id: "presence"};
export const PLACES = {title: "Onde ficar?", id: "questions"};

export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export const sectionsNameId = [
    BIO,
    LOCATION,
    ARRIVE,
    PLACES,
    CONFIRM_PRESENCE,
    QUESTIONS
]
