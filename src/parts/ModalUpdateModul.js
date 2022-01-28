import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export default function ModalUpdateModul(props) {
  const [data, setData] = useState({
    namaModul: props.name_modul,
  });
  const [loading2, setLoading2] = useState(false);
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };
  let params = useParams().id;
  const dataSend = {
    course_id: `${params}`,
    title: `${data.namaModul}`,
    order: 1,
  };
  const token = getToken();
  const publicApis = publicApi();
  const updateModulApi = async () => {
    setLoading2(true);
    const response = await axios
      .put(`${publicApis}/api/v1/moduls/${props?.modulId}`, dataSend, token)
      .catch(() => {
        setLoading2(false);
        toast.error("Gagal update data");
      });
    if (response.status > 400) {
      setLoading2(false);
      toast.error("Gagal update data");
    } else {
      toast.success("Sukses update data");
      setLoading2(false);
      window.location.reload();
    }
  };
  return (
    <>
      <div>
        <div
          className="modal fade"
          id={`ubahModal${props.index}`}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Modul
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="container mb-3 mt-3">
                <label htmlFor="#namaModul">Nama Modul</label>
                <input
                  id="namaModul"
                  name="namaModul"
                  type="text"
                  className="form-control"
                  placeholder="Nama modul anda..."
                  onChange={onChange}
                  value={data.namaModul}
                  required
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Tidak
                </button>
                <Button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    updateModulApi();
                  }}
                  isLoading={loading2 ? true : false}
                >
                  Ya
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
