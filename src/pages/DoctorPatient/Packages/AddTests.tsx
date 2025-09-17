import React, { useCallback, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { AssignTestsStyled } from "./Index.styled";
import {
  assignTestsForPackageApi,
  getAllTestsAPI,
} from "@/redux/slices/packages/packagesService";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const AssignTests = ({ id, assignedTests, onSave, prevAssignedTest }: any) => {
  const [availableTests, setAvailableTests] = useState<any>([]);
  const [selectedTests, setSelectedTests] = useState<any>(
    Array.isArray(prevAssignedTest) ? prevAssignedTest : []
  );

  console.log(selectedTests, "selectedTests");

  const [testCount, setTestCount] = useState<number>(20);
  const dispatch = useDispatch() as any;

  const getTests = useCallback(async (searchText ?: string) => {
    const payload = {
      count: testCount,
      page: 0,
      searchText: searchText,
      type: "diagnostic",
    };

    dispatch(getAllTestsAPI(payload));
  }, [testCount]);

  useEffect(() => {
    if (Array.isArray(assignedTests)) {
      setAvailableTests(assignedTests);
    }
  }, [assignedTests]);

  const handleSelectTest = (test: any) => {
    const isSelected = selectedTests.some(
      (selected: any) => selected.service_code === test.service_code
    );

    if (isSelected) {
      // Remove if already selected
      setSelectedTests(
        selectedTests.filter(
          (selected: any) => selected.service_code !== test.service_code
        )
      );
    } else {
      // Add if not selected
      setSelectedTests([...selectedTests, test]);
    }
  };

  const handleRemoveTest = (serviceCode: any) => {
    setSelectedTests(
      selectedTests.filter((test: any) => test.service_code !== serviceCode)
    );
  };

  const handleSave = async () => {
    const payload = {
      testIds: selectedTests.map((test: any) => test.service_code),
    };
    const res = (await dispatch(
      assignTestsForPackageApi({
        id: id,
        payload,
      })
    )) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      return;
    } else {
      toast.success("Tests saved Succesfully");
    }
    onSave(payload);
  };

  const handleLoadMore = () => {
    setTestCount(testCount + 20);
    getTests();
  };

  return (
    <AssignTestsStyled>
      <div className="assign-tests-container">
        <div className="tests-section">
          <div className="available-tests">
            <h5>Available Tests</h5>
            <div className="search-bar">
              <Form.Control
                type="text"
                placeholder="Search tests"
                onChange={(e) => {
                  const searchValue = e.target.value.toLowerCase();
                  getTests(searchValue)
                }}
              />
            </div>
            <div className="tests-list mt-2">
              {availableTests.map((test: any) => (
                <div className="test-item" key={test.service_code}>
                  <input
                    type="checkbox"
                    onChange={() => handleSelectTest(test)}
                    checked={selectedTests.some(
                      (selected: any) =>
                        selected.service_code === test.service_code
                    )}
                  />
                  <span>{test.service_name}</span>
                </div>
              ))}
            </div>
            <Button className="load-more mt-2" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>

          <div className="selected-tests">
            <h5>Selected Tests - {selectedTests.length}</h5>
            <div className="tests-list">
              {selectedTests?.map((test: any) => (
                <div className="test-item" key={test.service_code}>
                  <span>{test.service_name}</span>
                  <MdDelete
                    className="delete-icon"
                    onClick={() => handleRemoveTest(test.service_code)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="actions-btn-sec mt-2 d-flex justify-content-end">
          <Button className="assign-button" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </AssignTestsStyled>
  );
};

export default AssignTests;
