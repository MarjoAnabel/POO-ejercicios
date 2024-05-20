class Person {
    constructor (name, age , genre) {
        this.name = name
        this.age = age
        this.genre = genre
    }
    obtDetails = () => {
        return (`Tu nombre es ${this.name} tu edad es ${this.age} y eres ${this.genre}`)
    }
}

const oneperson = new Person ('Maria', '27', 'Mujer')

//oneperson.obtDetails()
//'Tu nombre es Maria tu edad es 27 y eres Mujer'


class Student extends Person {
    constructor (name,age,genre,course,group) {
    super (name,age,genre)
    this.course = course
    this.group = group

 }
    register = () => {
        return (`Tu nombre es ${this.name} tu edad es ${this.age} y eres ${this.genre} tu curso es ${this.course} perteneces al grupo ${this.group} ` )
    }
}

const twoperson = new Student ('Lucia', '30','Mujer','4','1b')

//twoperson.register()
//'Tu nombre es Maria tu edad es 27 y eres Mujer tu curso es 4 pertenecer al grupo 1b '


class Teacher extends Student {
    constructor (name,age,genre,course,group,subject,level) { 
    super (name,age,genre,course,group)
    this.subject = subject
    this.level = level
}
     assing = () => {
        return (`Tu nombre es ${this.name} tu edad es ${this.age} y eres ${this.genre},Tu curso es ${this.course} perteneces al grupo ${this.group} tu asignatura es ${this.subject} y nivel ${this.level} `)

     }

 }

 const treeperson = new Teacher ('Gabriel', '40','Hombre','2','2b','lengua','avanzado')


 //extras