# ✨ @sefr/test

- [What does it do ?](#-what-does-it-do)
- [Compatibility](#-compatibility)
- [Dependencies](#-dependencies)
- [Installation](#-installation)
- [How to use rules](#-how-to-use)
- [Credits](#-credits)
- [License](#-license)

## 💡 What does it do ?

Provide an API to easily stub a ES6 class with type-checking.

## 🔧 Compatibility

| TypeScript | EcmaScript |
|------------|------------|
| \>= 2.8.0  | \>= ES2015 |

## 🎱 Dependencies

This package heaviliy depends on [Sinon](https://sinonjs.org/).

## 💾 Installation

Nothing more than :

```shell
npm i -D @sefr/test
```

## 📚 How to use

This package re-exports all the following modules from amazing libraries : 
- [Chai](https://www.chaijs.com/) ;
- [Sinon](https://sinonjs.org/) ;
- [SinonChai](https://www.chaijs.com/plugins/sinon-chai/) ;
- [Chai-as-promised](https://www.chaijs.com/plugins/chai-as-promised/) ;
- [@salesforces/ts-sinon](https://www.npmjs.com/package/@salesforce/ts-sinon)

```
assert, expect from Chai
sinon, SinonStubbedInstance, spy from sinon
StubbedType, stubInterface from @salesforce/ts-sinon
```

It also configures plugins `sinon-chai` and `chai-as-promised` which are includes with exports from Chai.

This package includes additionnal feature which allow you to easily stub a class :

```typescript
import { expect, stubClass } from "@sefr/test";

class FakeClass {
	public readonly firstAttribute: string;
	public readonly secondAttribute: number;

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

let myStubbedClassInstance: StubbedClass<FakeClass>;

describe('MyTestSuite', () => {
	context('MyTestContext', () => {
		it('Check something', () => {
			// Given
			myStubbedClassInstance = stubClass(FakeClass);
			myStubbedClassInstance.firstMethod.returns("Toto"); // can be any method from a Sinon stub

			// When
			const result = myStubbedClassInstance.firstMethod(true);

			// Then
			expect(result).to.equal("Toto");
			expect(myStubbedClassInstance.firstMethod).to.have.been.calledOnceWith("Toto"); // any assertion that you need
		});
	});
});
```

## 📎 Credits

+ Developed with the awesome [TypeScript](https://www.typescriptlang.org/) ;
+ Amazing assertion library [Chai](https://www.chaijs.com/) ;
+ Astonishing stub library [Sinon](https://sinonjs.org/) ;
+ Wonderful bridge between Chai & Sinon libraries [SinonChai](https://www.chaijs.com/plugins/sinon-chai/) ;
+ Beautiful async support for promises [Chai-as-promised](https://www.chaijs.com/plugins/chai-as-promised/) ;
+ Staggering [@salesforces/ts-sinon](https://www.npmjs.com/package/@salesforce/ts-sinon) ;
+ This package is also tested with [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) and [Sinon](https://sinonjs.org/)

## 📜 License

This software is available under the MIT License. See the [LICENSE](LICENSE.md) file for more informations.

⬆️ [Go back to top](#-sefrtest)
