import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();

        expect(p.isEmpty()).to.equal(true);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });

    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);

        expect(p.isEmpty()).to.equal(false);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });

    it("should return 'Point' as getType", () => {
        const p = new Point();

        expect(p.getType()).to.equal("Point");
    });

    it("should translate a point", () => {
        const p = new Point([3.0, 4.0]);
        p.translate(2.0, -1.0);

        expect(p.getCoordinate()).to.deep.equal([5.0, 3.0]);
    });

    it("should keep an empty point empty when translated", () => {
        const p = new Point();
        p.translate(2.0, -1.0);

        expect(p.isEmpty()).to.equal(true);
    });

    it("should clone the point given without modifying the original", () => {
        const p = new Point([1.0, 3.0]);
        const copy = p.clone();
        copy.translate(9.0, 7.0);

        expect(p.getCoordinate()).to.deep.equal([1.0, 3.0]);
        expect(copy.getCoordinate()).to.deep.equal([10.0, 10.0]);
    });

    it("should clone an empty point as an empty point", () => {
        const copy = new Point().clone();

        expect(copy.isEmpty()).to.equal(true);
    });

    it("should return the envelope of a point given", () => {
        const p = new Point([3.0, 4.0]);

        expect(p.getEnvelope().toString()).to.equal("[3, 4, 3, 4]");
    });

    it("should return an empty envelope for an empty point given", () => {
        const p = new Point();

        expect(p.getEnvelope().isEmpty()).to.equal(true);
    });
});
