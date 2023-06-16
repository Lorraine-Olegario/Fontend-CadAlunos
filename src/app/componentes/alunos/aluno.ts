export interface Aluno {
    id?: number
    nome: string
    matricula: string
    cpf: string
    data__nasc: string
    enderecos: {
        cep: string,
        logradouro: string,
        bairro: string,
        cidade: string,
        estado: string,
        numero: string,
        complemento: string
    }
}
