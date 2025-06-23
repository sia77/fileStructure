import { createNode, createSubContainer } from "./DisplayHierarchy";

describe('createNode()', () => {
  it('should return an <li> element with correct text, class, and id', () => {

    const label = "home";
    const index = "2";
    const li = createNode(label, index);

    expect(li.tagName).toBe('LI');
    expect(li.textContent).toBe('home');
    expect(li.className).toBe('dir_2 createNode chevron-list open');
    expect(li.id).toBe('home_2');

  });
});


describe("createSubContainer()", () => { 
    it('Should return <ul> element with correct class name', ()=>{
        const label = "home";
        const index = "2";
        const li = createNode(label, index);

        const ul = createSubContainer(li);

        expect(ul.className).toBe('createSubContainer');
    })

});



//   const ul = document.createElement('ul');
//   ul.className = 'createSubContainer';
//   parentLi.appendChild(ul);