import { describe, it, expect, vi, afterEach } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";

describe("test LogGeometryVisitor", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("should log the visit of a Point", () => {
        const logV = vi.spyOn(console, "log").mockImplementation(() => { });
        const visitor = new LogGeometryVisitor();
        const geometry = new Point([2.0, 3.0]);

        geometry.accept(visitor);

        expect(logV).toHaveBeenCalledWith("Je suis un point avec x=2.0 et y=3.0.");
    });

    it("should log the visit of an empty point", () => {
        const logV = vi.spyOn(console, "log").mockImplementation(() => { });
        const visitor = new LogGeometryVisitor();
        const geometry = new Point();

        geometry.accept(visitor);

        expect(logV).toHaveBeenCalledWith("Je suis un point vide.");
    });

    it("should log the visit of a LineString", () => {
        const logV = vi.spyOn(console, "log").mockImplementation(() => { });
        const visitor = new LogGeometryVisitor();
        const geometry = new LineString([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([2.0, 2.0]),
        ]);

        geometry.accept(visitor);

        expect(logV).toHaveBeenCalledWith("Je suis une polyligne définie par 3 point(s).");
    });

    it("should log the visit of an empty LineString", () => {
        const logV = vi.spyOn(console, "log").mockImplementation(() => { });
        const visitor = new LogGeometryVisitor();
        const geometry = new LineString();

        geometry.accept(visitor);

        expect(logV).toHaveBeenCalledWith("Je suis une polyligne vide.");
    });
});
