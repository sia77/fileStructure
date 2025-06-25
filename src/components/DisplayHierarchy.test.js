import { describe, expect } from "vitest";
import { createNode, createSubContainer, DisplayHierarchy, listFiles } from "./DisplayHierarchy";

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

        expect(ul.tagName).toBe('UL');
        expect(ul.className).toBe('createSubContainer');
    })

});

describe("listFiles()", () => {
    it("creates a <ul> with <li> items for each file", ()=>{

        const files = ["test1.css", "test2.css", "test3.css"];
        const ul = listFiles(files);
        
        expect(ul.tagName).toBe('UL');
        expect(ul.children.length).toBe(3);

        Array.from(ul.children).forEach((li, index) => {
            expect(li.tagName).toBe('LI');
            expect(li.className).toBe('createTree remove-list-style');
            expect(li.textContent).toBe(files[index]);
        });
    });

    it("returns an empty <ul> if no files are passed", ()=>{
        const files = [];
        const ul = listFiles(files);

        expect(ul.tagName).toBe('UL');
        expect(ul.children.length).toBe(0);
    })

});


describe("DisplayHierarchy()", () => {
    it("renders a nested folder structure correctly", ()=>{

        const mockData = [
            {
                dir_name: 'Documents',
                files: ['resume.pdf', 'coverletter.docx'],
                content: [
                    {
                    dir_name: 'Projects',
                    files: ['project1.js'],
                    content: []
                    }
                ]
            },
            {
                dir_name: 'Pictures',
                files: ['photo.jpg'],
                content: []
            }
        ];

        const container = document.createElement('ul');

        DisplayHierarchy(container, mockData);

        expect(container.children.length).toBe(2);

        const documents = container.children[0];
        expect(documents.tagName).toBe('LI');
        expect(documents.textContent).toContain('Documents');
        expect(documents.id).toBe('Documents_0');

        const documentsFileList = documents.querySelectorAll('li.createTree');
        expect(documentsFileList.length).toBe(3);
        expect(documentsFileList[0].textContent).toBe('resume.pdf');


        const pictures = container.children[1];
        expect(pictures.id).toBe('Pictures_1');

        const picFileList = pictures.querySelectorAll('li.createTree');
        expect(picFileList.length).toBe(1);
        expect(pictures.textContent).toContain('Pictures');
        expect(picFileList[0].textContent).toBe('photo.jpg');


    })

});



