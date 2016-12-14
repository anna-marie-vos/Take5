
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('hazardLog').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('hazardLog').insert({'project_site':'WIAL int extensions','user':'A Vos',
        'hazard': 'loose wires on floor','risk':'slip-trip-fall','mitigation':'tidy workplace',
        'owner':'main contractor', 'liklihood': 'high','consequence':'low',
        'eliminated':'false'}),
        knex('hazardLog').insert({'project_site':'GCNZ','user':'T Oliver',
        'hazard': 'No working lights in maintenance spaces','risk':'slip-trip-fall','mitigation':'replace lightbulbs',
        'owner':'electrical contractor', 'liklihood': 'medium','consequence':'medium',
        'eliminated':'false'}),
        knex('hazardLog').insert({'project_site':'Pharmaspec','user':'D boshoff',
        'hazard': 'powders spill','risk':'suffocation',
        'mitigation':'limit acces and clean spill',
        'owner':'process manager', 'liklihood': 'high','consequence':'high',
        'eliminated':'false'})
      ]);
    });
};
