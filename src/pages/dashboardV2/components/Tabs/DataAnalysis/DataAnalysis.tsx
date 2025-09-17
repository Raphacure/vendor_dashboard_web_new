import React, { useState } from 'react';
import { Activity, Heart, Brain, Shield, TrendingUp, Users, AlertTriangle, CheckCircle, Calendar, Target, Award, Briefcase, Building, User } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const HealthDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Age-wise health data
  const ageWiseHealthData = [
    {
      ageGroup: '18-30 years',
      employees: 182,
      percentage: 28,
      excellentHealth: 45,
      goodHealth: 48,
      needsImprovement: 7,
      keyIssues: ['Digital eye strain', 'Poor sleep habits'],
      color: 'bg-green-50 border-green-200'
    },
    {
      ageGroup: '31-40 years', 
      employees: 228,
      percentage: 35,
      excellentHealth: 38,
      goodHealth: 52,
      needsImprovement: 10,
      keyIssues: ['Work-life balance', 'Stress management'],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      ageGroup: '41-50 years',
      employees: 156,
      percentage: 24,
      excellentHealth: 28,
      goodHealth: 48,
      needsImprovement: 24,
      keyIssues: ['Hypertension', 'Metabolic syndrome'],
      color: 'bg-yellow-50 border-yellow-200'
    },
    {
      ageGroup: '51-60 years',
      employees: 71,
      percentage: 11,
      excellentHealth: 18,
      goodHealth: 42,
      needsImprovement: 40,
      keyIssues: ['Cardiovascular risk', 'Diabetes'],
      color: 'bg-orange-50 border-orange-200'
    },
    {
      ageGroup: '60+ years',
      employees: 13,
      percentage: 2,
      excellentHealth: 15,
      goodHealth: 38,
      needsImprovement: 47,
      keyIssues: ['Multiple chronic conditions', 'Mobility issues'],
      color: 'bg-red-50 border-red-200'
    }
  ];

  // Department health overview data
  const departmentHealthOverview = [
    {
      department: 'Technology & Engineering',
      employees: 150,
      overallScore: 82,
      excellentHealth: 42,
      goodHealth: 46,
      atRisk: 12,
      topConcerns: ['Sedentary lifestyle (73%)', 'Digital eye strain (68%)', 'Poor posture (45%)'],
      strengths: ['Youngest workforce', 'High tech awareness', 'Good mental agility'],
      color: 'bg-green-400',
      textColor: 'text-white'
    },
    {
      department: 'Administration & Finance',
      employees: 125,
      overallScore: 78,
      excellentHealth: 35,
      goodHealth: 52,
      atRisk: 13,
      topConcerns: ['Metabolic syndrome (34%)', 'Stress eating (28%)', 'Irregular schedules (22%)'],
      strengths: ['Stable environment', 'Good preventive care', 'Regular health checkups'],
      color: 'bg-blue-400',
      textColor: 'text-white'
    },
    {
      department: 'Sales & Marketing',
      employees: 100,
      overallScore: 74,
      excellentHealth: 28,
      goodHealth: 46,
      atRisk: 26,
      topConcerns: ['High stress (52%)', 'Travel fatigue (38%)', 'Irregular meals (43%)'],
      strengths: ['High energy levels', 'Social connectivity', 'Adaptability'],
      color: 'bg-yellow-400',
      textColor: 'text-gray-800'
    },
    {
      department: 'Operations & Production',
      employees: 200,
      overallScore: 69,
      excellentHealth: 22,
      goodHealth: 47,
      atRisk: 31,
      topConcerns: ['Hypertension (45%)', 'Shift work issues (38%)', 'Musculoskeletal (42%)'],
      strengths: ['Team collaboration', 'Physical activity awareness', 'Safety consciousness'],
      color: 'bg-pink-300',
      textColor: 'text-white'
    }
  ];

  // Department data
  const departmentData = [
    {
      name: 'Administration & Finance',
      employees: 125,
      participation: 92,
      color: 'bg-green-100 border-green-300',
      breakdown: [
        { role: 'Finance Department', count: 75 },
        { role: 'Human Resources', count: 30 },
        { role: 'Administration', count: 20 }
      ],
      healthRisk: 'Low',
      keyIssues: ['Sedentary lifestyle', 'Eye strain']
    },
    {
      name: 'Operations & Production',
      employees: 200,
      participation: 89,
      color: 'bg-yellow-100 border-yellow-300',
      breakdown: [
        { role: 'Trading Operations', count: 120 },
        { role: 'Client Services', count: 50 },
        { role: 'Compliance', count: 30 }
      ],
      healthRisk: 'Medium',
      keyIssues: ['High stress', 'Irregular meals']
    },
    {
      name: 'Technology & Engineering',
      employees: 150,
      participation: 94,
      color: 'bg-purple-100 border-purple-300',
      breakdown: [
        { role: 'Software Development', count: 90 },
        { role: 'IT Support', count: 35 },
        { role: 'Data Analytics', count: 25 }
      ],
      healthRisk: 'Medium',
      keyIssues: ['Digital eye strain', 'Poor posture']
    },
    {
      name: 'Sales & Marketing',
      employees: 100,
      participation: 87,
      color: 'bg-blue-100 border-blue-300',
      breakdown: [
        { role: 'Sales Team', count: 60 },
        { role: 'Marketing', count: 25 },
        { role: 'Business Development', count: 15 }
      ],
      healthRisk: 'High',
      keyIssues: ['Travel fatigue', 'High stress']
    }
  ];

  // Gender health analysis
  const genderHealthData = {
    female: {
      total: 267,
      percentage: 41,
      excellentHealth: 35,
      goodHealth: 58,
      needsImprovement: 7,
      keyStrengths: ['Higher preventive care: 89%', 'Better sleep quality: 73%', 'Lower smoking rates: 2%'],
      participationRate: 95
    },
    male: {
      total: 377,
      percentage: 58,
      excellentHealth: 25,
      goodHealth: 51,
      needsImprovement: 24,
      keyConcerns: ['Higher cardiovascular risk: 42%', 'Poor stress management: 34%', 'Irregular health checkups: 28%'],
      participationRate: 91
    }
  };

  const AlertSection = ({ alerts }) => (
    <div className="!mb-8">
      {alerts.map((alert, index) => (
        <div key={index} className={`mb-4 p-4 rounded-lg border-l-4 ${
          alert.type === 'immediate' ? 'bg-red-50 border-red-500' : 'bg-orange-50 border-orange-500'
        }`}>
          <div className="flex gap-3 items-start">
            <span className="text-2xl">{alert.icon}</span>
            <div className="flex-1">
              <span className="font-bold text-gray-800">{alert.title}</span>
              <span className="ml-2 text-gray-700">{alert.message}</span>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-white rounded-full border">
                  {alert.count}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const AgeWiseHealthCard = ({ ageData }) => (
    <div className={`${ageData.color} rounded-lg p-4 border-2`}>
      <div className="mb-4 text-center">
        <h4 className="text-lg font-bold text-gray-800">{ageData.ageGroup}</h4>
        <div className="mt-2 text-2xl font-bold text-gray-700">{ageData.employees}</div>
        <div className="text-sm text-gray-600">employees ({ageData.percentage}%)</div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Excellent Health</span>
            <span className="font-medium">{ageData.excellentHealth}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-green-500 rounded-full" 
              style={{ width: `${ageData.excellentHealth}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Good Health</span>
            <span className="font-medium">{ageData.goodHealth}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-500 rounded-full" 
              style={{ width: `${ageData.goodHealth}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Needs Improvement</span>
            <span className="font-medium">{ageData.needsImprovement}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-red-400 rounded-full" 
              style={{ width: `${ageData.needsImprovement}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="pt-3 mt-4 border-t border-gray-300">
        <h5 className="mb-2 text-xs font-semibold text-gray-700">Key Health Issues:</h5>
        <div className="text-xs text-gray-600">
          {ageData.keyIssues.map((issue, index) => (
            <div key={index}>• {issue}</div>
          ))}
        </div>
      </div>
    </div>
  );

  const DepartmentHealthCard = ({ deptData }) => (
    <div className={`${deptData.color} ${deptData.textColor} !rounded-lg !p-6 shadow-lg`}>
      <div className="!mb-4">
        <h3 className="!mb-2 text-xl font-bold">{deptData.department}</h3>
        <div className="flex gap-4 items-center">
          <div className="text-4xl font-bold">{deptData.overallScore}%</div>
          <div className="text-sm">
            <div>{deptData.employees} employees</div>
            <div>Overall Wellness Score</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold">{deptData.excellentHealth}%</div>
          <div className="text-xs opacity-80">Excellent</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{deptData.goodHealth}%</div>
          <div className="text-xs opacity-80">Good</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">{deptData.atRisk}%</div>
          <div className="text-xs opacity-80">At Risk</div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="mb-2 text-sm font-semibold">🚨 Top Concerns:</h4>
          <div className="space-y-1 text-xs">
            {deptData.topConcerns.map((concern, index) => (
              <div key={index}>• {concern}</div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="mb-2 text-sm font-semibold">💪 Strengths:</h4>
          <div className="space-y-1 text-xs">
            {deptData.strengths.map((strength, index) => (
              <div key={index}>• {strength}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const WorkforceOverview = () => (
    <div className="!p-6 !mb-6 !mt-2 bg-white !rounded-xl border border-gray-200 shadow-lg">
      <div className="flex gap-3 items-center !mb-6">
        <div className="p-3 bg-green-500 rounded-lg">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800">Employee Population Overview</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 text-center bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex justify-center mb-3">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <div className="mb-2 text-3xl font-bold text-blue-600">650</div>
          <div className="text-sm font-medium text-blue-800">Total Workforce</div>
          <div className="mt-1 text-xs text-blue-600">Active Employees</div>
        </div>

        <div className="p-4 text-center bg-green-50 rounded-lg border border-green-200">
          <div className="flex justify-center mb-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <div className="mb-2 text-3xl font-bold text-green-600">93%</div>
          <div className="text-sm font-medium text-green-800">Assessment Participation</div>
          <div className="mt-1 text-xs text-green-600">605 employees screened</div>
        </div>

        <div className="p-4 text-center bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex justify-center mb-3">
            <Target className="w-8 h-8 text-purple-600" />
          </div>
          <div className="mb-2 text-3xl font-bold text-purple-600">73%</div>
          <div className="text-sm font-medium text-purple-800">Program Completion</div>
          <div className="mt-1 text-xs text-purple-600">474 completed, 176 in progress</div>
        </div>

        <div className="p-4 text-center bg-orange-50 rounded-lg border border-orange-200">
          <div className="flex justify-center mb-3">
            <Calendar className="w-8 h-8 text-orange-600" />
          </div>
          <div className="mb-2 text-3xl font-bold text-orange-600">6.8</div>
          <div className="text-sm font-medium text-orange-800">Average Tenure</div>
          <div className="mt-1 text-xs text-orange-600">Years of service</div>
        </div>
      </div>

      {/* Additional Quick Stats */}
      <div className="!pt-6 !mt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="text-sm">
              <span className="font-medium text-gray-700">High Participation: </span>
              <span className="text-green-600">Above 90% in all departments</span>
            </div>
          </div>
          <div className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="text-sm">
              <span className="font-medium text-gray-700">Engagement: </span>
              <span className="text-blue-600">474 active wellness participants</span>
            </div>
          </div>
          <div className="flex gap-3 items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div className="text-sm">
              <span className="font-medium text-gray-700">Retention: </span>
              <span className="text-purple-600">Stable workforce (6.8yr avg)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DepartmentCard = ({ dept }) => (
    <div className={`${dept.color} !rounded-lg !p-6 border-2`}>
      <div className="flex gap-2 items-center mb-4">
        <Building className="w-6 h-6 text-gray-700" />
        <h3 className="font-bold text-gray-800">{dept.name}</h3>
      </div>
      
      <div className="!mb-4 text-center">
        <div className="text-3xl font-bold text-gray-800">{dept.employees} EMPLOYEES</div>
        <div className="text-sm text-gray-600">Participation: {dept.participation}%</div>
      </div>

      <div className="!mb-4">
        <h4 className="mb-2 font-semibold text-gray-700">Breakdown:</h4>
        {dept.breakdown.map((item, index) => (
          <div key={index} className="flex justify-between text-sm text-gray-600">
            <span>• {item.role}:</span>
            <span>{item.count} employees</span>
          </div>
        ))}
      </div>

      <div className="!pt-4 !border-t">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Health Risk:</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            dept.healthRisk === 'Low' ? 'bg-green-200 text-green-800' :
            dept.healthRisk === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
            'bg-red-200 text-red-800'
          }`}>
            {dept.healthRisk}
          </span>
        </div>
        <div className="text-xs text-gray-600">
          <strong>Key Issues:</strong> {dept.keyIssues.join(', ')}
        </div>
      </div>
    </div>
  );

  const GenderAnalysisCard = ({ gender, data, title, emoji }) => (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-lg">
      <div className="mb-6 text-center">
        <div className="mb-2 text-4xl">{emoji}</div>
        <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
        <div className="mb-2 text-5xl font-bold text-blue-600">{data.participationRate}%</div>
        <div className="text-gray-500">
          {data.total} Employees ({data.percentage}%)
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Excellent Health</span>
            <span>{data.excellentHealth}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full">
            <div 
              className="h-3 bg-green-500 rounded-full" 
              style={{ width: `${data.excellentHealth}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Good Health</span>
            <span>{data.goodHealth}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full">
            <div 
              className="h-3 bg-blue-500 rounded-full" 
              style={{ width: `${data.goodHealth}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1 text-sm">
            <span>Needs Improvement</span>
            <span>{data.needsImprovement}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full">
            <div 
              className="h-3 bg-red-400 rounded-full" 
              style={{ width: `${data.needsImprovement}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className={`mt-6 p-4 rounded-lg ${
        gender === 'female' ? 'bg-green-50' : 'bg-yellow-50'
      }`}>
        <h4 className="mb-2 font-semibold text-gray-800">
          {gender === 'female' ? 'Key Strengths:' : 'Key Concerns:'}
        </h4>
        <ul className="space-y-1 text-sm text-gray-700">
          {(gender === 'female' ? data.keyStrengths : data.keyConcerns).map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const OverviewSection = () => (
    <div className="space-y-8">
      {/* Workforce Demographics Header */}
      <div className="!pb-4 !border-b-2 border-blue-300">
        <h2 className="flex gap-3 items-center text-2xl font-bold text-gray-800">
          <Users className="w-8 h-8 text-blue-600" />
          Workforce Demographics & Participation Analysis
        </h2>
      </div>

      {/* Employee Population Overview */}
      <WorkforceOverview />

      {/* Age-wise Health Distribution */}
      <div className="!p-6 !mb-8 bg-white !rounded-xl border border-gray-200 shadow-lg">
        <div className="flex gap-2 items-center !mb-6">
          <div className="p-2 bg-indigo-500 rounded-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Age-wise Health Distribution</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Age Distribution Chart */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Employee Count by Age Group</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageWiseHealthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="ageGroup" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80}
                  fontSize={12}
                />
                <YAxis />
                <Tooltip formatter={(value, name) => [`${value} employees`, 'Count']} />
                <Bar dataKey="employees" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Age-wise Health Status */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Health Status by Age Group</h4>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={ageWiseHealthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="ageGroup" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80}
                  fontSize={12}
                />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Area 
                  type="monotone" 
                  dataKey="excellentHealth" 
                  stackId="1" 
                  stroke="#10B981" 
                  fill="#10B981" 
                  name="Excellent Health"
                />
                <Area 
                  type="monotone" 
                  dataKey="goodHealth" 
                  stackId="1" 
                  stroke="#3B82F6" 
                  fill="#3B82F6" 
                  name="Good Health"
                />
                <Area 
                  type="monotone" 
                  dataKey="needsImprovement" 
                  stackId="1" 
                  stroke="#EF4444" 
                  fill="#EF4444" 
                  name="Needs Improvement"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Age Group Insights */}
        <div className="p-4 mt-6 bg-indigo-50 rounded-lg border border-indigo-200">
          <h4 className="mb-3 font-semibold text-indigo-800">👥 Key Age Distribution Insights:</h4>
          <div className="grid grid-cols-1 gap-4 text-sm text-indigo-700 md:grid-cols-3">
            <div className="p-3 bg-white rounded border border-indigo-200">
              <strong>Young Workforce (18-40):</strong><br />
              410 employees (63%) show high engagement with wellness programs
            </div>
            <div className="p-3 bg-white rounded border border-indigo-200">
              <strong>Mid-Career (41-50):</strong><br />
              156 employees at higher risk for lifestyle diseases
            </div>
            <div className="p-3 bg-white rounded border border-indigo-200">
              <strong>Senior (51+):</strong><br />
              84 employees (13%) require specialized health management
            </div>
          </div>
        </div>
      </div>

      {/* Gender-wise Health Analysis */}
      <div className="!p-6 !mb-8 bg-white !rounded-xl border border-gray-200 shadow-lg">
        <div className="flex gap-2 items-center !mb-6">
          <div className="p-2 bg-pink-500 rounded-lg">
            <User className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Gender-wise Health Analysis</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Gender Distribution */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Workforce Gender Distribution</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Female', value: genderHealthData.female.total, color: '#EC4899', percentage: genderHealthData.female.percentage },
                    { name: 'Male', value: genderHealthData.male.total, color: '#3B82F6', percentage: genderHealthData.male.percentage }
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#EC4899" />
                  <Cell fill="#3B82F6" />
                </Pie>
                <Tooltip formatter={(value, name) => [`${value} employees`, name]} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <div className="flex gap-6 justify-center">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  <span className="text-sm">Female: {genderHealthData.female.total}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm">Male: {genderHealthData.male.total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gender Health Comparison */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Health Status Comparison</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart 
                data={[
                  {
                    category: 'Excellent Health',
                    Female: genderHealthData.female.excellentHealth,
                    Male: genderHealthData.male.excellentHealth
                  },
                  {
                    category: 'Good Health',
                    Female: genderHealthData.female.goodHealth,
                    Male: genderHealthData.male.goodHealth
                  },
                  {
                    category: 'Needs Improvement',
                    Female: genderHealthData.female.needsImprovement,
                    Male: genderHealthData.male.needsImprovement
                  }
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                <Bar dataKey="Female" fill="#EC4899" name="Female" />
                <Bar dataKey="Male" fill="#3B82F6" name="Male" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gender-specific Insights */}
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
            <h4 className="flex gap-2 items-center mb-3 font-semibold text-pink-800">
              👩 Female Workforce Strengths
            </h4>
            <ul className="space-y-1 text-sm text-pink-700">
              <li>• Higher preventive care compliance: 89%</li>
              <li>• Better sleep quality management: 73%</li>
              <li>• Lower smoking rates: 2%</li>
              <li>• Higher wellness program participation: 95%</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="flex gap-2 items-center mb-3 font-semibold text-blue-800">
              👨 Male Workforce Concerns
            </h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Higher cardiovascular risk: 42%</li>
              <li>• Poor stress management: 34%</li>
              <li>• Irregular health checkups: 28%</li>
              <li>• Lower wellness participation: 91%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Department-wise Health Overview */}
      <div className="!mb-8">
        <div className="flex gap-2 items-center !mb-6">
          <div className="p-2 bg-purple-500 rounded-lg">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Department-wise Health Overview</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {departmentHealthOverview.map((deptData, index) => (
            <DepartmentHealthCard key={index} deptData={deptData} />
          ))}
        </div>

        <div className="!p-4 !mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <h4 className="!mb-3 font-semibold text-purple-800">🎯 Department Priority Matrix:</h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h5 className="mb-2 font-medium text-purple-700">High Priority (Immediate Action):</h5>
              <div className="space-y-1 text-sm text-purple-600">
                <div>• Operations & Production (69% score) - 200 employees need intervention</div>
                <div>• Focus: Hypertension management, shift work optimization</div>
              </div>
            </div>
            <div>
              <h5 className="mb-2 font-medium text-purple-700">Preventive Focus (Maintain Excellence):</h5>
              <div className="space-y-1 text-sm text-purple-600">
                <div>• Technology & Engineering (82% score) - Sustain wellness leadership</div>
                <div>• Focus: Ergonomic improvements, break schedules</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Employee Distribution */}
      <div className="!mb-8">
        <div className="flex gap-2 items-center !mb-6">
          <div className="p-2 bg-orange-500 rounded-lg">
            <Building className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Department-wise Employee Distribution</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {departmentData.map((dept, index) => (
            <DepartmentCard key={index} dept={dept} />
          ))}
        </div>
      </div>
    </div>
  );

  const HealthMetricsSection = () => (
    <div className="space-y-8">
      {/* Critical Risk Indicators */}
      <div className="!p-6 text-white bg-gradient-to-r from-blue-800 to-indigo-900 rounded-xl">
        <div className="flex gap-3 items-center !mb-6">
          <div className="p-2 bg-red-500 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold">Critical Risk Indicators</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="!p-6 bg-black bg-opacity-20 rounded-lg backdrop-blur">
            <h3 className="mb-2 text-lg font-bold text-yellow-300">High Blood Pressure</h3>
            <div className="mb-2 text-4xl font-bold">20%</div>
            <div className="text-gray-200">129 Employees at Risk</div>
          </div>
          
          <div className="!p-6 bg-black bg-opacity-20 rounded-lg backdrop-blur">
            <h3 className="mb-2 text-lg font-bold text-yellow-300">Obesity Risk</h3>
            <div className="mb-2 text-4xl font-bold">56%</div>
            <div className="text-gray-200">364 Employees Affected</div>
          </div>
          
          <div className="!p-6 bg-black bg-opacity-20 rounded-lg backdrop-blur">
            <h3 className="mb-2 text-lg font-bold text-yellow-300">High Cholesterol</h3>
            <div className="mb-2 text-4xl font-bold">14%</div>
            <div className="text-gray-200">91 Employees Need Intervention</div>
          </div>
          
          <div className="!p-6 bg-black bg-opacity-20 rounded-lg backdrop-blur">
            <h3 className="mb-2 text-lg font-bold text-yellow-300">Multiple Conditions</h3>
            <div className="mb-2 text-4xl font-bold">9%</div>
            <div className="text-gray-200">58 Employees with Comorbidities</div>
          </div>
        </div>
      </div>

      {/* Risk Distribution Heat Map */}
      <div className="!mb-8">
        <div className="flex gap-2 items-center !mb-6">
          <div className="p-2 bg-red-500 rounded-lg">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Risk Distribution Heat Map</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 !mb-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex justify-center items-center mx-auto mb-4 w-32 h-32 bg-pink-300 rounded-full">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">20%</div>
                <div className="text-sm text-white">High BP</div>
              </div>
            </div>
            <div className="font-semibold text-gray-800">Critical Risk</div>
            <div className="text-sm text-gray-600">129 Employees</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center mx-auto mb-4 w-32 h-32 bg-yellow-400 rounded-full">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">56%</div>
                <div className="text-sm text-white">Obesity</div>
              </div>
            </div>
            <div className="font-semibold text-gray-800">High Risk</div>
            <div className="text-sm text-gray-600">364 Employees</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center mx-auto mb-4 w-32 h-32 bg-blue-400 rounded-full">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">14%</div>
                <div className="text-sm text-white">Cholesterol</div>
              </div>
            </div>
            <div className="font-semibold text-gray-800">Medium Risk</div>
            <div className="text-sm text-gray-600">91 Employees</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center mx-auto !mb-4 w-32 h-32 bg-green-400 rounded-full">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">9%</div>
                <div className="text-sm text-white">Multiple</div>
              </div>
            </div>
            <div className="font-semibold text-gray-800">Complex Cases</div>
            <div className="text-sm text-gray-600">58 Employees</div>
          </div>
        </div>

        {/* Detailed Risk Analysis Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Cardiovascular Risk - Critical */}
          <div className="!p-6 bg-pink-100 rounded-xl border border-pink-300">
            <div className="flex gap-2 items-center mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
              <div>
                <h3 className="font-bold text-gray-800">Cardiovascular Risk - CRITICAL</h3>
                <span className="px-3 py-1 text-xs font-medium text-white bg-pink-500 rounded-full">HIGH PRIORITY</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">High Blood Pressure Cases</span>
                  <span className="font-bold">20%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-pink-500 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">High Cholesterol Cases</span>
                  <span className="font-bold">14%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-yellow-500 rounded-full" style={{ width: '14%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-3 mt-4 bg-white rounded-lg border border-pink-200">
              <div className="text-sm text-pink-800">
                <strong>Estimated Annual Cost:</strong> ₹180,000 in additional healthcare expenses per affected employee
              </div>
            </div>
          </div>

          {/* Obesity Crisis - Critical */}
          <div className="!p-6 bg-pink-100 rounded-xl border border-pink-300">
            <div className="flex gap-2 items-center mb-4">
              <TrendingUp className="w-6 h-6 text-pink-600" />
              <div>
                <h3 className="font-bold text-gray-800">Obesity Crisis - CRITICAL</h3>
                <span className="px-3 py-1 text-xs font-medium text-white bg-pink-500 rounded-full">HIGH PRIORITY</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Employees at Risk</span>
                  <span className="font-bold">56%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-yellow-500 rounded-full" style={{ width: '56%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-3 mt-4 bg-white rounded-lg border border-pink-200">
              <div className="text-sm text-pink-800">
                <strong>Impact:</strong> 2x higher healthcare costs, reduced productivity, increased absenteeism
              </div>
            </div>
          </div>

          {/* Mental Health & Stress */}
          <div className="!p-6 bg-yellow-100 rounded-xl border border-yellow-300">
            <div className="flex gap-2 items-center mb-4">
              <Brain className="w-6 h-6 text-yellow-600" />
              <div>
                <h3 className="font-bold text-gray-800">Mental Health & Stress</h3>
                <span className="px-3 py-1 text-xs font-medium text-white bg-yellow-500 rounded-full">MEDIUM PRIORITY</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Ready for Stress Management</span>
                  <span className="font-bold">69%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="h-3 bg-yellow-500 rounded-full" style={{ width: '69%' }}></div>
                </div>
              </div>
            </div>

            <div className="p-3 mt-4 bg-white rounded-lg border border-yellow-200">
              <div className="text-sm text-yellow-800">
                <strong>Opportunity:</strong> High employee readiness for stress reduction programs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Age-wise Health Breakdown */}
      <div className="!p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
        <h3 className="flex gap-2 items-center !mb-6 text-xl font-bold text-gray-800">
          <Users className="w-6 h-6 text-indigo-600" />
          Age-wise Health Risk Analysis
        </h3>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="mb-3 text-center">
              <div className="text-lg font-bold">18-30 years</div>
              <div className="text-2xl font-bold text-green-600">182</div>
              <div className="text-sm text-gray-600">employees</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>High BP Risk:</span>
                  <span className="font-bold">8%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-green-500 rounded-full" style={{ width: '8%' }}></div>
                </div>
              </div>
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>Obesity Risk:</span>
                  <span className="font-bold">32%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-yellow-500 rounded-full" style={{ width: '32%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="mb-3 text-center">
              <div className="text-lg font-bold">31-40 years</div>
              <div className="text-2xl font-bold text-blue-600">228</div>
              <div className="text-sm text-gray-600">employees</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>High BP Risk:</span>
                  <span className="font-bold">15%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-blue-500 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>Obesity Risk:</span>
                  <span className="font-bold">48%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-yellow-500 rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="mb-3 text-center">
              <div className="text-lg font-bold">41-50 years</div>
              <div className="text-2xl font-bold text-yellow-600">156</div>
              <div className="text-sm text-gray-600">employees</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>High BP Risk:</span>
                  <span className="font-bold">28%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-yellow-500 rounded-full" style={{ width: '28%' }}></div>
                </div>
              </div>
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>Obesity Risk:</span>
                  <span className="font-bold">64%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-red-500 rounded-full" style={{ width: '64%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="mb-3 text-center">
              <div className="text-lg font-bold">51-60 years</div>
              <div className="text-2xl font-bold text-orange-600">71</div>
              <div className="text-sm text-gray-600">employees</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>High BP Risk:</span>
                  <span className="font-bold">42%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-orange-500 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>Obesity Risk:</span>
                  <span className="font-bold">73%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-red-500 rounded-full" style={{ width: '73%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="mb-3 text-center">
              <div className="text-lg font-bold">60+ years</div>
              <div className="text-2xl font-bold text-red-600">13</div>
              <div className="text-sm text-gray-600">employees</div>
            </div>
            <div className="space-y-2">
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>High BP Risk:</span>
                  <span className="font-bold">69%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-red-500 rounded-full" style={{ width: '69%' }}></div>
                </div>
              </div>
              <div className="text-xs">
                <div className="flex justify-between">
                  <span>Multiple Conditions:</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div className="h-1 bg-red-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gender-wise Health Risk Comparison */}
      <div className="!p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
        <h3 className="flex gap-2 items-center !mb-6 text-xl font-bold text-gray-800">
          <User className="w-6 h-6 text-pink-600" />
          Gender-wise Health Risk Comparison
        </h3>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="!p-6 bg-pink-50 rounded-lg border border-pink-200">
            <div className="mb-4 text-center">
              <div className="mb-2 text-4xl">👩</div>
              <h4 className="text-xl font-bold text-gray-800">Female Employees</h4>
              <div className="text-sm text-gray-600">267 employees (41%)</div>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-white rounded border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Cardiovascular Risk</span>
                  <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">LOW</span>
                </div>
                <div className="text-xs text-gray-600">
                  High BP: 12% | High Cholesterol: 8%
                </div>
              </div>

              <div className="p-3 bg-white rounded border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Metabolic Health</span>
                  <span className="px-2 py-1 text-xs text-yellow-800 bg-yellow-100 rounded-full">MEDIUM</span>
                </div>
                <div className="text-xs text-gray-600">
                  Obesity Risk: 45% | Diabetes Risk: 18%
                </div>
              </div>

              <div className="p-3 bg-white rounded border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Mental Health</span>
                  <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">LOW</span>
                </div>
                <div className="text-xs text-gray-600">
                  High Stress: 22% | Sleep Issues: 15%
                </div>
              </div>
            </div>
          </div>

          <div className="!p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="!mb-4 text-center">
              <div className="!mb-2 text-4xl">👨</div>
              <h4 className="text-xl font-bold text-gray-800">Male Employees</h4>
              <div className="text-sm text-gray-600">377 employees (58%)</div>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-white rounded border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Cardiovascular Risk</span>
                  <span className="px-2 py-1 text-xs text-red-800 bg-red-100 rounded-full">HIGH</span>
                </div>
                <div className="text-xs text-gray-600">
                  High BP: 26% | High Cholesterol: 18%
                </div>
              </div>

              <div className="p-3 bg-white rounded border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Metabolic Health</span>
                  <span className="px-2 py-1 text-xs text-red-800 bg-red-100 rounded-full">HIGH</span>
                </div>
                <div className="text-xs text-gray-600">
                  Obesity Risk: 64% | Diabetes Risk: 42%
                </div>
              </div>

              <div className="p-3 bg-white rounded border">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Mental Health</span>
                  <span className="px-2 py-1 text-xs text-yellow-800 bg-yellow-100 rounded-full">MEDIUM</span>
                </div>
                <div className="text-xs text-gray-600">
                  High Stress: 31% | Sleep Issues: 24%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department-wise Risk Analysis */}
      <div className="!p-6 bg-white !rounded-xl border border-gray-200 shadow-lg">
        <h3 className="flex gap-2 items-center !mb-6 text-xl font-bold text-gray-800">
          <Building className="w-6 h-6 text-purple-600" />
          Department-wise Risk Analysis
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="mb-3 font-bold text-red-800">🚨 High Risk Departments</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white rounded border border-red-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Operations & Production</span>
                  <span className="px-2 py-1 text-xs text-white bg-red-500 rounded">CRITICAL</span>
                </div>
                <div className="text-sm text-gray-600">
                  High BP: 35% | Obesity: 72% | Stress: 58%
                </div>
              </div>
              
              <div className="p-3 bg-white rounded border border-orange-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Sales & Marketing</span>
                  <span className="px-2 py-1 text-xs text-white bg-orange-500 rounded">HIGH</span>
                </div>
                <div className="text-sm text-gray-600">
                  High BP: 28% | Stress: 67% | Sleep Issues: 42%
                </div>
              </div>
            </div>
          </div>

          <div className="!p-4 bg-green-50 !rounded-lg border border-green-200">
            <h4 className="!mb-3 font-bold text-green-800">✅ Lower Risk Departments</h4>
            <div className="space-y-3">
              <div className="!p-3 bg-white rounded border border-green-200">
                <div className="flex justify-between items-center !mb-2">
                  <span className="font-medium">Technology & Engineering</span>
                  <span className="!px-2 !py-1 text-xs text-white bg-green-500 rounded">LOW</span>
                </div>
                <div className="text-sm text-gray-600">
                  High BP: 12% | Obesity: 38% | Good Preventive Care
                </div>
              </div>
              
              <div className="!p-3 bg-white rounded border border-blue-200">
                <div className="flex justify-between items-center !mb-2">
                  <span className="font-medium">Administration & Finance</span>
                  <span className="!px-2 !py-1 text-xs text-white bg-blue-500 rounded">MEDIUM</span>
                </div>
                <div className="text-sm text-gray-600">
                  High BP: 18% | Obesity: 45% | Regular Checkups
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const navigationButtons = [
    { key: 'overview', label: 'Demographics & Overview', icon: Users },
    { key: 'health', label: 'Health Metrics', icon: Activity },
    { key: 'clinical', label: 'Clinical Support & Actions', icon: Shield }
  ];

  const ClinicalSupportSection = () => (
    <div className="space-y-8">
      {/* Clinical Support Header */}
      <div className="pb-4 border-b-2 border-blue-300">
        <h2 className="flex gap-3 items-center text-2xl font-bold text-gray-800">
          <Shield className="w-8 h-8 text-blue-600" />
          Clinical Support & Health Services
        </h2>
      </div>

      {/* High-Risk Employee Alert */}
      <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
        <div className="flex gap-2 items-center">
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          <span className="font-bold text-yellow-800">High-Risk Employee Alert:</span>
          <span className="text-yellow-700">
            20% with high blood pressure + 14% with high cholesterol = 61% requiring immediate clinical intervention and monitoring.
          </span>
        </div>
      </div>

      {/* On-Site Health Services */}
      <div className="!mb-8">
        <div className="flex gap-2 items-center !mb-6">
          <div className="p-2 bg-orange-500 rounded-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">On-Site Health Services</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Biometric Screening Station */}
          <div className="!p-6 bg-pink-100 rounded-xl border border-pink-300">
            <div className="flex gap-2 items-center mb-4">
              <Activity className="w-6 h-6 text-pink-600" />
              <div>
                <h4 className="font-bold text-gray-800">Biometric Screening Station</h4>
                <span className="px-3 py-1 text-xs font-medium text-white bg-pink-500 rounded-full">IMMEDIATE SETUP</span>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="mb-2 font-medium text-gray-700">Monthly Screening Services:</h5>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Blood pressure monitoring (129 employees priority)</li>
                <li>• BMI and body composition (364 employees at risk)</li>
                <li>• Cholesterol testing (91 employees need intervention)</li>
                <li>• Blood glucose screening (208 employees prediabetic)</li>
                <li>• Waist circumference measurement</li>
                <li>• Heart rate and fitness assessments</li>
              </ul>
            </div>

            <div className="p-3 bg-white rounded border border-pink-200">
              <h6 className="mb-1 font-medium text-pink-800">Staffing Requirements:</h6>
              <div className="text-xs text-pink-700">
                2 nurses, 1 technician, 1 coordinator
              </div>
            </div>
          </div>

          {/* Health Coaching Services */}
          <div className="!p-6 bg-purple-100 rounded-xl border border-purple-300">
            <div className="flex gap-2 items-center mb-4">
              <Brain className="w-6 h-6 text-purple-600" />
              <div>
                <h4 className="font-bold text-gray-800">Health Coaching Services</h4>
                <span className="px-3 py-1 text-xs font-medium text-white bg-purple-500 rounded-full">PERSONALIZED CARE</span>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="mb-2 font-medium text-gray-700">High-Risk Employee Protocol:</h5>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Individual health assessments (52 critical cases)</li>
                <li>• Personalized action plans</li>
                <li>• Monthly check-in appointments</li>
                <li>• Medication compliance support</li>
                <li>• Lifestyle modification coaching</li>
                <li>• Provider coordination assistance</li>
              </ul>
            </div>

            <div className="p-3 bg-white rounded border border-purple-200">
              <h6 className="mb-1 font-medium text-purple-800">Service Levels:</h6>
              <div className="text-xs text-purple-700">
                Intensive: 52 employees | Standard: 200 employees
              </div>
            </div>
          </div>

          {/* Chronic Disease Management */}
          <div className="!p-6 bg-yellow-100 rounded-xl border border-yellow-300">
            <div className="flex gap-2 items-center mb-4">
              <Heart className="w-6 h-6 text-yellow-600" />
              <div>
                <h4 className="font-bold text-gray-800">Chronic Disease Management</h4>
                <span className="px-3 py-1 text-xs font-medium text-white bg-yellow-500 rounded-full">ONGOING SUPPORT</span>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="mb-2 font-medium text-gray-700">Disease-Specific Programs:</h5>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Diabetes management (52 employees affected)</li>
                <li>• Hypertension control (129 employees affected)</li>
                <li>• Cholesterol management (91 employees affected)</li>
                <li>• Obesity management (364 employees affected)</li>
                <li>• Stress management (449 employees affected)</li>
              </ul>
            </div>

            <div className="p-3 bg-white rounded border border-yellow-200">
              <h6 className="mb-1 font-medium text-yellow-800">Support Services:</h6>
              <div className="text-xs text-yellow-700">
                Care coordination, medication management, lifestyle coaching
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preventive Care Enhancement */}
      <div className="!p-6 text-white bg-gradient-to-r from-green-400 to-green-500 rounded-xl">
        <div className="flex gap-2 items-center !mb-6">
          <CheckCircle className="w-6 h-6 text-white" />
          <h3 className="text-xl font-bold">Preventive Care Enhancement</h3>
        </div>

        <div className="mb-6">
          <p className="text-lg font-medium">Strategic interventions to improve from 41% to 85% preventive care completion</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Automated Screening Reminders */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur">
            <div className="flex gap-2 items-center mb-3">
              <Calendar className="w-5 h-5 text-yellow-200" />
              <h4 className="font-bold text-yellow-200">AUTOMATED SCREENING REMINDERS</h4>
            </div>
            
            <div className="mb-3">
              <h5 className="mb-2 font-medium">Smart Notification System:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Personalized reminder schedules</li>
                <li>• Integration with employee calendars</li>
                <li>• Pre-scheduled appointment booking</li>
                <li>• Provider network connections</li>
                <li>• Insurance coverage verification</li>
              </ul>
            </div>
            
            <div className="text-sm font-medium">
              Goal: 85% completion rate by year-end
            </div>
          </div>

          {/* On-Site Screening Events */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur">
            <div className="flex gap-2 items-center mb-3">
              <Building className="w-5 h-5 text-yellow-200" />
              <h4 className="font-bold text-yellow-200">ON-SITE SCREENING EVENTS</h4>
            </div>
            
            <div className="mb-3">
              <h5 className="mb-2 font-medium">Quarterly Health Fairs:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Comprehensive biometric screenings</li>
                <li>• Flu vaccination clinics</li>
                <li>• Cancer screening education</li>
                <li>• Vision and hearing tests</li>
                <li>• Skin cancer screenings</li>
              </ul>
            </div>
            
            <div className="text-sm font-medium">
              Convenience: During work hours, no cost
            </div>
          </div>

          {/* Provider Partnerships */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur">
            <div className="flex gap-2 items-center mb-3">
              <Users className="w-5 h-5 text-yellow-200" />
              <h4 className="font-bold text-yellow-200">PROVIDER PARTNERSHIPS</h4>
            </div>
            
            <div className="mb-3">
              <h5 className="mb-2 font-medium">Healthcare Network:</h5>
              <ul className="space-y-1 text-sm">
                <li>• Preferred provider agreements</li>
                <li>• Discounted wellness services</li>
                <li>• Streamlined referral processes</li>
                <li>• Coordinated care management</li>
                <li>• Telehealth service access</li>
              </ul>
            </div>
            
            <div className="text-sm font-medium">
              Benefit: Reduced costs, improved access
            </div>
          </div>

          {/* Health Risk Stratification */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur">
            <div className="flex gap-2 items-center mb-3">
              <TrendingUp className="w-5 h-5 text-yellow-200" />
              <h4 className="font-bold text-yellow-200">HEALTH RISK STRATIFICATION</h4>
            </div>
            
            <div className="mb-3">
              <h5 className="mb-2 font-medium">Targeted Interventions:</h5>
              <ul className="space-y-1 text-sm">
                <li>• High-risk employee identification</li>
                <li>• Personalized care protocols</li>
                <li>• Intensive case management</li>
                <li>• Regular progress monitoring</li>
                <li>• Outcome tracking and adjustment</li>
              </ul>
            </div>
            
            <div className="text-sm font-medium">
              Focus: 61% requiring immediate attention
            </div>
          </div>
        </div>
      </div>

      {/* Workplace Environment Interventions */}
      <div className="!p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
        <div className="flex gap-2 items-center !mb-6">
          <Building className="w-6 h-6 text-red-600" />
          <h3 className="text-xl font-bold text-gray-800">Mandatory Workplace Environment Interventions</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Canteen Assessment & Food Safety */}
          <div className="!p-6 bg-red-50 rounded-lg border border-red-200">
            <div className="flex gap-2 items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h4 className="font-bold text-red-800">Canteen Assessment & Food Safety</h4>
            </div>
            
            <div className="mb-4">
              <div className="mb-3 text-sm text-red-700">
                <strong>Critical Finding:</strong> 91 employees (14%) with high cholesterol + 364 employees (56%) obesity risk
              </div>
              
              <h5 className="mb-2 font-medium text-red-700">Immediate Actions Required:</h5>
              <ul className="space-y-1 text-sm text-red-600">
                <li>• Comprehensive food safety audit</li>
                <li>• Nutritional analysis of all menu items</li>
                <li>• Oil quality and cooking method assessment</li>
                <li>• Portion size standardization</li>
                <li>• Healthy option expansion (target: 60% healthy choices)</li>
                <li>• Vendor compliance verification</li>
                <li>• Staff hygiene training certification</li>
              </ul>
            </div>

            <div className="p-3 bg-white rounded border border-red-200">
              <div className="text-xs text-red-700">
                <strong>Timeline:</strong> Complete assessment within 30 days<br/>
                <strong>Investment:</strong> ₹2.5L for comprehensive audit<br/>
                <strong>Expected Outcome:</strong> 25% reduction in cholesterol cases
              </div>
            </div>
          </div>

          {/* Bathroom Hygiene Enhancement */}
          <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex gap-2 items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <h4 className="font-bold text-orange-800">Bathroom Hygiene Enhancement</h4>
            </div>
            
            <div className="mb-4">
              <div className="mb-3 text-sm text-orange-700">
                <strong>Health Alert:</strong> 23 employees with UTI/kidney function issues detected
              </div>
              
              <h5 className="mb-2 font-medium text-orange-700">Enhancement Protocol:</h5>
              <ul className="space-y-1 text-sm text-orange-600">
                <li>• Deep sanitization of all facilities</li>
                <li>• Installation of touchless fixtures</li>
                <li>• Medical-grade disinfectant systems</li>
                <li>• Hourly cleaning schedules</li>
                <li>• Air purification systems</li>
                <li>• Hygiene education campaigns</li>
                <li>• Water quality testing and filtration</li>
              </ul>
            </div>

            <div className="p-3 bg-white rounded border border-orange-200">
              <div className="text-xs text-orange-700">
                <strong>Timeline:</strong> Implementation within 14 days<br/>
                <strong>Investment:</strong> ₹1.8L for facility upgrades<br/>
                <strong>Expected Outcome:</strong> 80% reduction in UTI cases
              </div>
            </div>
          </div>

          {/* Air Quality & HVAC Assessment */}
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex gap-2 items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
              <h4 className="font-bold text-blue-800">Air Quality & HVAC Assessment</h4>
            </div>
            
            <div className="mb-4">
              <div className="mb-3 text-sm text-blue-700">
                <strong>Respiratory Alert:</strong> 89 employees with breathing issues/allergies
              </div>
              
              <h5 className="mb-2 font-medium text-blue-700">Air Quality Optimization:</h5>
              <ul className="space-y-1 text-sm text-blue-600">
                <li>• Professional HVAC system inspection</li>
                <li>• Air quality testing (PM2.5, allergens, mold)</li>
                <li>• Filter replacement with HEPA systems</li>
                <li>• Duct cleaning and sanitization</li>
                <li>• Indoor plant installations</li>
                <li>• Humidity control optimization</li>
                <li>• Air purifier installation in high-density areas</li>
              </ul>
            </div>

            <div className="p-3 bg-white rounded border border-blue-200">
              <div className="text-xs text-blue-700">
                <strong>Timeline:</strong> Assessment within 21 days<br/>
                <strong>Investment:</strong> ₹3.2L for air quality improvements<br/>
                <strong>Expected Outcome:</strong> 60% reduction in respiratory issues
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Timeline & Budget */}
      <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg">
        <div className="flex gap-2 items-center !mb-6">
          <Calendar className="w-6 h-6 text-purple-600" />
          <h3 className="text-xl font-bold text-gray-800">Implementation Timeline & Budget Summary</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="!p-4 bg-red-50 !rounded-lg border border-red-200">
            <h4 className="!mb-3 font-bold text-red-800">🚨 Immediate (0-30 days)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Canteen Assessment:</span>
                <span className="font-medium">₹2.5L</span>
              </div>
              <div className="flex justify-between">
                <span>Bathroom Upgrades:</span>
                <span className="font-medium">₹1.8L</span>
              </div>
              <div className="flex justify-between">
                <span>Air Quality Testing:</span>
                <span className="font-medium">₹3.2L</span>
              </div>
              <div className="flex justify-between !pt-2 border-t">
                <span className="font-bold">Total:</span>
                <span className="font-bold">₹7.5L</span>
              </div>
            </div>
          </div>

          <div className="!p-4 bg-yellow-50 !rounded-lg border border-yellow-200">
            <h4 className="!mb-3 font-bold text-yellow-800">⚠️ Short-term (1-6 months)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Biometric Station Setup:</span>
                <span className="font-medium">₹4.5L</span>
              </div>
              <div className="flex justify-between">
                <span>Health Coaching Program:</span>
                <span className="font-medium">₹6.8L</span>
              </div>
              <div className="flex justify-between">
                <span>Disease Management:</span>
                <span className="font-medium">₹5.2L</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="font-bold">Total:</span>
                <span className="font-bold">₹16.5L</span>
              </div>
            </div>
          </div>

          <div className="!p-4 bg-green-50 !rounded-lg border border-green-200">
            <h4 className="!mb-3 font-bold text-green-800">✅ Expected Outcomes (12 months)</h4>
            <div className="space-y-2 text-sm">
              <div>• 80% reduction in UTI cases</div>
              <div>• 60% reduction in respiratory issues</div>
              <div>• 25% reduction in cholesterol cases</div>
              <div>• 85% preventive care completion</div>
              <div>• ₹45L+ in healthcare cost savings</div>
              <div className="!pt-2 !border-t">
                <span className="font-bold text-green-700">ROI: 188% in first year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'overview': return <OverviewSection />;
      case 'health': return <HealthMetricsSection />;
      case 'clinical': return <ClinicalSupportSection />;
      default: return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Main Container with Blue Border */}
      <div className="min-h-screen">
        <div className="!p-6">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="!p-8 !mb-8 text-center bg-white rounded-xl border border-gray-200 shadow-lg">
              <div className="flex gap-4 justify-center items-center mb-4">
                <Activity className="w-12 h-12 text-blue-600" />
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">Motilal Oswal Financial Services</h1>
                  <h2 className="text-xl text-gray-600">Corporate Health Analytics Dashboard</h2>
                </div>
              </div>
              <div className="flex gap-8 justify-center items-center mt-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Report Period</div>
                  <div className="font-semibold text-gray-700">June 2025</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Powered by</div>
                  <div className="font-semibold text-gray-700">Raphacure Healthcare</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Total Workforce</div>
                  <div className="font-semibold text-gray-700">650 Employees</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap gap-4 justify-center !mb-8">
              {navigationButtons.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center gap-2 !px-6 !py-3 !rounded-lg font-medium transition-all duration-300 ${
                    activeSection === key
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </button>
              ))}
            </div>

            {/* Content */}
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthDashboard