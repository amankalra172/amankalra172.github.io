import React, { useState, useMemo, useEffect } from 'react';
import { ComparisonResult } from '../components/ComparisonResult';
import { CostChart } from '../components/CostChart';
import { calculateWorkflowCost } from '../utils/calculator';
import type { WorkflowInputs } from '../utils/calculator';
import type { Provider, WorkflowPricing } from '../data/pricing';
import { Workflow, Info, Zap, TrendingDown, Sparkles, Rocket } from 'lucide-react';

interface WorkflowsPageProps {
    selectedCompetitor: Provider;
    pricing: WorkflowPricing[];
}

interface Preset {
    name: string;
    icon: React.ReactNode;
    description: string;
    config: Partial<WorkflowInputs>;
}

const PRESETS: Preset[] = [
    {
        name: 'Development',
        icon: <Sparkles className="w-4 h-4" />,
        description: 'Small dev/test environment',
        config: { environments: 1, vcpuPerEnv: 2, ramPerEnv: 8, storageGB: 50, hoursPerMonth: 160 }
    },
    {
        name: 'Production',
        icon: <Zap className="w-4 h-4" />,
        description: 'Standard production workload',
        config: { environments: 2, vcpuPerEnv: 4, ramPerEnv: 16, storageGB: 200, hoursPerMonth: 730 }
    },
    {
        name: 'Enterprise',
        icon: <Rocket className="w-4 h-4" />,
        description: 'High-availability enterprise setup',
        config: { environments: 4, vcpuPerEnv: 8, ramPerEnv: 32, storageGB: 1000, hoursPerMonth: 730 }
    },
];

