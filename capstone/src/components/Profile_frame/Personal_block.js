import React, { Component } from "react";
import { UploadFile } from "./my_block/UploadFile";
import { FilesList } from "./my_block/FilesList";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/Personal_block_styles.css";

export const Personal_block = () => {
  const categories = useSelector((state) => state.categories).categories;
  const collection = useSelector((state) => state.items);
  const { userid, username, is_super, files_size } = useSelector(
    (state) => state.userInfo,
  );
  let sizeBox = files_size / 1024 / 1024;
  let ifArrExist = categories != null && collection != null;

  return (
    <div className="my_block">
      <p>
        Data-storage capacity: 100 MB <br />
        Filled on: {sizeBox.toFixed(2)} MB{" "}
      </p>
      <div> {ifArrExist && <UploadFile />} </div>
      <div> {ifArrExist && <FilesList />} </div>
    </div>
  );
};
