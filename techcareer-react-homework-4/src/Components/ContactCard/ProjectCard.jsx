function ProjectCard(props) {
    return (
        <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div className="w3-display-topleft w3-black w3-padding">{props.title}</div>
                <img src={props.imageSrc} alt="House" style={{width: props.imageWidth}}/>
            </div>
        </div>
    );
}

export default ProjectCard