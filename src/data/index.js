import {
  arnolfini_portrait,
  girl_with_pearl_earring,
  guernica,
  lady_with_an_ermine,
  monal_lisa,
  penitent_magdalene,
  starry_night,
  the_storm_on_the_sea_of_galilee,
  the_basket_of_apples,
  the_boy_in_the_red_vest,
  the_great_wave_off_kanagawa,
  van_gogh_self_portrait,
  the_sleeping_gypsy,
  the_night_cafe,
  the_swing,
} from '../assets/index'

 const data = [
  {
    id: 0,
    name: 'Starry Night',
    slug: 'starry-night',
    year: 1889,
    grid_column: 1,
    lineWidth: 1,
    description:
      'Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."',
    source: 'https://en.wikipedia.org/wiki/The_Starry_Night',
    artist: {
      image: starry_night.artist,
      name: 'Vincent Van Gogh',
    },
    images: {
      thumbnail: starry_night.thumbnail,
      hero: {
        small: starry_night.hero_small,
        large: starry_night.hero_large,
      },
      gallery: starry_night.gallery,
    },
  },
  {
    id: 1,
    name: 'Girl with a Pearl Earring',
    slug: 'girl-with-a-pearl-earring',
    year: 1665,
    grid_column: 2,
    lineWidth: 2,
    description:
      "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
    source: 'https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring',
    artist: {
      image: girl_with_pearl_earring.artist,
      name: 'Johannes Vermeer',
    },
    images: {
      thumbnail: girl_with_pearl_earring.thumbnail,
      hero: {
        small: girl_with_pearl_earring.hero_small,
        large: girl_with_pearl_earring.hero_large,
      },
      gallery: girl_with_pearl_earring.gallery,
    },
  },
  {
    id: 2,
    name: 'Guernica',
    slug: 'guernica',
    year: 1937,
    grid_column: 3,
    lineWidth: 3,
    description:
      'The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.',
    source: 'https://en.wikipedia.org/wiki/Guernica_(Picasso)',
    artist: {
      image: guernica.artist,
      name: 'Pablo Picasso',
    },
    images: {
      thumbnail: guernica.thumbnail,
      hero: {
        small: guernica.hero_small,
        large: guernica.hero_large,
      },
      gallery: guernica.gallery,
    },
  },
  {
    id: 3,
    name: 'Penitent Magdalene',
    slug: 'penitent-magdalene',
    year: 1625,
    grid_column: 4,
    lineWidth: 4,
    description:
      "Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.",
    source:
      'https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)',
    artist: {
      image: penitent_magdalene.artist,
      name: 'Artemisia Gentileschi',
    },
    images: {
      thumbnail: penitent_magdalene.thumbnail,
      hero: {
        small: penitent_magdalene.hero_small,
        large: penitent_magdalene.hero_large,
      },
      gallery: penitent_magdalene.gallery,
    },
  },
  {
    id: 4,
    name: 'The Storm on the Sea of Galilee',
    slug: 'the-storm-on-the-sea-of-galilee',
    year: 1633,
    grid_column: 1,
    lineWidth: 5,
    description:
      "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.",
    source: 'https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee',
    artist: {
      image: the_storm_on_the_sea_of_galilee.artist,
      name: 'Rembrandt',
    },
    images: {
      thumbnail: the_storm_on_the_sea_of_galilee.thumbnail,
      hero: {
        small: the_storm_on_the_sea_of_galilee.hero_small,
        large: the_storm_on_the_sea_of_galilee.hero_large,
      },
      gallery: the_storm_on_the_sea_of_galilee.gallery,
    },
  },
  {
    id: 5,
    name: 'The Great Wave off Kanagawa',
    slug: 'the-great-wave-off-kanagawa',
    year: 1831,
    grid_column: 2,
    lineWidth: 6,
    description:
      'The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai\'s series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.',
    source: 'https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa',
    artist: {
      image: the_great_wave_off_kanagawa.artist,
      name: 'Hokusai',
    },
    images: {
      thumbnail: the_great_wave_off_kanagawa.thumbnail,
      hero: {
        small: the_great_wave_off_kanagawa.hero_small,
        large: the_great_wave_off_kanagawa.hero_large,
      },
      gallery: the_great_wave_off_kanagawa.hero_large,
    },
  },
  {
    id: 6,
    name: 'Van Gogh Self-portrait',
    slug: 'van-gogh-self-portrait',
    year: 1889,
    grid_column: 3,
    lineWidth: 7,
    description:
      'This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was "absolutely fanatical". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh\'s final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.',
    source: 'https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)',
    artist: {
      image: van_gogh_self_portrait.artist,
      name: 'Vincent Van Gogh',
    },
    images: {
      thumbnail: van_gogh_self_portrait.thumbnail,
      hero: {
        small: van_gogh_self_portrait.hero_small,
        large: van_gogh_self_portrait.hero_large,
      },
      gallery: van_gogh_self_portrait.gallery,
    },
  },
  {
    id: 7,
    name: 'The Sleeping Gypsy',
    slug: 'the-sleeping-gypsy',
    year: 1897,
    grid_column: 4,
    lineWidth: 8,
    description:
      'The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.',
    source: 'https://en.wikipedia.org/wiki/The_Sleeping_Gypsy',
    artist: {
      image: the_sleeping_gypsy.artist,
      name: 'Henri Rousseau',
    },
    images: {
      thumbnail: the_sleeping_gypsy.thumbnail,
      hero: {
        small: the_sleeping_gypsy.hero_small,
        large: the_sleeping_gypsy.hero_large,
      },
      gallery: the_sleeping_gypsy.gallery,
    },
  },
  {
    id: 8,
    name: 'Lady with an-Ermine',
    slug: 'lady-with-an-ermine',
    year: 1489,
    grid_column: 1,
    lineWidth: 9,
    description:
      'The Lady with an Ermine (Italian: Dama con l\'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ("Il Moro"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de\' Benci, La Belle Ferronnière and the Mona Lisa',
    source: 'https://en.wikipedia.org/wiki/Lady_with_an_Ermine',
    artist: {
      image: lady_with_an_ermine.artist,
      name: 'Leonardo da Vinci',
    },
    images: {
      thumbnail: lady_with_an_ermine.thumbnail,
      hero: {
        small: lady_with_an_ermine.hero_small,
        large: lady_with_an_ermine.hero_large,
      },
      gallery: lady_with_an_ermine.gallery,
    },
  },
  {
    id: 9,
    name: 'The Night Café',
    slug: 'the-night-cafe',
    year: 1888,
    grid_column: 2,
    lineWidth: 10,
    description:
      "The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.",
    source: 'https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9',
    artist: {
      image: the_night_cafe.artist,
      name: 'Vincent Van Gogh',
    },
    images: {
      thumbnail: the_night_cafe.thumbnail,
      hero: {
        small: the_night_cafe.hero_small,
        large: the_night_cafe.hero_large,
      },
      gallery: the_night_cafe.gallery,
    },
  },
  {
    id: 10,
    name: 'The Basket of Apples',
    slug: 'the-basket-of-apples',
    year: 1893,
    grid_column: 4,
    lineWidth: 11,
    description:
      'The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.',
    source: 'https://en.wikipedia.org/wiki/The_Basket_of_Apples',
    artist: {
      image: the_basket_of_apples.artist,
      name: 'Paul Cézanne',
    },
    images: {
      thumbnail: the_basket_of_apples.thumbnail,
      hero: {
        small: the_basket_of_apples.hero_small,
        large: the_basket_of_apples.hero_large,
      },
      gallery: the_basket_of_apples.gallery,
    },
  },
  {
    id: 11,
    name: 'The Boy in the Red Vest',
    slug: 'the-boy-in-the-red-vest',
    year: 1889,
    grid_column: 1,
    lineWidth: 12,
    description:
      'Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US',
    source: 'https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest',
    artist: {
      image: the_boy_in_the_red_vest.artist,
      name: 'Paul Cézanne',
    },
    images: {
      thumbnail: the_boy_in_the_red_vest.thumbnail,
      hero: {
        small: the_boy_in_the_red_vest.hero_small,
        large: the_boy_in_the_red_vest.hero_large,
      },
      gallery: the_boy_in_the_red_vest.gallery,
    },
  },
  {
    id: 12,
    name: 'Arnolfini Portrait',
    slug: 'arnolfini-portrait',
    year: 1434,
    grid_column: 2,
    lineWidth: 13,
    description:
      'It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich "in its own way it was as new and revolutionary as Donatello\'s or Masaccio\'s work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term".',
    source: 'https://en.wikipedia.org/wiki/Arnolfini_Portrait',
    artist: {
      image: arnolfini_portrait.artist,
      name: 'Jan van Eyck',
    },
    images: {
      thumbnail: arnolfini_portrait.thumbnail,
      hero: {
        small: arnolfini_portrait.hero_small,
        large: arnolfini_portrait.hero_large,
      },
      gallery: arnolfini_portrait.gallery,
    },
  },
  {
    id: 13,
    name: 'Mona Lisa',
    slug: 'mona-lisa',
    year: 1503,
    grid_column: 3,
    lineWidth: 14,
    description:
      'The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world". The painting\'s novel qualities include the subject\'s enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.',
    source: 'https://en.wikipedia.org/wiki/Mona_Lisa',
    artist: {
      image: monal_lisa.artist,
      name: 'Leonardo da Vinci',
    },
    images: {
      thumbnail: monal_lisa.thumbnail,
      hero: {
        small: monal_lisa.hero_small,
        large: monal_lisa.hero_large,
      },
      gallery: monal_lisa.gallery,
    },
  },
  {
    id: 14,
    name: 'The Swing',
    slug: 'the-swing',
    year: 1767,
    grid_column: 4,
    lineWidth: 15,
    description:
      'The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.',
    source: 'https://en.wikipedia.org/wiki/The_Swing_(Fragonard)',
    artist: {
      image: the_swing.artist,
      name: 'Jean-Honoré Fragonard',
    },
    images: {
      thumbnail: the_swing.thumbnail,
      hero: {
        small: the_swing.hero_small,
        large: the_swing.hero_large,
      },
      gallery: the_swing.gallery,
    },
  },
]


export default data