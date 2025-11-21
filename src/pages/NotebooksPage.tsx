import React, { useState, useMemo, useEffect } from 'react';
import { ComparisonResult } from '../components/ComparisonResult';
import { CostChart } from '../components/CostChart';
import { calculateNotebookCost } from '../utils/calculator';
import type { NotebookInputs } from '../utils/calculator';
import type { Provider, NotebookPricing } from '../data/pricing';
import { BookOpen, Info, Zap, TrendingDown, Sparkles } from 'lucide-react';

interface NotebooksPageProps {
    selectedCompetitor: Provider;
    pricing: NotebookPricing[];
}

interface Preset {
    name: string;
    icon: React.ReactNode;
    description: string;
    config: Partial<NotebookInputs>;
}

const PRESETS: Preset[] = [
    {
        name: 'Light Development',
        icon: <Sparkles className="w-4 h-4" />,
        description: 'For small teams and experimentation',
        config: { instances: 1, vcpuPerInstance: 2, storageGB: 100, hoursPerMonth: 160, dataEgressGB: 20 }
    },
    {
        name: 'Production ML',
        icon: <Zap className="w-4 h-4" />,
        description: 'Medium workloads, continuous training',
        config: { instances: 4, vcpuPerInstance: 8, storageGB: 1000, hoursPerMonth: 730, dataEgressGB: 200 }
    },
    {
        name: 'Enterprise Scale',
        icon: <TrendingDown className="w-4 h-4" />,
        description: 'Large-scale ML operations',
        config: { instances: 10, vcpuPerInstance: 16, storageGB: 5000, hoursPerMonth: 730, dataEgressGB: 500 }
    },
];

