import ProjectCard from "../../Components/ContactCard/ProjectCard.jsx";

function Projects() {
    return (
        <div className="w3-container w3-padding-32" id="projects">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>

            <div className="w3-row-padding">
                <ProjectCard
                    title="Summer House"
                    imageSrc="https://www.w3schools.com/w3images/house5.jpg"
                    imageWidth="100%"
                />
                <ProjectCard
                    title="Brick House"
                    imageSrc="https://www.w3schools.com/w3images/house2.jpg"
                    imageWidth="100%"
                />
                <ProjectCard
                    title="Renovated"
                    imageSrc="https://www.w3schools.com/w3images/house3.jpg"
                    imageWidth="100%"
                />
                <ProjectCard
                    title="Barn House"
                    imageSrc="https://www.w3schools.com/w3images/house4.jpg"
                    imageWidth="100%"
                />
            </div>

            <div className="w3-row-padding">

                <ProjectCard
                    title="Summer House"
                    imageSrc="https://www.w3schools.com/w3images/house2.jpg"
                    imageWidth="99%"
                />
                <ProjectCard
                    title="Brick House"
                    imageSrc="https://www.w3schools.com/w3images/house5.jpg"
                    imageWidth="99%"
                />
                <ProjectCard
                    title="Renovated"
                    imageSrc="https://www.w3schools.com/w3images/house4.jpg"
                    imageWidth="99%"
                />
                <ProjectCard
                    title="Barn House"
                    imageSrc="https://www.w3schools.com/w3images/house3.jpg"
                    imageWidth="99%"
                />
            </div>
        </div>
    );
}

export default Projects