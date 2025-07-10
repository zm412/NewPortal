import React from "react";
import { Admin_panel } from "./Profile_frame/Admin_panel";
import { Personal_block } from "./Profile_frame/Personal_block";
import { Common_line } from "./Profile_frame/Common_line";

import { fetchDataPost } from "../collection_func";
import { Carousel, Card, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesList, setIsChanged } from "../reducers/categoryReducer";
import { setItemsList, setIsListChanged } from "../reducers/itemReducer";
import { setCheckItemsList, setIsShared } from "../reducers/checkItemReducer";
import {
  setIsPageChanged,
  setAllItemsList,
  setLimitNum,
  setCounter,
  setQuantity,
} from "../reducers/allItemsReducer";
import {
  setUserId,
  setUsername,
  setIsSuper,
  setFilesSize,
} from "../reducers/userInfoReducer";

const Tab = ({ add_class = "", content, tabName, id_elem }) => {
  let classN = `${add_class} frame`;

  return (
    <div id={id_elem} className={classN}>
      <h5 className="tabName">{tabName.toUpperCase()}</h5>
      {content}
    </div>
  );
};

export const Profile = ({ is_super, userid, username }) => {
  const dispatch = useDispatch();
  const isChanged = useSelector((state) => state.categories).isChanged;
  const isListChanged = useSelector((state) => state.items).isListChanged;
  const isShared = useSelector((state) => state.checkItems).isShared;
  const { start, end, items, filterArr, isPageChanged, counter, limit_num } =
    useSelector((state) => state.allItems);

  React.useEffect(() => {
    dispatch(setUserId(userid));
    dispatch(setIsSuper(is_super));
    dispatch(setUsername(username));
  }, []);

  const openTab = (e) => {
    let blocks = document.querySelectorAll(".frame");
    for (let item of blocks) {
      item.id == e.target.dataset.tab
        ? item.classList.add("active")
        : item.classList.remove("active");
    }
    let buttons = document.querySelectorAll(".main_button");
    for (let item of buttons) {
      item == e.target
        ? item.classList.add("active")
        : item.classList.remove("active");
    }
  };

  React.useEffect(() => {
    async function allFiles(e) {
      fetchDataPost("get_all_approved_items/", { filterArr, start, end }).then(
        (result) => {
          dispatch(setAllItemsList(result.item));
          dispatch(setQuantity(result.quantity));
          dispatch(setIsPageChanged(false));
        },
      );
    }
    allFiles();
  }, [isPageChanged]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("all_categories/");
        const json = await response.json();
        dispatch(setCategoriesList(json.categories));
        dispatch(setIsChanged(false));
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [isChanged]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(`get_items_list/`);
        let data = await response.json();
        dispatch(setItemsList(data.item));
        dispatch(setFilesSize(data.sum_size));
        dispatch(setIsListChanged(false));
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, [isListChanged]);

  React.useEffect(() => {
    async function filesForApprove(e) {
      try {
        let response = await fetch(`get_admin_check/`);
        let data = await response.json();
        dispatch(setCheckItemsList(data.check_items));
        dispatch(setIsShared(false));
      } catch (e) {
        console.error(e);
      }
    }
    filesForApprove();
  }, [isShared]);

  let personal = <Personal_block />;
  let common = <Common_line />;
  let admin = <Admin_panel />;

  const gridStyle = is_super === "true" ? "is_super" : "is_regular";
  const gridClass = `${gridStyle} grid_mobile container-custom container--full`;

  return (
    <div>
      <div className="row buttons_block">
        <button
          data-tab="my_block"
          onClick={(e) => openTab(e)}
          className="mt-3 btn-green btn-round p-2 btn-round main_button col-sm-5 active"
        >
          My Collection
        </button>
        <button
          data-tab="common_line"
          onClick={(e) => openTab(e)}
          className="mt-3 btn-green btn-round p-2 btn-round main_button col-sm-5"
        >
          Shared Files
        </button>

        {is_super == "true" && (
          <button
            data-tab="admin_panel"
            onClick={(e) => openTab(e)}
              className="mt-3 btn-green btn-round p-2 btn-round main_button col-sm-5"
          >
            Admin panel
          </button>
        )}
      </div>

      <div className={gridClass}>
        <Tab
          content={personal}
          add_class="active"
          id_elem="my_block"
          tabName="My Collection"
        />
        <Tab content={common} id_elem="common_line" tabName="Shared Files" />
        {is_super === "true" && (
          <Tab content={admin} id_elem="admin_panel" tabName="Admin panel" />
        )}
      </div>
    </div>
  );
};
