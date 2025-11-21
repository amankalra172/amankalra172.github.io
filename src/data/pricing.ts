export type Provider = 'STACKIT' | 'GCP' | 'AWS' | 'Azure';

export interface PricingModel {
    provider: Provider;
    currency: string;
    compute: {
        vcpuPerHour: number;
        ramGBPerHour: number;
        // Future: Add spot instances, committed use discounts, etc.
    };
    storage: {
        standardGBPerMonth: number;
        // Future: Add different storage classes (Nearline, Coldline, etc.)
    };
    transfer: {
        ingressGB: number;
        egressGB: number;
    };
    // Placeholder for platform-specific services
    services?: {
        [key: string]: {
            unit: string;
            costPerUnit: number;
        };
    };
}

export interface WorkflowPricing {
    provider: Provider;
    environmentFeePerHour: number;
    compute: {
        vcpuPerHour: number;
        ramGBPerHour: number;
    };
    storage: {
        gbPerMonth: number;
    };
}

export interface NotebookPricing {
    provider: Provider;
    name: string;
    compute: {
        pricePerBundle: number; // Price per 1 vCPU + 4 GB RAM per hour
    };
    storage: {
        standardGBPerMonth: number;
    };
    transfer: {
        ingressGB: number;
        egressGB: number;
    };
    managementFee: number; // Additional fee per vCPU per hour (GCP only)
}

export interface DremioPricing {
    provider: Provider;
    edition: 'Standard' | 'Enterprise';
    compute: {
        dcuPerHour: number;
    };
    storage: {
        gbPerMonth: number;
    };
}

// Mock Data - To be replaced with real API data or more accurate constants
// User Note: Pricing variables differ by platform. This is a baseline structure.

export const STACKIT_PRICING: PricingModel = {
    provider: 'STACKIT',
    currency: 'EUR',
    compute: {
        vcpuPerHour: 0.05, // Example rate
        ramGBPerHour: 0.02, // Example rate
    },
    storage: {
        standardGBPerMonth: 0.10, // Example rate
    },
    transfer: {
        ingressGB: 0,
        egressGB: 0,
    },
};

export const GCP_PRICING: PricingModel = {
    provider: 'GCP',
    currency: 'EUR',
    compute: {
        vcpuPerHour: 0.06, // Example rate (e.g., n1-standard-1 equivalent)
        ramGBPerHour: 0.025, // Example rate
    },
    storage: {
        standardGBPerMonth: 0.12, // Example rate
    },
    transfer: {
        ingressGB: 0,
        egressGB: 0.20,
    },
};

export const AWS_PRICING: PricingModel = {
    provider: 'AWS',
    currency: 'EUR',
    compute: {
        vcpuPerHour: 0.055,
        ramGBPerHour: 0.022,
    },
    storage: {
        standardGBPerMonth: 0.09,
    },
    transfer: {
        ingressGB: 0,
        egressGB: 0.09,
    },
};

export const AZURE_PRICING: PricingModel = {
    provider: 'Azure',
    currency: 'EUR',
    compute: {
        vcpuPerHour: 0.058,
        ramGBPerHour: 0.024,
    },
    storage: {
        standardGBPerMonth: 0.11,
    },
    transfer: {
        ingressGB: 0,
        egressGB: 0.08,
    },
};



export const PRICING_MODELS = [STACKIT_PRICING, GCP_PRICING, AWS_PRICING, AZURE_PRICING];

// --- Workflows (Airflow) Pricing ---
export const STACKIT_WORKFLOWS: WorkflowPricing = {
    provider: 'STACKIT',
    environmentFeePerHour: 0.10, // Example
    compute: { vcpuPerHour: 0.05, ramGBPerHour: 0.02 },
    storage: { gbPerMonth: 0.10 }
};

export const GCP_COMPOSER: WorkflowPricing = {
    provider: 'GCP',
    environmentFeePerHour: 0.35, // Example (Composer 2 Small)
    compute: { vcpuPerHour: 0.06, ramGBPerHour: 0.025 },
    storage: { gbPerMonth: 0.12 }
};

export const AWS_MWAA: WorkflowPricing = {
    provider: 'AWS',
    environmentFeePerHour: 0.40,
    compute: { vcpuPerHour: 0.055, ramGBPerHour: 0.022 },
    storage: { gbPerMonth: 0.09 }
};

