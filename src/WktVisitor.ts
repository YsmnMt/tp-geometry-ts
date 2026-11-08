import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor {
    private buffer: string = "";

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            this.buffer = "POINT EMPTY";
        } else {
            this.buffer = "POINT(" + this.writeCoordinate(point) + ")";
        }
    }

    visitLineString(lineString: LineString): void {
        if (lineString.isEmpty()) {
            this.buffer = "LINESTRING EMPTY";
        } else {
            const coordinates: string[] = [];
            for (let i = 0; i < lineString.getNumPoints(); i++) {
                coordinates.push(this.writeCoordinate(lineString.getPointN(i)));
            }
            this.buffer = "LINESTRING(" + coordinates.join(",") + ")";
        }
    }

    getResult(): string {
        return this.buffer;
    }

    private writeCoordinate(point: Point): string {
        return point.x().toFixed(1) + " " + point.y().toFixed(1);
    }
}