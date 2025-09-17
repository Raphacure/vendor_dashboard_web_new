import { useEffect, useState } from "react";
import ToxicSubstancePageStyled from "./ToxicSubstancePage.styled";
import PackageCard from "./components/PackageCard/PackageCard";
import SelectDrugTestModal from "./components/modals/SelectDrugTestModal";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { toxicSubstanceBreadCrumbs } from "@/constants/breadcrumbs.constants";
import Loader from "@/components/loader/loader/Loader";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { getAllPackages } from "@/redux/slices/packages/packagesService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";

const ToxicSubstancePage = () => {
  const [isSelectDrugTestModalOpen, setIsSelectDrugTestModalOpen] =
    useState(false);
  const handleClose = () => setIsSelectDrugTestModalOpen(false);
  const dispatch = useDispatch() as any;
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState({});
  const { linkableId } = useClientLinkableId();

  //get all packages

  useEffect(() => {
    const getAllPackagesData = async () => {
      try {
        setIsLoading(true);
        const response = await dispatch(
          getAllPackages({ filters: { count: 200, clientId: linkableId,categoryIds:["248"]
 } })
        );
        if (response?.error) {
          toast.error(response?.error?.data?.message);
        } else {
          setPackages(response?.payload?.data?.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllPackagesData();
  }, []);

  //

  const onBookNow = (selectedPackage: any) => {
    setIsSelectDrugTestModalOpen(true);
    setSelectedPackage(selectedPackage);
  };

  return (
    <ToxicSubstancePageStyled>
      {isLoading && <Loader />}
      <CommonBreadCrumbs className="mb-2" items={toxicSubstanceBreadCrumbs} />
      <p className="header-text !mb-[26px]">Toxic Substance</p>
      <p className="font-inter font-medium text-[22px] leading-[100%] tracking-[0%] !mb-[33px]">
        Select Your Package Type
      </p>
      {packages.length > 0 ? (
        <div className="flex flex-wrap gap-[64.66px]">
          {packages.map((item, index) => (
            <div className="grow-0 basis-[567px] min-w-[340px]">
              <PackageCard onBookNow={onBookNow} key={index} data={item} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">No packages available.</p>
      )}

      <SelectDrugTestModal
        selectedPackage={selectedPackage}
        open={isSelectDrugTestModalOpen}
        handleClose={handleClose}
      />
    </ToxicSubstancePageStyled>
  );
};

export default ToxicSubstancePage;
