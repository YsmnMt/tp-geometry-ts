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

    it("should translate all points without mutating the original", () => {
        const a = new Point([0.0, 0.0]);
        const b = new Point([3.0, 4.0]);
        const g = new LineString([a, b]);

        g.translate(2.0, -1.0);

        expect(g.getPointN(0).getCoordinate()).to.deep.equal([2.0, -1.0]);
        expect(g.getPointN(1).getCoordinate()).to.deep.equal([5.0, 3.0]);
    });

    it("should translate an empty LineString to an empty LineString", () => {
        const g = new LineString();
        g.translate(2.0, -1.0);

        expect(g.isEmpty()).to.equal(true);
    });

    it("should clone the linestring given without modifying the original", () => {
        const a = new Point([0.0, 0.0]);
        const b = new Point([3.0, 4.0]);
        const g = new LineString([a, b]);

        const copy = g.clone();
        copy.translate(7.0, 8.0);

        // Vérification de la copie
        expect(copy.getPointN(0).getCoordinate()).to.deep.equal([7.0, 8.0]);
        expect(copy.getPointN(1).getCoordinate()).to.deep.equal([10.0, 12.0]);

        // Vérification que l'original n'a pas été modifié
        expect(g.getPointN(0).getCoordinate()).to.deep.equal([0.0, 0.0]);
        expect(g.getPointN(1).getCoordinate()).to.deep.equal([3.0, 4.0]);

    });

});
