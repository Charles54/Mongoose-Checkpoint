const person = new Person({
    name: 'John Doe',
    age: 25,
    favoriteFoods: ['Pizza', 'Burger']
  });
  
  person.save(function(err, data) {
    if (err) return console.error(err);
    console.log('Person saved:', data);
  });
  
  const arrayOfPeople = [
    { name: 'Alice', age: 30, favoriteFoods: ['Sushi', 'Pasta'] },
    { name: 'Bob', age: 35, favoriteFoods: ['Burger', 'Tacos'] }
  ];
  
  Person.create(arrayOfPeople, function(err, people) {
    if (err) return console.error(err);
    console.log('People created:', people);
  });
  

  Person.find({ name: 'Alice' }, function(err, people) {
    if (err) return console.error(err);
    console.log('People found:', people);
  });
  

  const food = 'Pizza';

Person.findOne({ favoriteFoods: food }, function(err, person) {
  if (err) return console.error(err);
  console.log('Person found:', person);
});


const personId = 'your-person-id';

Person.findById(personId, function(err, person) {
  if (err) return console.error(err);
  console.log('Person found:', person);

  Person.findById(personId, function(err, person) {
    if (err) return console.error(err);
    person.favoriteFoods.push('Hamburger');
    person.save(function(err, updatedPerson) {
      if (err) return console.error(err);
      console.log('Person updated:', updatedPerson);
    });
});


});
