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
  static form(collection){
    let group = new Group;
    for (let value of collection){
      group.add(value);
    }
    return group;
  
  }

}

let group= group.from([10,20]);
console.log(group.has(10));
console.log(group.has(30));
group.delete(10);
console.log(group.has(10));
