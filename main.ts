interface action {
    action_ave(): void
}

class pato {
    action(action_desc: action){
        action_desc.action_ave()
    }
}

class galinha {
    action_gal(){
        console.log('bater asas');
    }
}

class adapterPato extends galinha implements action{
    action_ave(): void {
        this.action_gal()
    }
}

const pato1 = new pato()
pato1.action(new adapterPato)
