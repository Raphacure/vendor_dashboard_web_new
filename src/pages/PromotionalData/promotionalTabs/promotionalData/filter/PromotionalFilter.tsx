import React, { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import { RootState } from "../../../../../redux/store";
import {
  getCategoriesPromotinalAPI,
  getCitiesPromotinalAPI,
  getPincodesPromotinalAPI,
  getSectionsPromotinalAPI,
  getStatesPromotinalAPI,
} from "../../../../../redux/slices/promotionalData/promotionalDataService";
import { PromotionalFilterStyle } from "./PromotionalFilter.style";
import { toast } from "react-hot-toast";

const PromotionalFilter = ({ setFilter, selectedFilters }: any) => {
  const dispatch = useDispatch() as any;

  const { filterError, filterLoading, filter }: any = useSelector(
    (state: RootState) => state?.promotions
  );

  useEffect(() => {
    if (filterError?.cities) {
      toast.error("city error" + filterError?.cities);
    }
  }, [filterError?.cities]);

  useEffect(() => {
    if (filterError?.states) {
      toast.error("state error" + filterError?.states);
    }
  }, [filterError?.states]);

  useEffect(() => {
    if (filterError?.pincode) {
      toast.error("pincode error" + filterError?.pincode);
    }
  }, [filterError?.pincode]);

  useEffect(() => {
    if (filterError?.categories) {
      toast.error("categories error" + filterError?.categories);
    }
  }, [filterError?.categories]);

  useEffect(() => {
    if (filterError?.sections) {
      toast.error("sections error" + filterError?.sections);
    }
  }, [filterError?.sections]);

  useEffect(() => {
    const filteredBody = Object.keys(selectedFilters).reduce(
      (acc: any, key: any) => {
        if (selectedFilters[key].length > 0) {
          acc[key] = selectedFilters[key];
        }
        return acc;
      },
      {}
    );
    const getAllFiltersData = () => {
      dispatch(getCitiesPromotinalAPI(filteredBody));
      dispatch(getStatesPromotinalAPI(filteredBody));
      dispatch(getPincodesPromotinalAPI(filteredBody));
      dispatch(getCategoriesPromotinalAPI(filteredBody));
      dispatch(getSectionsPromotinalAPI(filteredBody));
    };
    getAllFiltersData();
  }, [selectedFilters, dispatch]);

  const handleChangeRole = (role: any, type: any) => {
    const allowedTypes = ["category", "city", "state", "pincode", "section"];
    const filteredRole = role?.filter((item:any)=>item)
    if (allowedTypes.includes(type)) {
      setFilter((pre: any) => {
        return {
          ...pre,
          [type]: filteredRole,
        };
      });
    } else {
      console.log("Invalid Type");
    }
  };

  return (
    <PromotionalFilterStyle>
      <div className="create-new-institute-sec-content-all">
        <div className="flex-container">
          <div className="delta-select-column">
            <div>
              <label style={{ fontSize: "14px", marginBottom: "0px" }}>
                Select Category{" "}
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Select Category"
                onChange={(role) => handleChangeRole(role, "category")}
                options={filter?.categories}
                className="delta-select"
                maxTagCount="responsive"
                loading={filterLoading?.categories}
                disabled={filterLoading?.categories}
              />
            </div>
          </div>
          <div className="delta-select-column">
            <div>
              <label style={{ fontSize: "14px", marginBottom: "0px" }}>
                Select State{" "}
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Select State"
                onChange={(role) => handleChangeRole(role, "state")}
                options={filter?.states}
                className="delta-select"
                maxTagCount="responsive"
                loading={filterLoading?.states}
                disabled={filterLoading?.states}
              />
            </div>
          </div>
          <div className="delta-select-column">
            <div>
              <label style={{ fontSize: "14px", marginBottom: "0px" }}>
                Select Cities{" "}
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Select Cities"
                onChange={(role) => handleChangeRole(role, "city")}
                options={filter?.cities}
                className="delta-select"
                maxTagCount="responsive"
                loading={filterLoading?.cities}
                disabled={filterLoading?.cities}
              />
            </div>
          </div>
          <div className="delta-select-column">
            <div>
              <label style={{ fontSize: "14px", marginBottom: "0px" }}>
                Select Pincode{" "}
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Select Pincode"
                onChange={(role) => handleChangeRole(role, "pincode")}
                options={filter?.pincode}
                className="delta-select"
                maxTagCount="responsive"
                loading={filterLoading?.pincode}
                disabled={filterLoading?.pincode}
              />
            </div>
          </div>
          <div className="delta-select-column">
            <div>
              <label style={{ fontSize: "14px", marginBottom: "0px" }}>
                Select Section{" "}
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Select Section"
                onChange={(role) => handleChangeRole(role, "section")}
                options={filter?.sections}
                className="delta-select"
                maxTagCount="responsive"
                loading={filterLoading?.sections}
                disabled={filterLoading?.sections}
              />
            </div>
          </div>
        </div>
      </div>
    </PromotionalFilterStyle>
  );
};

export default PromotionalFilter;
