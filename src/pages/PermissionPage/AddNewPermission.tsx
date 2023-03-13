import { Group, Stepper, StepperProps ,Text } from '@mantine/core';
import StepBack from '../../components/TableDetails/StepBack';
import { useState } from 'react';
import { SelectDate } from './components/SelectDate';
import { PermissionType } from './components/PermissionType';

import { PayMethod } from './components/PayMethod';
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

export const AddNewPermission = () => {
    const [activeStep, setActiveStep] = useState(0);
    const nextStep = () => setActiveStep((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActiveStep((current) => (current > 0 ? current - 1 : current));

    return (
        <div>
            <Group position="apart" align={'center'}>
                <StepBack text="Add new Permission" />
                <Group>
                    <Text>Add permission</Text>
                </Group>
            </Group>
            <StyledStepper active={activeStep} onStepClick={setActiveStep} my={24}>
                <Stepper.Step label="PermissionType" sx={{ flexDirection: 'column', marginTop: 10 }}>
                    <PermissionType nextStep={nextStep} prevStep={prevStep} />
                </Stepper.Step>
                <Stepper.Step label="period of stay" sx={{ flexDirection: 'column', marginTop: 10 }}>
                    <SelectDate nextStep={nextStep} prevStep={prevStep} />
                </Stepper.Step>
                <Stepper.Step label="Pay Method" sx={{ flexDirection: 'column', marginTop: 10 }}>
                    <PayMethod nextStep={nextStep} prevStep={prevStep} />
                </Stepper.Step>
                <Stepper.Step label="Success" sx={{ flexDirection: 'column', marginTop: 10 }}>
                    <Success />
                </Stepper.Step>
            </StyledStepper>
        </div>
    );
};
