export interface ChronologyEvent {
  year: string;
  title: string;
  description: string;
}

export const CHRONOLOGY: ChronologyEvent[] = [
  { year: '1840', title: 'Birth in Paris', description: 'Born Oscar-Claude Monet on November 14, 1840, in Paris.' },
  { year: '1858', title: 'Early Influence', description: 'Meets Eugène Boudin, who becomes his mentor and teaches him to paint "en plein air" (outdoors).' },
  { year: '1859', title: 'Move to Paris', description: 'Travels to Paris to study at the Académie Suisse, where he meets fellow painter Camille Pissarro.' },
  { year: '1862', title: 'Gleyre\'s Studio', description: 'Studies under Charles Gleyre. There he meets Pierre-Auguste Renoir, Frédéric Bazille, and Alfred Sisley, forming the core group of Impressionists.' },
  { year: '1870', title: 'Marriage and Exile', description: 'Marries his model, Camille Doncieux. Following the outbreak of the Franco-Prussian War, they move to London.' },
  { year: '1871', title: 'Argenteuil Period', description: 'Settles in Argenteuil, initiating a highly productive period where many of his most famous works are created.' },
  { year: '1874', title: 'The First Exhibition', description: 'The First Impressionist Exhibition is held. His painting "Impression, Sunrise" is mocked by a critic, who accidentally coins the term "Impressionism."' },
  { year: '1879', title: 'Tragedy', description: 'His wife Camille dies at the age of 32.' },
  { year: '1883', title: 'Settling in Giverny', description: 'Moves into a house in Giverny, where he will live for the rest of his life.' },
  { year: '1890', title: 'The Water Garden', description: 'Begins a massive landscaping project at Giverny, including the iconic lily ponds.' },
  { year: '1914', title: 'The Grandes Décorations', description: 'Constructs a large new studio and begins working on a massive scale on the final Water Lilies panels.' },
  { year: '1926', title: 'Final Years', description: 'Dies on December 5, 1926, at the age of 86. He is buried in the Giverny church cemetery.' }
];

export interface Painting {
  id: string;
  title: string;
  year: string;
  image: string;
  description: string;
  dimensions?: string;
  location?: string;
  museumLink?: string;
}

