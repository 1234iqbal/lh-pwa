import React, { Component } from "react";
import Navbar from "../../component/Navbar";
import Bottom_Navigation from "../../component/Bottom_Navigation";

export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ margin: 24, paddingBottom: "20%" }}>
          <img
            width="100%"
            height="200px"
            src="https://lindungihutan.com/public/campaigns/large/11553660652pnx3qde93wwhqd4eziyglrxopwz0ddnjkvpeitwh.jpeg"
          />
          <div style={{ paddingTop: 20 }}>
            "Kula manggon ten mriki sampun dangu kalih warga mriki. Sak sampune
            deso mriki keno abrasi, katah sih pindah, sak niki namung keluarga
            kula mawon sing tasih tinggal ten mriki. (Dulu saya tinggal disini
            bersama penduduk lainnya. Setelah abrasi, kini saya dan keluarga
            kecil saya sendiri ditengah laut). Tonggo-tonggo kula sampun pindah,
            namung kula mboten saged pindah amarga mboten enten arto.
            (Tetangga-tetangga saya telah pindah, sedangkan saya tak mampu
            pindah karena tak punya banyak uang).
          </div>
        </div>
        <Bottom_Navigation />
      </div>
    );
  }
}
