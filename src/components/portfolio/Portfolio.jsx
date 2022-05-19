import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jfif';
import IMG2 from '../../assets/portfolio2.jfif';
import IMG3 from '../../assets/portfolio3.jfif';
import IMG4 from '../../assets/portfolio4.jfif';
import IMG5 from '../../assets/portfolio5.jfif';

const data = [{
  id: 1,
  image: IMG1,
  title: 'Shopping App Frontend',
  github: 'https://github.com/ssameer11/ShoppingAppFrontend'
},
{
  id: 2,
  image: IMG2,
  title: 'Shopping App Backend',
  github: 'https://github.com/ssameer11/ShoppingAppBackend'
},
{
  id: 3,
  image: IMG3,
  title: 'Food Recipe App',
  github: 'https://github.com/ssameer11/FoodRecipeApp'
},
{
  id: 4,
  image: IMG4,
  title: 'Web Hosting',
  github: 'https://github.com/ssameer11/WebHostingStaticWebsite'
},
{
  id: 5,
  image: IMG5,
  title: 'Portfolio',
  github: 'https://github.com/ssameer11/Portfolio'
}]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (<article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target='_blank'>Github</a>
            </div>
          </article>)
          })
        }
      </div>
    </section>
  )
}

export default Portfolio