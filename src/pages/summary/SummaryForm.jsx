import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const SummaryForm = () => {
    const [tcChecked, setTcChecked] = useState(false)
    const checkboxLabel = (
        <span>
            I agree to <span style={{color: 'blue'}}>Terms and Conditions</span>
        </span>
    )


    return (
        <Form>
            <Form.Group controlId={'terms-and-conditions'}>
                <Form.Check
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                    label={checkboxLabel}
                    type={'checkbox'}
                />
            </Form.Group>
            <Button variant={'primary'} type={'submit'} disabled={!tcChecked}>
                Confirm order
            </Button>

        </Form>
    );
};

export default SummaryForm;
