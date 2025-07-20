import { PLACES } from "../constants";

const Places = () => {
  return (
    <div id="arrive" className="card">
      <div
        style={{
          display: "flex",
        }}
      >
        <h2>{PLACES}</h2>
      </div>
      <p>
        Beja oferece uma variedade de sítios onde poderão encontrar guarida:
        hotéis, pousadas e alojamentos locais.
      </p>
      <p>Partilhamos algumas sugestões:</p>
      <ul>
        <li>
          <Hotel
            url="https://www.ihg.com/holidayinn/hotels/us/en/beja/byjbj/hoteldetail"
            name="Holiday Inn by IHG Beja"
            thumbnail="https://digital.ihg.com/is/image/ihg/holiday-inn-beja-10027510952-4x3?wid=733"
          />
        </li>
        <li>
          <Hotel
            url="https://www.pousadas.pt/pt/hotel/pousada-beja?promoID=summer-100378591&utm_source=google&utm_medium=cpc&utm_campaign=PHG_Pmax-Travel-Goals_Pousadas_PT_Out24&gad_source=1&gad_campaignid=21711996192&gbraid=0AAAAADSKHc5h1s7EH64KxCyprWebKvHzt&gclid=Cj0KCQjwj8jDBhD1ARIsACRV2Tusi2h1QEfUqI9wJ181YUELriwiWxO3HqtZCK7iajEckXy5K81QCHMaAt6iEALw_wcB"
            name="Pousada Convento de Beja"
            thumbnail="https://www.pousadas.pt/pt/destinations/portugal/alentejo/pousada-beja/_jcr_content/root/container/overview/cmp-overview-image.coreimg.100.1500.jpeg/1730223327795/pousada-convento-beja-overview.jpeg"
          />
        </li>
        <li>
          <Hotel
            url="https://hotelmelius.com/"
            name="Hotel Melius"
            thumbnail="https://hotelmelius.com/wp-content/uploads/2021/01/hotelmelius_1.jpg"
          />
        </li>
        <li>
          <Hotel
            url="https://www.booking.com/searchresults.pt-pt.html?aid=1893447&label=metagha-link-LUPT-hotel-39182_dev-desktop_los-1_bw-2_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21415124341_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20250706_ppt-_lp-2620_r-3830834883672870633&utm_medium=localuniversal&hca=m&no_rooms=1&show_room=3918202_392110885_0_2_0&utm_content=dev-desktop_los-1_bw-2_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21415124341_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20250706_ppt-&utm_campaign=PT&edgtid=BPQOCxHJTRiGtH6FsGn9jA&utm_term=hotel-39182&gclid=Cj0KCQjw953DBhCyARIsANhIZoYxn6BFirkyHQodhBqxEely06GFm8viofyeFFD-IQMejzJqfs8a_h0aAlHwEALw_wcB&ext_price_total=85.00&efpc=hbAKhbAKHw&utm_source=metagha&ts=1751647741&highlighted_hotels=39182&checkin=2025-07-06&redirected=1&dest_type=hotel&hlrd=with_dates&group_adults=2&dest_id=39182&source=hotel&group_children=0&checkout=2025-07-07&keep_landing=1&sid=70fa72f195f55c1d6b0eb620e40e8fbe"
            name="Podem encontrar mais opções aqui"
          />
        </li>
      </ul>
    </div>
  );
};

const Hotel = ({ url, name, thumbnail }) => {
  return (
    <a href={url} target="#" style={{ color: "#3366ff" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "1rem",
        }}
      >
        {name}
        <img
          src={thumbnail}
          style={{ maxWidth: "30rem", borderRadius: "2%" }}
        />
      </div>
    </a>
  );
};

export default Places;
