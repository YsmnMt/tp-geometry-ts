import { describe, it, expect } from "vitest";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const g = new LineString();
        expect(g.getNumPoints()).to.equal(0);
    });

    it("test constructor with points", () => {
        const a = new Point([0.0, 0.0]);
        const b = new Point([3.0, 4.0]);
        const g = new LineString([a, b]);
        expect(g.getNumPoints()).to.equal(2);
    });

    it("should return 'LineString' as getType()", () => {
        const g = new LineString();
        expect(g.getType()).to.equal("LineString");
    });

    it("should return expected point with getPointN", () => {
        const a = new Point([0.0, 0.0]);
        const b = new Point([3.0, 4.0]);
        const g = new LineString([a, b]);
       
        expect(g.getPointN(0)).to.equal(a);
        expect(g.getPointN(1)).to.equal(b);
    });
});

