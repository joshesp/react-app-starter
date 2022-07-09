import { render } from '@testing-library/react';
import React from 'react';
import App from "../src/App";

describe("App", () => {
	test("should equal to snapshot", () => {
		const {container, getByText } = render(<App />)
		expect(container).toMatchSnapshot()
	})
})
