const writeFrm = document.querySelector('#writeFrm');
const submitHandler = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const writer = e.target.wiriter.value;
    const content = e.target.content.value;

    try { 
        const boardsObj = JSON.parse(localStorage.getItem('boards'));

        const index = boardsObj.boards.length;
        const instance = new Board(index, title, writer, content);
        boardsObj.boards.push(instance);

        const boardsStr = JSON.stringify(boardsObj);
        localStorage.setItem('boards', boardsStr);
        location.href = 'index.html';
    } catch (e) {
        alert(e.message);
    }
}   
    


    

