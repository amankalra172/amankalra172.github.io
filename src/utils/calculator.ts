import type { PricingModel, WorkflowPricing, NotebookPricing, DremioPricing, Provider } from '../data/pricing';

export interface UsageInputs {
    vcpu: number;
    ramGB: number;
    storageGB: number;
    hoursPerMonth: number; // Typically 730 for full month
    ingressGB: number;
    egressGB: number;
}

export interface CostResult {
    provider: Provider;
    monthlyCost: string;
    yearlyCost: string;
    breakdown: {
        compute: string;
        storage: string;
        transfer: string;
    };
}

export const calculateCost = (inputs: UsageInputs, model: PricingModel): CostResult => {
    const vcpuCost = inputs.vcpu * model.compute.vcpuPerHour;
    const ramCost = inputs.ramGB * model.compute.ramGBPerHour;
    const computeCost = (vcpuCost + ramCost) * inputs.hoursPerMonth;

    const storageCost = inputs.storageGB * model.storage.standardGBPerMonth;

    const transferCost = (inputs.ingressGB * model.transfer.ingressGB) +
        (inputs.egressGB * model.transfer.egressGB);

    const totalMonthly = computeCost + storageCost + transferCost;

    return {
        provider: model.provider,
        monthlyCost: totalMonthly.toFixed(2),
        yearlyCost: (totalMonthly * 12).toFixed(2),
        breakdown: {
            compute: computeCost.toFixed(2),
            storage: storageCost.toFixed(2),
            transfer: transferCost.toFixed(2),
        }
    };
};

// --- Workflows Calculator ---
export interface WorkflowInputs {
    environments: number;
    vcpuPerEnv: number;
    ramPerEnv: number;
    storageGB: number;
    hoursPerMonth: number;
}

export const calculateWorkflowCost = (inputs: WorkflowInputs, model: WorkflowPricing): CostResult => {
    const envFee = inputs.environments * model.environmentFeePerHour * inputs.hoursPerMonth;

    const computeCost = inputs.environments * (
        (inputs.vcpuPerEnv * model.compute.vcpuPerHour) +
        (inputs.ramPerEnv * model.compute.ramGBPerHour)
    ) * inputs.hoursPerMonth;

    const storageCost = inputs.storageGB * model.storage.gbPerMonth;

    const totalMonthly = envFee + computeCost + storageCost;

    return {
        provider: model.provider,
        monthlyCost: totalMonthly.toFixed(2),
        yearlyCost: (totalMonthly * 12).toFixed(2),
        breakdown: {
            compute: (envFee + computeCost).toFixed(2), // Grouping env fee with compute for simplicity
            storage: storageCost.toFixed(2),
            transfer: '0.00'
        }
    };
};

// --- Notebooks Calculator ---
export interface NotebookInputs {
    instances: number;
    vcpuPerInstance: number; // This determines RAM automatically (1:4 ratio)
    storageGB: number;
    hoursPerMonth: number;
    dataEgressGB: number; // New: data egress in GB
}

export const calculateNotebookCost = (inputs: NotebookInputs, model: NotebookPricing): CostResult => {
    // Calculate number of bundles needed (1 bundle = 1 vCPU + 4 GB RAM)
    const bundlesPerInstance = inputs.vcpuPerInstance;
    const totalBundles = inputs.instances * bundlesPerInstance;

    // Bundle cost (compute)
    const bundleCost = totalBundles * model.compute.pricePerBundle * inputs.hoursPerMonth;

    // Management fee (GCP only, per vCPU)
    const managementCost = totalBundles * model.managementFee * inputs.hoursPerMonth;

    // Total compute cost
    const computeCost = bundleCost + managementCost;

    // Storage cost
    const storageCost = inputs.storageGB * model.storage.standardGBPerMonth;

    // Transfer cost (egress only, ingress is free for all providers)
    const transferCost = inputs.dataEgressGB * model.transfer.egressGB;

    const totalMonthlyCost = computeCost + storageCost + transferCost;

    return {
        provider: model.provider as 'STACKIT' | 'GCP',
        monthlyCost: totalMonthlyCost.toFixed(2),
        yearlyCost: (totalMonthlyCost * 12).toFixed(2),
        breakdown: {
            compute: computeCost.toFixed(2),
            storage: storageCost.toFixed(2),
            transfer: transferCost.toFixed(2),
        },
    };
};

// --- Dremio Calculator ---
export interface DremioInputs {
    units: number; // DCUs or Slots
    storageGB: number;
    hoursPerMonth: number;
}

export const calculateDremioCost = (inputs: DremioInputs, model: DremioPricing): CostResult => {
    const computeCost = inputs.units * model.compute.dcuPerHour * inputs.hoursPerMonth;
    const storageCost = inputs.storageGB * model.storage.gbPerMonth;

    const totalMonthly = computeCost + storageCost;

    return {
        provider: model.provider,
        monthlyCost: totalMonthly.toFixed(2),
        yearlyCost: (totalMonthly * 12).toFixed(2),
        breakdown: {
            compute: computeCost.toFixed(2),
            storage: storageCost.toFixed(2),
            transfer: '0.00'
        }
    };
};
