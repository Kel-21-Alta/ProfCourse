import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import React, { useEffect, useState } from "react";

export default function ListSidebar(props) {
  const [dataMateri, setDataMateri] = useState([]);
  // const [dataKuis, setDataKuis] = useState([]);
  const urlApi = publicApi();
  const idModul = props.modul_id;
  const config = getToken();
  const dataKuis = [];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`${urlApi}/api/v1/moduls/${idModul}`, config)
        .catch((err) => {
          console.log(err);
        });
      setDataMateri(response.data.data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idModul]);
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
            {dataMateri?.materi?.map((item, index) => {
              return (
                <>
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
                          <div className="font-weight-bolder">
                            Materi : {item?.is_complate ? "✅" : ""}
                          </div>
                          <br />
                        </>
                      ) : (
                        <>
                          <div className="font-weight-bolder">
                            Video : {item?.is_complate ? "✅" : ""}
                          </div>{" "}
                          <br />
                        </>
                      )}
                      <div className="row">
                        <div className="col-md-12">
                          <div style={{ wordBreak: "break-word" }}>
                            {index + 1}. {item?.title}{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Button>
                </>
              );
            })}
            {/* {console.log("dasdadas ", dataMateri)} */}
            {dataKuis !== null ? (
              <Button
                type="link"
                className="collapse-item"
                href={`/belajar/kuis/${idModul}`}
              >
                <div className="font-weight-bolder">Kuis</div>
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </li>
    </>
  );
}
