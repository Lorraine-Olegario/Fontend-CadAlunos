export interface Student {
    id?: number
    name: string
    registration: string
    cpf: string
    date_birth: string
    addresses: {
        zip_code: string,
        public_place: string,
        neighborhood: string,
        city: string,
        state: string,
        number: string,
        complement: string
    }
}
