import React, { useCallback, useEffect, useState } from "react";
import { vendorDataDto } from "@/pages/Catalogue/ManageTest/AssignVendor";
import { getAllAssignedVendorDetails } from "@/redux/slices/labtest/labtestService";
import { useDispatch } from "react-redux";
import { linkedPackageOfVendor } from "@/redux/slices/labtest/labtestService";

const useCallAllVendors = ({
  id,
  section_name = "test",
}: {
  id: any;
  section_name?: "test" | "package";
}) => {
  const [assignedVendors, setAssignedVendors] = useState<vendorDataDto>([]);
  const [isBulkUpdate, setIsBulkUpdate] = useState(false)  
  const dispatch = useDispatch() as any;

  const getAssignedVendorsOfTest = useCallback(async () => {
    if (!id) return;

    if (section_name === "test") {
      const result: any = await dispatch(getAllAssignedVendorDetails({ id }));
      let vendors = result?.payload?.data?.test?.vendors;

      if (Array.isArray(vendors)) {
        const defaultVendors: any = {};
        const feildName = `vendor_${section_name?.toLowerCase()}_code`
        vendors.forEach((vendor) => {          
          defaultVendors[vendor?.id] = {
            name: vendor?.name,
            id: vendor?.id,
            sellingPrice: vendor?.selling_price,
            buyingPrice: vendor?.buying_price,
            mor_start_Time: vendor?.mor_start_Time,
            mor_end_Time: vendor?.mor_end_Time,
            mor_buying_price: vendor?.mor_buying_price,
            mor_selling_price: vendor?.mor_selling_price,
            mor_female_available: vendor?.mor_female_available,
            mor_male_available: vendor?.mor_male_available,
            aft_start_Time: vendor?.aft_start_Time,
            aft_end_Time: vendor?.aft_end_Time,
            aft_buying_price: vendor?.aft_buying_price,
            aft_selling_price: vendor?.aft_selling_price,
            aft_female_available: vendor?.aft_female_available,
            aft_male_available: vendor?.aft_male_available,
            eve_start_Time: vendor?.eve_start_Time,
            eve_end_Time: vendor?.eve_end_Time,
            eve_buying_price: vendor?.eve_buying_price,
            eve_selling_price: vendor?.eve_selling_price,
            eve_female_available: vendor?.eve_female_available,
            eve_male_available: vendor?.eve_male_available,
            vendor_test_code: vendor?.vendor_test_code || ""
          };
        });
        setAssignedVendors(defaultVendors);
      }
    } else if (section_name === "package") {
      let result: any = await dispatch(linkedPackageOfVendor(id));
      let vendors = result?.payload?.data?.data;

      if (Array.isArray(vendors)) {
        const defaultVendors: any = {};
        vendors.forEach((vendor) => {
          defaultVendors[vendor?.vendor_id] = {
            name: vendor?.vendor?.name,
            id: vendor?.vendor_id,
            sellingPrice: Number(vendor?.selling_price) ?? 0,
            buyingPrice: Number(vendor?.buying_price) ?? 0,
            mor_start_Time: vendor?.mor_start_Time,
            mor_end_Time: vendor?.mor_end_Time,
            mor_buying_price: Number(vendor?.mor_buying_price) ?? 0,
            mor_selling_price: Number(vendor?.mor_selling_price) ?? 0,
            mor_female_available:
              vendor?.mor_female_available?.toString() == "true",
            mor_male_available:
              vendor?.mor_male_available?.toString() == "true",
            aft_start_Time: vendor?.aft_start_Time,
            aft_end_Time: vendor?.aft_end_Time,
            aft_buying_price: Number(vendor?.aft_buying_price) ?? 0,
            aft_selling_price: Number(vendor?.aft_selling_price) ?? 0,
            aft_female_available:
              vendor?.aft_female_available?.toString() == "true",
            aft_male_available:
              vendor?.aft_male_available?.toString() == "true",
            eve_start_Time: vendor?.eve_start_Time,
            eve_end_Time: vendor?.eve_end_Time,
            eve_buying_price: Number(vendor?.eve_buying_price) ?? 0,
            eve_selling_price: Number(vendor?.eve_selling_price) ?? 0,
            eve_female_available:
              vendor?.eve_female_available?.toString() == "true",
            eve_male_available:
              vendor?.eve_male_available?.toString() == "true",
              vendor_package_code:
              vendor?.vendor_package_code || "",
          };
        });
        setAssignedVendors(defaultVendors);
      }
    }
  }, [dispatch, id, section_name]);

  useEffect(() => {
    const main = async () => {
      await getAssignedVendorsOfTest();
    };
    main();
  }, [dispatch, getAssignedVendorsOfTest]);
  return {
    assignedVendors,
    setAssignedVendors,
    isBulkUpdate,
    setIsBulkUpdate,
  };
};

export default useCallAllVendors;
