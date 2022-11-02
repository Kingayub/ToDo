const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: true,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function () {
        for (let i = 0; i < this.items.length; i++) {
            this.print(i)
        }
    },

    add: function (text) {
        this.items.unshift(text);
    },

    remove: function (index) {
        this.items.splice(index, 1)
    },

    print: function (index) {
        this.items[index].completed ? console.log(`[X] ${this.items[index].text}`) :
            console.log(`[  ] ${this.items[index].text}`)
    },

    complete: function (index) {
        this.items[index].completed = true;
    },
};

todoList.complete(1);
todoList.complete(2);
todoList.printAll()