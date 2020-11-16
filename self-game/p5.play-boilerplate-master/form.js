class Form {
    constructor() {
        this.title = createElement ("h4")
        this.teacher1 = createButton ("Sarah Thomas")
        this.teacher2 = createButton ("teacher2")
        this.teacher3 = createButton ("teacher3")
        this.teacher4 = createButton ("teacher4")
        this.teacher5 = createButton ("teacher5")

    }
    display() {
        this.teacher1.position (30, 1000)
        //this.title.html ("Choose which teacher you want to talk to!")
        //this.title.position (500, 700)
    }
}