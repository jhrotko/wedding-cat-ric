import "./Map.css";

const Map = () => {
    return (
      // eslint-disable-next-line
      <a target="_blank" rel="noopener noreferrer">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50279.34771772397!2d-7.897142392344162!3d38.03638458127067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1a7358b341b8d9%3A0xa75d681d8d18f2a9!2sQuinta%20da%20Suratesta!5e0!3m2!1sen!2spt!4v1743950230417!5m2!1sen!2spt"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        />
      </a>
    );
  };

  export default Map;