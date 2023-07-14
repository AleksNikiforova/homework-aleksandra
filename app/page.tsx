/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">ADIDAS STORE</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/shoes.jpg" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Mc Jamper</h2>
          <p>
          Original Presents Stylish, Comfortable & Trendy sports shoe for all sports. 
          Comfortable inner lining with anti-sweat & perfect grip, Mc Jamper sole having 
          an non-slippery that is make it more lightweight and durable.

          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Clothes</h2>
          <p>
          adidas women's hoodies combine style and comfort so that you can 
          look and feel great. A versatile choice for warmups, cool downs or
           much needed chill time. Explore our full range of hoodies 
           in a variety of colours and sizes.
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/clothes.avif" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Adidas History</h2>
        <p>
        The company was started by Adolf Dassler in his mother's house. 
        He was joined by his elder brother Rudolf in 1924 under the name Gebrüder Dassler Schuhfabrik ("Dassler Brothers Shoe Factory"). 
        Dassler assisted in the development of spiked running shoes (spikes) for multiple athletic events.
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          <img className="gallery-image" src="/shoes adidas.jpg" alt="image01" />
          <img className="gallery-image" src="/shoes2.jpg" alt="image01" />
          <img className="gallery-image" src="/clothes3.avif" alt="image01" />
          <img className="gallery-image" src="/clothes4.avif" alt="image01" />
          <img className="gallery-image" src="/hat.jpg" alt="image01" />
          <img className="gallery-image" src="/hat2.avif" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Celebrities who wear adidas</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/Eva-Longoria.webp" alt="avatar" />
            <h3 className="card-name">Eva Longoria</h3>
            <p>
            Styling her Stan Smiths with a black dress and bomber jacket.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/Karlie-Kloss.webp" alt="avatar" />
            <h3 className="card-name">Karlie Kloss</h3>
            <p>
            Styling leggings with a sweatshirt and Adidas sneakers.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/Rita-Ora.webp" alt="avatar" />
            <h3 className="card-name">Rita Ora</h3>
            <p>
            Wearing head-to-toe Adidas.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
