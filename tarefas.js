var listElement = document.querySelector('#lista ul');
var inputElement = document.querySelector('#cadastro input');
var buttonElement = document.querySelector('#cadastro button');

var tarefas = JSON.parse(localStorage.getItem('lista_tarefas')) || [];

listElement.addEventListener('click',function(ev){
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');}}, );


function renderTarefas(){
    listElement.innerHTML = '';
    for(tarefa of tarefas){
        var tarefaElement = document.createElement('li');
        var tarefaText = document.createTextNode(tarefa);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = tarefas.indexOf(tarefa);
        linkElement.setAttribute('onclick','deleteTarefa('+ pos +')');
        linkElement.className = 'close';
        var linkText = document.createTextNode('\u00D7');

        linkElement.appendChild(linkText);
        tarefaElement.appendChild(tarefaText);
        tarefaElement.appendChild(linkElement);
        document.getElementById('item').appendChild(tarefaElement);

    }
}

renderTarefas();

function addTarefa(){
    var tarefaText = inputElement.value;
    tarefas.push(tarefaText);
    inputElement.value = '';
    renderTarefas();
    saveToStorage();
}

buttonElement.onclick = addTarefa;

function deleteTarefa(pos){
    tarefas.splice(pos,1);
    renderTarefas();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('lista_tarefas', JSON.stringify(tarefas));
}