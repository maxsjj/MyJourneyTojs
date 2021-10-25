// write a Set standard data structure clone called Group


class Group {
  //the constructor makes an empty group
  construcor(){
    this.members=[];
  }
  
  add (value){
    if (!this.has(value))
      this.members.push(value);
  }
  
  delete (value) {
    this.members=this.members.filter(v => v !== value);
    }
  
  has(value){
    return this.members.includes(value);
  }
  static from(collection){
    let group = new Group;
    for (let value of collection){
      group.add(value);
    }
    return group;
  
  }
  // make the Group class iterable
  [Symbol.iterator](){
    return new groupIterator(this);
  }
  

}

class groupIterator {
  constructor(){
    this.group=group;
    this.position=0;
  }
  next(){
    if (this.position>=this.group.members.length){
      return {done: true};
    }else{
      let result = {value: this.group.members[this.position],done:false
                   }
      this.position++;
      return result;
    }
    
  }

}



let group= Group.from([10,20]);
console.log(group.has(10));
console.log(group.has(30));
group.delete(10);
console.log(group.has(10));
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
