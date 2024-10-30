
class RelativeTime extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
    // setInterval(() => {
    //   this.render();
    // }, 1000);
  }
  render() {
    const time = new Date(this.getAttribute('time')).getTime();
    const now = Date.now();

    console.log({
      time,
      now,
      seconds: (now - time) / 1000,
      minutes: (now - time) / (1000 * 60),
      hours: Math.floor((now - time) / (1000 * 60 * 60))
    })

    const diff = now - time;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let aux = '...';
    if (months >= 12) {
      aux = `Hace ${years} año${years > 1 ? 's' : ''}`
    } else if (days > 30 && months >= 1) {
      aux = `Hace ${months} mes${months > 1 ? 'es' : ''}`
    } else if (days >= 1) {
      aux = `Hace ${days} día${days > 1 ? 's' : ''}`
    } else if (hours >= 1) {
      aux = `Hace ${hours} hora${hours > 1 ? 's' : ''}`
    } else if (minutes >= 1) {
      aux = `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`
    } else if (seconds >= 1) {
      aux = `Hace ${seconds} segundo${seconds > 1 ? 's' : ''}`
    }

    this.textContent = aux;
  } 
}
customElements.define('relative-time', RelativeTime);



const articles = [
  // Categoría: Climate
  { 
    "id" : 1, 
    "image": "https://cdn.kqed.org/wp-content/uploads/sites/35/2024/10/GettyImages-1347890261-1020x680.jpg",
    "title": "Climate Activists Push for Carbon Tax With Measure GG, But Critics Warn it Could Backfire",
    "description": "Grassroots climate activists argue a tax on gas use in large buildings will help all of Berkeley kick fossil fuels.",
    "date": "2023-10-17T11:00:16Z",
    "category": "Climate"
  },
  {
    "id" : 2, 
    "image": "https://images.unsplash.com/photo-1612178992889-ade5dfe7eb23",
    "title": "Ocean Levels Rising Faster than Predicted",
    "description": "New research shows that ocean levels are rising more rapidly, threatening coastal areas worldwide.",
    "date": "2024-05-10T09:30:00Z",
    "category": "Climate"
  },
  {
    "id" : 3, 
    "image": "https://images.unsplash.com/photo-1562887093-5ec98d77d824",
    "title": "New Technologies in Climate Resilience",
    "description": "Developers focus on resilience tech to protect vulnerable communities from climate impacts.",
    "date": "2024-08-14T14:10:00Z",
    "category": "Climate"
  },
  // Categoría: Business
  {
    "id" : 4, 
    "image": "https://fortune.com/img-assets/wp-content/uploads/2024/10/GettyImages-2170862982_413c33-e1729160290535.jpg",
    "title": "Musk’s Empire Risks Targeted EU X Fines",
    "description": "The EU may target Elon Musk’s empire with potential fines, affecting SpaceX and Neuralink.",
    "date": "2024-09-17T10:32:45Z",
    "category": "Business"
  },
  
  {
    "id" : 5, 
    "image": "https://cdn.who.int/media/images/default-source/mca/mca-covid-19/coronavirus-2.tmb-1920v.jpg?sfvrsn=4dba955c_19",
    "title": "Small Businesses Adapting in Post-COVID Era",
    "description": "Local businesses embrace digitalization to compete in a post-pandemic market.",
    "date": "2024-03-22T07:25:00Z",
    "category": "Business"
  },
  {
    "id" : 6, 
    "image": "https://media.licdn.com/dms/image/D5612AQE8xkdFEHzX6A/article-cover_image-shrink_720_1280/0/1688719236067?e=2147483647&v=beta&t=yq-fRLV2Da1YTPRQLH6Q7kevDBsnRtn1JDnV9piHnUg",
    "title": "Emerging Markets Show Resilience in Global Slowdown",
    "description": "Market growth continues as tech giants lead gains, pushing stock indexes to all-time highs.",
    "date": "2024-01-05T15:45:00Z",
    "category": "Business"
  },
  // Categoría: Automobile
  {
    "id" : 7, 
    "image": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1729160267/autoexpress/2024/10/Omode E5 first UK drive.jpg",
    "title": "Omoda E5 in Noble Trim - Pictures",
    "description": "Electric Omode E5 SUV on UK roads, with unique UK trim and design.",
    "date": "2024-10-15T10:30:56Z",
    "category": "Automobile"
  },
  {
    "id" : 8, 
    "image": "https://images.unsplash.com/photo-1597003826519-17018c5f1544",
    "title": "Tesla Unveils New Model S",
    "description": "The latest Model S includes new features and improved battery life, marking Tesla's innovation streak.",
    "date": "2024-04-14T08:30:00Z",
    "category": "Automobile"
  },
  {
    "id" : 9, 
    "image": "https://images.unsplash.com/photo-1580279378064-f305bb4783c2",
    "title": "Electric Cars Gain Popularity in Europe",
    "description": "EVs see a surge in demand across European markets as governments push for green initiatives.",
    "date": "2024-06-18T12:20:00Z",
    "category": "Automobile"
  },
  // Categoría: Technology
  {
    "id" : 10, 
    "image": "https://www.computerworld.com/wp-content/uploads/2024/10/3567767-0-90640600-1729160617-IDG-Germany-Intel-September-News.jpg",
    "title": "Chinese Cybersecurity Review of Intel Products",
    "description": "China urges a review of Intel products over national security concerns.",
    "date": "2024-10-01T10:22:56Z",
    "category": "Technology"
  },
  {
    "id" : 11, 
    "image": "https://images.unsplash.com/photo-1506808547685-e2ba962ded36",
    "title": "AI Innovations at 2024 Tech Conference",
    "description": "The annual tech conference showcases AI developments expected to reshape industries worldwide.",
    "date": "2024-02-10T14:10:00Z",
    "category": "Technology"
  },
  {
    "id" : 12, 
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    "title": "5G Expansion Set to Revolutionize Connectivity",
    "description": "Telecom companies are expanding 5G networks, promising faster speeds and new possibilities.",
    "date": "2024-07-22T18:45:00Z",
    "category": "Technology"
  },
  //Noticias deportes 
  {
    "id" : 13, 
    "image": "https://images.ecestaticos.com/XT-HrfG5p4EEo-t2XyNZCnw7Mcg=/0x0:2272x1395/1200x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbc6%2F2bf%2F63b%2Fbc62bf63b00c00dcfeb99809abae7dec.jpg",
    "title": "Champions League: Real Madrid avanza a la siguiente fase tras una emocionante victoria",
    "description": "El Real Madrid aseguró su puesto en la siguiente fase de la Champions League con una victoria en tiempo de descuento. Los aficionados celebran...",
    "date": "2024-07-22T18:45:00Z",
    "category": "Sports"
    
  },
  {
    "id" : 14, 
    "image": "https://media.gettyimages.com/id/1428217516/es/foto/harrison-new-jersey-lionel-messi-of-argentina-celebrates-his-goal-in-the-second-half-against.jpg?s=612x612&w=gi&k=20&c=p8biC-Sh1E7FLHu8BEhvZsDJ2Kp2iSWxEwVDKwDpPAs=",
    "title": "Lionel Messi habla sobre su retiro: Estoy disfrutando cada momento en el campo",
    "description": "El astro argentino Lionel Messi reflexiona sobre su carrera y los planes futuros en una entrevista exclusiva.Quiero disfrutar mientras pueda...",
    "date": "2024-07-22T18:45:00Z",
    "category": "Sports"
    
  },
  {
    "id" : 15, 
    "image": "https://cdn.nba.com/manage/2024/10/bronny-james-iso-1568x882.jpg",
    "title": "Final de la NBA: Los Lakers se preparan para enfrentar a los Celtics",
    "description": "La anticipación crece mientras los fanáticos esperan el enfrentamiento entre los Lakers y los Celtics. Esta rivalidad histórica promete...",
    "date": "2024-07-22T18:45:00Z",
    "category": "Sports"
    
  }

]


