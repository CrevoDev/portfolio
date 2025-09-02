import Projeto1 from "../projetos/Projeto1";
import Projeto2 from "../projetos/Projeto2";
import Projeto3 from "../projetos/Projeto3";
import Projeto4 from "../projetos/Projeto4";
import Projeto5 from "../projetos/Projeto5";
import Projeto6 from "../projetos/Projeto6";

export default class RealizationsService {
    constructor() {
        this.projects = [
            { id: 'projeto1', component: <Projeto1 /> },
            { id: 'projeto2', component: <Projeto2 /> },
            { id: 'projeto3', component: <Projeto3 /> },
            { id: 'projeto4', component: <Projeto4 /> },
            { id: 'projeto5', component: <Projeto5 /> },
            { id: 'projeto6', component: <Projeto6 /> }
        ];
    }
    getProjects() {
        return this.projects;
    }
}