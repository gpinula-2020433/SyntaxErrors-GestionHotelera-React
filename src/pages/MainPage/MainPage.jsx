import React from "react";
import Layout from "../../components/Layout/Layout";
import { HotelList } from "../../components/Hotel/HotelList";
import 'bootstrap/dist/css/bootstrap.min.css';



const MainPage=() => {
    return (
      <Layout>
        <HotelList />
      </Layout>
    );
}

export default MainPage;