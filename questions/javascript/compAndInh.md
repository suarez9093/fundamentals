# What is the difference between Composition and Inheritance

```javascript
// Has all of the functionality that the children share
class Monster {
    constructor(name){
        this.name = name
    }

    attack() {
        console.log(`${this.name} attacked`)
    }
}

class FlyingMonster extends Monster {
    fly(){
        console.log(`${this.name}` flew)
    }
}
```

The FlyingMonster class has the same functionality as the Monster class. This is the basic type of Inheritance.
