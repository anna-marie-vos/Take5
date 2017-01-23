
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hazards').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hazards').insert({hazard_id: 1,
            hazard: 'rainwater at entry',
            consequence:'slip / trip / fall',
            photos:'http://libraagenciesuk.net/H20/images/h20/h20_floor_water_proof_wood_2.jpg',
            existing_mitigation: 'install rain water mats',
            future_mitigation:'add canopy at entry',
            add_notice:'rain water at entry be careful when entering the building',
            liklihood:'low',
            owner:'architect',
            eliminated:'true'
            }),
        knex('hazards').insert({hazard_id: 2,
            hazard: 'loose cables on floor',
            consequence:'slip / trip / fall',
            photos:'http://www.theworkplacedepot.co.uk/media/catalog/category/260X195/snapfit-internal-cable-protector-1.jpg',
            existing_mitigation: 'use internal cable protector for temporary cables',
            future_mitigation:'install raised floor',
            add_notice:'',
            liklihood:'moderate',
            owner:'electrical / ICT contractor',
            eliminated:'false'
            }),
        knex('hazards').insert({hazard_id: 3,
            hazard: 'storage boxes blocking emergency exit',
            consequence:'occupants unable to exit building during emergency',
            photos:'http://locknet.com/wp-content/uploads/2014/03/illegally-blocked-exit-door.jpg',
            existing_mitigation: 'relocate boxes',
            future_mitigation:'create storage space for boxes',
            add_notice:'Do not use exit 2, currently blocked by boxes',
            liklihood:'moderate',
            owner:'building manager',
            eliminated:'false'
            })
      ]);
    });
};
