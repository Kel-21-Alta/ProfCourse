import axios from "axios";
import getToken from "config/api/getToken";
import publicApi from "config/api/publicApi";
import Button from "elements/button";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function EditRequest(props) {
  const [dataUpdate, setDataUpdate] = useState({
    sektor: props.bidang,
    topik: props.body,
  });
  const [loading, setLoading] = useState(false);

  const onChangeUpdate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataUpdate({
      ...dataUpdate,
      [name]: value,
    });
  };

  const publicApis = publicApi();
  const token = getToken();
  const dataSend = {
    category_request_id: `${props.bidang}`,
    topik: `${dataUpdate?.topik}`,
    request_id: `${props.request_id}`,
  };

  const updateData = async () => {
    setLoading(true);
    const response = await axios
      .put(
        `${publicApis}/api/v1/requestusers/${props.request_id}`,
        dataSend,
        token
      )
      .catch((err) => {});
    if (response.status > 400) {
      toast.error("Gagal update data");
    } else {
      toast.success("Sukses update data");
      setLoading(false);
      setTimeout(() => {
        window.location.reload();
      }, 1300);
    }
  };
  return (
    <>
      <div>
        {/* Modal Hapus*/}
        <div
          className="modal fade"
          id={`exampleModalPer${props.id}`}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Perbarui
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
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <form action="#" className="signin-form">
                      <div className="form-group mb-3">
                        <div>
                          <label htmlFor="sektor">Bidang Kursus</label>
                          <select
                            name="sektor"
                            className="form-control"
                            id="sektor"
                            value={dataUpdate.sektor}
                            onChange={onChangeUpdate}
                          >
                            <option value="6e02f8e4-d3e7-467a-a375-53e6a33321ed">
                              Kursus Online
                            </option>
                            <option value="92453c42-6326-4a32-997d-60c3d335a80c">
                              Konseling
                            </option>
                            <option value="1a62fe51-beb0-460a-bde8-2c9f06a9ba53">
                              Training
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group mb-3">
                        <label className="font-weight-normal" htmlFor="topik">
                          Topik Kursus
                        </label>
                        <input
                          id="topik"
                          type="text"
                          className="form-control"
                          placeholder="Topik kursus anda..."
                          name="topik"
                          onChange={onChangeUpdate}
                          value={dataUpdate.topik}
                          required
                        />
                      </div>
                    </form>
                    <div className="text-right">
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Batal
                        </button>
                        <Button
                          className="btn btn-danger"
                          onClick={() => {
                            updateData();
                          }}
                          isLoading={loading ? true : false}
                        >
                          Perbarui
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
