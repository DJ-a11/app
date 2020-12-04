class Existingandnew {
    constructor()  {
        this.existing = createButton ("Existing chats")
        this.new = createButton ("Create a new chat")

        

        

    } 
    display() {
        this.existing.position(displayWidth/2-70,100)
        this.new.position(displayWidth/2-70,200)
    } 
} 
