export interface User {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    birthDate: Date,
    image: string,
}

export interface Message {
    type: "text" | "image",
    text: string | null,
    attachement: [{
        type: "text" | "image",
        payload: { url: string },
        caption: string | null
    }]
}