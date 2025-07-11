import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataPost } from "../../../collection_func";
import { setIsChanged } from "../../../reducers/categoryReducer";

const ListTypeContent = (props) => {
  const arr = props.arr;
  let funcDelete = props.forDelete;
  let funcOnClick = props.forOnClick;
  const [validExt, setValidExt] = React.useState(
    props.mainCategoryInfo.valid_extensions,
  );

  const [redactRegim, setRedactRegim] = React.useState(false);
  const openUpdateForm = (e) => setRedactRegim(true);
  const dispatch = useDispatch();
  const id = "connect" + props.mainCategoryInfo.id;

  let updateExt = async (e) => {
    fetchDataPost("update_category/", {
      id: e.target.dataset.id,
      ext: validExt,
    }).then((result) => {
      dispatch(setIsChanged(true));
      setRedactRegim(false);
    });
  };

  const handlerLink = (e) => {
    let id_connect = "#connect" + e.target.dataset.connect;
    document.querySelector(id_connect).classList.toggle("none_display");
  };

  return (
    <div>
      <a href="#" onClick={handlerLink} className="no_decoration">
        <strong data-connect={props.mainCategoryInfo.id}>
          {props.mainCategoryInfo.name}
        </strong>{" "}
      </a>

      <div className="category-formats">formats: {props.mainCategoryInfo.valid_extensions}</div>
      <div className="category-manage">
        <button
          data-id={props.mainCategoryInfo.id}
          className="btn-basic btn-blue btn-full mt-3 p-2 center_cl"
          onClick={funcDelete}
          variant="primary"
        >
          Delete
        </button>

        <button
          data-id={props.mainCategoryInfo.id}
          className="btn-basic btn-blue btn-full mt-3 p-2 center_cl"
          variant="primary"
          onClick={openUpdateForm}
        >
          Update
        </button>
      </div>
      {redactRegim && (
        <div>
          <input
            name="valid_extensions"
            type="text"
            id="valid_ext"
            onChange={(e) => setValidExt(e.target.value)}
            value={validExt}
          />
          <button
            data-id={props.mainCategoryInfo.id}
            variant="success"
            onClick={updateExt}
          >
            Update
          </button>
        </div>
      )}
      <div className="none_display" id={id}>
        <ul>
          {arr
            .filter((n) => n.type_content == props.mainCategoryInfo.name)
            .map((item, i) => (
              <li key={i}>
                {item.name}
                <button
                  data-id={item.id}
                  variant="primary"
                  onClick={funcDelete}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export const Manage_categories = () => {
  const categories = useSelector((state) => state.categories).categories;
  const dispatch = useDispatch();

  let deleteCategory = async (e) => {
    fetchDataPost("delete_category/", { id: e.target.dataset.id }).then(
      (result) => {
        dispatch(setIsChanged(true));
      },
    );
  };

  let types_content = categories.filter((item) => item.type_content == "null");
  let list = types_content.map((n, i) => {
    return (
      <ListTypeContent
        arr={categories}
        key={i}
        mainCategoryInfo={n}
        forDelete={deleteCategory}
      />
    );
  });

  return (
    <div className="center_cl">
      <h2>Categories</h2>
      {list}
    </div>
  );
};
