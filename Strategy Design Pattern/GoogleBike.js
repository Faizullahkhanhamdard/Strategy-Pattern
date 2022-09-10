class GoogleBikeStrategy extends GoogleRouteStrategy {
    constructor() {
        super('bike');
    }
    buildRoute({ start, end }: RouteOptions) {
        this.complexCalculation = (start + end).length * 3 / 2;
        return super.buildRoute({ start, end })
    }
}