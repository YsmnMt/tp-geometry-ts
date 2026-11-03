import Geometry from "./Geometry";
import Point from "./Point";

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

    translate(dx: number, dy: number): LineString {
        return this.isEmpty() ? new LineString() : new LineString(this.points.map((point) => point.translate(dx, dy)));
    }

 }