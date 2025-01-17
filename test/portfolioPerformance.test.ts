import { calculatePortfolioPerformance, findLargestHolding, calculateAssetAllocation } from '../src/portfolio/portfolioperformance';

describe('calculatePortfolioPerformance', () => {
  test('Portfolio remains stable (0% change)', () => {
    // Arrange
    const initialInvestment = 1000;
    const currentValue = 1000;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBeCloseTo(0);
    expect(result.performanceSummary).toBe('The portfolio has remained stable with no change in value.'
    );
  });

  test('Significant gain (> 20%)', () => {
    // Arrange
    const initialInvestment = 1000;
    const currentValue = 1300;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(300);
    expect(result.percentageChange).toBeCloseTo(30);
    expect(result.performanceSummary).toBe('The portfolio has gained significantly with a profit of $300.00.'
    );
  });

  test('Moderate gain (10% < change <= 20%)', () => {
    // Arrange
    const initialInvestment = 1000;
    const currentValue = 1150;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(150);
    expect(result.percentageChange).toBeCloseTo(15);
    expect(result.performanceSummary).toBe('The portfolio has gained moderately with a profit of $150.00.'
    );
  });

  test('Slight gain (0% < change <= 10%)', () => {
    // Arrange
    const initialInvestment = 1000;
    const currentValue = 1050;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(50);
    expect(result.percentageChange).toBeCloseTo(5);
    expect(result.performanceSummary).toBe('The portfolio has gained slightly with a profit of $50.00.'
    );
  });

  test('Slight loss (-10% <= change < 0%)', () => {
    // Arrange
    const initialInvestment = 1000;
    const currentValue = 950;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(-50);
    expect(result.percentageChange).toBeCloseTo(-5);
    expect(result.performanceSummary).toBe(
      'The portfolio has lost slightly with a loss of $50.00.'
    );
  });

  test('Moderate loss (-20% <= change < -10%)', () => {
    // Arrange
    const initialInvestment = 1000;
    const currentValue = 800;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(-200);
    expect(result.percentageChange).toBeCloseTo(-20);
    expect(result.performanceSummary).toBe(
      'The portfolio has lost moderately with a loss of $200.00.'
    );
  });

  test('Significant loss (< -20%)', () => {
    // Arrange
    const initialInvestment = 1000;
    const currentValue = 700;

    // Act
    const result = calculatePortfolioPerformance(initialInvestment, currentValue);

    // Assert
    expect(result.profitOrLoss).toBe(-300);
    expect(result.percentageChange).toBeCloseTo(-30);
    expect(result.performanceSummary).toBe(
      'The portfolio has lost significantly with a loss of $300.00.'
    );
  });

  
  });


describe('findLargestHolding', () => {
    it('should return the asset with the highest value', () => {
      const assets = [
        { name: 'House', value: 500000 },
        { name: 'Stocks', value: 20000 },
        { name: 'Bonds', value: 10000 },
      ];
  
      const result = findLargestHolding(assets);
  
      expect(result).toEqual({ name: 'House', value: 500000 });
    });
  
    it('should return null for an empty portfolio', () => {
      const assets: { name: string; value: number }[] = [];
      const result = findLargestHolding(assets);
  
      expect(result).toBeNull();
    });
  
    it('should handle when all assets have the same value', () => {
      const assets = [
        { name: 'House', value: 100000 },
        { name: 'Stocks', value: 100000 },
        { name: 'Bonds', value: 100000 },
      ];
  
      const result = findLargestHolding(assets);
  
      expect(result).toEqual({ name: 'House', value: 100000 });
    });
  
    it('should return the first asset when there is only one asset', () => {
      const assets = [{ name: 'House', value: 100000 }];
      const result = findLargestHolding(assets);
  
      expect(result).toEqual({ name: 'House', value: 100000 });
    });
  });
  
  describe('calculateAssetAllocation', () => {
    it('should calculate the percentage allocation of each asset correctly', () => {
      const assets = [
        { name: 'Stocks', value: 5000 },
        { name: 'Bonds', value: 5000 },
      ];
  
      const result = calculateAssetAllocation(assets);
  
      expect(result).toEqual([
        { name: 'Stocks', percentage: 50 },
        { name: 'Bonds', percentage: 50 },
      ]);
    });
  
    it('should handle a portfolio with one asset', () => {
      const assets = [
        { name: 'Stocks', value: 10000 },
      ];
  
      const result = calculateAssetAllocation(assets);
  
      expect(result).toEqual([
        { name: 'Stocks', percentage: 100 },
      ]);
    });
  
    it('should return 0% for assets if total portfolio value is 0', () => {
      const assets = [
        { name: 'Stocks', value: 0 },
        { name: 'Bonds', value: 0 },
      ];
  
      const result = calculateAssetAllocation(assets);
  
      expect(result).toEqual([
        { name: 'Stocks', percentage: 0 },
        { name: 'Bonds', percentage: 0 },
      ]);
    });
  
    it('should handle multiple assets with different values correctly', () => {
      const assets = [
        { name: 'Stocks', value: 3000 },
        { name: 'Bonds', value: 5000 },
        { name: 'Real Estate', value: 2000 },
      ];
  
      const result = calculateAssetAllocation(assets);
  
      expect(result).toEqual([
        { name: 'Stocks', percentage: 30 },
        { name: 'Bonds', percentage: 50 },
        { name: 'Real Estate', percentage: 20 },
      ]);
    });
  
    it('should return empty array for an empty portfolio', () => {
      const assets: { name: string; value: number }[] = [];
      const result = calculateAssetAllocation(assets);
  
      expect(result).toEqual([]);
    });
  });
