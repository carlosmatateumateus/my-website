import '../assets/styles/projects.scss'
import Block from '../components/Block';

//Images

import project1 from '../assets/images/project.jpeg';
import project2 from '../assets/images/project.jpeg';
import project3 from '../assets/images/project.jpeg';

const Projects = () =>{
    return(
        <div id='projects'>
            <h1 className='title'>Projects</h1>
            <div className='block-only'>
                <Block title='Python' src={project1} propertie="project">
                    I have two years of experience with the Python language, I am currently studying backend development with it using the Django framework.
                </Block>
                <Block title='Javascript' src={project2} propertie="project">
                    I have 8 months of experience with Javascript. I'm currently studying React js and Redux.
                </Block>
                <Block title='Front-end development' src={project3} propertie="project">
                    I have 1 year of experience with web development. Using only html and css at the beginning and then other technologies, such as: Django, git...
                </Block>
            </div>
        </div>
    );
}

export default Projects;
