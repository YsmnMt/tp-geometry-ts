import Geometry from "./Geometry";
import Point from "./Point";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";

export default class LineString implements Geometry {
    private points: Point[];

    constructor(points?: Point[]) {
        this.points = points ? points : [];
    }

    getType(): string {
        return "LineString";
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number) {
        return this.points[n];
    }

    isEmpty(): boolean {
        return this.points.length === 0;
    }

    translate(dx: number, dy: number) {
        for (const point of this.points) {
            point.translate(dx, dy);
        }
    }

    clone(): LineString {
        return new LineString(this.points.map(point => point.clone()));
    }

    getEnvelope(): Envelope {
        const envelopeBuilder = new EnvelopeBuilder();
        for (const point of this.points) {
            envelopeBuilder.insert(point.getCoordinate());
        }
        return envelopeBuilder.build();
    }

    accept(visitor: GeometryVisitor): void {
        visitor.visitLineString(this);
    }
}