function lazyChain(arg, invocations = []) {
	return {
		invoke(name, ...args) {
			return lazyChain(arg, [...invocations, { name, args }]);
		},
		value() {
			return invocations.reduce((finalValue, invocation) => {
				return finalValue[invocation.name](...invocation.args);
			}, arg);
		},
	};
}
