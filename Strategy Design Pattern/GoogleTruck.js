class GoogleTruckStrategy extends GoogleRouteStrategy {
    constructor() {
        super('truck');
    }
    buildRoute({ start, end }: RouteOptions) {
        this.complexCalculation = (start + end).length * 1 / 2;
        return super.buildRoute({ start, end })
    }
}
