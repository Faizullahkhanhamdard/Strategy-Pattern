class GoogleClient {
    strategyFactory = new GoogleNavigationStrategyFactory();

    public startNavigation(options: RouteOptions, strategyType: StrategyType) {
        const navigationStrategy = this.strategyFactory.createNavigationStrategy(strategyType);
        const route = navigationStrategy.buildRoute(options);
        console.log(route);
        return route;
    }
}