import { FaBook, FaComment, FaTools, FaBriefcase } from "react-icons/fa";
import AboutMeComponent from "../components/AboutMeComponent";
import ContactComponent from "../components/ContactComponent";
import SkillsComponent from "../components/SkillsComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import { FaBookBookmark } from "react-icons/fa6";
import SectionsDto from "../interfaces/SectionDto";
import RealizationsService from "./RealizationsService";
import RealizationsComponent from "../components/RealizationsComponent";

export default class SectionService {
    constructor() {
        this.sections = [];
        this.realizationsService = new RealizationsService();
        this.addSectionAboutMe();
        this.addSectionSkills();
        this.addSectionExperience();
        this.addSectionRealizations();
        this.addSectionContact();
    }

    addSectionAboutMe() {
        this.sections.push(
            new SectionsDto(
                '',
                'sobre',
                <FaBook />,
                'Sobre mim',
                <AboutMeComponent />
            )
        );
    }

    addSectionSkills() {
        this.sections.push(
            new SectionsDto(
                '',
                'habilidades',
                <FaTools />,
                'Habilidades',
                <SkillsComponent />
            )
        );
    }

    addSectionExperience() {
        this.sections.push(
            new SectionsDto(
                '',
                'experiencia',
                <FaBriefcase />,
                'Experiência',
                <ExperienceComponent />
            )
        );
    }

    addSectionRealizations() {
        const realizations = this.realizationsService.getProjects();
        this.sections.push(
            new SectionsDto(
                '',
                'realizacoes',
                <FaBookBookmark />,
                'Realizações',
                <RealizationsComponent items={realizations} />
            )
        );
    }

    addSectionContact() {
        this.sections.push(
            new SectionsDto(
                '',
                'contato',
                <FaComment />,
                'Contato',
                <ContactComponent />
            )
        );
    }

    getSections() {
        return this.sections;
    }

    getSectionsHeader() {
        return this.sections.map(({ id, anchor, icon, title }) => ({
            id,
            anchor,
            icon,
            title
        }));
    }
}
