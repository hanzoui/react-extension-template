/** @jsxImportSource react */
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

// A simple component for testing
function DummyComponent({ text }: { text: string }) {
  return <div data-testid="dummy-component">{text}</div>
}

describe('Dummy Component', () => {
  it('renders with provided text', () => {
    const { getByTestId } = render(<DummyComponent text="Hello Hanzo Studio!" />)

    const element = getByTestId('dummy-component')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('Hello Hanzo Studio!')
  })
})
