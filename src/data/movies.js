const movies = [
  {
    id: 1,
    title: 'Project Hail Mary',
    genres: ['Sci-Fi', 'Drama'],
    releaseDate: 'March 20, 2026',
    runtime: '2h 16m',
    language: 'English',
    country: 'USA',
    productionCompanies: ['Skydance', 'Metro-Goldwyn-Mayer', 'Perfect World Pictures'],
    cast: ['Ryan Gosling', 'Ariana DeBose', 'John Krasinski', 'Jennifer Lawrence'],
    crew: {
      director: 'Christopher Nolan',
      writer: 'Akiva Goldsman',
      producer: 'Emma Thomas'
    },
    ratings: {
      imdb: '8.4/10',
      rottenTomatoes: '91%',
      metacritic: '82/100'
    },
    story: 'A stranded astronaut must engineer a desperate plan to save humanity after waking alone on a spaceship with no memory of his mission, and a strange ally from an alien world.',
    media: {
      trailer: 'https://www.youtube.com/watch?v=example1',
      gallery: [
        'https://a.ltrbxd.com/resized/film-poster/1/2/0/7/5/5/7/1207557-hoppers-0-2000-0-3000-crop.jpg?v=7711e7b5a7',
        'https://a.ltrbxd.com/resized/film-poster/1/1/5/0/1/1/3/1150113-ready-or-not-2-here-i-come-0-2000-0-3000-crop.jpg?v=da35b35f85'
      ]
    },
    boxOffice: {
      budget: '150 Cr',
      openingDay: '52 Cr',
      openingWeekend: '160 Cr',
      totalGross: '620 Cr',
      status: 'Projected Blockbuster'
    },
    poster: 'https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    category: 'Upcoming',
    status: 'Open'
  },
  {
    id: 2,
    title: 'Hoppers',
    genres: ['Action', 'Thriller'],
    releaseDate: 'April 3, 2026',
    runtime: '1h 58m',
    language: 'English',
    country: 'USA',
    productionCompanies: ['Silver Screen Pictures', 'Stormlight Studios'],
    cast: ['Viola Davis', 'Aaron Taylor-Johnson', 'Riz Ahmed'],
    crew: {
      director: 'Patty Jenkins',
      writer: 'Gina Prince-Bythewood',
      producer: 'Lindsey Weber'
    },
    ratings: {
      imdb: '7.8/10',
      rottenTomatoes: '88%',
      metacritic: '75/100'
    },
    story: 'A covert team of former science teachers turned operatives must stop a global threat hidden in plain sight, racing between hostile forces and an impossible deadline.',
    media: {
      trailer: 'https://www.youtube.com/watch?v=example2',
      gallery: [
        'https://a.ltrbxd.com/resized/film-poster/1/3/5/7/4/0/8/1357408-undertone-2025-1-0-2000-0-3000-crop.jpg?v=fc416b1596',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1RfnNxjkJjv6su_9EVi-AqVTvMyaiWergB9Vh_utvs1n6ZYTWygADBA1Xzwx0kxDfH5S&s=10'
      ]
    },
    boxOffice: {
      budget: '120 Cr',
      openingDay: '35 Cr',
      openingWeekend: '112 Cr',
      totalGross: '430 Cr',
      status: 'High Potential'
    },
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/2/0/7/5/5/7/1207557-hoppers-0-2000-0-3000-crop.jpg?v=7711e7b5a7',
    category: 'Now Showing',
    status: 'Open'
  },
  {
    id: 3,
    title: 'Ready or Not 2: Here I Come',
    genres: ['Horror', 'Comedy'],
    releaseDate: 'November 15, 2025',
    runtime: '2h 05m',
    language: 'English',
    country: 'USA',
    productionCompanies: ['Blumhouse Productions', 'Freelight Entertainment'],
    cast: ['Samara Weaving', 'Mark O’Brien', 'Deborah Ann Woll'],
    crew: {
      director: 'Mikey Day',
      writer: 'Aubrey Plaza',
      producer: 'Jason Blum'
    },
    ratings: {
      imdb: '7.0/10',
      rottenTomatoes: '82%',
      metacritic: '69/100'
    },
    story: 'A new game of survival begins when a young bride uncovers a murderous family ritual that turns every dinner invitation into a fight for her life.',
    media: {
      trailer: 'https://www.youtube.com/watch?v=example3',
      gallery: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl2H2Hd7Lf3_4QEElNKG-XKZLpNDHziIfKaVKBn8X_HIPeewbZNbCGybVuZjOusBm5&s=10',
        'https://a.ltrbxd.com/resized/film-poster/7/8/7/8/4/9/787849-peaky-blinders-the-immortal-man-0-2000-0-3000-crop.jpg?v=4236d354ae'
      ]
    },
    boxOffice: {
      budget: '80 Cr',
      openingDay: '18 Cr',
      openingWeekend: '54 Cr',
      totalGross: '220 Cr',
      status: 'Steady Performer'
    },
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl2H2Hd7Lf3_4QEElNKG-XKZLpNDHziIfKaVKBn8X_HIPeewbZNbCGybVuZjOusBm5&s=10',
    category: 'Big Releases',
    status: 'Locked'
  },
  {
    id: 4,
    title: 'Undertone',
    genres: ['Mystery', 'Thriller'],
    releaseDate: 'May 1, 2026',
    runtime: '2h 04m',
    language: 'English',
    country: 'UK',
    productionCompanies: ['Noir Lane', 'Sky Studios'],
    cast: ['Tessa Thompson', 'Idris Elba', 'Riz Ahmed'],
    crew: {
      director: 'Denis Villeneuve',
      writer: 'Phoebe Waller-Bridge',
      producer: 'Scott Rudin'
    },
    ratings: {
      imdb: '8.0/10',
      rottenTomatoes: '90%',
      metacritic: '79/100'
    },
    story: 'A brilliant composer returns home to investigate a haunting melody linked to a series of disappearances, and discovers the truth is darker than any note.',
    media: {
      trailer: 'https://www.youtube.com/watch?v=example4',
      gallery: [
        'https://a.ltrbxd.com/resized/film-poster/1/3/5/7/4/0/8/1357408-undertone-2025-1-0-2000-0-3000-crop.jpg?v=fc416b1596',
        'https://a.ltrbxd.com/resized/film-poster/1/2/6/6/8/9/6/1266896-the-good-boy-2025-0-2000-0-3000-crop.jpg?v=9dd771928f'
      ]
    },
    boxOffice: {
      budget: '110 Cr',
      openingDay: '24 Cr',
      openingWeekend: '72 Cr',
      totalGross: '340 Cr',
      status: 'Critic Favorite'
    },
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/3/5/7/4/0/8/1357408-undertone-2025-1-0-2000-0-3000-crop.jpg?v=fc416b1596',
    category: 'Upcoming',
    status: 'Open'
  },
  {
    id: 5,
    title: 'Peaky Blinders: The Immortal Man',
    genres: ['Crime', 'Drama'],
    releaseDate: 'March 20, 2026',
    runtime: '2h 20m',
    language: 'English',
    country: 'UK',
    productionCompanies: ['BBC Films', 'Netflix Originals'],
    cast: ['Cillian Murphy', 'Anya Taylor-Joy', 'Tom Hardy'],
    crew: {
      director: 'Steven Knight',
      writer: 'Steven Knight',
      producer: 'Kathy Burke'
    },
    ratings: {
      imdb: '7.7/10',
      rottenTomatoes: '86%',
      metacritic: '74/100'
    },
    story: 'The notorious Shelby family returns with a new rival threatening their empire, as they navigate betrayal, alliances, and a dangerous legacy in post-war Britain.',
    media: {
      trailer: 'https://www.youtube.com/watch?v=example5',
      gallery: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1RfnNxjkJjv6su_9EVi-AqVTvMyaiWergB9Vh_utvs1n6ZYTWygADBA1Xzwx0kxDfH5S&s=10',
        'https://a.ltrbxd.com/resized/film-poster/1/2/6/6/8/9/6/1266896-the-good-boy-2025-0-2000-0-3000-crop.jpg?v=9dd771928f'
      ]
    },
    boxOffice: {
      budget: '95 Cr',
      openingDay: '42 Cr',
      openingWeekend: '120 Cr',
      totalGross: '500 Cr',
      status: 'Franchise Hit'
    },
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1RfnNxjkJjv6su_9EVi-AqVTvMyaiWergB9Vh_utvs1n6ZYTWygADBA1Xzwx0kxDfH5S&s=10',
    category: 'Big Releases',
    status: 'Open'
  },
  {
    id: 6,
    title: 'The Good Boy',
    genres: ['Drama', 'Comedy'],
    releaseDate: 'May 10, 2026',
    runtime: '1h 46m',
    language: 'English',
    country: 'USA',
    productionCompanies: ['Lionsgate', 'Good Dog Pictures'],
    cast: ['Ezra Miller', 'Emma Stone', 'Mahershala Ali'],
    crew: {
      director: 'Greta Gerwig',
      writer: 'Noah Baumbach',
      producer: 'Scott Rudin'
    },
    ratings: {
      imdb: '7.5/10',
      rottenTomatoes: '85%',
      metacritic: '73/100'
    },
    story: 'A charming but troubled young playwright returns home to face old friends and unexpected truths as he tries to stage his first major show.',
    media: {
      trailer: 'https://www.youtube.com/watch?v=example6',
      gallery: [
        'https://a.ltrbxd.com/resized/film-poster/1/2/6/6/8/9/6/1266896-the-good-boy-2025-0-2000-0-3000-crop.jpg?v=9dd771928f',
        'https://a.ltrbxd.com/resized/film-poster/1/3/5/7/4/0/8/1357408-undertone-2025-1-0-2000-0-3000-crop.jpg?v=fc416b1596'
      ]
    },
    boxOffice: {
      budget: '60 Cr',
      openingDay: '22 Cr',
      openingWeekend: '58 Cr',
      totalGross: '210 Cr',
      status: 'Audience Favorite'
    },
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/2/6/6/8/9/6/1266896-the-good-boy-2025-0-2000-0-3000-crop.jpg?v=9dd771928f',
    category: 'Now Showing',
    status: 'Open'
  },
  {
    id: 7,
    title: 'Borderlands: Chaos Rising',
    genres: ['Sci-Fi', 'Action', 'Comedy'],
    releaseDate: 'August 14, 2026',
    runtime: '1h 42m',
    language: 'English',
    country: 'USA',
    productionCompanies: ['Lionsgate', 'Gearbox Studios'],
    cast: ['Cate Blanchett', 'Kevin Hart', 'Jack Black'],
    crew: {
      director: 'Eli Roth',
      writer: 'Joe Crombie',
      producer: 'Avi Arad'
    },
    ratings: {
      imdb: '3.8/10',
      rottenTomatoes: '12%',
      metacritic: '24/100'
    },
    story: 'A group of eccentric vault hunters attempt to recover a legendary chest on the chaotic planet of Pandora, encountering box office disaster at every turn.',
    media: {
      trailer: 'https://www.youtube.com/watch?v=example7',
      gallery: [
        'https://a.ltrbxd.com/resized/film-poster/1/3/5/7/4/0/8/1357408-undertone-2025-1-0-2000-0-3000-crop.jpg?v=fc416b1596'
      ]
    },
    boxOffice: {
      budget: '160 Cr',
      openingDay: '4 Cr',
      openingWeekend: '12 Cr',
      totalGross: '45 Cr',
      status: 'Critical Bomb'
    },
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/3/5/7/4/0/8/1357408-undertone-2025-1-0-2000-0-3000-crop.jpg?v=fc416b1596',
    category: 'Now Showing',
    status: 'Open'
  },
  {
    id: 8,
    title: 'The Lost City of Aether',
    genres: ['Fantasy', 'Adventure'],
    releaseDate: 'September 25, 2026',
    runtime: '2h 15m',
    language: 'English',
    country: 'USA',
    productionCompanies: ['Mega Budget Pictures', 'Cineverse'],
    cast: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista'],
    crew: {
      director: 'Paul W. S. Anderson',
      writer: 'Paul W. S. Anderson',
      producer: 'Jeremy Bolt'
    },
    ratings: {
      imdb: '5.2/10',
      rottenTomatoes: '31%',
      metacritic: '38/100'
    },
    story: 'A lavish, high-budget fantasy expedition searching for a mythical golden sky city struggles to capture audiences as it plunges into development hell.',
    media: {
      trailer: 'https://www.youtube.com/watch?v=example8',
      gallery: [
        'https://a.ltrbxd.com/resized/film-poster/1/2/0/7/5/5/7/1207557-hoppers-0-2000-0-3000-crop.jpg?v=7711e7b5a7'
      ]
    },
    boxOffice: {
      budget: '180 Cr',
      openingDay: '6 Cr',
      openingWeekend: '18 Cr',
      totalGross: '72 Cr',
      status: 'Box Office Flop'
    },
    poster: 'https://a.ltrbxd.com/resized/film-poster/1/2/0/7/5/5/7/1207557-hoppers-0-2000-0-3000-crop.jpg?v=7711e7b5a7',
    category: 'Upcoming',
    status: 'Open'
  }
];

export default movies;
