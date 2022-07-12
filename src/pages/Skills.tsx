import '../assets/styles/css/skills.css';
import Block from '../components/Block';

//Images

import python from '../assets/images/python.png';
import js from '../assets/images/js.png';
import web from '../assets/images/web.png';

const Skills = () =>{
    return(
        <div id="skills">
            <h1 className="title">Skills</h1>
            <div className="block-only">
                <Block title='Python' src={python} propertie="skill">
                    I have two years of experience with the Python language, I am currently studying backend development with it using the Django framework.
                </Block>
                <Block title='Javascript' src={js} propertie="skill">
                    I have 8 months of experience with Javascript. I'm currently studying React js and Redux.
                </Block>
                <Block title='Front-end development' src={web} propertie="skill">
                    I have 1 year of experience with web development. Using only html and css at the beginning and then other technologies, such as: Django, git...
                </Block>
            </div>
        </div>
    )
}

export default Skills;