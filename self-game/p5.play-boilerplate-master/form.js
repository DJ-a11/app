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
       
        this.title.html ("Choose which teacher you want to talk to!")
        this.title.position (displaywidth/2-20, 0)
        this.teacher1.position (displaywidth/2-50, 0)
        this.teacher2.position(displaywidth/2-50, 100)
        this.teacher3.position(displaywidth/2-50, 200)
        this.teacher4.position(displaywidth/2-50, 300)
        this.teacher5.position(displaywidth/2-50, 400)
        this.teacher1.buttonPressed (()=>{
            this.title.hide()
            this.teacher1.hide()
        })
    }
}