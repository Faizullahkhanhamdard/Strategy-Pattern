class GoogleNavigationStrategyFactory {
    createNavigationStrategy(type: StrategyType) {
        switch (type) {
            case 'car':
                return new GoogleCarStrategy();
            case 'bike':
                return new GoogleBikeStrategy();
            case 'walking':
                return new GooglePublicTransportStrategy();
            case 'public-transport':
                return new GoogleWalkStrategy();
            default:
                console.log(`The ${type} strategy is not available. Falling back to default car strategy.`)
                return new GoogleCarStrategy();
        }
    }
}