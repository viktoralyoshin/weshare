export type TypeRoute = {
    id: number,
    label: string,
    value: string,
    icon: any
}

export const routes: TypeRoute[] = [
    {
        id: 0,
        label: 'Лента',
        value: '/feed',
        icon: 'PanelTop'
    },
    {
        id: 1,
        label: 'Чаты',
        value: '/chats',
        icon: 'MessagesSquare'
    }
]