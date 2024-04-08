export class Result<T> {
	private _value?: T;
	private _error?: string;

	constructor(value?: T, error?: string) {
		if (value !== undefined && error !== undefined) {
			throw new Error("Result cannot have both a value and an error.");
		}
		this._value = value;
		this._error = error;
	}

	get value(): T | undefined {
		return this._value;
	}

	get error(): string | undefined {
		return this._error;
	}

	get isSuccess(): boolean {
		return this._error === undefined || this._error === null;
	}

	static success<T>(value: T): Result<T> {
		return new Result<T>(value);
	}

	static failure<T>(error: string, errorValue?: T): Result<T> {
		return new Result<T>(errorValue, error);
	}
}
