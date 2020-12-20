
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'build this app', priority: 'high', completed: false},
        {id: 2, task: 'display the tasks', priority: 'high', completed: false},
        {id: 3, task: 'add new tasks', priority: 'medium', completed: true},
      ]);
    });
};