export const MONET_PAINTINGS: Painting[] = [
  {
    id: "impression-sunrise",
    title: "Impression, Sunrise",
    year: "1872",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/960px-Monet_-_Impression%2C_Sunrise.jpg",
    description: "Impression, Sunrise is one of Monet's most famous paintings and the namesake of the Impressionist movement. It depicts the morning at the port of Le Havre, with sunlight reflecting on the water through the mist. Monet captured the fleeting effects of light and shadow with quick, loose brushstrokes, creating a record of a moment's 'impression' rather than a detailed depiction of reality.",
    dimensions: "48 cm × 63 cm",
    location: "Musée Marmottan Monet, Paris",
    museumLink: "https://www.marmottan.fr/en/collections/claude-monet/"
  },
  {
    id: "water-lilies",
    title: "Water Lilies",
    year: "1906",
    image: "https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/843,/0/default.jpg",
    description: "In his later years, Monet spent significant time painting water lilies in his garden at Giverny. This painting demonstrates his ultimate pursuit of color and the reflection of light on water. The composition lacks a horizon, with the sky and surrounding trees existing only as reflections on the water's surface, creating a sense of infinite, expansive space.",
    dimensions: "89.9 cm × 92.7 cm",
    location: "Art Institute of Chicago",
    museumLink: "https://www.artic.edu/artworks/16568/water-lilies"
  },
  {
    id: "woman-with-a-parasol",
    title: "Woman with a Parasol",
    year: "1875",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg/960px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg",
    description: "This painting portrays Monet's wife Camille and their son Jean strolling. Sunlight shines from behind, Camille's white dress flutters in the wind, and the inside of the parasol reveals a green reflection. It is a masterpiece of Monet's ability to capture dynamic light and shadow, filled with family warmth and the breath of nature.",
    dimensions: "100 cm × 81 cm",
    location: "National Gallery of Art, Washington D.C.",
    museumLink: "https://www.nga.gov/collection/art-object-page.61379.html"
  },
  {
    id: "japanese-footbridge",
    title: "The Japanese Footbridge",
    year: "1899",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Japanese_Footbridge-Claude_Monet.jpg/960px-Japanese_Footbridge-Claude_Monet.jpg",
    description: "Monet built a Japanese-style wooden bridge in his own garden at Giverny. In this painting, he merges rich greens with the blooming water lilies in the pond, creating a tranquil and poetic private world. The structure of the bridge adds a touch of architectural contrast to the natural setting.",
    dimensions: "92.7 cm × 73.7 cm",
    location: "National Gallery of Art, Washington D.C.",
    museumLink: "https://www.nga.gov/collection/art-object-page.5283.html"
  },
  {
    id: "san-giorgio-maggiore",
    title: "San Giorgio Maggiore at Dusk",
    year: "1908",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Claude_Monet%2C_Saint-Georges_majeur_au_cr%C3%A9puscule.jpg/960px-Claude_Monet%2C_Saint-Georges_majeur_au_cr%C3%A9puscule.jpg",
    description: "Created during Monet's only visit to Venice, this painting illustrates the illusionary view of the island of San Giorgio Maggiore in the twilight. The sky and water are bathed in golden and crimson hues, and the silhouette of the architecture seems to float on the water in the brilliant sunset glow, showcasing his extraordinary mastery of color expression.",
    dimensions: "65 cm × 92 cm",
    location: "National Museum Cardiff",
    museumLink: "https://museum.wales/art/online/?action=show_item&item=1336"
  },
  {
    id: "poppies",
    title: "Poppies",
    year: "1873",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg/960px-Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg",
    description: "Painted during his time in Argenteuil, this artwork features a field in full bloom with red poppies. The figures are also thought to be Camille and their son. By scattering bright red dots amidst the green meadow and light blue sky, Monet imbued the entire scene with a relaxed and joyful summer atmosphere.",
    dimensions: "50 cm × 65 cm",
    location: "Musée d'Orsay, Paris",
    museumLink: "https://www.musee-orsay.fr/en/artworks/les-coquelicots-9051"
  },
  {
    id: "the-magpie",
    title: "The Magpie",
    year: "1868",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg/960px-Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg",
    description: "The Magpie is one of Monet's early snowscapes. Notably, he broke with traditional Western practices for painting shadows by using pale blue to depict the shadows on the snow. The magpie perched on the fence acts as a focal point bridging heaven and earth, bringing a touch of vitality to the scene.",
    dimensions: "89 cm × 130 cm",
    location: "Musée d'Orsay, Paris",
    museumLink: "https://www.musee-orsay.fr/en/artworks/la-pie-9005"
  },
  {
    id: "rouen-cathedral",
    title: "Rouen Cathedral",
    year: "1894",
    image: "https://api.nga.gov/iiif/413faf9b-5d86-468a-8363-eea43c7fe9ba/full/!800,800/0/default.jpg",
    description: "In Monet's widely celebrated Rouen Cathedral series, he rented a room opposite the cathedral to record the shifting light and shadow on the gothic facade across different times and weather conditions. In this sunset iteration, the golden and blue undertones make the solid stone appear to dissolve in an optical magic of light and atmosphere.",
    dimensions: "100 cm × 65 cm",
    location: "Musée Marmottan Monet, Paris",
    museumLink: "https://www.marmottan.fr/en/collections/claude-monet/"
  },
  {
    id: "boulevard-des-capucines",
    title: "Boulevard des Capucines",
    year: "1873",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Claude_Monet%2C_1873-74%2C_Boulevard_des_Capucines%2C_oil_on_canvas%2C_80.3_x_60.3_cm%2C_Nelson-Atkins_Museum_of_Art%2C_Kansas_City.jpg/960px-Claude_Monet%2C_1873-74%2C_Boulevard_des_Capucines%2C_oil_on_canvas%2C_80.3_x_60.3_cm%2C_Nelson-Atkins_Museum_of_Art%2C_Kansas_City.jpg",
    description: "This painting captures the bustling Parisian boulevard seen from the studio of the photographer Nadar, where the first Impressionist exhibition would be held. The hurried, almost blurred figures represented by quick brushstrokes perfectly express the frantic pace of modern urban life.",
    dimensions: "80 cm × 60 cm",
    location: "Nelson-Atkins Museum of Art, Kansas City",
    museumLink: "https://art.nelson-atkins.org/objects/10433/boulevard-des-capucines"
  },
  {
    id: "gare-st-lazare",
    title: "The Gare St-Lazare",
    year: "1877",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/La_Gare_Saint-Lazare_-_Claude_Monet.jpg/960px-La_Gare_Saint-Lazare_-_Claude_Monet.jpg",
    description: "Fascinated by modern transportation, Monet requested permission to paint inside the Gare Saint-Lazare railway station in Paris. He was drawn not to the trains themselves, but to the effects of light playing through the immense clouds of steam and smoke trapped under the glass-and-iron roof.",
    dimensions: "75 cm × 104 cm",
    location: "Musée d'Orsay, Paris",
    museumLink: "https://www.musee-orsay.fr/en/artworks/la-gare-saint-lazare-9014"
  },
  {
    id: "haystacks-snow",
    title: "Haystacks (Effect of Snow and Sun)",
    year: "1891",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/960px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
    description: "Monet's haystacks (meules) series consisted of about 25 paintings, studying how light changes across different seasons and times of the day on standard agricultural elements near his home in Giverny. This winter variation shows the striking interplay of cold winter shadows and bright, sunny outlines.",
    dimensions: "65 cm × 92 cm",
    location: "The Metropolitan Museum of Art, New York",
    museumLink: "https://www.metmuseum.org/art/collection/search/437122"
  },
  {
    id: "bathers-grenouillere",
    title: "Bathers at La Grenouillère",
    year: "1869",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Claude_Monet_La_Grenouill%C3%A9re.jpg/960px-Claude_Monet_La_Grenouill%C3%A9re.jpg",
    description: "Painted side-by-side with Pierre-Auguste Renoir, this work is considered one of the earliest examples of the Impressionist style. It portrays a popular boating and bathing resort on the Seine river, notable for its broad, fragmented brushstrokes that brilliantly convey the rippling, reflective surface of the water.",
    dimensions: "74 cm × 99 cm",
    location: "National Gallery, London",
    museumLink: "https://www.nationalgallery.org.uk/paintings/claude-monet-bathers-at-la-grenouillere"
  },
  {
    id: "artists-garden-giverny",
    title: "The Artist's Garden at Giverny",
    year: "1900",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg/960px-Monet_-_Monets_Garten_in_Giverny.jpg",
    description: "A brilliant celebration of his garden, this painting depicts a dirt path surrounded by masses of blooming irises in varied shades of purple and pink. Trees filter the overhead sunlight, casting dappled shadows on the floral explosion below.",
    dimensions: "81 cm × 92 cm",
    location: "Musée d'Orsay, Paris",
    museumLink: "https://www.musee-orsay.fr/en/artworks/le-jardin-de-lartiste-giverny-9019"
  },
  {
    id: "houses-of-parliament-sunset",
    title: "Houses of Parliament, Sunset",
    year: "1903",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Claude_Monet_-_The_Houses_of_Parliament%2C_Sunset.jpg/500px-Claude_Monet_-_The_Houses_of_Parliament%2C_Sunset.jpg",
    description: "During early 20th century visits to London, Monet painted the Palace of Westminster shrouded in the city's infamous fog. The atmospheric effects completely veil the architecture's details, turning the neo-Gothic towers into a ghostly silhouette against a fiery sunset.",
    dimensions: "81 cm × 92 cm",
    location: "National Gallery of Art, Washington D.C.",
    museumLink: "https://www.nga.gov/collection/art-object-page.46515.html"
  },
  {
    id: "women-in-the-garden",
    title: "Women in the Garden",
    year: "1866",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Claude_Monet_024.jpg/960px-Claude_Monet_024.jpg",
    description: "An incredibly ambitious piece measuring over two meters tall, painted entirely 'en plein air' (outdoors). Monet had a special trench dug in the garden so he could lower the canvas via a pulley to reach the upper sections without resorting to indoor studio adjustments.",
    dimensions: "255 cm × 205 cm",
    location: "Musée d'Orsay, Paris",
    museumLink: "https://www.musee-orsay.fr/en/artworks/femmes-au-jardin-9050"
  },
  {
    id: "charing-cross-bridge",
    title: "Charing Cross Bridge",
    year: "1899",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Monet_-_Charing_Cross_Bridge_Fog_on_the_Thames%2C_1903.jpg/960px-Monet_-_Charing_Cross_Bridge_Fog_on_the_Thames%2C_1903.jpg",
    description: "Part of his massive London series, Monet painted the bridge observing the shifting interplay of steam locomotives, industrial smoke, and thick London fog. He focused on the Thames river as a theater of atmosphere and light rather than focusing purely on literal topography.",
    dimensions: "64 cm × 81 cm",
    location: "Thyssen-Bornemisza Museum, Madrid",
    museumLink: "https://www.museothyssen.org/en/collection/artists/monet-claude/charing-cross-bridge"
  },
  {
    id: "cliff-walk-pourville",
    title: "The Cliff Walk at Pourville",
    year: "1882",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_-_Cliff_Walk_at_Pourville_-_Google_Art_Project.jpg/960px-Claude_Monet_-_Cliff_Walk_at_Pourville_-_Google_Art_Project.jpg",
    description: "Painted along the Normandy coast, the composition captures two women looking out to sea from a grassy cliff edge. The brushwork vibrates with the ocean breeze, suggesting tall grass whipping in the wind alongside a beautifully rendered seascape.",
    dimensions: "66 cm × 82 cm",
    location: "Art Institute of Chicago",
    museumLink: "https://www.artic.edu/artworks/14620/cliff-walk-at-pourville"
  },
  {
    id: "woman-green-dress",
    title: "Camille (The Woman in the Green Dress)",
    year: "1866",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Claude_Monet_-_Camille.JPG/960px-Claude_Monet_-_Camille.JPG",
    description: "An early triumph produced in only four days to submit to the Paris Salon. The stunning, life-size portrait of his future wife, Camille Doncieux, displays a mastery of fabric texture and dramatic lighting—a departure from standard academic modeling.",
    dimensions: "231 cm × 151 cm",
    location: "Kunsthalle Bremen",
    museumLink: "https://www.kunsthalle-bremen.de/"
  },
  {
    id: "water-lily-pond-pink",
    title: "Water Lilies (Pink)",
    year: "1897",
    image: "https://i.pinimg.com/474x/2d/94/48/2d9448524ff0dcaa4854c7d612ce8b2c.jpg",
    description: "Part of his early attempts to capture the subtle complexities of his famous pond in Giverny. Unlike the later mural-size pieces, this intimate painting closely frames a small patch of lilies blooming in rosy pink hues amidst the greenish-blue water.",
    dimensions: "73 cm × 100 cm",
    location: "Los Angeles County Museum of Art",
    museumLink: "https://collections.lacma.org/node/228723"
  },
  {
    id: "snow-at-argenteuil",
    title: "Snow at Argenteuil",
    year: "1875",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Monet_Snow_at_Argenteuil_1875.jpg/960px-Monet_Snow_at_Argenteuil_1875.jpg",
    description: "Monet found profound inspiration in observing the effects of snow in Argenteuil. In this piece, he utilized a predominantly monochromatic palette of whites, greys, and pale blues to convey a hushed, freezing atmosphere along the suburban street.",
    dimensions: "71 cm × 91 cm",
    location: "National Museum of Western Art, Tokyo",
    museumLink: "https://collection.nmwa.go.jp/en/P.1959-0151.html"
  },
  {
    id: "terrace-sainte-adresse",
    title: "Garden at Sainte-Adresse",
    year: "1867",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Claude_Monet_-_Jardin_%C3%A0_Sainte-Adresse.jpg/960px-Claude_Monet_-_Jardin_%C3%A0_Sainte-Adresse.jpg",
    description: "Painted when Monet spent the summer of 1867 with his family at the coastal resort area of Sainte-Adresse. It shows his father and other relatives overlooking the English channel.",
    dimensions: "98.1 cm × 129.9 cm",
    location: "Metropolitan Museum of Art, New York",
    museumLink: "https://www.metmuseum.org/art/collection/search/437133"
  },
  {
    id: "poplars-sun",
    title: "Poplars in the Sun",
    year: "1891",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/1891_Monet_The_four_trees_anagoria.JPG/960px-1891_Monet_The_four_trees_anagoria.JPG",
    description: "From his famous Poplars series. These trees stood along the banks of the Epte river. Monet actually bought the trees to stop them from being chopped down before he finished painting them.",
    dimensions: "93 cm × 73.5 cm",
    location: "National Museum of Western Art, Tokyo",
    museumLink: "https://collection.nmwa.go.jp/en/P.1959-0150.html"
  },
  {
    id: "bordighera",
    title: "Bordighera",
    year: "1884",
    image: "https://www.claude-monet.com/assets/img/paintings/bordighera.jpg",
    description: "Monet visited the Italian Riviera and was struck by the brilliant light and exotic vegetation. The intertwined, swirling trees showcase a more vibrant, chaotic natural energy.",
    dimensions: "65 cm × 81 cm",
    location: "Art Institute of Chicago",
    museumLink: "https://www.artic.edu/artworks/14589/bordighera"
  },
  {
    id: "weeping-willow",
    title: "Weeping Willow",
    year: "1918",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Claude_Monet%2C_Weeping_Willow.JPG/960px-Claude_Monet%2C_Weeping_Willow.JPG",
    description: "Painted towards the end of WWI, these weeping willows at the edge of his water lily pond represent a mournful elegy to the fallen French soldiers.",
    dimensions: "131 cm × 110.3 cm",
    location: "Columbus Museum of Art",
    museumLink: "https://www.columbusmuseum.org"
  },
  {
    id: "beach-trouville",
    title: "The Beach at Trouville",
    year: "1870",
    image: "https://uploads6.wikiart.org/images/claude-monet/the-beach-at-trouville.jpg!Large.jpg",
    description: "Painted while Monet and his new wife Camille were fleeing Paris ahead of the Franco-Prussian War. Look closely at the original canvas, and you can still find grains of sand blown into the wet paint.",
    dimensions: "38 cm × 46 cm",
    location: "National Gallery, London",
    museumLink: "https://www.nationalgallery.org.uk"
  },
  {
    id: "palazzo-ducale",
    title: "Palazzo Ducale, Venice",
    year: "1908",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Claude_Monet_-_The_Doges_Palace_%28Le_Palais_ducal%29_-_Google_Art_Project.jpg/960px-Claude_Monet_-_The_Doges_Palace_%28Le_Palais_ducal%29_-_Google_Art_Project.jpg",
    description: "During his only trip to Venice, Monet painted the famous Doge's Palace from the water, focusing on how the stone architecture seemed to float on the shimmering lagoon.",
    dimensions: "81 cm × 93 cm",
    location: "Brooklyn Museum",
    museumLink: "https://www.brooklynmuseum.org"
  },
  {
    id: "vase-peonies",
    title: "Vase of Peonies",
    year: "1882",
    image: "https://claudemonetgallery.org/media//b/a/base_8149869.jpg?width=600",
    description: "While best known for landscapes, Monet occasionally painted still lifes. These heavily-blooming peonies with their explosive petals allow his signature brushstrokes to shine indoors.",
    dimensions: "100 cm × 81 cm",
    location: "Private Collection",
    museumLink: ""
  },
  {
    id: "seine-giverny",
    title: "Morning on the Seine near Giverny",
    year: "1897",
    image: "https://claudemonetgallery.org/media//paintingsL/80986/morning-on-the-seine-near-give.jpg?width=600",
    description: "This series of paintings, done of the river near his home, perfectly captures the silent, atmospheric haze of early mornings on the water before the sun fully breaks through.",
    dimensions: "81.6 cm × 93 cm",
    location: "Museum of Fine Arts, Boston",
    museumLink: "https://www.mfa.org"
  },
  {
    id: "la-japonaise",
    title: "Madame Monet in a Japanese Kimono",
    year: "1876",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Claude_Monet-Madame_Monet_en_costume_japonais.jpg/960px-Claude_Monet-Madame_Monet_en_costume_japonais.jpg",
    description: "An exuberant tribute to Japonism, a fad that swept Paris at the time. Monet's wife Camille poses playfully in a stunning, heavily embroidered Japanese kimono holding a fan.",
    dimensions: "231 cm × 142 cm",
    location: "Museum of Fine Arts, Boston",
    museumLink: "https://www.mfa.org"
  },
  {
    id: "water-lilies-clouds",
    title: "Water Lilies (The Clouds)",
    year: "1903",
    image: "https://uploads7.wikiart.org/images/claude-monet/water-lilies-the-clouds.jpg!Large.jpg",
    description: "A masterful composition where the horizon is completely eliminated. The viewer is looking straight down into the pond, seeing the reflection of clouds passing above in the water below.",
    dimensions: "74.6 cm × 105.3 cm",
    location: "Private Collection",
    museumLink: ""
  },
  {
    id: "argenteuil-basin",
    title: "The Basin at Argenteuil",
    year: "1874",
    image: "https://uploads7.wikiart.org/images/claude-monet/the-basin-at-argenteuil.jpg!Large.jpg",
    description: "The Seine at Argenteuil offered perfect scenery for Monet to explore the interplay of natural light, water reflections, and modern Parisian leisure activities like sailing.",
    dimensions: "54 cm × 73 cm",
    location: "National Gallery of Ireland",
    museumLink: "https://www.nationalgallery.ie"
  },
  {
    id: "studio-boat",
    title: "The Studio Boat",
    year: "1874",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/80/Claude_Monet_Le_bateau_atelier.jpg",
    description: "Monet purchased a small boat and outfitted it as a floating studio to precisely paint the river and its lush banks from the water itself.",
    dimensions: "50 cm × 64 cm",
    location: "Kröller-Müller Museum",
    museumLink: "https://krollermuller.nl"
  },
  {
    id: "vetheuil-summer",
    title: "Vétheuil in Summer",
    year: "1880",
    image: "https://images.pixels.com/images/artworkimages/medium/3/vetheuil-in-summer-by-claude-monet-1880-m-g-whittingham.jpg",
    description: "The small, picturesque town of Vétheuil where Monet lived with his family. The church tower dominates the landscape as wildflowers carpet the foreground.",
    dimensions: "60 cm × 99.7 cm",
    location: "Metropolitan Museum of Art, New York",
    museumLink: "https://www.metmuseum.org"
  },
  {
    id: "train-snow",
    title: "Train in the Snow",
    year: "1875",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Claude_Monet%2C_1875%2C_Train_in_the_Snow%2C_oil_on_canvas%2C_59_%C3%97_78_cm%2C_Mus%C3%A9e_Marmottan_Monet.jpg/960px-Claude_Monet%2C_1875%2C_Train_in_the_Snow%2C_oil_on_canvas%2C_59_%C3%97_78_cm%2C_Mus%C3%A9e_Marmottan_Monet.jpg",
    description: "A stunningly modern scene showing a train cutting through a snowy suburban landscape. Notice the contrast of the black iron machine against the soft impressionistic snow.",
    dimensions: "59 cm × 78 cm",
    location: "Musée Marmottan Monet",
    museumLink: "https://www.marmottan.fr"
  },
  {
    id: "ice-breakdown",
    title: "Breakdown of the Ice",
    year: "1880",
    image: "https://umma.umich.edu/wp-content/uploads/2024/01/52803_ca_object_representations_media_32555_original.jpg",
    description: "The winter of 1880 was severely cold in France. Monet painted the dramatic thawing of the frozen Seine, with large shards of ice flowing rapidly down the river.",
    dimensions: "97 cm × 150.5 cm",
    location: "Shelburne Museum",
    museumLink: "https://shelburnemuseum.org"
  },
  {
    id: "springtime",
    title: "Springtime",
    year: "1872",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Claude_Monet_-_Springtime_-_Google_Art_Project.jpg/960px-Claude_Monet_-_Springtime_-_Google_Art_Project.jpg",
    description: "Camille is shown peacefully reading beneath a canopy of lilac bushes in their garden at Argenteuil. The painting perfectly captures dappled spring sunlight.",
    dimensions: "50 cm × 65.5 cm",
    location: "Walters Art Museum",
    museumLink: "https://thewalters.org"
  },
  {
    id: "path-wheat",
    title: "Path in the Wheat Fields at Pourville",
    year: "1882",
    image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/path-in-the-wheat-fields-at-pourville-by-claude-monet-1882-claude-monet.jpg",
    description: "Overlooking the sea at Pourville, showing a coastal path leading through vibrant, wind-swept wheat fields along the dramatic Normandy coastline.",
    dimensions: "58 cm × 78 cm",
    location: "Private Collection",
    museumLink: ""
  },
  {
    id: "grand-canal",
    title: "The Grand Canal, Venice",
    year: "1908",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Claude_Monet%2C_Le_Grand_Canal.jpg/960px-Claude_Monet%2C_Le_Grand_Canal.jpg",
    description: "Painted facing the Santa Maria della Salute in Venice. Monet used the iconic blue gondola mooring poles in the foreground to create perspective and frame the floating church.",
    dimensions: "73 cm × 92 cm",
    location: "Fine Arts Museums of San Francisco",
    museumLink: "https://www.famsf.org"
  },
  {
    id: "parc-monceau",
    title: "The Parc Monceau",
    year: "1878",
    image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/437107/796126/restricted",
    description: "A bustling, vibrant painting of one of Paris's public parks. Wealthy Parisians are shown relaxing under the trees, highlighting the leisure of modern city life.",
    dimensions: "72.7 cm × 54.3 cm",
    location: "Metropolitan Museum of Art, New York",
    museumLink: "https://www.metmuseum.org"
  },
  {
    id: "nympheas-fleur",
    title: "Nymphéas en fleur",
    year: "1914",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Claude_Monet_-_Nympheas_en_fleur.jpg/500px-Claude_Monet_-_Nympheas_en_fleur.jpg",
    description: "A grand view of the water lilies around the pond. The large scale and incredibly loose, almost abstract brushstrokes preview the Abstract Expressionist movement decades later.",
    dimensions: "160 cm × 180 cm",
    location: "Private Collection",
    museumLink: ""
  }
];
