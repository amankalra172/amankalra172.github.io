import React from 'react';
import { ExternalLink, Mail, FileText, Shield, Info } from 'lucide-react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* STACKIT Branding */}
                    <div>
                        <img
                            src="/logos/stackit-logo-light.png"
                            alt="STACKIT Logo"
                            className="h-8 w-auto mb-4 dark:hidden"
                        />
                        <img
                            src="/logos/stackit-logo-dark.png"
                            alt="STACKIT Logo"
                            className="h-8 w-auto mb-4 hidden dark:block"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Cloud TCO Calculator - Compare STACKIT's data platform pricing with leading cloud providers.
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                            Version 1.0.0 • Last updated: November 2025
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/assessment"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-stackit-primary dark:hover:text-stackit-300 flex items-center gap-2 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Sovereignty Assessment
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/how-it-works"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-stackit-primary dark:hover:text-stackit-300 flex items-center gap-2 transition-colors"
                                >
                                    <Info className="w-4 h-4" />
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.stackit.de/en/pricing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-stackit-primary dark:hover:text-stackit-300 flex items-center gap-2 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Official Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://docs.stackit.cloud"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-stackit-primary dark:hover:text-stackit-300 flex items-center gap-2 transition-colors"
                                >
                                    <FileText className="w-4 h-4" />
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.stackit.de/en/contact"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-stackit-primary dark:hover:text-stackit-300 flex items-center gap-2 transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    Contact Sales
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://www.stackit.de/en/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-stackit-primary dark:hover:text-stackit-300 flex items-center gap-2 transition-colors"
                                >
                                    <Shield className="w-4 h-4" />
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.stackit.de/en/terms"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-stackit-primary dark:hover:text-stackit-300 flex items-center gap-2 transition-colors"
                                >
                                    <FileText className="w-4 h-4" />
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.stackit.de/en/imprint"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-stackit-primary dark:hover:text-stackit-300 flex items-center gap-2 transition-colors"
                                >
                                    <Info className="w-4 h-4" />
                                    Imprint
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/config"
                                    className="text-xs text-gray-500 dark:text-gray-500 hover:text-stackit-primary dark:hover:text-stackit-300 transition-colors"
                                >
                                    Config
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            <span className="font-medium text-gray-900 dark:text-gray-200">Disclaimer:</span> The pricing estimates provided by this calculator are for comparison and illustrative purposes only.
                            Actual costs may vary based on specific configurations, regional pricing, volume discounts, and other factors.
                            Please contact STACKIT sales for official quotes and detailed pricing information.
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            © {currentYear} <span className="font-semibold text-stackit-primary dark:text-stackit-300">STACKIT</span>. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
