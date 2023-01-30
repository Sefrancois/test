import { expect, stubClass } from "../src";

describe("stubClass", () => {
	context("When I stub my class", () => {
		it("stub all methods", () => {
			// When
			const instance = stubClass(FakeClass);

			// Then
			expect(typeof instance.firstMethod.returns).to.eql("function");
			expect(typeof instance.secondMethod.resolves).to.eql("function");
		});

		context("and I override behaviour", () => {
			it("execute the overriden behaviour", () => {
				// Given
				const instance = stubClass(FakeClass);
				instance.firstMethod.withArgs(true).returns("Hello there");

				// When
				const result = instance.firstMethod(true);

				// Then
				expect(instance.firstMethod).to.have.been.calledOnceWith(true);
				expect(result).to.equal("Hello there");
			});
		});
	});

	context("When I stub my mutable attributes", () => {
		it("set attributes to undefined by default", () => {
			// When
			const instance = stubClass(FakeClass);

			// Then
			expect(typeof instance.firstAttribute).to.eql("undefined");
			expect(typeof instance.secondAttribute).to.eql("undefined");
		});

		context("and I override values", () => {
			it("set attributes to overriden values", () => {
				// When
				const instance = stubClass(FakeClass);
				instance.firstAttribute = "Toto";
				instance.secondAttribute = 7;

				// Then
				expect(instance.firstAttribute).to.eql("Toto");
				expect(instance.secondAttribute).to.eql(7);
			});
		});
	});
});

class FakeClass {
	public firstAttribute: string;
	public secondAttribute: number;

	constructor(firstAttribute: string, secondAttribute: number) {
		this.firstAttribute = firstAttribute;
		this.secondAttribute = secondAttribute;
	}

	public firstMethod(someParameter: boolean): string {
		if (someParameter) {
			return "true";
		}
		return "false";
	}

	public secondMethod(someParameter: string): number {
		if (someParameter === "1") {
			return 1;
		}
		return 0;
	}
}
