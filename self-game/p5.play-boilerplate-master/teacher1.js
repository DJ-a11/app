class Teacher1 extends Existingandnew{
    constructor() {
        super(); 
        this.chat = createInput ("Type your message here!")
        this.send = createButton ("Send")
        this.count = 0
    }
    updateChat() {
        database.ref("teacher1/sentchat").set ({
            chat + this.count: 
        })
    }

}

