import React from 'react';
// import { useQuery } from '@apollo/client';
// import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import styles from './ManageSidebar.module.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import { GET_PRODUCTSTORE } from '../../../helpers/Queries';
import ProductCard from './ProductCard/ProductCard';

// mocks product details for development
const tempProducts = [
  { title: "Dream Sofa",
    img: "",
    alt: "Dream Sofa Image",
    option: "74 inch",
    color: "green",
    price: "1200",
    category: "seating"
  },
  { title: "Modern Standing Desk",
    img: "",
    alt: "Motorized Modern Standing Desk",
    option: "5 foot width",
    color: "white",
    price: "450",
    category: "surfaces"
  },
  { title: "Farmhouse Dining Table",
    img: "",
    alt: "Farmhouse Dining Table",
    option: "10 seat",
    color: "oak",
    price: "875",
    category: "surfaces"
  },
  { title: "Minimalist Pendant Lighting",
    img: "",
    alt: "Minimalist Pendant Lighting",
    option: "4 foot length",
    color: "stainless steel",
    price: "375",
    category: "lighting"
  },
  { title: "Alpaca Rug",
    img: "",
    alt: "Alpaca Rug",
    option: "5' x 7'",
    color: "multi",
    price: "675",
    category: "wovens"
  },
];

const Sidebar = props => {
  // ==== Handles Initial Product Fetch and Rendering
  // const [ filter, setFilter ] = useState(GET_PRODUCTSTORE);
  // const { loading, error, data } = useQuery(filter);
  // console.log( '===========' );
  // console.log( data );

  // map product base to cards
  const productBase = tempProducts.map(product => {
    return (
      <SwiperSlide className={styles['swiper-slide']}>
        <ProductCard details={product}/> 
      </SwiperSlide>
    )
  })

  return (
    <div className={styles.sidebar}>
      <div className={styles['sidebar-header']}>
        <h3 className={styles['sidebar-title']}>Product Gallery</h3>
        <div className={styles.categories}>
          {/* <button className={styles.button} onClick={()=> setFilter('GET_COUCHES')}>Couches</button> */}
          <button className={styles.button}>Seating</button>
          <button className={styles.button}>Surfaces</button>
          <button className={styles.button}>Desks</button>
          <button className={styles.button}>Lighting</button>
          <button className={styles.button}>Wovens</button>
        </div>
        {/* <div className={styles['product-search']}>#add search bar#</div> */}
      </div>

      <div className={styles['carousel-container']}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          {productBase}
        </Swiper>

        {/* ## handle fetching errors
            { (loading) ? <h3> Loading... </h3>
            : (error) ? <h3> `Error! ${error.message}` </h3>   
            : (data.products.length > 0) ? <ProductCard className={styles['carousel-card']} details={productDetail}/> 
            : <h3>No Project Data Stored</h3> } */}
      </div>
    </div>
  )
}

export default Sidebar;