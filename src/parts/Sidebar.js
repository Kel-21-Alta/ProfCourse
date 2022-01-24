import React from "react";
import { useSelector } from "react-redux";
import ListSidebar from "./ListSidebar";

export default function Sidebar() {
  const detailData = useSelector((state) => state.dataDetailCourses.data.data);

  return (
    <>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}

      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion h-screen wrapper-sidebar"
        id="accordionSidebar"
      >
        <div
          className="my-4 align-items-center justify-content-center text-primary-blue-tua"
          type="link"
          href="/"
        >
          <div className="mx-3">
            <div className="row font-weight-bolder">
              <div className="col-md-6 mb-2">
                <div className="d-inline-block ">Progress</div>
              </div>
              <div className="col-md-6">
                <div className="text-right">
                  {detailData?.info_user?.progress}%
                </div>
              </div>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${detailData?.info_user?.progress}%` }}
                // eslint-disable-next-line jsx-a11y/aria-proptypes
                aria-valuenow={detailData?.info_user?.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>
        <hr className="sidebar-divider my-0" />
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">{detailData?.name_course}</div>
        <>
          {detailData?.moduls
            ?.slice(0)
            .reverse()
            .map((item, x) => {
              return (
                <ListSidebar
                  key={x}
                  name_modul={item?.name_modul}
                  x={x}
                  modul_id={item?.modul_id}
                />
              );
            })}
        </>
      </ul>
    </>
  );
}