export const NotebooksPage: React.FC<NotebooksPageProps> = ({ selectedCompetitor, pricing }) => {
    const [inputs, setInputs] = useState<NotebookInputs>(() => {
        const saved = localStorage.getItem('notebookInputs');
        return saved ? JSON.parse(saved) : {
            instances: 2,
            vcpuPerInstance: 4,
            storageGB: 500,
            hoursPerMonth: 730,
            dataEgressGB: 100,
        };
    });

    const [showCalculations, setShowCalculations] = useState(false);

    const results = useMemo(() => {
        const filteredPricing = pricing.filter(
            model => model.provider === 'STACKIT' || model.provider === selectedCompetitor
        );
        return filteredPricing.map(model => calculateNotebookCost(inputs, model));
    }, [inputs, selectedCompetitor, pricing]);

    useEffect(() => {
        localStorage.setItem('notebookInputs', JSON.stringify(inputs));
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

    // Calculate RAM based on vCPU (1:4 ratio)
    const ramAmount = inputs.vcpuPerInstance * 4;
    const totalVCPU = inputs.instances * inputs.vcpuPerInstance;
    const totalRAM = totalVCPU * 4;

    // Get pricing models for calculation display
    const stackitPricing = pricing.find(p => p.provider === 'STACKIT');
    const competitorPricing = pricing.find(p => p.provider === selectedCompetitor);

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                        <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                            Notebooks
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                            Interactive data science and machine learning notebooks
                        </p>
                    </div>
                </div>

                {/* Service Description */}
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    STACKIT Notebooks provides managed Jupyter notebook environments for data science and ML workflows.
                    This solution provides an alternative to major hyperscaler offerings, including Vertex AI Workbench,
                    SageMaker Notebooks, and Azure ML Notebooks.
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

                        {/* Info Box about CPU:RAM ratio */}
                        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="flex items-start gap-2">
                                <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <div className="text-xs text-blue-800 dark:text-blue-300">
                                    <strong className="block mb-1">1:4 CPU:RAM Ratio</strong>
                                    Each vCPU includes 4 GB RAM automatically
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Number of Instances */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Notebook Instances
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.instances}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="instances"
                                    value={inputs.instances}
                                    onChange={(e) => handleChange('instances', parseInt(e.target.value))}
                                    min="1"
                                    max="20"
                                    step="1"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>1</span>
                                    <span>20</span>
                                </div>
                            </div>

                            {/* vCPU per Instance */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        vCPU per Instance
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.vcpuPerInstance}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="vcpuPerInstance"
                                    value={inputs.vcpuPerInstance}
                                    onChange={(e) => handleChange('vcpuPerInstance', parseInt(e.target.value))}
                                    min="1"
                                    max="32"
                                    step="1"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>1 vCPU</span>
                                    <span>32 vCPU</span>
                                </div>
                                <div className="mt-2 p-3 bg-gradient-to-r from-stackit-primary/10 to-stackit-secondary/10 dark:from-stackit-primary/20 dark:to-stackit-secondary/20 rounded-lg border border-stackit-primary/20">
                                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                                        Total Resources: {totalVCPU} vCPU • {totalRAM} GB RAM
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                        {ramAmount} GB RAM per instance
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

                            {/* Data Egress */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Data Egress (GB/Month)
                                    </label>
                                    <span className="text-xl font-bold text-stackit-primary dark:text-stackit-300">
                                        {inputs.dataEgressGB}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    name="dataEgressGB"
                                    value={inputs.dataEgressGB}
                                    onChange={(e) => handleChange('dataEgressGB', parseInt(e.target.value))}
                                    min="0"
                                    max="1000"
                                    step="10"
                                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-stackit-primary"
                                />
                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    <span>0 GB</span>
                                    <span>1 TB</span>
                                </div>
                                <p className="mt-2 text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded flex items-center gap-1">
                                    <span>✓</span> Ingress is free for all providers
                                </p>
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

                    <CostChart results={results} />

                    {/* Calculation Breakdown Toggle */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
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
                                {/* STACKIT Calculations */}
                                {stackitPricing && (
                                    <div className="p-4 bg-gradient-to-br from-stackit-primary/5 to-stackit-secondary/5 dark:from-stackit-primary/10 dark:to-stackit-secondary/10 rounded-lg border border-stackit-primary/20">
                                        <h4 className="font-semibold text-stackit-primary dark:text-stackit-300 mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-stackit-primary rounded-full"></span>
                                            STACKIT Calculation
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Bundle Price (1 vCPU + 4 GB):</span>
                                                <span className="font-mono text-gray-900 dark:text-white">€{(stackitPricing.compute.pricePerBundle || 0).toFixed(4)}/hour</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Total vCPUs ({inputs.instances} × {inputs.vcpuPerInstance}):</span>
                                                <span className="font-mono text-gray-900 dark:text-white">{totalVCPU} vCPU</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Hours per Month:</span>
                                                <span className="font-mono text-gray-900 dark:text-white">{inputs.hoursPerMonth}h</span>
                                            </div>
                                            <div className="h-px bg-gray-300 dark:bg-gray-600 my-2"></div>
                                            <div className="flex justify-between font-semibold">
                                                <span className="text-gray-700 dark:text-gray-300">Compute Cost:</span>
                                                <span className="font-mono text-gray-900 dark:text-white">
                                                    €{((stackitPricing.compute.pricePerBundle || 0) * totalVCPU * inputs.hoursPerMonth).toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                                                = {totalVCPU} bundles × €{(stackitPricing.compute.pricePerBundle || 0).toFixed(4)} × {inputs.hoursPerMonth}h
                                            </div>

                                            {inputs.storageGB > 0 && (
                                                <>
                                                    <div className="h-px bg-gray-300 dark:bg-gray-600 my-2"></div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600 dark:text-gray-400">Storage ({inputs.storageGB} GB):</span>
                                                        <span className="font-mono text-gray-900 dark:text-white">
                                                            €{((stackitPricing.storage.standardGBPerMonth || 0) * inputs.storageGB).toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                                                        = {inputs.storageGB} GB × €{(stackitPricing.storage.standardGBPerMonth || 0).toFixed(4)}/GB
                                                    </div>
                                                </>
                                            )}

                                            {inputs.dataEgressGB > 0 && (
                                                <>
                                                    <div className="h-px bg-gray-300 dark:bg-gray-600 my-2"></div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600 dark:text-gray-400">Data Egress ({inputs.dataEgressGB} GB):</span>
                                                        <span className="font-mono text-green-600 dark:text-green-400">€0.00</span>
                                                    </div>
                                                    <div className="text-xs text-green-600 dark:text-green-400 italic">
                                                        Free with STACKIT ✓
                                                    </div>
                                                </>
                                            )}

                                            <div className="h-px bg-stackit-primary/30 my-3"></div>
                                            <div className="flex justify-between text-lg font-bold">
                                                <span className="text-gray-900 dark:text-white">Total Monthly Cost:</span>
                                                <span className="text-stackit-primary dark:text-stackit-300">€{stackitCost.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Competitor Calculations */}
                                {competitorPricing && (
                                    <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                            <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                                            {selectedCompetitor} Calculation
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Bundle Price (1 vCPU + 4 GB):</span>
                                                <span className="font-mono text-gray-900 dark:text-white">€{(competitorPricing.compute.pricePerBundle || 0).toFixed(4)}/hour</span>
                                            </div>
                                            {competitorPricing.managementFee && competitorPricing.managementFee > 0 && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600 dark:text-gray-400">Management Fee:</span>
                                                    <span className="font-mono text-gray-900 dark:text-white">€{competitorPricing.managementFee.toFixed(4)}/vCPU/hour</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Total vCPUs ({inputs.instances} × {inputs.vcpuPerInstance}):</span>
                                                <span className="font-mono text-gray-900 dark:text-white">{totalVCPU} vCPU</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 dark:text-gray-400">Hours per Month:</span>
                                                <span className="font-mono text-gray-900 dark:text-white">{inputs.hoursPerMonth}h</span>
                                            </div>
                                            <div className="h-px bg-gray-300 dark:bg-gray-600 my-2"></div>
                                            <div className="flex justify-between font-semibold">
                                                <span className="text-gray-700 dark:text-gray-300">Compute Cost:</span>
                                                <span className="font-mono text-gray-900 dark:text-white">
                                                    €{((competitorPricing.compute.pricePerBundle || 0) * totalVCPU * inputs.hoursPerMonth).toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                                                = {totalVCPU} bundles × €{(competitorPricing.compute.pricePerBundle || 0).toFixed(4)} × {inputs.hoursPerMonth}h
                                            </div>

                                            {competitorPricing.managementFee && competitorPricing.managementFee > 0 && (
                                                <>
                                                    <div className="flex justify-between font-semibold">
                                                        <span className="text-gray-700 dark:text-gray-300">Management Fee:</span>
                                                        <span className="font-mono text-gray-900 dark:text-white">
                                                            €{(competitorPricing.managementFee * totalVCPU * inputs.hoursPerMonth).toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                                                        = {totalVCPU} vCPU × €{competitorPricing.managementFee.toFixed(4)} × {inputs.hoursPerMonth}h
                                                    </div>
                                                </>
                                            )}

                                            {inputs.storageGB > 0 && (
                                                <>
                                                    <div className="h-px bg-gray-300 dark:bg-gray-600 my-2"></div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600 dark:text-gray-400">Storage ({inputs.storageGB} GB):</span>
                                                        <span className="font-mono text-gray-900 dark:text-white">
                                                            €{((competitorPricing.storage.standardGBPerMonth || 0) * inputs.storageGB).toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                                                        = {inputs.storageGB} GB × €{(competitorPricing.storage.standardGBPerMonth || 0).toFixed(4)}/GB
                                                    </div>
                                                </>
                                            )}

                                            {inputs.dataEgressGB > 0 && (
                                                <>
                                                    <div className="h-px bg-gray-300 dark:bg-gray-600 my-2"></div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600 dark:text-gray-400">Data Egress ({inputs.dataEgressGB} GB):</span>
                                                        <span className="font-mono text-gray-900 dark:text-white">
                                                            €{((competitorPricing.transfer?.egressGB || 0) * inputs.dataEgressGB).toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-500 italic">
                                                        = {inputs.dataEgressGB} GB × €{competitorPricing.transfer?.egressGB?.toFixed(4) || '0.00'}/GB
                                                    </div>
                                                </>
                                            )}

                                            <div className="h-px bg-gray-400 dark:bg-gray-600 my-3"></div>
                                            <div className="flex justify-between text-lg font-bold">
                                                <span className="text-gray-900 dark:text-white">Total Monthly Cost:</span>
                                                <span className="text-gray-700 dark:text-gray-300">€{competitorCost.toFixed(2)}</span>
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
