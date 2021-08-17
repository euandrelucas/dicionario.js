declare class DicioJS {
    significado(word: string): Promise<any>;
    wikipedia(word: string): Promise<any>;
    piada(): {
        type: string;
        properties: {
            pergunta: string;
            resposta: string;
            createdAt: string;
            updatedAt: string;
        };
        geometry: null;
    };
}
declare const _default: DicioJS;
export = _default;
