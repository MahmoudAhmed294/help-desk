import { Stepper, StepperProps } from '@mantine/core';
import StepBack from '../../components/TableDetails/StepBack';
import { useState } from 'react';
import { SelectDate } from './components/SelectDate';
import { ClientInfo } from './components/ClientInfo';
import { CraftsmanInfo } from './components/CraftsmanInfo';
import Success from './components/Success';

function StyledStepper(props: StepperProps) {
    return (
        <Stepper
            styles={{
                stepBody: {
                    marginLeft: 0,
                    marginTop: 8,
                },
                step: {
                    padding: 0,
                },

                stepIcon: {
                    borderWidth: 1,
                },
                separator: {
                    marginLeft: -32,
                    marginRight: -32,
                    height: 2,
                    marginBottom: 10,
                },
            }}
            {...props}
        />
    );
}

export const AddNewService = () => {
    const [activeStep, setActiveStep] = useState(0);
    const nextStep = () => setActiveStep((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActiveStep((current) => (current > 0 ? current - 1 : current));

    return (
        <div>
            <StepBack text="Add new service" />
            <StyledStepper active={activeStep} onStepClick={setActiveStep} my={24}>
                <Stepper.Step label="Client Info" sx={{ flexDirection: 'column', marginTop: 10,  }}>
                    <ClientInfo nextStep={nextStep} prevStep={prevStep} />
                </Stepper.Step>
                <Stepper.Step label="Date & Time" sx={{ flexDirection: 'column', marginTop: 10 }}>
                    <SelectDate nextStep={nextStep} prevStep={prevStep}  />
                </Stepper.Step>
                <Stepper.Step label="Craftsman Info" sx={{ flexDirection: 'column', marginTop: 10 }}>
                    <CraftsmanInfo nextStep={nextStep} prevStep={prevStep}  />
                </Stepper.Step>
                <Stepper.Step label="Success" sx={{ flexDirection: 'column', marginTop: 10 }}>
                    <Success />
                </Stepper.Step>
            </StyledStepper>
        </div>
    );
};
