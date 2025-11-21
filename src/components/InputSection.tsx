import React from 'react';
import type { UsageInputs } from '../utils/calculator';
import { Calculator, Cpu, HardDrive, ArrowRightLeft } from 'lucide-react';

interface InputSectionProps {
    inputs: UsageInputs;
    setInputs: React.Dispatch<React.SetStateAction<UsageInputs>>;
}

export const InputSection: React.FC<InputSectionProps> = ({ inputs, setInputs }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: parseFloat(value) || 0,
        }));
    };

    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-100">
                <Calculator className="w-6 h-6 text-stackit-primary dark:text-stackit-300" />
                Resource Configuration
            </h2>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        vCPU Count
                    </label>
                    <input
                        type="number"
                        name="vcpu"
                        value={inputs.vcpu}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary focus:border-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                        min="0"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                        <div className="w-4 h-4 flex items-center justify-center font-bold text-xs border border-gray-500 rounded">R</div>
                        RAM (GB)
                    </label>
                    <input
                        type="number"
                        name="ramGB"
                        value={inputs.ramGB}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary focus:border-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                        min="0"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                        <HardDrive className="w-4 h-4" />
                        Storage (GB)
                    </label>
                    <input
                        type="number"
                        name="storageGB"
                        value={inputs.storageGB}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary focus:border-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                        min="0"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Hours per Month
                    </label>
                    <input
                        type="number"
                        name="hoursPerMonth"
                        value={inputs.hoursPerMonth}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary focus:border-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                        min="0"
                        max="744"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Max 744 hours (31 days)</p>
                </div>

                <div className="col-span-1 md:col-span-2 border-t border-gray-100 dark:border-gray-700 pt-6 mt-2">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <ArrowRightLeft className="w-4 h-4" />
                        Data Transfer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Ingress (GB/Month)
                            </label>
                            <input
                                type="number"
                                name="ingressGB"
                                value={inputs.ingressGB}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary focus:border-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                                min="0"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Egress (GB/Month)
                            </label>
                            <input
                                type="number"
                                name="egressGB"
                                value={inputs.egressGB}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-stackit-primary focus:border-stackit-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                                min="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
