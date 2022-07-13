import '../assets/styles/css/projects.css'
import Block from '../components/Block';

//Images

import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project.jpeg';
import project3 from '../assets/images/project.jpeg';

const Projects = () =>{
    return(
        <div id='projects'>
            <h1 className='title'>Projects</h1>
            <div className='block-only'>
                <Block title='Notepad(Html, css, Django)' src={project1} propertie="project" url_project='https://github.com/carlosmatateumateus/todo'>
                    ...
                </Block>
                <Block title='Soon' src="" propertie="project" url_project=''>
                   ...
                </Block>
                <Block title='Soon' src="" propertie="project" url_project=''>
                    ...
                </Block>
            </div>
        </div>
    );
}

export default Projects;
