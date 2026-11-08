import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";

export default class WktWriter {
    write(geometry: Geometry): string {
        if (geometry instanceof Point) {
            if (geometry.isEmpty()) {
                return "POINT EMPTY";
            }
            return "POINT(" + this.writeCoordinate(geometry) + ")";
        } else if (geometry instanceof LineString) {
            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY";
            }
            const coordinates: string[] = [];
            for (let i = 0; i < geometry.getNumPoints(); i++) {
                coordinates.push(this.writeCoordinate(geometry.getPointN(i)));
            }
            return "LINESTRING(" + coordinates.join(",") + ")";
        } else {
            throw new TypeError("geometry type not supported");
        }
    }

    private writeCoordinate(point: Point): string {
        return point.x().toFixed(1) + " " + point.y().toFixed(1);
    }
}
