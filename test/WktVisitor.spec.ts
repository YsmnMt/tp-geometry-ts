import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";

describe("test WktVisitor", () => {
    it("should write a point", () => {
        const visitor = new WktVisitor();
        const geometry = new Point([3.0, 4.0]);

        geometry.accept(visitor);

        expect(visitor.getResult()).to.equal("POINT(3.0 4.0)");
    });

    it("should write an empty point", () => {
        const visitor = new WktVisitor();
        const geometry = new Point();

        geometry.accept(visitor);

        expect(visitor.getResult()).to.equal("POINT EMPTY");
    });

    it("should write a linestring", () => {
        const visitor = new WktVisitor();
        const geometry = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([2.0, 2.0]),
        ]);

        geometry.accept(visitor);

        expect(visitor.getResult()).to.equal("LINESTRING(0.0 0.0,1.0 1.0,2.0 2.0)");
    });

    it("should write an empty linestring", () => {
        const visitor = new WktVisitor();
        const geometry = new LineString();

        geometry.accept(visitor);

        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
    });
});