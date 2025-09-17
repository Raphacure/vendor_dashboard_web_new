import React, { useState, useEffect } from 'react';
import CostTimeComparisonChart from "@/pages/dashboardV2/components/charts/CostTimeComparisonChart";
import SecoundaryButton from '@/components/custom/button/SecoundaryButton';
import PrimaryButton from '@/components/custom/button/PrimaryButton';


const ConsultationCalculator = () => {
  const [consultationType, setConsultationType] = useState('');
  const [numberOfConsultations, setNumberOfConsultations] = useState<number | ''>('');
  const [clinicDistance, setClinicDistance] = useState<number | ''>('');
  const [clinicWaitingTime, setClinicWaitingTime] = useState<number | ''>('');
  const [platformFee, setPlatformFee] = useState<number | ''>('');

  const [virtualConsultationCost, setVirtualConsultationCost] = useState<number | null>(null);
  const [clinicVisitCost, setClinicVisitCost] = useState<number | null>(null);
  const [consultationMoneySaved, setConsultationMoneySaved] = useState<number | null>(null);
  const [totalConsultations, setTotalConsultations] = useState<number | null>(null);
  const [investmentToWallet, setInvestmentToWallet] = useState<number | null>(null);
  const [consultationTravelTime, setConsultationTravelTime] = useState<number | null>(null);
  const [consultationWaitTime, setConsultationWaitTime] = useState<number | null>(null);
  const [consultationTotalTimeSaved, setConsultationTotalTimeSaved] = useState<number | null>(null);

  const consultationCosts: { [key: string]: number } = {
    general: 500,
    specialist: 800,
    followup: 300,
    psychiatrist: 1000,
    dermatologist: 700,
    pediatrician: 600,
  };

  const resetStates = () => {
    setConsultationType('');
    setNumberOfConsultations('');
    setClinicDistance('');
    setClinicWaitingTime('');
    setPlatformFee('');
    setVirtualConsultationCost(null);
    setClinicVisitCost(null);
    setConsultationMoneySaved(null);
    setTotalConsultations(null);
    setInvestmentToWallet(null);
    setConsultationTravelTime(null);
    setConsultationWaitTime(null);
    setConsultationTotalTimeSaved(null);
  };

  const calculateConsultationSavings = () => {
    const numConsultations = Number(numberOfConsultations);
    const distClinic = Number(clinicDistance);
    const waitTimeClinic = Number(clinicWaitingTime);
    const feePlatform = Number(platformFee);

    if (isNaN(numConsultations) || numConsultations <= 0 || isNaN(distClinic) || isNaN(waitTimeClinic) || isNaN(feePlatform) || !consultationType) {
      // Reset results if inputs are invalid or empty
      setVirtualConsultationCost(null);
      setClinicVisitCost(null);
      setConsultationMoneySaved(null);
      setTotalConsultations(null);
      setInvestmentToWallet(null);
      setConsultationTravelTime(null);
      setConsultationWaitTime(null);
      setConsultationTotalTimeSaved(null);
      return;
    }

    const virtualCostPerConsultation = (consultationCosts[consultationType] || 0) + feePlatform;
    const totalVirtualCost = virtualCostPerConsultation * numConsultations;

    // Assuming travel cost is ₹10/km and waiting time cost is ₹200/hour
    const travelCostPerConsultation = distClinic * 10;
    const waitingCostPerConsultation = waitTimeClinic * 200;
    const clinicCostPerConsultation = 620 + travelCostPerConsultation + waitingCostPerConsultation; // Base clinic cost + travel + waiting
    const totalClinicCost = clinicCostPerConsultation * numConsultations;

    const moneySaved = totalClinicCost - totalVirtualCost;

    // Assuming average travel speed is 30 km/hour
    const travelTimeSavedPerConsultation = (distClinic / 30) * 2; // Round trip
    const totalTravelTimeSaved = travelTimeSavedPerConsultation * numConsultations;
    const totalWaitingTimeSaved = waitTimeClinic * numConsultations;
    const totalTimeSaved = totalTravelTimeSaved + totalWaitingTimeSaved;

    setVirtualConsultationCost(totalVirtualCost);
    setClinicVisitCost(totalClinicCost);
    setConsultationMoneySaved(moneySaved);
    setTotalConsultations(numConsultations);
    setInvestmentToWallet(totalVirtualCost);
    setConsultationTravelTime(totalTravelTimeSaved);
    setConsultationWaitTime(totalWaitingTimeSaved);
    setConsultationTotalTimeSaved(totalTimeSaved);
  };


  return (
    <>
      <div className="bg-white rounded-lg !py-8" id="el-issmdapo">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-xoc07033">
          <div className="space-y-6" id="el-wb6hyrmg">
            <h3
              className="text-xl font-semibold text-gray-900 mb-4"
              id="el-w883bjlu"
            >
              Virtual Consultation Calculator
            </h3>
            <div id="el-3nbiruwx">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-0we4ceim"
              >
                Consultation Type
              </label>
              <select
                id="consultationType"
                value={consultationType}
                onChange={(e) => setConsultationType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              >
                <option value="" disabled selected>Select a type</option>
                <option value="general" id="el-tojqoqpf">
                  General Physician (₹500)
                </option>
                <option value="specialist" id="el-znx7kt15">
                  Specialist Consultation (₹800)
                </option>
                <option value="followup" id="el-mo1xczq1">
                  Follow-up Consultation (₹300)
                </option>
                <option value="psychiatrist" id="el-org9n8je">
                  Psychiatrist (₹1000)
                </option>
                <option value="dermatologist" id="el-4a21suk5">
                  Dermatologist (₹700)
                </option>
                <option value="pediatrician" id="el-gf2ajmwt">
                  Pediatrician (₹600)
                </option>
              </select>
            </div>
            <div id="el-5mfoyswz">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-q5ikto5c"
              >
                Number of Consultations
              </label>
              <input
                type="number"
                id="numberOfConsultations"
                value={numberOfConsultations}
                onChange={(e) => setNumberOfConsultations(e.target.value === '' ? '' : parseInt(e.target.value))}
                min="1"
                max="10"
                placeholder="e.g., 5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>
            <div id="el-qk0th0sc">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-yii4e1px"
              >
                Distance to Clinic (km)
              </label>
              <input
                type="number"
                id="clinicDistance"
                value={clinicDistance}
                onChange={(e) => setClinicDistance(e.target.value === '' ? '' : parseInt(e.target.value))}
                min="1"
                max="50"
                placeholder="e.g., 10"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>
            <div id="el-duzv8b4g">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-9erx5x0r"
              >
                Waiting Time at Clinic (hours)
              </label>
              <input
                type="number"
                id="clinicWaitingTime"
                value={clinicWaitingTime}
                onChange={(e) => setClinicWaitingTime(e.target.value === '' ? '' : parseFloat(e.target.value))}
                min="0.5"
                max="5"
                step="0.5"
                placeholder="e.g., 1.5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            <div id="el-8r7erojm">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-xj9wf81m"
              >
                Platform Fee (₹)
              </label>
              <input
                type="number"
                id="platformFee"
                value={platformFee}
                onChange={(e) => setPlatformFee(e.target.value === '' ? '' : parseInt(e.target.value))}
                min="0"
                max="100"
                placeholder="e.g., 50"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>

            <div className='py-4 flex justify-center gap-3'>
                <SecoundaryButton className="py-3 px-5" onClick={resetStates}>
                  Reset Costs
                </SecoundaryButton>
              <PrimaryButton className="py-3 px-5" onClick={calculateConsultationSavings}>
                Calculate Savings
              </PrimaryButton>
            </div>
          </div>

          <div
            className="bg-gray-50 rounded-xl !p-6 shadow-[5px_4px_30px_0px_rgba(0,0,0,0.1)]"
            id="el-zawupgj7"
          >
            <h3
              className="text-xl font-semibold text-gray-900 mb-6"
              id="el-5govcd7y"
            >
              Your Consultation Savings
            </h3>

            <div className="flex flex-col gap-3 mb-6" id="el-fku8xp2f">
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-86dvsu7h"
              >
                <span className="text-gray-700" id="el-ddninliq">
                  Virtual Consultation Cost
                </span>
                <span
                  id="virtualConsultationCost"
                  className="text-lg font-bold text-blue-600"
                >
                  {virtualConsultationCost !== null ? `₹${virtualConsultationCost}` : '-'}
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-rtc2els1"
              >
                <span className="text-gray-700" id="el-d3v73hm3">
                  Clinic Visit Cost
                </span>
                <span
                  id="clinicVisitCost"
                  className="text-lg font-bold text-red-600"
                >
                  {clinicVisitCost !== null ? `₹${clinicVisitCost}` : '-'}
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200"
                id="el-ipn4i77c"
              >
                <span className="text-gray-700 font-medium" id="el-dx4r4o31">
                  Money Saved
                </span>
                <span
                  id="consultationMoneySaved"
                  className="text-xl font-bold text-green-600"
                >
                  {consultationMoneySaved !== null ? `₹${consultationMoneySaved}` : '-'}
                </span>
              </div>
            </div>

            <div
              className="flex flex-col gap-3 !mb-6"
              id="el-consultation-summary"
            >
              <h4 className="text-lg font-semibold text-gray-900">
                Consultation Summary
              </h4>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-700">Total Consultations</span>
                <span
                  id="totalConsultations"
                  className="text-lg font-bold text-purple-600"
                >
                  {totalConsultations !== null ? totalConsultations : '-'}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200">
                <span className="text-gray-700">Investment to Wallet</span>
                <span
                  id="investmentToWallet"
                  className="text-lg font-bold text-indigo-600"
                >
                  {investmentToWallet !== null ? `₹${investmentToWallet}` : '-'}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 !mb-6" id="el-zrmuiyy6">
              <h4
                className="text-lg font-semibold text-gray-900"
                id="el-hxvovnac"
              >
                Time &amp; Convenience Savings
              </h4>
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-geb29dr6"
              >
                <span className="text-gray-700" id="el-52obuxkd">
                  Travel Time Saved
                </span>
                <span
                  id="consultationTravelTime"
                  className="text-lg font-bold text-blue-600"
                >
                  {consultationTravelTime !== null ? `${consultationTravelTime.toFixed(2)} hours` : '-'}
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-6uz9w4x0"
              >
                <span className="text-gray-700" id="el-klzvpai2">
                  Waiting Time Saved
                </span>
                <span
                  id="consultationWaitTime"
                  className="text-lg font-bold text-blue-600"
                >
                  {consultationWaitTime !== null ? `${consultationWaitTime.toFixed(2)} hours` : '-'}
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200"
                id="el-98q4j6bx"
              >
                <span className="text-gray-700 font-medium" id="el-6z3c0855">
                  Total Time Saved
                </span>
                <span
                  id="consultationTotalTimeSaved"
                  className="text-xl font-bold text-blue-600"
                >
                  {consultationTotalTimeSaved !== null ? `${consultationTotalTimeSaved.toFixed(2)} hours` : '-'}
                </span>
              </div>
            </div>

            <div
              className="bg-white rounded-lg p-4 border border-gray-200"
              id="el-zib3g69v"
            >
              <h4
                className="text-sm font-semibold text-gray-900 mb-2"
                id="el-1xy2e5g5"
              >
                Virtual Consultation Benefits
              </h4>
              <ul className="text-sm text-gray-600 space-y-1" id="el-g2hqp9j1">
                <li id="el-6hi6zgry">• No travel required</li>
                <li id="el-jv48vdkf">• Instant access to doctors</li>
                <li id="el-my7mapdv">• No exposure to infections</li>
                <li id="el-udqyk126">• Digital prescriptions</li>
                <li id="el-d0pay3pu">• Recorded consultations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <CostTimeComparisonChart data={data} /> */}
      {/* <div
        className="bg-white rounded-lg !p-6 !my-8"
        id="el-35b29k0l"
      >
        <h3
          className="text-xl font-semibold text-gray-900 mb-6"
          id="el-gvdvp6ot"
        >
          Popular Consultations &amp; Savings
        </h3>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          id="el-inlqhbu3"
        >
          <div
            className="p-4 bg-gray-50 rounded-lg border border-gray-100"
            id="el-0fcg7w4y"
          >
            <h4 className="font-semibold text-gray-900 mb-2" id="el-bt5ofimp">
              General Physician
            </h4>
            <div className="flex justify-between text-sm mb-2" id="el-43hng98w">
              <span className="text-gray-600" id="el-ec1z5yz9">
                Clinic Visit: ₹740
              </span>
              <span className="text-blue-600 font-medium" id="el-6u4ef4s9">
                Virtual: ₹550
              </span>
            </div>
            <div className="text-xs text-green-600 mb-1" id="el-6oemaxp2">
              Save ₹190 • Save 2.8 hours
            </div>
            <div className="text-xs text-blue-600" id="el-71oyv7nz">
              Avoid OPD travel &amp; waiting
            </div>
          </div>

          <div
            className="p-4 bg-gray-50 rounded-lg border border-gray-100"
            id="el-v3dokvpl"
          >
            <h4 className="font-semibold text-gray-900 mb-2" id="el-9ai3hjja">
              Specialist
            </h4>
            <div className="flex justify-between text-sm mb-2" id="el-amwcnrcp">
              <span className="text-gray-600" id="el-rhzy9m8q">
                Clinic Visit: ₹1040
              </span>
              <span className="text-blue-600 font-medium" id="el-4lqa6mja">
                Virtual: ₹850
              </span>
            </div>
            <div className="text-xs text-green-600 mb-1" id="el-aw3bo2k2">
              Save ₹190 • Save 2.8 hours
            </div>
            <div className="text-xs text-blue-600" id="el-0mcxrkl7">
              Avoid OPD travel &amp; waiting
            </div>
          </div>

          <div
            className="p-4 bg-gray-50 rounded-lg border border-gray-100"
            id="el-72m52odc"
          >
            <h4 className="font-semibold text-gray-900 mb-2" id="el-zf133wx3">
              Follow-up
            </h4>
            <div className="flex justify-between text-sm mb-2" id="el-a54otlya">
              <span className="text-gray-600" id="el-yo0bwkbk">
                Clinic Visit: ₹540
              </span>
              <span className="text-blue-600 font-medium" id="el-3trpwtma">
                Virtual: ₹350
              </span>
            </div>
            <div className="text-xs text-green-600 mb-1" id="el-9gsga2ah">
              Save ₹190 • Save 2.8 hours
            </div>
            <div className="text-xs text-blue-600" id="el-vd15ue8u">
              Avoid OPD travel &amp; waiting
            </div>
          </div>

          <div
            className="p-4 bg-gray-50 rounded-lg border border-gray-100"
            id="el-grul1puf"
          >
            <h4 className="font-semibold text-gray-900 mb-2" id="el-fmto1v4m">
              Psychiatrist
            </h4>
            <div className="flex justify-between text-sm mb-2" id="el-vdfw3bs9">
              <span className="text-gray-600" id="el-yt3ny7ve">
                Clinic Visit: ₹1240
              </span>
              <span className="text-blue-600 font-medium" id="el-wabiyfqw">
                Virtual: ₹1050
              </span>
            </div>
            <div className="text-xs text-green-600 mb-1" id="el-7ck2qow4">
              Save ₹190 • Save 2.8 hours
            </div>
            <div className="text-xs text-blue-600" id="el-uzgzbs46">
              Avoid OPD travel &amp; waiting
            </div>
          </div>

          <div
            className="p-4 bg-gray-50 rounded-lg border border-gray-100"
            id="el-8vg240dp"
          >
            <h4 className="font-semibold text-gray-900 mb-2" id="el-c5oc3s4d">
              Dermatologist
            </h4>
            <div className="flex justify-between text-sm mb-2" id="el-c3rvu0eg">
              <span className="text-gray-600" id="el-b1i73u9q">
                Clinic Visit: ₹940
              </span>
              <span className="text-blue-600 font-medium" id="el-u8j3p509">
                Virtual: ₹750
              </span>
            </div>
            <div className="text-xs text-green-600 mb-1" id="el-isy7jf51">
              Save ₹190 • Save 2.8 hours
            </div>
            <div className="text-xs text-blue-600" id="el-z2lo45hs">
              Avoid OPD travel &amp; waiting
            </div>
          </div>

          <div
            className="p-4 bg-gray-50 rounded-lg border border-gray-100"
            id="el-x4ci7fb3"
          >
            <h4 className="font-semibold text-gray-900 mb-2" id="el-6r3mdh3n">
              Pediatrician
            </h4>
            <div className="flex justify-between text-sm mb-2" id="el-k6cpeamm">
              <span className="text-gray-600" id="el-zcjwkvmk">
                Clinic Visit: ₹840
              </span>
              <span className="text-blue-600 font-medium" id="el-evteubny">
                Virtual: ₹650
              </span>
            </div>
            <div className="text-xs text-green-600 mb-1" id="el-etyj3lrf">
              Save ₹190 • Save 2.8 hours
            </div>
            <div className="text-xs text-blue-600" id="el-0fqv8nph">
              Avoid OPD travel &amp; waiting
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ConsultationCalculator;
