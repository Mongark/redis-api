import supertest from "supertest";
import app from "../../src/app";

describe("Tests for authentication functions", () => {
});

describe("Authentication endpoint tests", () => {
    const server = supertest(app);

    it("should return a 400 error upon invalid request", (done) => {
        server
            .post("/api/users/signToken")
            .expect(400, done);
    });
});
