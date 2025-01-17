"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePortfolioPerformance = calculatePortfolioPerformance;
exports.findLargestHolding = findLargestHolding;
exports.calculateAssetAllocation = calculateAssetAllocation;
function calculatePortfolioPerformance(initialInvestment, currentValue) {
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
    const performanceSummary = [
        percentageChange === 0 && "The portfolio has remained stable with no change in value.",
        percentageChange > 20 && `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.`,
        percentageChange > 10 && percentageChange <= 20 && `The portfolio has gained moderately with a profit of $${profitOrLoss.toFixed(2)}.`,
        percentageChange > 0 && percentageChange <= 10 && `The portfolio has gained slightly with a profit of $${profitOrLoss.toFixed(2)}.`,
        percentageChange < 0 && percentageChange >= -10 && `The portfolio has lost slightly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`,
        percentageChange < -10 && percentageChange >= -20 && `The portfolio has lost moderately with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`,
        percentageChange < -20 && `The portfolio has lost significantly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`,
    ].find(Boolean);
    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}
function findLargestHolding(assets) {
    if (assets.length === 0)
        return null;
    return assets.reduce((largest, asset) => (asset.value > largest.value ? asset : largest));
}
function calculateAssetAllocation(assets) {
    const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
    return assets.map(asset => ({
        name: asset.name,
        percentage: totalValue > 0 ? (asset.value / totalValue) * 100 : 0,
    }));
}
