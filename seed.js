const { db } = require("./server/db");
const Student = require('./server/db/models/student')
const Campus = require('./server/db/models/campus')

const campuses = [
  {
    name: 'Hogwarts School of Witchcraft and Wizardry',
    imageUrl: 'https://cdn.pixabay.com/photo/2018/06/15/11/16/hogwarts-3476786__480.png',
    address: 'Scotland Highlands',
    description: 'Disrupt next level franzen, brunch chillwave snackwave retro shoreditch beard tumblr 3 wolf moon messenger bag chartreuse vice. Mumblecore food truck freegan jianbing, knausgaard waistcoat PBR&B pickled wayfarers disrupt hashtag bushwick raw denim godard fixie. Air plant vice wolf, pour-over retro asymmetrical umami meggings fanny pack. Adaptogen air plant direct trade, selfies blue bottle vegan ennui trust fund portland man braid waistcoat gastropub semiotics'
  },
  {
    name: 'Ilvermorny School of Witchcraft and Wizardry',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzdGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    address: 'Mount Greylock, United States of America',
    description: 'Roof party biodiesel shoreditch, mumblecore wolf kitsch 90s poke selfies pabst direct trade asymmetrical scenester. Semiotics bitters af, vexillologist XOXO waistcoat brunch pug. Neutra bespoke pug before they sold out kombucha. Pour-over plaid etsy coloring book marfa literally fam cliche shaman. 8-bit hashtag hexagon blog direct trade enamel pin. Tote bag 8-bit bicycle rights vaporware pitchfork neutra YOLO. Jianbing yuccie forage banjo disrupt taxidermy humblebrag, gentrify wolf intelligentsia tattooed YOLO'
  },
  {
    name: 'Mahoutokoro School of Magic',
    imageUrl: 'https://images.unsplash.com/photo-1508682641856-78948a748357?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FzdGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    address: 'Minami Iwo Jima, Japan',
    description: 'Health goth post-ironic farm-to-table asymmetrical single-origin coffee twee pour-over banh mi. Activated charcoal marfa banjo viral, fixie listicle woke you probably havent heard of them. Woke marfa VHS distillery. Meggings austin keytar, locavore small batch helvetica vinyl vape forage. Aesthetic blog celiac next level, readymade cred 90s chartreuse unicorn. Hoodie crucifix food truck four dollar toast bicycle rights before they sold out, pug try-hard hexagon fam offal yr'
  }
]

const students = [
  {
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'harryelpote@hogwarts.com',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/03/24/12/19/harry-potter-4077473__340.png',
    gpa: 4.0,
    // campusId: 1
  },
  {
    firstName: 'Ron',
    lastName: 'Weasley',
    email: 'ronaldoweasley@hogwarts.com',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/04/16/17/17/ron-4132263__480.jpg',
    gpa: 2.8,
    // campusId: 1
  },
  {
    firstName: 'Hermione',
    lastName: 'Granger',
    email: 'hermione_numero1@hogwarts.com',
    imageUrl: 'https://cdn.pixabay.com/photo/2019/07/18/12/24/hermione-granger-4346324__480.jpg',
    gpa: 3.9,
    // campusId: 2
  },
  {
    firstName: 'Albus',
    lastName: 'Dumbledore',
    email: 'elviejoalbus@hogwarts.com',
    imageUrl: 'https://cdn.pixabay.com/photo/2015/12/25/18/26/wizard-1107855__340.jpg',
    gpa: 3.0
  }
]

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(students.map(student => {
      return Student.create(student);
    }))
    await Promise.all(campuses.map(campus => {
      return Campus.create(campus);
    }))
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch(err => {
      console.error("Seeding Error!");
      console.error(err);
      db.close();
    });
}
