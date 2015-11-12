var School = function(){
  students = {
  } ;
}

School.prototype.add = function(name, grade){
  if (students[grade]) {
    students[grade].push(name);
    students[grade] = students[grade].sort();
  }else{
    students[grade] = []
    students[grade].push(name);
  }
};

School.prototype.roster = function(){
  return students;
};

School.prototype.grade = function(grade){
  if(students[grade]){
    return students[grade];
  }else{
    return [];
  }
};

module.exports = School;
