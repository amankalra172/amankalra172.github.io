import React, { useState, useMemo, useEffect } from 'react';
import { ComparisonResult } from '../components/ComparisonResult';
import { CostChart } from '../components/CostChart';
import { calculateDremioCost } from '../utils/calculator';
import type { DremioInputs } from '../utils/calculator';
import type { Provider, DremioPricing } from '../data/pricing';
import { Database, Info, Zap, TrendingDown, Sparkles, Boxes } from 'lucide-react';

interface DremioPageProps {
    selectedCompetitor: Provider;
    pricing: DremioPricing[];
}

interface Preset {
    name: string;
    icon: React.ReactNode;
    description: string;
    config: Partial<DremioInputs>;
}

const PRESETS: Preset[] = [
    {
        name: 'Small Analytics',
        icon: <Sparkles className="w-4 h-4" />,
        description: 'Exploratory analytics and dev',
        config: { units: 5, storageGB: 100, hoursPerMonth: 160 }
    },
    {
        name: 'Production Data Lake',
        icon: <Zap className="w-4 h-4" />,
        description: 'Standard production queries',
        config: { units: 20, storageGB: 1000, hoursPerMonth: 730 }
    },
    {
        name: 'Enterprise Scale',
        icon: <Boxes className="w-4 h-4" />,
        description: 'Large-scale data lakehouse',
        config: { units: 50, storageGB: 10000, hoursPerMonth: 730 }
    },
];

