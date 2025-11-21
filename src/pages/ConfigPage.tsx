import React, { useState } from 'react';
import type { PricingModel, NotebookPricing, WorkflowPricing, DremioPricing } from '../data/pricing';
import { Download, Upload, RotateCcw, Save } from 'lucide-react';

interface ConfigPageProps {
    pricingModels: PricingModel[];
    notebookPricing: NotebookPricing[];
    workflowPricing: WorkflowPricing[];
    dremioPricing: DremioPricing[];
    onUpdatePricing: (newModels: PricingModel[]) => void;
    onUpdateNotebookPricing: (newPricing: NotebookPricing[]) => void;
    onUpdateWorkflowPricing: (newPricing: WorkflowPricing[]) => void;
    onUpdateDremioPricing: (newPricing: DremioPricing[]) => void;
    onResetDefaults: () => void;
}

type PricingCategory = 'tco' | 'notebooks' | 'workflows' | 'dremio';

export const ConfigPage: React.FC<ConfigPageProps> = ({
    pricingModels,
    notebookPricing,
    workflowPricing,
    dremioPricing,
    onUpdatePricing,
    onUpdateNotebookPricing,
    onUpdateWorkflowPricing,
    onUpdateDremioPricing,
    onResetDefaults
}) => {
    const [activeTab, setActiveTab] = useState<PricingCategory>('tco');

    // Local state for editing
    const [localTCO, setLocalTCO] = useState(pricingModels);
    const [localNotebooks, setLocalNotebooks] = useState(notebookPricing);
    const [localWorkflows, setLocalWorkflows] = useState(workflowPricing);
    const [localDremio, setLocalDremio] = useState(dremioPricing);

    // Export all pricing to JSON
    const handleExport = () => {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const filename = `pricing-backup-${timestamp}.json`;

        const allPricing = {
            tco: localTCO,
            notebooks: localNotebooks,
            workflows: localWorkflows,
            dremio: localDremio
        };

        const dataStr = JSON.stringify(allPricing, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();

        URL.revokeObjectURL(url);
    };

    // Import all pricing from JSON
    const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target?.result as string);

                if (imported.tco) setLocalTCO(imported.tco);
                if (imported.notebooks) setLocalNotebooks(imported.notebooks);
                if (imported.workflows) setLocalWorkflows(imported.workflows);
                if (imported.dremio) setLocalDremio(imported.dremio);

                alert('Pricing imported successfully! Click "Save Changes" to apply.');
            } catch (error) {
                console.error("Error importing pricing:", error);
                alert('Error importing pricing file. Please check the file format.');
            }
        };
        reader.readAsText(file);
    };

    // Save all changes
    const handleSave = () => {
        onUpdatePricing(localTCO);
        onUpdateNotebookPricing(localNotebooks);
        onUpdateWorkflowPricing(localWorkflows);
        onUpdateDremioPricing(localDremio);
        alert('All pricing configuration saved!');
    };

    const tabs: { id: PricingCategory; label: string }[] = [
        { id: 'tco', label: 'TCO Calculator' },
        { id: 'notebooks', label: 'Notebooks' },
        { id: 'workflows', label: 'Workflows' },
        { id: 'dremio', label: 'Dremio' }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Pricing Configuration
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Manage all pricing data for the TCO calculator and product pages. Changes auto-save to browser storage.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="mb-6 flex gap-3">
                <button
                    onClick={handleExport}
                    className="flex items-center gap-2 px-4 py-2 bg-stackit-primary hover:bg-stackit-primary/90 text-white rounded-lg font-medium transition-colors"
                >
                    <Download className="w-4 h-4" />
                    Export Pricing
                </button>

                <label className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors cursor-pointer">
                    <Upload className="w-4 h-4" />
                    Import Pricing
                    <input
                        type="file"
                        accept=".json"
                        onChange={handleImport}
                        className="hidden"
                    />
                </label>

                <button
                    onClick={onResetDefaults}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                >
                    <RotateCcw className="w-4 h-4" />
                    Reset All
                </button>

                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors ml-auto shadow-md"
                >
                    <Save className="w-4 h-4" />
                    Save Changes
                </button>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                <div className="flex gap-4">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 font-medium border-b-2 transition-colors ${activeTab === tab.id
                                ? 'border-stackit-primary text-stackit-primary dark:text-stackit-300'
                                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
                {activeTab === 'tco' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {localTCO.map((model, idx) => (
                            <div key={model.provider} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                                <h3 className="text-xl font-bold text-stackit-primary dark:text-stackit-300 mb-4">
                                    {model.provider}
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            vCPU Cost (€/hour)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.0001"
                                            value={model.compute.vcpuPerHour}
                                            onChange={(e) => {
                                                const newModels = [...localTCO];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    compute: { ...newModels[idx].compute, vcpuPerHour: parseFloat(e.target.value) }
                                                };
                                                setLocalTCO(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            RAM Cost (€/GB/hour)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.0001"
                                            value={model.compute.ramGBPerHour}
                                            onChange={(e) => {
                                                const newModels = [...localTCO];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    compute: { ...newModels[idx].compute, ramGBPerHour: parseFloat(e.target.value) }
                                                };
                                                setLocalTCO(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Storage (€/GB/month)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.001"
                                            value={model.storage.standardGBPerMonth}
                                            onChange={(e) => {
                                                const newModels = [...localTCO];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    storage: { ...newModels[idx].storage, standardGBPerMonth: parseFloat(e.target.value) }
                                                };
                                                setLocalTCO(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Data Egress (€/GB)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.001"
                                            value={model.transfer.egressGB}
                                            onChange={(e) => {
                                                const newModels = [...localTCO];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    transfer: { ...newModels[idx].transfer, egressGB: parseFloat(e.target.value) }
                                                };
                                                setLocalTCO(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'notebooks' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {localNotebooks.map((model, idx) => (
                            <div key={model.provider} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                                <h3 className="text-xl font-bold text-stackit-primary dark:text-stackit-300 mb-4">
                                    {model.name}
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Bundle Price (€/hour)
                                            <span className="text-xs text-gray-500 ml-1">(1 vCPU + 4GB RAM)</span>
                                        </label>
                                        <input
                                            type="number"
                                            step="0.0001"
                                            value={model.compute.pricePerBundle}
                                            onChange={(e) => {
                                                const newModels = [...localNotebooks];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    compute: { pricePerBundle: parseFloat(e.target.value) }
                                                };
                                                setLocalNotebooks(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Storage (€/GB/month)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.001"
                                            value={model.storage.standardGBPerMonth}
                                            onChange={(e) => {
                                                const newModels = [...localNotebooks];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    storage: { standardGBPerMonth: parseFloat(e.target.value) }
                                                };
                                                setLocalNotebooks(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Data Egress (€/GB)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.001"
                                            value={model.transfer?.egressGB || 0}
                                            onChange={(e) => {
                                                const newModels = [...localNotebooks];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    transfer: { ...(newModels[idx].transfer || { ingressGB: 0, egressGB: 0 }), egressGB: parseFloat(e.target.value) }
                                                };
                                                setLocalNotebooks(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    {model.managementFee !== undefined && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Management Fee (€/vCPU/hour)
                                            </label>
                                            <input
                                                type="number"
                                                step="0.0001"
                                                value={model.managementFee}
                                                onChange={(e) => {
                                                    const newModels = [...localNotebooks];
                                                    newModels[idx] = {
                                                        ...newModels[idx],
                                                        managementFee: parseFloat(e.target.value)
                                                    };
                                                    setLocalNotebooks(newModels);
                                                }}
                                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'workflows' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {localWorkflows.map((model, idx) => (
                            <div key={model.provider} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                                <h3 className="text-xl font-bold text-stackit-primary dark:text-stackit-300 mb-4">
                                    {model.provider} Workflows
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Environment Fee (€/hour)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={model.environmentFeePerHour}
                                            onChange={(e) => {
                                                const newModels = [...localWorkflows];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    environmentFeePerHour: parseFloat(e.target.value)
                                                };
                                                setLocalWorkflows(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            vCPU Cost (€/hour)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.001"
                                            value={model.compute.vcpuPerHour}
                                            onChange={(e) => {
                                                const newModels = [...localWorkflows];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    compute: { ...newModels[idx].compute, vcpuPerHour: parseFloat(e.target.value) }
                                                };
                                                setLocalWorkflows(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            RAM Cost (€/GB/hour)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.001"
                                            value={model.compute.ramGBPerHour}
                                            onChange={(e) => {
                                                const newModels = [...localWorkflows];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    compute: { ...newModels[idx].compute, ramGBPerHour: parseFloat(e.target.value) }
                                                };
                                                setLocalWorkflows(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Storage (€/GB/month)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.001"
                                            value={model.storage.gbPerMonth}
                                            onChange={(e) => {
                                                const newModels = [...localWorkflows];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    storage: { gbPerMonth: parseFloat(e.target.value) }
                                                };
                                                setLocalWorkflows(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'dremio' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {localDremio.map((model, idx) => (
                            <div key={model.provider} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                                <h3 className="text-xl font-bold text-stackit-primary dark:text-stackit-300 mb-4">
                                    {model.provider} Dremio
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Edition
                                        </label>
                                        <input
                                            type="text"
                                            value={model.edition}
                                            disabled
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            DCU Cost (€/hour)
                                            <span className="text-xs text-gray-500 ml-1">(Dremio Compute Unit)</span>
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={model.compute.dcuPerHour}
                                            onChange={(e) => {
                                                const newModels = [...localDremio];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    compute: { dcuPerHour: parseFloat(e.target.value) }
                                                };
                                                setLocalDremio(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            Storage (€/GB/month)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.001"
                                            value={model.storage.gbPerMonth}
                                            onChange={(e) => {
                                                const newModels = [...localDremio];
                                                newModels[idx] = {
                                                    ...newModels[idx],
                                                    storage: { gbPerMonth: parseFloat(e.target.value) }
                                                };
                                                setLocalDremio(newModels);
                                            }}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
