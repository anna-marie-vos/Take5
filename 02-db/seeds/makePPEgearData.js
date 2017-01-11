
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ppeGear').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ppeGear').insert({ppe_id: 1,
              ppe_name: 'Safety Boots',
              ppe_image:'http://www.activesafety.co.nz/media/22445/bestboy-sfo5lu-1.jpg?width=500&heightratio=1&bgcolor=fff'
            }),
        knex('ppeGear').insert({ppe_id: 2,
              ppe_name: 'high vis yellow vest',
              ppe_image:'https://images-na.ssl-images-amazon.com/images/I/41TZhfvh-yL.jpg'
            }),
        knex('ppeGear').insert({ppe_id: 3,
              ppe_name: 'hard hat',
              ppe_image:'http://multimedia.3m.com/mws/media/794051J/3mtm-hard-hat-vented-white-4-point-ratchet-suspension-h-701v.jpg'
            }),
        knex('ppeGear').insert({ppe_id: 4,
              ppe_name: 'eye protection',
              ppe_image:'http://v2.glacialblog.com/userfiles/55/image/Eye%20Protection%20blog.jpg'
            }),
        knex('ppeGear').insert({ppe_id: 5,
              ppe_name: 'ear protection',
              ppe_image:'http://img.directindustry.com/images_di/photo-g/60721-2451487.jpg'
            })
      ]);
    });
};
