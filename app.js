const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

console.log('hello');

item.addEventListener('dragstart', dragstart); /*говрит, что должно происходить когда мы начали перетаскивать*/
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);/*dragover вызывается тогда, когда элемент, который мы перетаскиваем находится НАД placeholder, куда мы можем поместить*/
    placeholder.addEventListener('dragenter', dragenter);/*когда заходим на территорию конкретного placeholder'а */
    placeholder.addEventListener('dragleave', dragleave);/*когда перетащили, но вышли оттуда */
    placeholder.addEventListener('drop', dragdrop);/*когда отпустили */
}

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
    
};

function dragend(event) {
    event.target.classList.remove('hold', 'hide'); /*альт.вариант записи: event.target.classNаme = 'item' -> перебрать все классы и оставить только item*/
};

function dragover(event) {
    event.preventDefault();
}; 

function dragenter(event) {
    event.target.classList.add('hovered');
}; 

function dragleave(event) {
    event.target.classList.remove('hovered');
}; 

function dragdrop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
}; 