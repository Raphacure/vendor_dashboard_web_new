import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import CostTimeComparisonChart from "@/pages/dashboardV2/components/charts/CostTimeComparisonChart";
import { useState } from "react";

const LabTestCalculator = () => {
  const [testType, setTestType] = useState("");
  const [numberOfTests, setNumberOfTests] = useState("");
  const [labDistance, setLabDistance] = useState("");
  const [labWaitingTime, setLabWaitingTime] = useState("");
  const [homeCollectionFee, setHomeCollectionFee] = useState("");

  const [homeCollectionCost, setHomeCollectionCost] = useState(0);
  const [labVisitCost, setLabVisitCost] = useState(0);
  const [moneySaved, setMoneySaved] = useState(0);
  const [travelTimeSaved, setTravelTimeSaved] = useState(0);
  const [waitTimeSaved, setWaitTimeSaved] = useState(0);
  const [totalTimeSaved, setTotalTimeSaved] = useState(0);

  const testPrices = {
    basic: 500,
    comprehensive: 2500,
    diabetes: 800,
    lipid: 600,
    thyroid: 700,
    liver: 900,
  } as any;

  const calculateLabSavings = () => {
    const selectedTestPrice = testPrices[testType] as any;
    const calculatedHomeCollectionCost =
      selectedTestPrice * Number(numberOfTests) + Number(homeCollectionFee);
    const calculatedLabVisitCost =
      selectedTestPrice * Number(numberOfTests) +
      Number(labDistance) * 5 +
      Number(labWaitingTime) * 100; // Assuming travel cost 5/km and waiting cost 100/hour
    const calculatedMoneySaved =
      calculatedLabVisitCost - calculatedHomeCollectionCost;

    const calculatedTravelTimeSaved = (Number(labDistance) * 2) / 60; // Assuming 30 km/h average speed, 2 ways
    const calculatedWaitTimeSaved = Number(labWaitingTime);
    const calculatedTotalTimeSaved =
      calculatedTravelTimeSaved + calculatedWaitTimeSaved;

    setHomeCollectionCost(calculatedHomeCollectionCost);
    setLabVisitCost(calculatedLabVisitCost);
    setMoneySaved(calculatedMoneySaved);
    setTravelTimeSaved(calculatedTravelTimeSaved);
    setWaitTimeSaved(calculatedWaitTimeSaved);
    setTotalTimeSaved(calculatedTotalTimeSaved);
  };

  const resetCalculator = () => {
    setTestType("");
    setNumberOfTests("");
    setLabDistance("");
    setLabWaitingTime("");
    setHomeCollectionFee("");
    setHomeCollectionCost(0);
    setLabVisitCost(0);
    setMoneySaved(0);
    setTravelTimeSaved(0);
    setWaitTimeSaved(0);
    setTotalTimeSaved(0);
  };

  return (
    <>
      <div className="bg-white rounded-lg !py-8" id="el-3axjkvv6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-ev372v32">
          <div className="space-y-6" id="el-6w8vj4mu">
            <h3
              className="text-xl font-semibold text-gray-900 mb-4"
              id="el-12ixzm0w"
            >
              Lab Test Cost Calculator
            </h3>

            <div id="el-pw6jphu9">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-r3zoj7i0"
              >
                Test Type
              </label>
              <select
                id="testType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                value={testType}
                onChange={(e) => setTestType(e.target.value)}
              >
                <option value="" id="el-select-default">
                  Select a test type
                </option>
                <option value="basic" id="el-5eyb8pzc">
                  Basic Blood Test (₹500)
                </option>
                <option value="comprehensive" id="el-pj6wjcjp">
                  Comprehensive Health Checkup (₹2500)
                </option>
                <option value="diabetes" id="el-8g8m5uzu">
                  Diabetes Panel (₹800)
                </option>
                <option value="lipid" id="el-7m7vzeqp">
                  Lipid Profile (₹600)
                </option>
                <option value="thyroid" id="el-0uv5bqld">
                  Thyroid Function Test (₹700)
                </option>
                <option value="liver" id="el-lz9xkcil">
                  Liver Function Test (₹900)
                </option>
              </select>
            </div>

            <div id="el-kkbz66rq">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-oohbuf20"
              >
                Number of Tests
              </label>
              <input
                type="number"
                id="numberOfTests"
                value={numberOfTests}
                onChange={(e) => setNumberOfTests(e.target.value)}
                min="1"
                max="10"
                placeholder="Enter number of tests"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            <div id="el-qv2vb5rv">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-m0mk444q"
              >
                Distance to Lab (km)
              </label>
              <input
                type="number"
                id="labDistance"
                value={labDistance}
                onChange={(e) => setLabDistance(e.target.value)}
                min="1"
                max="50"
                placeholder="Enter distance in km"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            <div id="el-a82ni9oj">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-iy670jiq"
              >
                Waiting Time at Lab (hours)
              </label>
              <input
                type="number"
                id="labWaitingTime"
                value={labWaitingTime}
                onChange={(e) => setLabWaitingTime(e.target.value)}
                min="0.5"
                max="5"
                step="0.5"
                placeholder="Enter waiting time in hours"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            <div id="el-hjmczxmy">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-z14e0q59"
              >
                Home Collection Fee (₹)
              </label>
              <input
                type="number"
                id="homeCollectionFee"
                value={homeCollectionFee}
                onChange={(e) => setHomeCollectionFee(e.target.value)}
                min="50"
                max="300"
                placeholder="Enter home collection fee"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            <div className="py-4 flex justify-center gap-3">
              <SecoundaryButton className="py-3 px-5" onClick={resetCalculator}>
                Reset Costs
              </SecoundaryButton>
              <PrimaryButton
                className="py-3 px-5"
                onClick={calculateLabSavings}
              >
                Calculate Savings
              </PrimaryButton>
            </div>
          </div>

          <div
            className="bg-gray-50 rounded-xl !p-6 shadow-[5px_4px_30px_0px_rgba(0,0,0,0.1)]"
            id="el-gxdclb6v"
          >
            <h3
              className="text-xl font-semibold text-gray-900 !mb-6"
              id="el-zmip5lay"
            >
              Your Lab Test Savings
            </h3>

            <div className="flex flex-col gap-3 mb-6" id="el-odp7e2en">
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-x137o6bq"
              >
                <span className="text-gray-700" id="el-huyjvkgv">
                  Home Collection Cost
                </span>
                <span
                  id="homeCollectionCost"
                  className="text-lg font-bold text-orange-600"
                >
                  ₹{homeCollectionCost}
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-laghyerd"
              >
                <span className="text-gray-700" id="el-7kuvm7k7">
                  Lab Visit Cost
                </span>
                <span
                  id="labVisitCost"
                  className="text-lg font-bold text-red-600"
                >
                  ₹{labVisitCost}
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-orange-50 rounded-lg border border-orange-200"
                id="el-xkilkz4t"
              >
                <span className="text-gray-700 font-medium" id="el-y3djitih">
                  Money Saved
                </span>
                <span
                  id="labMoneySaved"
                  className="text-xl font-bold text-orange-600"
                >
                  ₹{moneySaved}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 !mb-6 !mt-6" id="el-8q7epl55">
              <h4 className="text-lg font-semibold text-gray-900">
                Time &amp; Convenience Savings
              </h4>
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-gt44ya5a"
              >
                <span className="text-gray-700" id="el-1bcclvcg">
                  Travel Time Saved
                </span>
                <span
                  id="labTravelTime"
                  className="text-lg font-bold text-blue-600"
                >
                  {travelTimeSaved.toFixed(2)} hours
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-bmjun5lv"
              >
                <span className="text-gray-700" id="el-aez4xdi5">
                  Waiting Time Saved
                </span>
                <span
                  id="labWaitTime"
                  className="text-lg font-bold text-blue-600"
                >
                  {waitTimeSaved.toFixed(2)} hours
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200"
                id="el-m6218umh"
              >
                <span className="text-gray-700 font-medium" id="el-u9viavuc">
                  Total Time Saved
                </span>
                <span
                  id="labTotalTimeSaved"
                  className="text-xl font-bold text-blue-600"
                >
                  {totalTimeSaved.toFixed(2)} hours
                </span>
              </div>
            </div>

            <div
              className="bg-white rounded-lg p-4 border border-gray-200"
              id="el-tb53913i"
            >
              <h4
                className="text-sm font-semibold text-gray-900 mb-2"
                id="el-cr78i0ba"
              >
                Home Collection Benefits
              </h4>
              <ul className="text-sm text-gray-600 space-y-1" id="el-jw6p2ppk">
                <li id="el-ajaqjxq9">• No fasting disruption</li>
                <li id="el-b1f4fdsq">• Comfortable environment</li>
                <li id="el-dc6ld97j">• No exposure to infections</li>
                <li id="el-d8zda2y6">• Flexible timing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabTestCalculator;
