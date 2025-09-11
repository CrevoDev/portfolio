export default class RealizationsService {
    constructor() {
        // Mantido para compatibilidade, mas agora o RealizationsComponent gerencia seus próprios dados
        this.projects = [];
    }
    
    getProjects() {
        return this.projects;
    }
}