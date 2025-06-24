export const DisplayHierarchy = (container, root) => {
  for (let i = 0; i < root?.length; i++) {
    const { dir_name, files, content } = root[i];

    const nodeLi = createNode(dir_name, i);

    if (files.length > 0) {
      const fileList = listFiles(files);
      nodeLi.appendChild(fileList); 
    }

    if (Array.isArray(content) && content.length > 0) {
      const subUl = createSubContainer(nodeLi);
      DisplayHierarchy(subUl, content);
    }

    container.appendChild(nodeLi); 
  }
};


export function createNode(label, index) {
  const li = document.createElement('li');
  li.textContent = label;
  li.className = `dir_${index} createNode chevron-list open`;
  li.id = `${label}_${index}`
  return li;
}

export function createSubContainer(parentLi) {
  const ul = document.createElement('ul');
  ul.className = 'createSubContainer';
  parentLi.appendChild(ul);
  return ul;
}

export function listFiles(files) {
    const ul = document.createElement('ul');

    files.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.className = 'createTree remove-list-style';
        ul.appendChild(li);
    });

    return ul;
}







