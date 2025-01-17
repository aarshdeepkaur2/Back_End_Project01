// Define an interface for the function's output
export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
  }
  
  export function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
  ): PortfolioPerformance {
    // Calculate profit or loss
    const profitOrLoss = currentValue - initialInvestment;
  
    // Calculate percentage change
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
  
    // Define performance summary using a conditional expression
    const performanceSummary = 
      percentageChange > 20 ? `The portfolio has gained significantly with a profit of $${profitOrLoss.toFixed(2)}.` :
      percentageChange > 10 ? `The portfolio has gained moderately with a profit of $${profitOrLoss.toFixed(2)}.` :
      percentageChange > 0 ? `The portfolio has gained slightly with a profit of $${profitOrLoss.toFixed(2)}.` :
      percentageChange === 0 ? `The portfolio has no change.` :
      percentageChange > -10 ? `The portfolio has lost slightly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.` :
      percentageChange > -20 ? `The portfolio has lost moderately with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.` :
      `The portfolio has lost significantly with a loss of $${Math.abs(profitOrLoss).toFixed(2)}.`;
  
    // Return the calculated results
    return {
      initialInvestment,
      currentValue,
      profitOrLoss,
      percentageChange,
      performanceSummary,
    };
  }
  

// Define an interface for assets
export interface Asset {
    name: string;
    value: number;
  }
  
  export function findLargestHolding(assets: Asset[]): Asset | null {
    // Return null for an empty portfolio
    if (assets.length === 0) return null;
  
    // Use reduce to find the asset with the maximum value
    return assets.reduce((largest, asset) =>
      asset.value > largest.value ? asset : largest
    );
  }

  export function calculateAssetAllocation(assets: Asset[]): Record<string, number> {
    // Calculate total portfolio value
    const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  
    // Return allocation percentages for each asset
    return assets.reduce((allocation, asset) => {
      allocation[asset.name] = (asset.value / totalValue) * 100;
      return allocation;
    }, {} as Record<string, number>);
  }
   