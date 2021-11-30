import {fireEvent, render, screen} from "@testing-library/react";
import SummaryForm from "../SummaryForm";


test('Initial conditions', () => {
    render(<SummaryForm/>)
    const checkbox = screen.getByRole('checkbox', {name: /Terms and Conditions/i})

    expect(checkbox).not.toBeChecked()

    const confirmButton = screen.getByRole('button', {name: /Confirm order/i})

    expect(confirmButton).toBeDisabled()

    fireEvent.click(checkbox)

    expect(confirmButton).toBeEnabled()

    fireEvent.click(checkbox)

    expect(confirmButton).toBeDisabled()

})