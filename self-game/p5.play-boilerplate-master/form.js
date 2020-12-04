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
        this.title.position (displayWidth/2-20, 0)
        this.teacher1.position (displayWidth/2-50, 0)
        this.teacher2.position(displayWidth/2-50, 100)
        this.teacher3.position(displayWidth/2-50, 200)
        this.teacher4.position(displayWidth/2-50, 300)
        this.teacher5.position(displayWidth/2-50, 400)
        this.teacher1.mousePressed (()=>{
            this.title.hide()
            this.teacher1.hide()
            this.teacher2.hide()
            this.teacher3.hide()
            this.teacher4.hide()
            this.teacher5.hide()
            this.newpage = new Existingandnew();
            this.newpage.display();
        })
    }
}