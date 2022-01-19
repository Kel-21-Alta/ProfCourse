import Button from "elements/button";
import React, { useCallback, useEffect, useState } from "react";
import { getDataSpesialisasi } from "services/Beranda";
import Card from "./Card";

export default function Spesialisasi(props) {
  const [dataSpesialisasi, setDataSpesialisasi] = useState([]);

  const getSpesialisasiList = useCallback(async () => {
    const data = await getDataSpesialisasi();
    setDataSpesialisasi(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDataSpesialisasi]);

  useEffect(() => {
    getSpesialisasiList();
    console.log("DATAAA ", dataSpesialisasi);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="container pt-1">
      <h3 className="font-weight-bold mb-5">Spesialisasi Terbaru:</h3>
      <div className="row">
        {dataSpesialisasi
          .slice(-3)
          .reverse()
          .map((item) => {
            return (
              <div className="col-md-4 mb-4">
                <Card
                  button="Detail Kursus"
                  key={item.id}
                  course_id={item.id}
                  title={item.title}
                  url_image={item.url_image}
                  urlTarget="detail-spesialisasi"
                ></Card>
              </div>
            );
          })}
      </div>
      <div className="row">
        <div className="w-100 text-right mt-4">
          <Button type="link" href="/spesialisasi">
            <h5>Lainnya...</h5>
          </Button>
        </div>
      </div>
    </section>
  );
}