export const WorkflowsPage: React.FC<WorkflowsPageProps> = ({ selectedCompetitor, pricing }) => {
    const [inputs, setInputs] = useState<WorkflowInputs>(() => {
        const saved = localStorage.getItem('workflowInputs');
        return saved ? JSON.parse(saved) : {
            environments: 2,
            vcpuPerEnv: 4,
            ramPerEnv: 16,
            storageGB: 200,
            hoursPerMonth: 730,
        };
    });

    const results = useMemo(() => {
        const filteredPricing = pricing.filter(
            model => model.provider === 'STACKIT' || model.provider === selectedCompetitor
        );
        return filteredPricing.map(model => calculateWorkflowCost(inputs, model));
    }, [inputs, selectedCompetitor, pricing]);

    useEffect(() => {
        localStorage.setItem('workflowInputs', JSON.stringify(inputs));
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

    // Calculate total resources
    const totalVCPU = inputs.environments * inputs.vcpuPerEnv;
    const totalRAM = inputs.environments * inputs.ramPerEnv;

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
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg">
                        <Workflow className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Workflows
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Managed workflow orchestration and data pipelines
                        </p>
                    </div>
                </div>

                {/* Service Description */}
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    STACKIT Workflows provides managed Apache Airflow environments for orchestrating complex data pipelines.
                    This solution provides an alternative to major hyperscaler offerings, including Cloud Composer,
                    Amazon MWAA, and Azure Data Factory.
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

                        {/* Info Box about Airflow */}
                        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="flex items-start gap-2">
                                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-blue-800 dark:text-blue-300">
                                    <strong className="block mb-1">Managed Apache Airflow</strong>
                                    Each environment runs an isolated Airflow instance with dedicated compute resources
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Number of Environments */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Airflow Environments
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.environments}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="environments"
                                    value={inputs.environments}
                                    onChange={(e) => handleChange('environments', parseInt(e.target.value))}
                                    min="1"
                                    max="10"
                                    step="1"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>1</span>
                                    <span>10</span>
                                </div>
                            </div>

                            {/* vCPU per Environment */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        vCPU per Environment
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.vcpuPerEnv}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="vcpuPerEnv"
                                    value={inputs.vcpuPerEnv}
                                    onChange={(e) => handleChange('vcpuPerEnv', parseInt(e.target.value))}
                                    min="1"
                                    max="16"
                                    step="1"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>1 vCPU</span>
                                    <span>16 vCPU</span>
                                </div>
                            </div>

                            {/* RAM per Environment */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        RAM per Environment (GB)
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.ramPerEnv}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="ramPerEnv"
                                    value={inputs.ramPerEnv}
                                    onChange={(e) => handleChange('ramPerEnv', parseInt(e.target.value))}
                                    min="4"
                                    max="64"
                                    step="4"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>4 GB</span>
                                    <span>64 GB</span>
                                </div>
                                <div className="mt-2 p-3 bg-gradient-to-r from-stackit-primary/10 to-stackit-secondary/10 dark:from-stackit-primary/20 dark:to-stackit-secondary/20 rounded-lg border border-stackit-primary/20">
                                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                                        Total Resources: {totalVCPU} vCPU • {totalRAM} GB RAM
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                        Across {inputs.environments} environment{inputs.environments > 1 ? 's' : ''}
                                    </div>
                                </div>
                            </div>

                            {/* Storage */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Storage (GB)
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.storageGB}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="storageGB"
                                    value={inputs.storageGB}
                                    onChange={(e) => handleChange('storageGB', parseInt(e.target.value))}
                                    min="0"
                                    max="5000"
                                    step="100"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>0 GB</span>
                                    <span>5 TB</span>
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
                                            STACKIT Workflows
                                        </h4>

                                        <div className="space-y-3 text-sm">
                                            {/* Environment Fee */}
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <div className="font-medium text-gray-900 dark:text-white mb-1">Environment Fee</div>
                                                <div className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                                                    <div>• €{stackitPricing.environmentFeePerHour.toFixed(4)}/hour per environment</div>
                                                    <div>• {inputs.environments} environments × {inputs.hoursPerMonth} hours</div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        = €{(stackitPricing.environmentFeePerHour * inputs.environments * inputs.hoursPerMonth).toFixed(2)}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Compute Cost */}
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <div className="font-medium text-gray-900 dark:text-white mb-1">Compute</div>
                                                <div className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                                                    <div>• vCPU: €{stackitPricing.compute.vcpuPerHour.toFixed(4)}/hour × {totalVCPU} vCPU × {inputs.hoursPerMonth}h</div>
                                                    <div>• RAM: €{stackitPricing.compute.ramGBPerHour.toFixed(4)}/GB/hour × {totalRAM} GB × {inputs.hoursPerMonth}h</div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        = €{(
                                                            stackitPricing.compute.vcpuPerHour * totalVCPU * inputs.hoursPerMonth +
                                                            stackitPricing.compute.ramGBPerHour * totalRAM * inputs.hoursPerMonth
                                                        ).toFixed(2)}
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
                                            {selectedCompetitor} Workflows
                                        </h4>

                                        <div className="space-y-3 text-sm">
                                            {/* Environment Fee */}
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <div className="font-medium text-gray-900 dark:text-white mb-1">Environment Fee</div>
                                                <div className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                                                    <div>• €{competitorPricing.environmentFeePerHour.toFixed(4)}/hour per environment</div>
                                                    <div>• {inputs.environments} environments × {inputs.hoursPerMonth} hours</div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        = €{(competitorPricing.environmentFeePerHour * inputs.environments * inputs.hoursPerMonth).toFixed(2)}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Compute Cost */}
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <div className="font-medium text-gray-900 dark:text-white mb-1">Compute</div>
                                                <div className="text-gray-600 dark:text-gray-400 text-xs space-y-1">
                                                    <div>• vCPU: €{competitorPricing.compute.vcpuPerHour.toFixed(4)}/hour × {totalVCPU} vCPU × {inputs.hoursPerMonth}h</div>
                                                    <div>• RAM: €{competitorPricing.compute.ramGBPerHour.toFixed(4)}/GB/hour × {totalRAM} GB × {inputs.hoursPerMonth}h</div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">
                                                        = €{(
                                                            competitorPricing.compute.vcpuPerHour * totalVCPU * inputs.hoursPerMonth +
                                                            competitorPricing.compute.ramGBPerHour * totalRAM * inputs.hoursPerMonth
                                                        ).toFixed(2)}
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
