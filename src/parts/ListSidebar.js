import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import React, { useEffect, useState } from "react";

export default function ListSidebar(props) {
  const [dataMateri, setDataMateri] = useState([]);
  const urlApi = publicApi();
  const idModul = props.modul_id;
  const config = getToken();
  const fetchData = async () => {
    const response = await axios
      .get(`${urlApi}/api/v1/moduls/${idModul}`, config)
      .catch((err) => {
        console.log(err);
      });
    setDataMateri(response.data.data);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="nav-link collapsed"
          href="#"
          type="link"
          data-toggle="collapse"
          data-target={`#modul${props.x}`}
          aria-expanded="true"
          aria-controls={`modul${props.x}`}
        >
          <i className="fas fa-fw fa-book" />
          <span>{props.name_modul}</span>
        </a>
        <div
          id={`modul${props.x}`}
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Materi:</h6>
            {dataMateri?.materi?.map((item) => {
              return (
                <Button
                  type="link"
                  className="collapse-item"
                  href={`/belajar/${item?.type === 1 ? "materi" : "video"}/${
                    item?.id
                  }`}
                >
                  <div>
                    {item?.type === 1 ? (
                      <>
                        <div className="font-weight-bolder">Materi :</div>
                        <br />
                      </>
                    ) : (
                      <>
                        <div className="font-weight-bolder">Video :</div> <br />
                      </>
                    )}
                    {item?.title}
                  </div>
                </Button>
              );
            })}

            {/* <Button
              type="link"
              className="collapse-item"
              href="/belajar/materi/1"
            >
              Materi 2
            </Button>
            <Button
              type="link"
              className="collapse-item"
              href="/belajar/video/1"
            >
              Video Pembelajaran
            </Button>
            <Button
              type="link"
              className="collapse-item"
              href="/belajar/kuis/1"
            >
              Kuis
            </Button> */}
          </div>
        </div>
      </li>
    </>
  );
}
