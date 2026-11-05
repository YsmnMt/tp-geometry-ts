import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
    private coordinate?: Coordinate;

    constructor(coordinate?: Coordinate) {
        this.coordinate = coordinate ? coordinate : [];
    }

    getType(): string {
        return "Point";
    }

    isEmpty(): boolean {
        return this.coordinate.length === 0;
    }

    getCoordinate(): Coordinate {
        return this.coordinate;
    }

    x(): number {
        return this.isEmpty() ? Number.NaN : this.coordinate[0];
    }

    y(): number {
        return this.isEmpty() ? Number.NaN : this.coordinate[1];
    }

    translate(dx: number, dy: number) {
        if (!this.isEmpty()) {
            this.coordinate[0] += dx;
            this.coordinate[1] += dy;
        }
    }

    clone(): Point {
        return new Point([...this.coordinate]);
    }
}
