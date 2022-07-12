import '../assets/styles/css/block.css';

import github_logo from '../assets/images/github.png';
import site_logo from '../assets/images/site.png';
type Props = {
    title: string,
    children: string,
    src: string;
    propertie: string;
}

const Block = (props: Props) =>{
    let block;
    if (props.propertie == 'skill'){

        block = <div id='block'>
                    <div id="img-h">
                        <img src={props.src} alt="" />
                    </div>
                    <div id="text-content">
                        <h1>
                            {props.title}
                        </h1>
                        <p>
                            {props.children}
                        </p>
                    </div>
                </div>
    }
    else{
        block = <div id='block' style={{backgroundImage: `url(${props.src})`}}>
                    <div id="img-h">
                        
                    </div>
                    <div id="buttons" >
                        <button id='view_project'>
                            View project
                            <img src={github_logo} alt="" />
                        </button>
                        <button id="view_website">
                            View
                            <img src={site_logo} alt="" />
                        </button>
                    </div>
                </div>
    }
    return(
        <div>
            {block}s
        </div>
    );
}

export default Block;