import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Wind, BookOpen, Database, Calculator, Download, ArrowRight, CheckCircle2, Settings, Save } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 bg-stackit-primary/10 rounded-full mb-4">
                    <Info className="w-8 h-8 text-stackit-primary dark:text-stackit-300" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    How to Use the TCO Calculator
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    A comprehensive guide for Sales Teams and Customers to estimate and compare cloud costs effectively.
                </p>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-stackit-primary/5 to-blue-50 dark:from-stackit-primary/10 dark:to-blue-900/20 rounded-2xl p-8 mb-12 border border-stackit-primary/10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why use this tool?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                        <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                            <Calculator className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Transparent Pricing</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Get clear, upfront cost estimates for STACKIT services compared to major hyperscalers.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                        <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                            <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customizable Scenarios</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Configure workloads to match your exact requirements for compute, storage, and data.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                        <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                            <Download className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Export & Share</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Save your configurations and share detailed cost breakdowns with stakeholders.</p>
                    </div>
                </div>
            </div>

            {/* Step by Step Guide */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Step-by-Step Guide</h2>

                <div className="space-y-12">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stackit-primary text-white font-bold text-sm">1</span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Choose Your Workload</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Select the specific product you want to estimate. You can configure multiple products to build a complete TCO.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <Wind className="w-4 h-4 text-blue-500" />
                                    <span><strong>Workflows:</strong> For orchestration and pipeline costs.</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <BookOpen className="w-4 h-4 text-purple-500" />
                                    <span><strong>Notebooks:</strong> For data science and interactive computing.</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <Database className="w-4 h-4 text-teal-500" />
                                    <span><strong>Dremio:</strong> For data lakehouse and query engine costs.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}images/step1-navigation.png`}
                                alt="Navigation Cards"
                                className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stackit-primary text-white font-bold text-sm">2</span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Configure Resources</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Adjust the sliders and inputs to match your expected usage.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>Set number of environments or instances</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>Configure vCPU and RAM requirements</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>Estimate monthly storage and runtime hours</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}images/step2-config.png`}
                                alt="Configuration Sliders"
                                className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-stackit-primary text-white font-bold text-sm">3</span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Review & Export</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                See the aggregated Total Cost of Ownership on the home page.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <Save className="w-4 h-4 text-orange-500" />
                                    <span><strong>Save Config:</strong> Go to the Config page to export your pricing model.</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <ArrowRight className="w-4 h-4 text-orange-500" />
                                    <span><strong>Compare:</strong> Switch competitors (AWS, GCP, Azure) to see savings.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <img
                                src={`${import.meta.env.BASE_URL}images/step3-results.png`}
                                alt="TCO Results"
                                className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to calculate your costs?</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Start by selecting a product or viewing the total TCO.</p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-stackit-primary hover:bg-stackit-800 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                    <Calculator className="w-5 h-5" />
                    Start TCO Calculator
                </Link>
            </div>
        </div>
    );
};
