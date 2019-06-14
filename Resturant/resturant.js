const menu = {
    _courses :{
        appetizers :[],
        mains : [],
        desserts : []
    },

    getRandomDishFromCourse(courseName) {
        let arrays = '';
        let number = '';
        if(courseName == null){ return 'falsy input course'};
        for(course in menu['_courses']){
            if(courseName === course){
                arrays = this._courses[course];
                number = Math.floor(Math.random() * arrays.length);
            }
        }
    return arrays[number];    
},
    getRandomMeal(){
        let appetizers = this.getRandomDishFromCourse('appetizers');
        let mains = this.getRandomDishFromCourse('mains');
        let desserts = this.getRandomDishFromCourse('desserts');
        return {
            appetizers : appetizers,
            main : mains ,
            desserts : desserts
        }

    },

    addDishToCourse(courseName,dishName,dishPrice){
        const dish = {
            name : dishName,
            price : dishPrice,
        }
        for(course in menu['_courses']){
            if(courseName === course){
                this.courses[course].push(dish);
            }
        }

    },

    get courses(){
        return{
            appetizers :this.appetizers,
            mains : this.mains,
            desserts : this.desserts
        }
    },

    get mains(){
        return menu['_courses']['mains'];
    },

    get desserts(){
        return menu['_courses']['desserts'];
    },

    get appetizers(){
        return menu['_courses']['appetizers'];
    },

    set appetizers(appetizersIn){
        this['_courses']['appetizers'] = appetizersIn;
    },
    set desserts(appetizersIn){
        this['_courses']['desserts'] = appetizersIn;
    },
    set mains(appetizersIn){
        this['_courses']['mains'] = appetizersIn;
    }
}

menu.addDishToCourse('desserts','cream',13);
menu.addDishToCourse('desserts','icecream',123);
menu.addDishToCourse('desserts','pancake',1334);
menu.addDishToCourse('mains','chicken',13);
menu.addDishToCourse('mains','steak',123);
menu.addDishToCourse('mains','cheese',1334);
menu.addDishToCourse('appetizers','cake',13);
menu.addDishToCourse('appetizers','strew',123);
menu.addDishToCourse('appetizers','pan',1334);
console.log(menu.getRandomMeal());