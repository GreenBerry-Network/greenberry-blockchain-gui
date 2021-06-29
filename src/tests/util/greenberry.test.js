const greenberry = require("../../util/greenberry");

describe("greenberry", () => {
  it("converts number mojo to greenberry", () => {
    const result = greenberry.mojo_to_greenberry(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to greenberry", () => {
    const result = greenberry.mojo_to_greenberry("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to greenberry string", () => {
    const result = greenberry.mojo_to_greenberry_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to greenberry string", () => {
    const result = greenberry.mojo_to_greenberry_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number greenberry to mojo", () => {
    const result = greenberry.greenberry_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string greenberry to mojo", () => {
    const result = greenberry.greenberry_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = greenberry.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = greenberry.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = greenberry.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = greenberry.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = greenberry.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = greenberry.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
