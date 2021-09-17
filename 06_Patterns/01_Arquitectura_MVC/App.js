const model = {
    todos: []
};

const view = {
    //funcion para empezar el renderizado con la lista vacía
    clearList: function(){
        const todoList = document.getElementById('todo-list');
        const range = document.createRange();
        range.selectNodeContents(todoList)
        range.deleteContents();
    },

    render: function() {
        this.clearList();
        const todoList = document.getElementById('todo-list');
        for (let i = 0; i < model.todos.length; i++) {
            const li = document.createElement('li');
            const span = document.createElement('span');
            const aCompleted = document.createElement('aCompleted');
            const aDelete = document.createElement('aDelete');
            
            span.innerHTML = document.getElementById('add-item'.value);
            aCompleted.innerHTML = '✅';
            aDelete.innerHTML = '❌';

            li.appendChild(span);
            li.appendChild(aCompleted);
            li.appendChild(aDelete);

            todoList.appendChild(li);
        }

        document.getElementById('form').addEventListener('submit', this.addItem);


            const newListItem = `
            <li>
                <span style="text-decoration: line-through;">
                    ${document.getElementById('add-item').value}
                </span>
                <a>✅</a>
                <a>❌</a>
            </li>
        `;
        todoList.innerHTML = todoList.innerHTML + newListItem;

        }
        document.getElementById('form').addEventListener('submit', this.addItem);
    },

    addItem: function(e) {
        e.PreventDefault();
        const addItemInput = document.getElementById('add-item')
        if(addItemInput.value != '' && addItemInput.value != ' '){
            controller.addItem(addItemInput.value);
        }
        document.getElementById('add-item').value = '';
    }
};

const controller = {
    init: function() {
        view.render();
    },
    addItem: function(item) {
        const newTodoItem = { todo: item, completed: false }
        model.todos.push(newTodoItem);
        view.render();
    },
    completeItem: function(itemIndex) {
        model.todos[itemIndex].completed = !model.todos[itemIndex].completed
        view.render();
    },
    deleteItem: function(itemIndex) {

    }
};

controller.init();