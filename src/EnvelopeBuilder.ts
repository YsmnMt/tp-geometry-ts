import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private xMin: number = Number.POSITIVE_INFINITY;
    private yMin: number = Number.POSITIVE_INFINITY;
    private xMax: number = Number.NEGATIVE_INFINITY;
    private yMax: number = Number.NEGATIVE_INFINITY;

    insert(coordinate: Coordinate): void {
        if (coordinate.length === 0) {
            return;
        }
        this.xMin = Math.min(this.xMin, coordinate[0]);
        this.yMin = Math.min(this.yMin, coordinate[1]);
        this.xMax = Math.max(this.xMax, coordinate[0]);
        this.yMax = Math.max(this.yMax, coordinate[1]);
    }

    build(): Envelope {
        if (this.xMin === Number.POSITIVE_INFINITY) {
            return new Envelope();
        }
        return new Envelope([this.xMin, this.yMin], [this.xMax, this.yMax]);
    }
}