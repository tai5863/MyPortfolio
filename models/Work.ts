export interface Coop {
    name: string,
    direction: string,
    url: string
}

export interface Work {
    index: number,
    name: string,
    tag: string,
    messages: Array<string>,
    coorperators: Array<Coop>
    images: Array<string>,
    tools: string,
    date: string,
    url: string
}