export const DremioPage: React.FC<DremioPageProps> = ({ selectedCompetitor, pricing }) => {
    const [inputs, setInputs] = useState<DremioInputs>(() => {
        const saved = localStorage.getItem('dremioInputs');
        return saved ? JSON.parse(saved) : {
            units: 10,
            storageGB: 500,
            hoursPerMonth: 730,
        };
    });

    const results = useMemo(() => {
        const filteredPricing = pricing.filter(
            model => model.provider === 'STACKIT' || model.provider === selectedCompetitor
        );
        return filteredPricing.map(model => calculateDremioCost(inputs, model));
    }, [inputs, selectedCompetitor, pricing]);

    useEffect(() => {
        localStorage.setItem('dremioInputs', JSON.stringify(inputs));
    }, [inputs]);

    const handleChange = (name: string, value: number) => {
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const applyPreset = (preset: Preset) => {
        setInputs(prev => ({
            ...prev,
            ...preset.config
        }));
    };

    // Calculate savings
    const stackitCost = parseFloat(results.find(r => r.provider === 'STACKIT')?.monthlyCost || '0');
    const competitorCost = parseFloat(results.find(r => r.provider === selectedCompetitor)?.monthlyCost || '0');
    const savings = competitorCost - stackitCost;
    const savingsPercent = competitorCost > 0 ? ((savings / competitorCost) * 100).toFixed(1) : 0;

    // State for showing calculation breakdown
    const [showCalculations, setShowCalculations] = useState(false);

    // Get pricing models for calculation display
    const stackitPricing = pricing.find(p => p.provider === 'STACKIT');
    const competitorPricing = pricing.find(p => p.provider === selectedCompetitor);

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                        <Database className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Data Lakehouse
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Unified data analytics and lakehouse platform
                        </p>
                    </div>
                </div>

                {/* Service Description */}
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    STACKIT Data Lakehouse provides a unified platform for data warehousing, data lakes, and analytics.
                    This solution provides an alternative to major hyperscaler offerings, including BigQuery,
                    Amazon Athena, Azure Synapse Analytics, and Databricks SQL.
                </p>
            </div>

            {/* Savings Banner */}
            {savings > 0 && (
                <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-500 rounded-full">
                                <TrendingDown className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-green-900 dark:text-green-100">
                                    Save €{savings.toFixed(2)}/month with STACKIT
                                </h3>
                                <p className="text-sm text-green-700 dark:text-green-300">
                                    That's {savingsPercent}% less than {selectedCompetitor} • €{(savings * 12).toFixed(2)}/year in savings
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                                {savingsPercent}%
                            </div>
                            <div className="text-xs text-green-600 dark:text-green-400">cheaper</div>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Configuration */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Quick Presets */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            Quick Presets
                        </h3>
                        <div className="space-y-2">
                            {PRESETS.map((preset) => (
                                <button
                                    key={preset.name}
                                    onClick={() => applyPreset(preset)}
                                    className="w-full p-3 text-left rounded-lg border border-gray-200 dark:border-gray-700 hover:border-stackit-primary dark:hover:border-stackit-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group"
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-stackit-primary dark:text-stackit-300 group-hover:scale-110 transition-transform">
                                            {preset.icon}
                                        </span>
                                        <span className="font-semibold text-sm text-gray-900 dark:text-white">
                                            {preset.name}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 ml-6">
                                        {preset.description}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Configuration Sliders */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                            Configuration
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                            Adjust parameters to match your workload
                        </p>

                        {/* Info Box about DCUs */}
                        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="flex items-start gap-2">
                                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-blue-800 dark:text-blue-300">
                                    <strong className="block mb-1">Dremio Compute Units (DCUs)</strong>
                                    Each DCU represents a unit of query processing power for your data lakehouse
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Compute Units (DCUs) */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Compute Units (DCUs)
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.units}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="units"
                                    value={inputs.units}
                                    onChange={(e) => handleChange('units', parseInt(e.target.value))}
                                    min="1"
                                    max="50"
                                    step="1"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>1 DCU</span>
                                    <span>50 DCUs</span>
                                </div>
                            </div>

                            {/* Storage */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Storage (GB)
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.storageGB >= 1000 ? `${(inputs.storageGB / 1000).toFixed(1)} TB` : `${inputs.storageGB} GB`}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="storageGB"
                                    value={inputs.storageGB}
                                    onChange={(e) => handleChange('storageGB', parseInt(e.target.value))}
                                    min="0"
                                    max="50000"
                                    step="500"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>0 GB</span>
                                    <span>50 TB</span>
                                </div>
                            </div>

                            {/* Hours per Month */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Hours per Month
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.hoursPerMonth}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="hoursPerMonth"
                                    value={inputs.hoursPerMonth}
                                    onChange={(e) => handleChange('hoursPerMonth', parseInt(e.target.value))}
                                    min="0"
                                    max="730"
                                    step="10"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>0h</span>
                                    <span>730h (24/7)</span>
                                </div>
                                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                                    {inputs.hoursPerMonth === 730 ? '24/7 operation' :
                                        inputs.hoursPerMonth >= 160 ? 'Business hours usage' : 'Occasional usage'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Results */}
                <div className="lg:col-span-2 space-y-8">
                    <ComparisonResult results={results} />
                    {/* Cost Breakdown Charts */}
                    <div className="mt-8">
                        <CostChart results={results} />
                    </div>

                    {/* Cost Calculation Breakdown */}
                    <div className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                        <button
                            onClick={() => setShowCalculations(!showCalculations)}
                            className="w-full flex items-center justify-between text-left group"
                        >
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                <Info className="w-5 h-5 text-blue-500" />
                                Cost Calculation Breakdown
                            </h3>
                            <div className={`transform transition-transform ${showCalculations ? 'rotate-180' : ''}`}>
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        {showCalculations && (
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* STACKIT Breakdown */}
                                {stackitPricing && (
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-stackit-primary dark:text-stackit-300 text-lg border-b border-gray-200 dark:border-gray-700 pb-2">
                                            STACKIT Dremio ({stackitPricing.edition})
                                        </h4>

                                        <div className="space-y-3 text-sm">
                                            {/* DCU Cost */}
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <div className="font-medium text-gray-900 dark:text-white mb-1">Dremio Compute Units (DCU)</div>
                                                <div className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                                                    <div>• €{stackitPricing.compute.dcuPerHour.toFixed(4)}/DCU/hour</div>
                                                    <div>• {inputs.units} DCU × {inputs.hoursPerMonth} hours/month</div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        = €{(stackitPricing.compute.dcuPerHour * inputs.units * inputs.hoursPerMonth).toFixed(2)}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Storage Cost */}
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <div className="font-medium text-gray-900 dark:text-white mb-1">Storage</div>
                                                <div className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                                                    <div>• €{stackitPricing.storage.gbPerMonth.toFixed(3)}/GB/month</div>
                                                    <div>• {inputs.storageGB} GB storage</div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        = €{(stackitPricing.storage.gbPerMonth * inputs.storageGB).toFixed(2)}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="h-px bg-stackit-primary/30 my-3"></div>
                                            <div className="flex justify-between text-lg font-bold">
                                                <span className="text-gray-900 dark:text-white">Total Monthly Cost:</span>
                                                <span className="text-stackit-primary dark:text-stackit-300">€{stackitCost.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Competitor Breakdown */}
                                {competitorPricing && (
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-orange-600 dark:text-orange-400 text-lg border-b border-gray-200 dark:border-gray-700 pb-2">
                                            {selectedCompetitor} Dremio ({competitorPricing.edition})
                                        </h4>

                                        <div className="space-y-3 text-sm">
                                            {/* DCU Cost */}
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <div className="font-medium text-gray-900 dark:text-white mb-1">Dremio Compute Units (DCU)</div>
                                                <div className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                                                    <div>• €{competitorPricing.compute.dcuPerHour.toFixed(4)}/DCU/hour</div>
                                                    <div>• {inputs.units} DCU × {inputs.hoursPerMonth} hours/month</div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        = €{(competitorPricing.compute.dcuPerHour * inputs.units * inputs.hoursPerMonth).toFixed(2)}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Storage Cost */}
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <div className="font-medium text-gray-900 dark:text-white mb-1">Storage</div>
                                                <div className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                                                    <div>• €{competitorPricing.storage.gbPerMonth.toFixed(3)}/GB/month</div>
                                                    <div>• {inputs.storageGB} GB storage</div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        = €{(competitorPricing.storage.gbPerMonth * inputs.storageGB).toFixed(2)}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="h-px bg-gray-300 dark:bg-gray-600 my-3"></div>
                                            <div className="flex justify-between text-lg font-bold">
                                                <span className="text-gray-900 dark:text-white">Total Monthly Cost:</span>
                                                <span className="text-gray-900 dark:text-white">€{competitorCost.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
