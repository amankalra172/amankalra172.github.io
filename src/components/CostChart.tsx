import React from 'react';
import type { CostResult } from '../utils/calculator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CostChartProps {
    results: CostResult[];
}

export const CostChart: React.FC<CostChartProps> = ({ results }) => {
    const data = results.map(r => ({
        name: r.provider,
        Compute: parseFloat(r.breakdown.compute || '0'),
        Storage: parseFloat(r.breakdown.storage || '0'),
        Transfer: parseFloat(r.breakdown.transfer || '0'),
    }));

    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 h-[400px] transition-colors duration-300">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Cost Breakdown</h3>
            <ResponsiveContainer width="100%" height="85%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 20, bottom: 30, left: 10 }}
                    barSize={120}
                    barGap={10}
                >
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis
                        dataKey="name"
                        className="text-sm text-gray-600 dark:text-gray-400"
                        tick={{ fill: 'currentColor' }}
                    />
                    <YAxis
                        className="text-sm text-gray-600 dark:text-gray-400"
                        tickFormatter={(value) => `€${value}`}
                        tick={{ fill: 'currentColor' }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                        }}
                        formatter={(value: number) => [`€${value.toFixed(2)}`, '']}
                    />
                    <Bar dataKey="Compute" stackId="a" fill="#0f766e" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="Storage" stackId="a" fill="#84cc16" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="Transfer" stackId="a" fill="#6b7280" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            {/* Custom legend for better dark mode readability */}
            <div className="flex justify-center gap-6 mt-4 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-teal-700"></div>
                    <span className="text-gray-600 dark:text-gray-300">Compute</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-lime-500"></div>
                    <span className="text-gray-600 dark:text-gray-300">Storage</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-500"></div>
                    <span className="text-gray-600 dark:text-gray-300">Transfer</span>
                </div>
            </div>
        </div>
    );
};
