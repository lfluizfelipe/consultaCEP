export default class AddressModel {
    public district = '';

    public zipCode = '';

    public complement = '';

    public ddd = '';

    public gia  = '';

    public ibge = '';

    public location = '';

    public street = '';

    public siafi = '';

    public state = '';

    constructor(data: any = {}) {
        this.district = data.bairro || '';
        this.zipCode = data.cep || '';
        this.complement = data.complemento || '';
        this.ddd = data.ddd || '';
        this.gia = data.gia || '';
        this.ibge = data.ibge || '';
        this.location = data.localidade || '';
        this.street = data.logradouro || '';
        this.siafi = data.siafi || '';
        this.state = data.uf || '';
    }
}