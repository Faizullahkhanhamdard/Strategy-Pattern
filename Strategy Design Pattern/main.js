
type RouteOptions = { start: string, end: string };
type StrategyType = 'truck' | 'hitch-hike' | 'cruise' | 'train' | 'airplane';

interface RouteStrategy {
    name: StrategyType;
    buildRoute: (routeOptions: RouteOptions) => string;
    complexCalculation: number;
}

const googleClient = new GoogleClient();
googleClient.startNavigation({ start: 'Ahmad Complex', end: 'Allian Arena' }, 'truck');
googleClient.startNavigation({ start: 'Agha Seraj Complex', end: 'Allian Arena' }, 'train');
googleClient.startNavigation({ start: 'Faiz Complex', end: 'Allian Arena' }, 'airplane');
googleClient.startNavigation({ start: 'Javid Complex', end: 'Allian Arena' }, 'criuse');

