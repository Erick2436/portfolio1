import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiPhotoshopp,
    DiMysql,
    DiReact,
} from 'react-icons/di'

import '../styles/components/tecnologiescontainer.sass'

const tecnologies = [
    { id: "Html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "photoshopp", name: "PHOTOSHOPP", icon: <DiPhotoshopp /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "mysql", name: "MYSQL", icon: <DiMysql /> },
    { id: "react", name: "REACT", icon: <DiReact /> },
];

const TecnologiesContainer = () => {
    return <section className='tecnologies-container'>
        <h2>Tecnologias</h2>
        <div className="tecnologies-grid">
            {tecnologies.map((tech) => (
                <div className="tecnology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="tecnology-info">
                        <h3>{tech.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    </section>
};

export default TecnologiesContainer;
