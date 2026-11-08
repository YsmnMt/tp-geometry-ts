import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {
    it("should build an empty envelope when there is no coordinates inserted", () => {
        const b = new EnvelopeBuilder();

        expect(b.build().isEmpty()).to.equal(true);
    });

    it("should build the envelope of several coordinates given", () => {
        const b = new EnvelopeBuilder();
        b.insert([0.0, 1.0]);
        b.insert([2.0, 0.0]);
        b.insert([1.0, 3.0]);

        expect(b.build().toString()).to.equal("[0, 0, 2, 3]");
    });

    it("should build the envelope with negative coordinates given", () => {
        const b = new EnvelopeBuilder();
        b.insert([-1.0, -2.0]);
        b.insert([-3.0, -4.0]);

        expect(b.build().toString()).to.equal("[-3, -4, -1, -2]");
    });

    it("should ignore empty coordinates when building the envelope", () => {
        const b = new EnvelopeBuilder();
        b.insert([]);
        b.insert([1.0, 2.0]);

        expect(b.build().toString()).to.equal("[1, 2, 1, 2]");
    });
});