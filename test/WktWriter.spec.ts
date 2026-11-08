import { describe, it, expect } from "vitest";
import Geometry from "../src/Geometry";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";

describe("test WktWriter", () => {
    it("should write a point geometry to WKT format", () => {
        const w = new WktWriter();

        expect(w.write(new Point([3.0, 4.0]))).to.equal("POINT(3.0 4.0)");
    });

    it("should write an empty point", () => {
        const w = new WktWriter();

        expect(w.write(new Point())).to.equal("POINT EMPTY");
    });

    it("should write a linestring geometry to WKT format", () => {
        const w = new WktWriter();
        const g = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([2.0, 2.0]),
        ]);

        expect(w.write(g)).to.equal("LINESTRING(0.0 0.0,1.0 1.0,2.0 2.0)");
    });

    it("should write an empty linestring", () => {
        const w = new WktWriter();

        expect(w.write(new LineString())).to.equal("LINESTRING EMPTY");
    });

    it("should throw a TypeError for unsupported geometry", () => {
        const w = new WktWriter();
        const unsupportedGeometry = {} as Geometry;

        expect(() => w.write(unsupportedGeometry)).to.throw(TypeError);
    });
});
