
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('address').del()
  .then(() => {

    return knex('user').del()
      .then(function () {
        // Inserts seed entries
        return knex('user').insert([
          { username: 'admin', first_name: 'Alli', password:"$2b$10$zBElSxk.u4C.ProyTSS7ueWDFJYxScX7Dg2q./wod8IJr/HXcMTYO"},
          { username: 'poweruser', first_name: 'Power', last_name: 'User', birthday:'1979-08-08', password:"$2b$10$hNBC4rF1kLHAFO2f1J9K7OChBnBONJCzlQtgqQCpXHUowxaJUyFhq"}
        ]);
      })
      .then((userId) => {
        return knex('address').insert([
          {user_id: userId[0], street_name:"Ryparken 140", zip:"2100", city: "Copenhagen" },
          {user_id: userId[0], street_name:"Somestreet 145", zip:"2100", city: "Copenhagen" },
          {user_id: userId[0], street_name:"Emdrupvej 145", zip:"2100", city: "Copenhagen" }
        ])
      });
  })
};