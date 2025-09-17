
import PrimaryButton from '@/components/custom/button/PrimaryButton';
import SecoundaryButton from '@/components/custom/button/SecoundaryButton';
import React, { useState } from 'react';

const MedicineCalculator = () => {
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [brandedCost, setBrandedCost] = useState(0);
  const [genericCost, setGenericCost] = useState(0);
  const [frequency, setFrequency] = useState(1);

  const [totalGenericCost, setTotalGenericCost] = useState(0);
  const [totalBrandedCost, setTotalBrandedCost] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [savingsPercentage, setSavingsPercentage] = useState(0);

  const calculateMedicineSavings = () => {
    const calculatedTotalGenericCost = genericCost * quantity * frequency;
    const calculatedTotalBrandedCost = brandedCost * quantity * frequency;
    const calculatedAnnualSavings = calculatedTotalBrandedCost - calculatedTotalGenericCost;
    const calculatedSavingsPercentage = calculatedTotalBrandedCost > 0 ? (calculatedAnnualSavings / calculatedTotalBrandedCost) * 100 : 0;

    setTotalGenericCost(calculatedTotalGenericCost);
    setTotalBrandedCost(calculatedTotalBrandedCost);
    setAnnualSavings(calculatedAnnualSavings);
    setSavingsPercentage(calculatedSavingsPercentage);
  };

  const resetFields = () => {
    setMedicineName('');
    setQuantity(0);
    setBrandedCost(0);
    setGenericCost(0);
    setFrequency(1);
    setTotalGenericCost(0);
    setTotalBrandedCost(0);
    setAnnualSavings(0);
    setSavingsPercentage(0);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg !py-8"
        id="el-2pmykhhe"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="el-bkghk577">
          <div className="space-y-6" id="el-ksmpuyn4">
            <h3
              className="text-xl font-semibold text-gray-900 mb-4"
              id="el-rlxu2oxl"
            >
              Medicine Cost Calculator
            </h3>

            <div id="el-j3rfvu9b">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-j8ocv3n3"
              >
                Medicine Name
              </label>
              <input
                type="text"
                id="medicineName"
                placeholder="e.g., Paracetamol"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
              />
            </div>

            <div id="el-y7pltoh7">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-261tkvvm"
              >
                Quantity (tablets/capsules)
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity === 0 ? '' : quantity}
                min="0"
                max="1000"
                placeholder="e.g., 30"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

            <div id="el-g09zgzkl">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-ksi1395q"
              >
                Branded Medicine Cost (₹)
              </label>
              <input
                type="number"
                id="brandedCost"
                value={brandedCost === 0 ? '' : brandedCost}
                min="0"
                placeholder="e.g., 150"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                onChange={(e) => setBrandedCost(Number(e.target.value))}
              />
            </div>

            <div id="el-83bueyd5">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-n96hji83"
              >
                Generic Medicine Cost (₹)
              </label>
              <input
                type="number"
                id="genericCost"
                value={genericCost === 0 ? '' : genericCost}
                min="0"
                placeholder="e.g., 45"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                onChange={(e) => setGenericCost(Number(e.target.value))}
              />
            </div>

            <div id="el-m76tsrjc">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                id="el-j1ehmecf"
              >
                Purchase Frequency (per year)
              </label>
              <select
                id="frequency"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
              >
                <option value="1" id="el-uw2vb4wo">
                  Once a year
                </option>
                <option value="2" id="el-8u6wl49j">
                  Twice a year
                </option>
                <option value="4" id="el-eq8vl54e">
                  Quarterly
                </option>
                <option value="6" id="el-zw4fgqz3">
                  Bi-monthly
                </option>
                <option value="12" id="el-fibzxd3b">
                  Monthly
                </option>
              </select>
            </div>
            <div className='py-4 flex justify-center gap-3'>
              <SecoundaryButton className="py-3 px-5" onClick={resetFields}>
                Reset Costs
              </SecoundaryButton>
              <PrimaryButton className="py-3 px-5" onClick={calculateMedicineSavings}>
                Calculate Savings
              </PrimaryButton>
            </div>
          </div>

          <div
            className="bg-gray-50 rounded-xl !p-6 shadow-[5px_4px_30px_0px_rgba(0,0,0,0.1)]"
            id="el-c7a33gpp"
          >
            <h3
              className="text-xl font-semibold text-gray-900 mb-6"
              id="el-707i73fm"
            >
              Your Medicine Savings
            </h3>

            <div className="flex flex-col gap-3 !mb-6" id="el-sz0cq8zo">
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-19oak1vf"
              >
                <span className="text-gray-700" id="el-5j6qxlgp">
                  Generic Medicine Cost
                </span>
                <span
                  id="totalGenericCost"
                  className="text-lg font-bold text-green-600"
                >
                  ₹{totalGenericCost.toFixed(2)}
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                id="el-bezkgabd"
              >
                <span className="text-gray-700" id="el-4cflceem">
                  Branded Medicine Cost
                </span>
                <span
                  id="totalBrandedCost"
                  className="text-lg font-bold text-red-600"
                >
                  ₹{totalBrandedCost.toFixed(2)}
                </span>
              </div>
              <div
                className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-200"
                id="el-cdt9vjr8"
              >
                <span className="text-gray-700 font-medium" id="el-yq2o7fn6">
                  Annual Savings
                </span>
                <span
                  id="annualSavings"
                  className="text-xl font-bold text-green-600"
                >
                  ₹{annualSavings.toFixed(2)}
                </span>
              </div>
            </div>

            <div
              className="bg-white rounded-lg p-4 border border-gray-200 !mb-6"
              id="el-bp40y6g5"
            >
              <div
                className="flex justify-between items-center mb-2"
                id="el-2d485rct"
              >
                <span className="text-gray-700" id="el-itxw4cub">
                  Savings Percentage
                </span>
                <span
                  id="savingsPercentage"
                  className="text-lg font-bold text-green-600"
                >
                  {savingsPercentage.toFixed(2)}%
                </span>
              </div>
              <div
                className="w-full bg-gray-200 rounded-full h-3"
                id="el-83xsgwvd"
              >
                <div
                  id="savingsBar"
                  className="bg-green-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${savingsPercentage}%` }}
                ></div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg p-4 border border-gray-200"
              id="el-03201201"
            >
              <h4
                className="text-lg font-semibold text-gray-900 mb-2"
                id="el-03201202"
              >
                Why Choose Generic Medicines?
              </h4>
              <p className="text-gray-700" id="el-03201203">
                Generic medicines contain the same active ingredients as their
                branded counterparts and are equally effective, but are often
                significantly more affordable. Choosing generics can lead to
                substantial savings without compromising on quality or health
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicineCalculator;