class CustomSearch extends HTMLElement {
  constructor() {
    super();
    this.articles = articles;
  }

  connectedCallback() {
    const dialogBtn = this.querySelector('.dialog-search');
    const closeBtn = this.querySelector('.close-btn');
    const dialog = this.querySelector('dialog');

    dialogBtn.addEventListener('click', () => {
      dialog.showModal();
    });
    closeBtn.addEventListener('click', () => {
      dialog.close();
    });
    const siteSearch = this.querySelector('#site-search');
    siteSearch.addEventListener('input', (event) => this.search(event));

    this.renderResults('')
  }

  search(event) {
    event.preventDefault();
    const siteSearch = this.querySelector('#site-search');
    const term = siteSearch.value
    // console.log({term});
    this.renderResults(term)
  }

  renderResults(term = '') {
    // Implement your search logic here
    const searchResults = this.querySelector('#search-results');
    searchResults.innerHTML = '';
    const _articles = this.articles
      .filter(article => article.title.toLowerCase().includes(term.toLowerCase()))

    // mode 3 using <template>
    const template = this.querySelector('template').content;
    // loop
    console.log({_articles})
    _articles.map(article => {
      const li = template.querySelector('li').cloneNode(true);
      // item-image, item-title, item-description
      li.querySelector('.card .item-image').src = article.image;
      
      li.querySelector('.card .item-description').textContent = article.description;
      // replate relative-time time
      li.querySelector('relative-time').setAttribute('time', article.date)
      searchResults.appendChild(li);

      const title = li.querySelector('.card .item-title');
      const link = document.createElement("a");
      link.href = 'article.html?id=' + article.id;
      link.textContent = article.title;
      title.appendChild (link); 
    })
  }
}
customElements.define('custom-search', CustomSearch);

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuSidebar = document.querySelector('.menu-sidebar');

  menuToggle.addEventListener('click', () => {
    menuSidebar.classList.toggle('show'); // Añade o quita la clase "show" para mostrar el menú
  });
});

    const getId = () => {
        const searchParams = new URLSearchParams(location.search.slice(1));
        return Number(searchParams.get('id'));
    }

    class CustomArticle extends HTMLElement {
        constructor() {
            super();
            this.articleId = getId();
        }
        connectedCallback() {
            this.render();
        }

        render() {
            const article = articles.find(article => article.id == this.articleId)

            // reemplazos de los contenidos del article
            const h1 = this.querySelector('h1');
            h1.textContent = article.title;
            //   descripción
            const description = this.querySelector('p');
            description.textContent = article.description;
            //   imagen
            const img = this.querySelector('img');
            img.src = article.image;
            // relative time
            const relativeTime = this.querySelector('relative-time');
            //  relativeTime.setAttribute('time',article.date); --forma más nueva de hacer el relativeTime
            const newRelativeTime = `<relative-time time="${article.date}"/>`//forma más simple pero antigua
            relativeTime.outerHTML = newRelativeTime;
        }
    }
    customElements.define('custom-article', CustomArticle);


