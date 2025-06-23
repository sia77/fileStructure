import { DisplayHierarchy } from './components/DisplayHierarchy';
import data from './data/hierarchy.json' assert { type: 'json' };

const App = () =>{

    const ul = document.createElement('ul');    
    ul.id="hierarchy";
    //ul.className = "chevron-list open";
    const {root} = data;
    DisplayHierarchy(ul, root);

    ul.addEventListener('click', function (event) {
        const { target } = event;
        console.log('Container clicked: ', target.id );
        //const child = target.firstElementChild;

        console.log("el: ", target.parentElement);

        if( target.id ){
            target.classList.toggle("open");
            target.classList.toggle("hide-children");

        }
        
    });
    

    return ul;
}

export default App;