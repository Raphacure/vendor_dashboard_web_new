import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  category: string;
  cost: number;
  timeSaved: number;
}

interface CostTimeComparisonChartProps {
  data?: ChartData[];
  title?: string;
  costLabel?: string;
  timeLabel?: string;
  height?: number;
  colors?: {
    cost: string;
    timeSaved: string;
  };
}

const CostTimeComparisonChart: React.FC<CostTimeComparisonChartProps> = ({
  data = [],
  title = "Cost & Time Comparison",
  costLabel = "Cost (₹)",
  timeLabel = "Time Saved (hours)",
  height = 400,
  colors = {
    cost: '#3B82F6',
    timeSaved: '#10B981'
  }
}) => {
  
  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-medium text-gray-800">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.dataKey === 'cost' ? `${costLabel}: ₹${entry.value}` : `${timeLabel}: ${entry.value}h`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white !p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{title}</h2>
      
      <div className="mb-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded" 
            style={{ backgroundColor: colors.cost }}
          ></div>
          <span className="text-sm text-gray-600">{costLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded" 
            style={{ backgroundColor: colors.timeSaved }}
          ></div>
          <span className="text-sm text-gray-600">{timeLabel}</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap="30%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="category" 
            tick={{ fontSize: 12, fill: '#666' }}
            axisLine={{ stroke: '#e0e0e0' }}
          />
          <YAxis 
            yAxisId="cost"
            orientation="left"
            tick={{ fontSize: 12, fill: '#666' }}
            axisLine={{ stroke: '#e0e0e0' }}
            domain={[0, 'dataMax']}
            tickFormatter={(value) => `₹${value}`}
          />
          <YAxis 
            yAxisId="time"
            orientation="right"
            tick={{ fontSize: 12, fill: '#666' }}
            axisLine={{ stroke: '#e0e0e0' }}
            domain={[0, 'dataMax']}
            tickFormatter={(value) => `${value}h`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            yAxisId="cost"
            dataKey="cost" 
            fill={colors.cost}
            radius={[4, 4, 0, 0]}
            maxBarSize={80}
          />
          <Bar 
            yAxisId="time"
            dataKey="timeSaved" 
            fill={colors.timeSaved}
            radius={[4, 4, 0, 0]}
            maxBarSize={80}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CostTimeComparisonChart;