export const AZURE_DATA_FACTORY: WorkflowPricing = {
    provider: 'Azure',
    environmentFeePerHour: 0.30,
    compute: { vcpuPerHour: 0.058, ramGBPerHour: 0.024 },
    storage: { gbPerMonth: 0.11 }
};



export const WORKFLOW_PRICING = [STACKIT_WORKFLOWS, GCP_COMPOSER, AWS_MWAA, AZURE_DATA_FACTORY];

// --- Notebooks (Jupyter) Pricing ---
// Notebook Pricing (Jupyter Notebooks)
export const STACKIT_NOTEBOOKS: NotebookPricing = {
    provider: 'STACKIT',
    name: 'STACKIT Notebooks',
    compute: {
        // €0.05 per hour for 1 vCPU + 4 GB RAM bundle
        pricePerBundle: 0.05, // 1 vCPU + 4 GB RAM
    },
    storage: {
        standardGBPerMonth: 0.10, // €0.10 per GB/month
    },
    transfer: {
        ingressGB: 0, // Free
        egressGB: 0,  // Free
    },
    managementFee: 0, // No management fee
};

export const GCP_VERTEX_AI: NotebookPricing = {
    provider: 'GCP',
    name: 'Vertex AI Workbench',
    compute: {
        // €0.105 per hour for 1 vCPU + 4 GB RAM bundle + €0.05 management fee per vCPU
        pricePerBundle: 0.105, // 1 vCPU + 4 GB RAM
    },
    storage: {
        standardGBPerMonth: 0.17, // €0.17 per GB/month
    },
    transfer: {
        ingressGB: 0,    // Free
        egressGB: 0.02,  // €0.02 per GB
    },
    managementFee: 0.05, // €0.05 per vCPU per hour
};

export const AWS_SAGEMAKER: NotebookPricing = {
    provider: 'AWS',
    name: 'SageMaker Notebooks',
    compute: {
        // €0.06 per hour for 1 vCPU + 4 GB RAM bundle
        pricePerBundle: 0.06, // 1 vCPU + 4 GB RAM
    },
    storage: {
        standardGBPerMonth: 0.12, // €0.12 per GB/month
    },
    transfer: {
        ingressGB: 0,    // Free
        egressGB: 0.02,  // €0.02 per GB
    },
    managementFee: 0, // No management fee
};

export const AZURE_ML_NOTEBOOKS: NotebookPricing = {
    provider: 'Azure',
    name: 'Azure ML Notebooks',
    compute: {
        // €0.06 per hour for 1 vCPU + 4 GB RAM bundle
        pricePerBundle: 0.06, // 1 vCPU + 4 GB RAM
    },
    storage: {
        standardGBPerMonth: 0.12, // €0.12 per GB/month
    },
    transfer: {
        ingressGB: 0,    // Free
        egressGB: 0.02,  // €0.02 per GB
    },
    managementFee: 0, // No management fee
};



export const NOTEBOOK_PRICING: NotebookPricing[] = [
    STACKIT_NOTEBOOKS,
    GCP_VERTEX_AI,
    AWS_SAGEMAKER,
    AZURE_ML_NOTEBOOKS,
];

// --- Dremio Pricing ---
export const STACKIT_DREMIO: DremioPricing = {
    provider: 'STACKIT',
    edition: 'Enterprise',
    compute: { dcuPerHour: 0.40 }, // Example rate
    storage: { gbPerMonth: 0.02 } // S3/Object storage
};

export const GCP_BIGQUERY: DremioPricing = {
    provider: 'GCP',
    edition: 'Enterprise',
    compute: { dcuPerHour: 0.60 }, // Equivalent slot/hour cost
    storage: { gbPerMonth: 0.02 }
};

export const AWS_ATHENA: DremioPricing = {
    provider: 'AWS',
    edition: 'Enterprise',
    compute: { dcuPerHour: 0.55 },
    storage: { gbPerMonth: 0.02 }
};

export const AZURE_SYNAPSE: DremioPricing = {
    provider: 'Azure',
    edition: 'Enterprise',
    compute: { dcuPerHour: 0.65 },
    storage: { gbPerMonth: 0.02 }
};


export const DREMIO_PRICING = [STACKIT_DREMIO, GCP_BIGQUERY, AWS_ATHENA, AZURE_SYNAPSE];
