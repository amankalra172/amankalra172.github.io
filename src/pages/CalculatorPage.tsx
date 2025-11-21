import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ComparisonResult } from '../components/ComparisonResult';
import { CostChart } from '../components/CostChart';
import { CompetitorSelector } from '../components/CompetitorSelector';
import { calculateWorkflowCost, calculateNotebookCost, calculateDremioCost } from '../utils/calculator';
import type { Provider } from '../data/pricing';
import { WORKFLOW_PRICING, NOTEBOOK_PRICING, DREMIO_PRICING } from '../data/pricing';
import { TrendingUp, AlertCircle, Wind, BookOpen, Database, ArrowRight } from 'lucide-react';
import type { CostResult } from '../utils/calculator';

interface CalculatorPageProps {
    selectedCompetitor: Provider;
    onCompetitorChange: (provider: Provider) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ selectedCompetitor, onCompetitorChange }) => {
    const [totalResults, setTotalResults] = useState<CostResult[]>([]);

    useEffect(() => {
        // Get saved inputs from each product page
        const workflowInputs = JSON.parse(localStorage.getItem('workflowInputs') || '{"environments":1,"vcpuPerEnv":2,"ramPerEnv":8,"storageGB":100,"hoursPerMonth":730}');
        const notebookInputs = JSON.parse(localStorage.getItem('notebookInputs') || '{"instances":2,"vcpuPerInstance":4,"storageGB":500,"hoursPerMonth":730}');
        const dremioInputs = JSON.parse(localStorage.getItem('dremioInputs') || '{"units":4,"storageGB":1000,"hoursPerMonth":730}');

        // Filter pricing for STACKIT and selected competitor
        const workflowPricing = WORKFLOW_PRICING.filter(p => p.provider === 'STACKIT' || p.provider === selectedCompetitor);
        const notebookPricing = NOTEBOOK_PRICING.filter(p => p.provider === 'STACKIT' || p.provider === selectedCompetitor);
        const dremioPricing = DREMIO_PRICING.filter(p => p.provider === 'STACKIT' || p.provider === selectedCompetitor);

        // Calculate costs for each product
        const workflowCosts = workflowPricing.map(model => calculateWorkflowCost(workflowInputs, model));
        const notebookCosts = notebookPricing.map(model => calculateNotebookCost(notebookInputs, model));
        const dremioCosts = dremioPricing.map(model => calculateDremioCost(dremioInputs, model));

        // Aggregate total costs by provider
        const stackitWorkflow = workflowCosts.find(c => c.provider === 'STACKIT');
        const stackitNotebook = notebookCosts.find(c => c.provider === 'STACKIT');
        const stackitDremio = dremioCosts.find(c => c.provider === 'STACKIT');

        const competitorWorkflow = workflowCosts.find(c => c.provider === selectedCompetitor);
        const competitorNotebook = notebookCosts.find(c => c.provider === selectedCompetitor);
        const competitorDremio = dremioCosts.find(c => c.provider === selectedCompetitor);

        const stackitTotal = (parseFloat(stackitWorkflow?.monthlyCost || '0') +
            parseFloat(stackitNotebook?.monthlyCost || '0') +
            parseFloat(stackitDremio?.monthlyCost || '0')).toFixed(2);

        const competitorTotal = (parseFloat(competitorWorkflow?.monthlyCost || '0') +
            parseFloat(competitorNotebook?.monthlyCost || '0') +
            parseFloat(competitorDremio?.monthlyCost || '0')).toFixed(2);

        setTotalResults([
            {
                provider: 'STACKIT',
                monthlyCost: stackitTotal,
                yearlyCost: (parseFloat(stackitTotal) * 12).toFixed(2),
                breakdown: {
                    compute: parseFloat(stackitWorkflow?.monthlyCost || '0').toFixed(2),
                    storage: parseFloat(stackitNotebook?.monthlyCost || '0').toFixed(2),
                    transfer: parseFloat(stackitDremio?.monthlyCost || '0').toFixed(2)
                }
            },
            {
                provider: selectedCompetitor,
                monthlyCost: competitorTotal,
                yearlyCost: (parseFloat(competitorTotal) * 12).toFixed(2),
                breakdown: {
                    compute: parseFloat(competitorWorkflow?.monthlyCost || '0').toFixed(2),
                    storage: parseFloat(competitorNotebook?.monthlyCost || '0').toFixed(2),
                    transfer: parseFloat(competitorDremio?.monthlyCost || '0').toFixed(2)
                }
            }
        ]);
    }, [selectedCompetitor]);

    const savings = totalResults.length === 2
        ? (parseFloat(totalResults[1].monthlyCost) - parseFloat(totalResults[0].monthlyCost))
        : 0;
    const savingsPercent = totalResults.length === 2 && parseFloat(totalResults[1].monthlyCost) > 0
        ? ((savings / parseFloat(totalResults[1].monthlyCost)) * 100).toFixed(1)
        : 0;

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center p-3 bg-stackit-primary/10 rounded-full mb-4">
                    <TrendingUp className="w-8 h-8 text-stackit-primary dark:text-stackit-300" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    Total Cost of Ownership
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Aggregated TCO comparison across all your workloads: Workflows, Notebooks, and Dremio
                </p>
            </div>

            {/* Product Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Link to="/workflows" className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-stackit-primary dark:hover:border-stackit-400 transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                            <Wind className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-stackit-primary dark:group-hover:text-stackit-300 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Workflows</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Calculate costs for your workflow environments and resources.</p>
                </Link>

                <Link to="/notebooks" className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-stackit-primary dark:hover:border-stackit-400 transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                            <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-stackit-primary dark:group-hover:text-stackit-300 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Notebooks</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Estimate pricing for Jupyter notebooks and compute instances.</p>
                </Link>

                <Link to="/dremio" className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-stackit-primary dark:hover:border-stackit-400 transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-xl group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                            <Database className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-stackit-primary dark:group-hover:text-stackit-300 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Dremio</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Analyze costs for Dremio lakehouse units and storage.</p>
                </Link>
            </div>

            {/* Controls Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        Compare against:
                    </label>
                    <CompetitorSelector
                        selectedProvider={selectedCompetitor}
                        onProviderChange={onCompetitorChange}
                    />
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 px-4 py-2 rounded-full border border-gray-100 dark:border-gray-800">
                    <AlertCircle className="w-4 h-4 text-blue-500" />
                    <span>Aggregated costs from all workloads</span>
                </div>
            </div>

            {/* Results */}
            {totalResults.length > 0 && (
                <>
                    {savings > 0 && (
                        <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 dark:border-green-400 rounded-xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-500 dark:bg-green-400 text-white dark:text-gray-900 rounded-full p-3">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-green-900 dark:text-green-100 mb-1">
                                        Potential Monthly Savings with STACKIT
                                    </p>
                                    <p className="text-3xl font-bold text-green-700 dark:text-green-300">
                                        €{savings.toFixed(2)} <span className="text-lg">({savingsPercent}% less)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    <ComparisonResult results={totalResults} />

                    <div className="mt-8">
                        <CostChart results={totalResults} />
                    </div>
                </>
            )}
        </div>
    );
};
