interface Route {
    id: string;
    source: string;
    target: string;
}

export interface CroquisProps {
    data?: Route[];
    showCustomRoutes: boolean;
}

export interface Options {
    algoritmo: string;
    nodoInicial: string;
    nodoFinal: string;
}
