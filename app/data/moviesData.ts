import { IMovie } from "../contracts/IMovie";

export const initialMoviesData: readonly IMovie[] = [
  {
    identifier: "inception-2010",
    title: "Incepcja",
    originalTitle: "Inception",
    releaseYear: 2010,
    genres: ["Sci-Fi", "Akcja", "Thriller"],
    director: "Christopher Nolan",
    castMembers: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Ken Watanabe",
    ],
    durationInMinutes: 148,
    viewerRating: 8.8,
    ageRating: "13+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Złodziej wykradający sekrety z ludzkich snów otrzymuje ostatnie zadanie: zaszczepić myśl w umyśle dziedzica fortuny.",
    detailedSynopsis:
      "Dom Cobb jest niezwykle uzdolnionym złodziejem, absolutnym mistrzem w niebezpiecznej sztuce ekstrakcji: wykradania cennych sekretów z głębi podświadomości podczas fazy snu. Niezwykłe umiejętności Cobba uczyniły z niego kluczowego gracza w świecie szpiegostwa korporacyjnego, ale uczyniły go też uciekinierem i kosztowały wszystko, co kochał. Teraz Cobb otrzymuje szansę na odkupienie.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    isFeatured: true,
  },
  {
    identifier: "the-dark-knight-2008",
    title: "Mroczny Rycerz",
    originalTitle: "The Dark Knight",
    releaseYear: 2008,
    genres: ["Akcja", "Kryminał", "Dramat"],
    director: "Christopher Nolan",
    castMembers: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Gary Oldman",
    ],
    durationInMinutes: 152,
    viewerRating: 9.0,
    ageRating: "16+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Batman z pomocą porucznika Gordona i prokuratora Denta wypowiada wojnę zorganizowanej przestępczości w Gotham City.",
    detailedSynopsis:
      "Gdy w Gotham City pojawia się nowy, bezwzględny przestępca znany jako Joker, w mieście wybucha absolutny chaos. Batman staje przed najtrudniejszą próbą psychologiczną i moralną w swoim życiu, musząc zmierzyć się z geniuszem zbrodni, który chce udowodnić, że każdy człowiek w obliczu terroru zrzuca maskę przyzwoitości.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    isFeatured: true,
  },
  {
    identifier: "interstellar-2014",
    title: "Interstellar",
    originalTitle: "Interstellar",
    releaseYear: 2014,
    genres: ["Sci-Fi", "Dramat", "Przygoda"],
    director: "Christopher Nolan",
    castMembers: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
      "Matt Damon",
    ],
    durationInMinutes: 169,
    viewerRating: 8.7,
    ageRating: "12+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Grupa astronautów wyrusza w podróż przez tunel czasoprzestrzenny, by odnaleźć nowy dom dla umierającej ludzkości.",
    detailedSynopsis:
      "W niedalekiej przyszłości globalne zmiany klimatyczne doprowadzają Ziemię na skraj zagłady rolniczej. Były pilot NASA, Cooper, zostaje zwerbowany do tajnej misji kosmicznej. Wraz z zespołem naukowców wyrusza poza granice naszej galaktyki, wykorzystując nowo odkrytą anomalie czasoprzestrzenną, aby sprawdzić, czy któryś z trzech potencjalnych światów może ocalić ludzki gatunek.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    isFeatured: true,
  },
  {
    identifier: "pulp-fiction-1994",
    title: "Pulp Fiction",
    originalTitle: "Pulp Fiction",
    releaseYear: 1994,
    genres: ["Kryminał", "Dramat"],
    director: "Quentin Tarantino",
    castMembers: [
      "John Travolta",
      "Samuel L. Jackson",
      "Uma Thurman",
      "Bruce Willis",
      "Ving Rhames",
    ],
    durationInMinutes: 154,
    viewerRating: 8.9,
    ageRating: "18+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Kultowa nieliniowa opowieść o dwóch gangsterach, żonie bossa mafii i bokserze, który nie chciał przegrać walki.",
    detailedSynopsis:
      "Mistrzowska konstrukcja Quentina Tarantino splata kilka pozornie niezależnych historii z półświatka Los Angeles. Dwaj płatni zabójcy, Vincent Vega i Jules Winnfield, mają odzyskać tajemniczą walizkę należącą do ich szefa Marsellusa Wallace'a. W międzyczasie Vincent ma dotrzymać towarzystwa żonie bossa, a podstarzały bokser Butch decyduje się oszukać mafię.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    isFeatured: false,
  },
  {
    identifier: "the-shawshank-redemption-1994",
    title: "Skazani na Shawshank",
    originalTitle: "The Shawshank Redemption",
    releaseYear: 1994,
    genres: ["Dramat"],
    director: "Frank Darabont",
    castMembers: [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler",
      "Clancy Brown",
    ],
    durationInMinutes: 142,
    viewerRating: 9.3,
    ageRating: "16+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Niesłusznie skazany na dożywocie bankier Andy Dufresne stara się przetrwać w bezwzględnym więzieniu Shawshank.",
    detailedSynopsis:
      "Bankier Andy Dufresne zostaje skazany na podwójne dożywocie za zabójstwo żony i jej kochanka, zbrodnię, której nie popełnił. Trafia do ponurego więzienia Shawshank, rządzonego żelazną ręką przez bezdusznego naczelnika Nortona. Dzięki swojemu intelektowi, wiedzy finansowej oraz przyjaźni ze skazańcem Redem, Andy odnajduje nadzieję w miejscu, w którym nikt jej nie ma.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=PLl99DlL6b4",
    isFeatured: true,
  },
  {
    identifier: "spirited-away-2001",
    title: "Spirited Away: W krainie Bogów",
    originalTitle: "Sen to Chihiro no Kamikakushi",
    releaseYear: 2001,
    genres: ["Animacja", "Przygoda", "Fantasy"],
    director: "Hayao Miyazaki",
    castMembers: [
      "Rumi Hiiragi",
      "Miyu Irino",
      "Mari Natsuki",
      "Takashi Naito",
    ],
    durationInMinutes: 125,
    viewerRating: 8.6,
    ageRating: "7+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Młoda dziewczynka Chihiro trafia do magicznego świata duchów i musi ocalić swoich rodziców zamienionych w świnie.",
    detailedSynopsis:
      "Podczas przeprowadzki dziesięcioletnia Chihiro i jej rodzice trafiają do opuszczonego parku rozrywki. Gdy rodzice łapczywie zjadają jedzenie przeznaczone dla duchów, zostają zamienieni w świnie. Aby ich uratować, Chihiro musi podjąć pracę w łaźni dla bogów prowadzonej przez okrutną czarownicę Yubabę i odnaleźć w sobie siłę i dojrzałość.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
    isFeatured: false,
  },
  {
    identifier: "dune-part-two-2024",
    title: "Diuna: Część Druga",
    originalTitle: "Dune: Part Two",
    releaseYear: 2024,
    genres: ["Sci-Fi", "Przygoda", "Akcja"],
    director: "Denis Villeneuve",
    castMembers: [
      "Timothée Chalamet",
      "Zendaya",
      "Rebecca Ferguson",
      "Javier Bardem",
      "Austin Butler",
    ],
    durationInMinutes: 166,
    viewerRating: 8.6,
    ageRating: "13+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Paul Atryda jednoczy się z Chani i Fremenami, wkraczając na wojenną ścieżkę zemsty przeciwko spiskowcom.",
    detailedSynopsis:
      "Epicka kontynuacja adaptacji arcydzieła Franka Herberta. Paul Atryda sprzymierza się z rdzennymi mieszkańcami planety Arrakis, ucząc się ich zwyczajów i stając się ich mesjaszem, Muad'Dibem. Stając przed wyborem między miłością swojego życia a losem znanego wszechświata, Paul stara się zapobiec przerażającej przyszłości, którą tylko on może przewidzieć.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=Way9Dexny3w",
    isFeatured: true,
  },
  {
    identifier: "whiplash-2014",
    title: "Whiplash",
    originalTitle: "Whiplash",
    releaseYear: 2014,
    genres: ["Dramat", "Muzyczny"],
    director: "Damien Chazelle",
    castMembers: [
      "Miles Teller",
      "J.K. Simmons",
      "Paul Reiser",
      "Melissa Benoist",
    ],
    durationInMinutes: 107,
    viewerRating: 8.5,
    ageRating: "16+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Młody i ambitny perkusista jazzowy trafia pod skrzydła bezlitosnego dyrygenta dążącego do wielkości za wszelką cenę.",
    detailedSynopsis:
      "Dziewiętnastoletni perkusista Andrew Neiman marzy o zostaniu jednym z największych muzyków jazzowych swojego pokolenia w prestiżowym konserwatorium muzycznym w Nowym Jorku. Zostaje zauważony przez Terence'a Fletchera, dyrygenta czołowego zespołu jazzowego w szkole, którego bezwzględne i brutalne metody nauczania popychają studentów na skraj załamania psychicznego.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=7d_jQycdQGo",
    isFeatured: false,
  },
  {
    identifier: "the-godfather-1972",
    title: "Ojciec Chrzestny",
    originalTitle: "The Godfather",
    releaseYear: 1972,
    genres: ["Kryminał", "Dramat"],
    director: "Francis Ford Coppola",
    castMembers: [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Robert Duvall",
      "Diane Keaton",
    ],
    durationInMinutes: 175,
    viewerRating: 9.2,
    ageRating: "16+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Starzejący się patriarcha zorganizowanej dynastii przestępczej przekazuje kontrolę nad swoim tajnym imperium niechętnemu synowi.",
    detailedSynopsis:
      "Opowieść o nowojorskiej rodzinie mafijnej Corleone na przełomie lat 40. i 50. XX wieku. Don Vito Corleone jest szanowanym i budzącym strach bossem. Gdy odmawia wejścia w handel narkotykami, dochodzi do zamachu na jego życie. W obliczu wojny mafijnej najmłodszy syn Michael, bohater wojenny do tej pory trzymający się z dala od interesów rodziny, zostaje wciągnięty w spiralę przemocy i zdrady.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=sY1S349gOnI",
    isFeatured: false,
  },
  {
    identifier: "into-the-spider-verse-2018",
    title: "Spider-Man Uniwersum",
    originalTitle: "Spider-Man: Into the Spider-Verse",
    releaseYear: 2018,
    genres: ["Animacja", "Akcja", "Sci-Fi"],
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    castMembers: [
      "Shameik Moore",
      "Jake Johnson",
      "Hailee Steinfeld",
      "Mahershala Ali",
      "Nicolas Cage",
    ],
    durationInMinutes: 117,
    viewerRating: 8.4,
    ageRating: "7+",
    posterImageUrl:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=800&q=80",
    backdropImageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80",
    shortDescription:
      "Nastoletni Miles Morales z Brooklynu staje się nowym Spider-Manem i poznaje alternatywne wersje superbohatera.",
    detailedSynopsis:
      "Miles Morales, nastolatek z Nowego Jorku, zostaje ukąszony przez radioaktywnego pająka i odkrywa w sobie supermoce. Gdy zły Kingpin uruchamia superzderzacz cząstek, otwierając wrota do innych wymiarów, do świata Milesa trafiają inni Spider-Bohaterowie z alternatywnych linii czasowych. Razem muszą powstrzymać zderzacz, zanim zniszczy on całą strukturę rzeczywistości.",
    trailerYouTubeUrl: "https://www.youtube.com/watch?v=tg52up16eq0",
    isFeatured: true,
  },
];
